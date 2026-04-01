const schema = {
    "sections": [
        {
            "title": "Identificação",
            "fields": [
                { "name": "identificacao_nome", "label": "Nome", "type": "text", "required": true },
                { "name": "identificacao_rh", "label": "RH", "type": "text", "required": true }
            ]
        },
        {
            "title": "História Gestacional",
            "fields": [
                { "name": "idade_materna", "label": "Idade Materna", "type": "number", "required": true, "min": 10, "max": 60 },
                { "name": "patologias_maternas", "label": "Patologias Maternas", "type": "select", "multiple": true, "options": ["colo curto", "obesidade", "HAC", "DMG", "ITU", "TPP", "pré-eclâmpsia", "sífilis", "bipolaridade", "esquizofrenia", "uso de drogas", "diabetes", "HAS", "eclâmpsia", "vaginose bacteriana"] },
                { "name": "corticoide_antental", "label": "Corticóide Antenatal", "type": "boolean" },
                { "name": "corticoide_ciclos", "label": "Ciclos", "type": "number", "min": 0, "max": 10, "showIf": { "field": "corticoide_antental", "equals": true } },
                { "name": "outras_medicacoes_maternas", "label": "Outras Medicações", "type": "text" }
            ]
        },
        {
            "title": "Dados do Parto",
            "fields": [
                { "name": "apresentacao_parto", "label": "Apresentação", "type": "select", "options": ["cefálica", "pélvica", "transversa", "outra"], "required": true },
                { "name": "tempo_amniorrexe_horas", "label": "Tempo de Amniorrexe (h)", "type": "number", "min": 0, "max": 1000 },
                { "name": "tipo_parto", "label": "Tipo de Parto", "type": "select", "options": ["normal", "cesárea", "fórceps"], "required": true },
                { "name": "local_parto", "label": "Local do Parto", "type": "select", "options": ["hospital", "não hospitalar"] },
                { "name": "streptococcus_b", "label": "Streptococcus B", "type": "select", "options": ["positivo", "negativo", "desconhecido"] }
            ]
        },
        {
            "title": "Recém-Nascido",
            "fields": [
                { "name": "idade_gestacional", "label": "Idade Gestacional (semanas)", "type": "number", "required": true, "min": 20, "max": 45 },
                { "name": "peso_nascimento", "label": "Peso (g)", "type": "number", "required": true, "min": 300, "max": 6000 },
                { "name": "sexo", "label": "Sexo", "type": "select", "options": ["masculino", "feminino", "indefinido"], "required": true },
                { "name": "apgar_1", "label": "Apgar 1 min", "type": "number", "min": 0, "max": 10 },
                { "name": "apgar_5", "label": "Apgar 5 min", "type": "number", "min": 0, "max": 10 },
                { "name": "reanimacao", "label": "Reanimação", "type": "boolean" },
                { "name": "tipo_reanimacao", "label": "Tipo de Reanimação", "type": "text", "showIf": { "field": "reanimacao", "equals": true } },
                { "name": "temperatura", "label": "Temperatura", "type": "number", "min": 30, "max": 42 },
                { "name": "pam", "label": "PAM", "type": "number", "min": 10, "max": 120 }
            ]
        },
        {
            "title": "Ventilação",
            "fields": [
                { "name": "tipo_ventilacao", "label": "Tipo de Ventilação", "type": "select", "multiple": true, "options": ["VM", "VNI", "CPAP", "cateter nasal", "O2"] },
                { "name": "tempo_ventilacao", "label": "Tempo (dias)", "type": "number", "min": 0, "max": 365 }
            ]
        },
        {
            "title": "Infecção",
            "fields": [
                { "name": "sepse_precoce", "label": "Sepse Precoce", "type": "boolean" },
                { "name": "sepse_tardia", "label": "Sepse Tardia", "type": "boolean" },
                { "name": "hemocultura", "label": "Hemocultura", "type": "select", "options": ["positiva", "negativa", "não realizada"] },
                { "name": "outra_infeccao", "label": "Outra Infecção", "type": "boolean" }
            ]
        },
        {
            "title": "Desfecho",
            "fields": [
                { "name": "desfecho", "label": "Desfecho", "type": "select", "options": ["alta", "óbito", "transferência"], "required": true },
                { "name": "data_alta", "label": "Data da Alta", "type": "date", "showIf": { "field": "desfecho", "equals": "alta" } },
                { "name": "idade_alta", "label": "Idade (dias)", "type": "number", "min": 0, "max": 3650 }
            ]
        }
    ]
};

let currentStep = 0;
const totalSteps = schema.sections.length + 1; // +1 for Summary
let editingPatientId = null;
let originalPatientData = null;

document.addEventListener('DOMContentLoaded', () => {
    const wizardForm = document.getElementById('patientWizardForm');
    const stepsContainer = document.getElementById('wizardStepsContainer');
    const progressSteps = document.getElementById('progressSteps');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const exportPdfBtn = document.getElementById('exportPdfBtn');

    // Check for Edit Mode
    const urlParams = new URLSearchParams(window.location.search);
    editingPatientId = urlParams.get('id');

    // 1. Generate Wizard HTML
    function initWizard() {
        // Clear containers
        stepsContainer.innerHTML = '';
        progressSteps.innerHTML = '';

        // Generate Sections
        schema.sections.forEach((section, idx) => {
            const stepDiv = document.createElement('div');
            stepDiv.className = 'wizard-step-content fade-in-up';
            stepDiv.id = `stepContent_${idx}`;
            stepDiv.style.display = idx === 0 ? 'block' : 'none';
            stepDiv.innerHTML = `<h2>${section.title}</h2><p style="color: var(--text-secondary); margin-bottom: 2rem;">Passo ${idx + 1} de ${totalSteps}</p>`;

            section.fields.forEach(field => {
                const group = document.createElement('div');
                group.className = 'form-group';
                if (field.showIf) group.classList.add('hidden-field');
                group.dataset.name = field.name;

                let inputHtml = '';
                if (field.type === 'boolean') {
                    group.className = 'form-group boolean-group';
                    if (field.showIf) group.classList.add('hidden-field');
                    inputHtml = `<label>${field.label}</label><input type="checkbox" id="f_${field.name}" name="${field.name}" style="width: 20px; height: 20px;">`;
                } else if (field.type === 'select' && field.multiple) {
                    inputHtml = `<label>${field.label}</label><div class="checkbox-grid">`;
                    field.options.forEach(opt => {
                        inputHtml += `<label class="checkbox-item"><input type="checkbox" name="${field.name}" value="${opt}"><span>${opt}</span></label>`;
                    });
                    inputHtml += `</div>`;
                } else if (field.type === 'select') {
                    inputHtml = `<label for="f_${field.name}">${field.label}</label><select id="f_${field.name}" name="${field.name}" ${field.required ? 'required' : ''}><option value="">Selecione</option>${field.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select>`;
                } else {
                    inputHtml = `<label for="f_${field.name}">${field.label}</label><input type="${field.type}" id="f_${field.name}" name="${field.name}" ${field.required ? 'required' : ''} ${field.min !== undefined ? `min="${field.min}"` : ''} ${field.max !== undefined ? `max="${field.max}"` : ''} step="any" placeholder="Digite aqui...">`;
                }

                group.innerHTML = inputHtml;
                stepDiv.appendChild(group);
            });
            stepsContainer.appendChild(stepDiv);

            // Progress Node
            const node = document.createElement('div');
            node.className = `step-node ${idx === 0 ? 'active' : ''}`;
            node.textContent = idx + 1;
            node.title = section.title;
            node.onclick = () => jumpToStep(idx);
            progressSteps.appendChild(node);
        });

        // Summary Step
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'wizard-step-content fade-in-up';
        summaryDiv.id = `stepContent_${schema.sections.length}`;
        summaryDiv.style.display = 'none';
        
        const summaryTitle = editingPatientId ? 'Revisão das Alterações' : 'Resumo do Registro';
        summaryDiv.innerHTML = `<h2>${summaryTitle}</h2><p style="color: var(--text-secondary); margin-bottom: 2rem;">Confira os dados antes de salvar.</p><div id="summaryContent" class="summary-container"></div>`;
        stepsContainer.appendChild(summaryDiv);

        const summaryNode = document.createElement('div');
        summaryNode.className = 'step-node';
        summaryNode.textContent = 'R';
        summaryNode.title = "Resumo";
        summaryNode.onclick = () => jumpToStep(schema.sections.length);
        progressSteps.appendChild(summaryNode);

        // Load Data if Editing
        if (editingPatientId) {
            loadPatientForEdit();
        }

        updateWizardUI();
        setupMasks();
    }

    function setupMasks() {
        const rhInput = document.getElementById('f_identificacao_rh');
        if (rhInput) {
            rhInput.maxLength = 8; // 6 digits + hyphen + 1 digit
            rhInput.placeholder = "000000-0";
            rhInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 7) value = value.slice(0, 7);
                if (value.length > 6) {
                    value = value.slice(0, 6) + '-' + value.slice(6);
                }
                e.target.value = value;
            });
        }
    }

    function loadPatientForEdit() {
        const patients = JSON.parse(localStorage.getItem('neonatal_patients_v2')) || [];
        originalPatientData = patients.find(p => p.id == editingPatientId);
        
        if (originalPatientData) {
            document.querySelector('header h1').textContent = 'Editar Registro';
            document.querySelector('header p').textContent = `Editando prontuário de ${originalPatientData.identificacao_nome}`;

            schema.sections.forEach(s => {
                s.fields.forEach(f => {
                    const val = originalPatientData[f.name];
                    if (val !== undefined && val !== null) {
                        if (f.type === 'boolean') {
                            const el = document.getElementById(`f_${f.name}`);
                            if (el) el.checked = val;
                        } else if (f.type === 'select' && f.multiple) {
                            const checks = document.querySelectorAll(`input[name="${f.name}"]`);
                            checks.forEach(c => {
                                if (val.includes(c.value)) c.checked = true;
                            });
                        } else {
                            const el = document.getElementById(`f_${f.name}`);
                            if (el) el.value = val;
                        }
                    }
                });
            });
        }
    }

    function updateWizardUI() {
        const contents = document.querySelectorAll('.wizard-step-content');
        contents.forEach((c, idx) => c.style.display = idx === currentStep ? 'block' : 'none');

        const nodes = document.querySelectorAll('.step-node');
        nodes.forEach((n, idx) => {
            n.classList.remove('active', 'completed');
            if (idx === currentStep) n.classList.add('active');
            if (idx < currentStep) n.classList.add('completed');
        });

        const progressPercent = (currentStep / (totalSteps - 1)) * 100;
        document.getElementById('progressLineFill').style.width = `${progressPercent}%`;

        prevBtn.style.display = currentStep === 0 ? 'none' : 'block';
        if (currentStep === totalSteps - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
            exportPdfBtn.style.display = 'block';
            renderSummary();
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
            exportPdfBtn.style.display = 'none';
        }

        updateVisibility();
    }

    function nextStep() {
        if (currentStep < totalSteps - 1) {
            if (validateStep(currentStep)) {
                currentStep++;
                updateWizardUI();
            }
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            updateWizardUI();
        }
    }

    function jumpToStep(idx) {
        if (idx < currentStep) {
            currentStep = idx;
            updateWizardUI();
        } else if (idx > currentStep) {
            for (let i = currentStep; i < idx; i++) {
                if (!validateStep(i)) return;
            }
            currentStep = idx;
            updateWizardUI();
        }
    }

    function validateStep(stepIdx) {
        if (stepIdx === schema.sections.length) return true;
        const section = schema.sections[stepIdx];
        let isValid = true;
        let firstErrorInput = null;

        section.fields.forEach(f => {
            const group = document.querySelector(`.form-group[data-name="${f.name}"]`);
            if (!group.classList.contains('hidden-field')) {
                const input = document.getElementById(`f_${f.name}`);
                if (!input) return;

                let fieldError = false;
                
                // 1. Check Required
                if (f.required && (input.value === "" || input.value === null || input.value === undefined)) {
                    fieldError = true;
                }
                
                // 2. Check Min/Max for number
                if (input.type === 'number' && input.value !== '') {
                    const val = Number(input.value);
                    if (f.min !== undefined && val < f.min) fieldError = true;
                    if (f.max !== undefined && val > f.max) fieldError = true;
                }

                if (fieldError) {
                    input.style.borderColor = '#ef4444';
                    isValid = false;
                    if (!firstErrorInput) firstErrorInput = input;
                } else {
                    input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
            }
        });

        if (!isValid) {
            alert(`Erro na etapa "${section.title}": Por favor, verifique os campos obrigatórios ou fora do intervalo permitido.`);
            if (firstErrorInput) firstErrorInput.focus();
        }
        return isValid;
    }

    function validateAll() {
        for (let i = 0; i < schema.sections.length; i++) {
            if (!validateStep(i)) {
                jumpToStep(i);
                return false;
            }
        }
        return true;
    }

    function renderSummary() {
        const container = document.getElementById('summaryContent');
        const currentData = getFormData();
        container.innerHTML = '';

        schema.sections.forEach(section => {
            const group = document.createElement('div');
            group.className = 'summary-group';
            group.innerHTML = `<h3>${section.title}</h3>`;
            
            section.fields.forEach(f => {
                const groupEl = document.querySelector(`.form-group[data-name="${f.name}"]`);
                if (!groupEl.classList.contains('hidden-field')) {
                    let val = currentData[f.name];
                    let originalVal = originalPatientData ? originalPatientData[f.name] : undefined;

                    // Formatting function
                    const fmt = (v) => {
                        if (Array.isArray(v)) return v.length > 0 ? v.join(', ') : 'Nenhum';
                        if (typeof v === 'boolean') return v ? 'Sim' : 'Não';
                        if (v === null || v === '' || v === undefined) return '-';
                        return v;
                    };

                    const isChanged = originalPatientData && JSON.stringify(val) !== JSON.stringify(originalVal);
                    
                    const itemHtml = `
                        <div class="summary-item ${isChanged ? 'highlight-change' : ''}">
                            <span class="label">${f.label}</span>
                            <span class="value">
                                ${isChanged ? `<span class="old-val">${fmt(originalVal)}</span> → ` : ''}
                                <span class="${isChanged ? 'new-val' : ''}">${fmt(val)}</span>
                            </span>
                        </div>
                    `;
                    group.innerHTML += itemHtml;
                }
            });
            container.appendChild(group);
        });
    }

    function updateVisibility() {
        const formData = getFormData();
        schema.sections.forEach(section => {
            section.fields.forEach(field => {
                if (field.showIf) {
                    const group = document.querySelector(`.form-group[data-name="${field.name}"]`);
                    const condition = field.showIf;
                    const dependentValue = formData[condition.field];
                    
                    if (dependentValue === condition.equals) {
                        group.classList.remove('hidden-field');
                    } else {
                        group.classList.add('hidden-field');
                    }
                }
            });
        });
    }

    function getFormData() {
        const data = {};
        schema.sections.forEach(s => {
            s.fields.forEach(f => {
                if (f.type === 'boolean') {
                    const el = document.getElementById(`f_${f.name}`);
                    data[f.name] = el ? el.checked : false;
                } else if (f.type === 'select' && f.multiple) {
                    const checked = Array.from(document.querySelectorAll(`input[name="${f.name}"]:checked`)).map(el => el.value);
                    data[f.name] = checked;
                } else {
                    const el = document.getElementById(`f_${f.name}`);
                    if (el) {
                        data[f.name] = f.type === 'number' ? (el.value === '' ? null : Number(el.value)) : el.value;
                    }
                }
            });
        });
        return data;
    }

    // Event Listeners
    nextBtn.onclick = nextStep;
    prevBtn.onclick = prevStep;
    
    exportPdfBtn.onclick = () => {
        const summary = document.getElementById('summaryContent');
        if (summary) {
            summary.setAttribute('data-emit-date', new Date().toLocaleString());
            window.print();
        }
    };

    wizardForm.addEventListener('change', updateVisibility);

    wizardForm.onsubmit = (e) => {
        e.preventDefault();
        console.log("Iniciando processo de salvamento...");

        if (!validateAll()) {
            console.warn("Validação falhou. Abortando salvamento.");
            return;
        }

        const formData = getFormData();
        console.log("Dados coletados do formulário:", formData);

        const fullData = {
            id: editingPatientId ? Number(editingPatientId) : Date.now(),
            ...formData,
            timestamp: originalPatientData ? originalPatientData.timestamp : new Date().toLocaleString(),
            lastUpdate: new Date().toLocaleString()
        };

        let patients = JSON.parse(localStorage.getItem('neonatal_patients_v2')) || [];
        
        if (editingPatientId) {
            const index = patients.findIndex(p => p.id == editingPatientId);
            if (index !== -1) patients[index] = fullData;
        } else {
            patients.push(fullData);
        }
        
        try {
            console.log("Salvando no LocalStorage...", fullData);
            localStorage.setItem('neonatal_patients_v2', JSON.stringify(patients));
            alert(editingPatientId ? 'Registro atualizado com sucesso!' : 'Registro salvo com sucesso!');
            window.location.href = 'index.html';
        } catch (err) {
            console.error('Erro crítico ao salvar no LocalStorage:', err);
            alert('Erro ao salvar os dados. O armazenamento local pode estar cheio ou corrompido.');
        }
    };

    initWizard();
});
