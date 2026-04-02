const schema = {
    "sections": [
        {
            "title": "Identificação",
            "fields": [
                { "name": "identificacao_nome", "label": "Nome" },
                { "name": "identificacao_rh", "label": "RH" },
                { "name": "identificacao_nascimento", "label": "Nascimento (DN)" }
            ]
        },
        {
            "title": "História Gestacional",
            "fields": [
                { "name": "idade_materna", "label": "Idade Materna" },
                { "name": "consultas_pn", "label": "Consultas PN" },
                { "name": "patologias_maternas", "label": "Patologias Maternas" },
                { "name": "corticoide_antenatal", "label": "Corticóide Antenatal" },
                { "name": "corticoide_ciclos", "label": "Ciclos" },
                { "name": "outras_medicacoes_maternas", "label": "Outras Medicações" }
            ]
        },
        {
            "title": "Dados do Parto",
            "fields": [
                { "name": "apresentacao_parto", "label": "Apresentação" },
                { "name": "tempo_amniorrexe_horas", "label": "Bolsa Rota" },
                { "name": "tipo_parto", "label": "Tipo de Parto" },
                { "name": "local_parto", "label": "Local" },
                { "name": "streptococcus_b", "label": "Strep B" },
                { "name": "profilaxia", "label": "Profilaxia" },
                { "name": "tipo_profilaxia", "label": "Tipo Profilax" }
            ]
        },
        {
            "title": "Recém-Nascido",
            "fields": [
                { "name": "idade_gestacional", "label": "IG (sem)" },
                { "name": "peso_nascimento", "label": "Peso (g)" },
                { "name": "sexo", "label": "Sexo" },
                { "name": "apgar_1", "label": "Apgar 1'" },
                { "name": "apgar_5", "label": "Apgar 5'" },
                { "name": "apgar_10", "label": "Apgar 10'" },
                { "name": "reanimacao", "label": "Reanimação" },
                { "name": "tipo_reanimacao", "label": "Tipo Reanim." },
                { "name": "temperatura", "label": "Temp" },
                { "name": "pam", "label": "PAM" }
            ]
        },
        {
            "title": "Ventilação",
            "fields": [
                { "name": "vent_vm", "label": "VM" },
                { "name": "vent_vm_tempo", "label": "VM (dias)" },
                { "name": "vent_vni", "label": "VNI" },
                { "name": "vent_vni_tempo", "label": "VNI (dias)" },
                { "name": "vent_cpap", "label": "CPAP" },
                { "name": "vent_cpap_tempo", "label": "CPAP (dias)" },
                { "name": "vent_cateter", "label": "Cateter Nasal" },
                { "name": "vent_cateter_tempo", "label": "Cateter (dias)" },
                { "name": "vent_o2", "label": "O2" },
                { "name": "vent_o2_tempo", "label": "O2 (dias)" }
            ]
        },
        {
            "title": "PROCEDIMENTOS NA UTIN",
            "fields": [
                { "name": "procedimento_acesso_central", "label": "Tipo Acesso" },
                { "name": "procedimento_instalacao", "label": "Idade Inst." },
                { "name": "procedimento_tempo_uso", "label": "Tempo Uso" },
                { "name": "oxig_vm", "label": "VM" },
                { "name": "oxig_vni", "label": "VNI" },
                { "name": "oxig_cpap", "label": "CPAP" },
                { "name": "oxig_cnaf", "label": "CNAF" },
                { "name": "oxig_cat_nasal", "label": "Cat Nasal" },
                { "name": "oxig_o2_inalat", "label": "O2 Inalat" },
                { "name": "procedimento_hipotermia", "label": "Hipotermia" },
                { "name": "procedimento_fototerapia_tipo", "label": "Fotot. Tipo" },
                { "name": "procedimento_fototerapia_duracao", "label": "Fotot. Dur" }
            ]
        },
        {
            "title": "MEDICAMENTOS",
            "fields": [
                { "name": "med_surf_1_dose", "label": "Surf. 1ª" },
                { "name": "med_atb_ampicilina", "label": "Ampicilina" },
                { "name": "med_atb_gentamicina", "label": "Gentamicina" }
            ]
        },
        {
            "title": "MEDICAMENTOS (Outros)",
            "fields": [
                { "name": "med_cafeina", "label": "Cafeína" },
                { "name": "med_drogas_vasoativas", "label": "Vasoativas" }
            ]
        },
        {
            "title": "INFECÇÃO",
            "fields": [
                { "name": "infeccao_sepse", "label": "Sepse" },
                { "name": "infeccao_hmc", "label": "HMC" },
                { "name": "infeccao_lcr", "label": "LCR" },
                { "name": "infeccao_urc", "label": "URC" },
                { "name": "infeccao_outras", "label": "Outras Infec." }
            ]
        },
        {
            "title": "NUTRIÇÃO",
            "fields": [
                { "name": "nutricao_inicio", "label": "Nutrição Início" },
                { "name": "nutricao_duracao", "label": "Nutrição Duração" },
                { "name": "nutricao_imunoterapia_colostro", "label": "Colostro" },
                { "name": "nutricao_enteral_trofica_inicio", "label": "Enteral Trófica" },
                { "name": "nutricao_enteral_nutritiva_inicio", "label": "Enteral Nutritiva" },
                { "name": "nutricao_npp_padrao_inicio", "label": "NPP Início" },
                { "name": "nutricao_npp_total_duracao", "label": "NPP Duração" }
            ]
        },
        {
            "title": "HEMODERIVADOS",
            "fields": [
                { "name": "hemod_hemacias", "label": "Hemácias" },
                { "name": "hemod_hemacias_data", "label": "Quando?" },
                { "name": "hemod_plasma", "label": "Plasma" },
                { "name": "hemod_plasma_data", "label": "Quando?" },
                { "name": "hemod_plaquetas", "label": "Plaquetas" },
                { "name": "hemod_plaquetas_data", "label": "Quando?" },
                { "name": "hemod_crio", "label": "Crioprecipitado" },
                { "name": "hemod_crio_data", "label": "Quando?" },
                { "name": "hemod_outros", "label": "Outros" },
                { "name": "hemod_outros_qual", "label": "Qual?" }
            ]
        },
        {
            "title": "EXAMES SUBMETIDOS",
            "fields": [
                { "name": "exames_lcr", "label": "LCR" },
                { "name": "exames_fo", "label": "FO" },
                { "name": "exames_eot", "label": "EOT" },
                { "name": "exames_peate", "label": "PEATE" },
                { "name": "exames_ustf", "label": "USTF" },
                { "name": "exames_eco", "label": "ECO" },
                { "name": "exames_aeeg", "label": "aEEG" },
                { "name": "exames_usg_abd", "label": "USG abd" },
                { "name": "exames_usg_renal", "label": "USG renal" },
                { "name": "exames_outros", "label": "Outros" },
                { "name": "exames_outros_qual", "label": "Qual?" }
            ]
        },
        {
            "title": "CIRURGIA",
            "fields": [
                { "name": "cirurgia_realizada", "label": "Cirurgia" },
                { "name": "cirurgia_tipo", "label": "Tipo" },
                { "name": "cirurgia_idade", "label": "Idade Cir." },
                { "name": "escore_escolhido", "label": "Escore Gravidade" },
                { "name": "diagnostico", "label": "Diagnóstico" },
                { "name": "desfecho", "label": "Desfecho" },
                { "name": "desfecho_idade", "label": "Idade Desfecho" },
                { "name": "desfecho_igc", "label": "IGC" },
                { "name": "desfecho_data", "label": "Data Desfecho" },
                { "name": "desfecho_peso", "label": "Peso Desfecho" }
            ]
        },
        {
            "title": "ENCAMINHAMENTOS / MEDICAÇÃO / NUTRIÇÃO NA ALTA",
            "fields": [
                { "name": "alta_lm", "label": "Nutrição Alta" },
                { "name": "alta_lm_outros", "label": "Leite Espec." },
                { "name": "alta_acompanhamento", "label": "Acompanhamento" },
                { "name": "alta_acompanhamento_outros", "label": "Quais Ambs?" },
                { "name": "alta_medicamentos", "label": "Meds Alta" }
            ]
        }
    ]
};

const MAX_COLUMNS = 10;
let selectedColumns = JSON.parse(localStorage.getItem('table_selected_columns')) || ['identificacao_nome', 'idade_gestacional', 'peso_nascimento', 'desfecho'];
let patients = JSON.parse(localStorage.getItem('neonatal_patients_v2')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const selectorContainer = document.getElementById('columnSelectorContainer');
    const tableHeader = document.getElementById('tableHeader');
    const tableBody = document.getElementById('tableBody');
    const searchInput = document.getElementById('searchInput');
    const columnCounter = document.getElementById('columnCounter');
    const exportBtn = document.getElementById('exportAllBtn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');

    function init() {
        renderSelector();
        renderTable();
        updateCounter();
    }

    function renderSelector() {
        selectorContainer.innerHTML = '';
        schema.sections.forEach(section => {
            const group = document.createElement('div');
            group.className = 'column-group';
            group.innerHTML = `<h3>${section.title}</h3><div class="column-list"></div>`;
            const list = group.querySelector('.column-list');

            section.fields.forEach(field => {
                const label = document.createElement('label');
                label.className = `column-option ${selectedColumns.includes(field.name) ? 'active' : ''}`;
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = selectedColumns.includes(field.name);
                checkbox.onchange = () => toggleColumn(field.name);

                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(field.label));
                list.appendChild(label);
            });
            selectorContainer.appendChild(group);
        });
    }

    function toggleColumn(fieldName) {
        if (selectedColumns.includes(fieldName)) {
            selectedColumns = selectedColumns.filter(c => c !== fieldName);
        } else {
            if (selectedColumns.length >= MAX_COLUMNS) {
                // FIFO: Remove the first one
                selectedColumns.shift();
            }
            selectedColumns.push(fieldName);
        }
        localStorage.setItem('table_selected_columns', JSON.stringify(selectedColumns));
        renderSelector();
        renderTable();
        updateCounter();
    }

    function updateCounter() {
        columnCounter.textContent = `(${selectedColumns.length}/${MAX_COLUMNS})`;
    }

    function renderTable() {
        // Render Headers
        tableHeader.innerHTML = '';
        const headerRow = document.createElement('tr');
        
        // Fixed Actions Column
        const actionTh = document.createElement('th');
        actionTh.textContent = 'Ações';
        actionTh.style.width = '80px';
        headerRow.appendChild(actionTh);

        // Get labels for selected columns
        const allFields = schema.sections.flatMap(s => s.fields);
        selectedColumns.forEach(colName => {
            const field = allFields.find(f => f.name === colName);
            const th = document.createElement('th');
            th.textContent = field ? field.label : colName;
            headerRow.appendChild(th);
        });
        tableHeader.appendChild(headerRow);

        // Render Body
        renderTableBody();
    }

    function renderTableBody(query = searchInput.value) {
        tableBody.innerHTML = '';
        const q = query.toLowerCase();

        const filtered = patients.filter(p => {
            return Object.values(p).some(val => 
                String(val).toLowerCase().includes(q)
            );
        });

        if (filtered.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="${selectedColumns.length + 1}" style="text-align: center; padding: 3rem; color: var(--text-secondary);">Nenhum resultado encontrado.</td></tr>`;
            return;
        }

        filtered.forEach(p => {
            const row = document.createElement('tr');

            // Action Cell
            const actionTd = document.createElement('td');
            actionTd.innerHTML = `<a href="form.html?id=${p.id}" class="edit-link" style="color: var(--primary); text-decoration: none; font-weight: 600; font-size: 0.8rem; border: 1px solid var(--primary); padding: 0.3rem 0.6rem; border-radius: 0.4rem; transition: var(--transition);">Editar</a>`;
            row.appendChild(actionTd);

            selectedColumns.forEach(colName => {
                const td = document.createElement('td');
                let val = p[colName];
                
                // Format values
                if (Array.isArray(val)) val = val.join(', ');
                if (typeof val === 'boolean') val = val ? 'Sim' : 'Não';
                if (val === null || val === undefined || val === '') val = '-';
                
                // Format datetime-local
                if (typeof val === 'string' && val.includes('T')) {
                    const parts = val.split('T');
                    const datePart = parts[0];
                    const timePart = parts[1];
                    const dateParts = datePart.split('-');
                    if (dateParts.length === 3) {
                        const [year, month, day] = dateParts;
                        if (day && month && year) {
                            val = `${day}/${month}/${year} ${timePart}`;
                        }
                    }
                }
                
                td.textContent = val;
                row.appendChild(td);
            });
            tableBody.appendChild(row);
        });
    }

    searchInput.addEventListener('input', (e) => {
        renderTableBody(e.target.value);
    });

    exportBtn.onclick = () => {
        if (patients.length === 0) {
            alert('Não há dados para exportar.');
            return;
        }

        // Prepare full data for export
        const exportData = patients.map(p => {
            const flat = { ...p };
            // Flatten arrays and booleans for Excel
            Object.keys(flat).forEach(key => {
                if (Array.isArray(flat[key])) flat[key] = flat[key].join(', ');
                if (typeof flat[key] === 'boolean') flat[key] = flat[key] ? 'Sim' : 'Não';
            });
            return flat;
        });

        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Neonatal_Completo");
        XLSX.writeFile(workbook, "Dados_Neonatais_Completos.xlsx");
    };

    clearFiltersBtn.onclick = () => {
        selectedColumns = [];
        localStorage.setItem('table_selected_columns', JSON.stringify(selectedColumns));
        renderSelector();
        renderTable();
        updateCounter();
    };

    init();
});
