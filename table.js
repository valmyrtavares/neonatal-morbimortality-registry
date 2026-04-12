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
                { "name": "patologias_psiquiatrica_qual", "label": "Detalhamento Psiq." },
                { "name": "patologias_drogas_qual", "label": "Detalhamento Drogas" },
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
                { "name": "causas_cesarea", "label": "Causas Cesárea" },
                { "name": "causas_cesarea_outro", "label": "Qual Causa Cesárea?" },
                { "name": "local_parto", "label": "Local" },
                { "name": "streptococcus_b", "label": "Strep B" },
                { "name": "profilaxia", "label": "Profilaxia" },
                { "name": "tipo_profilaxia", "label": "Tipo Profilax" }
            ]
        },
        {
            "title": "Recém-Nascido",
            "fields": [
                { "name": "idade_gestacional", "label": "IG" },
                { "name": "peso_nascimento", "label": "Peso de nascimento (g)" },
                { "name": "sexo", "label": "Sexo" },
                { "name": "apgar_1", "label": "Apgar 1'" },
                { "name": "apgar_5", "label": "Apgar 5'" },
                { "name": "apgar_10", "label": "Apgar 10'" },
                { "name": "reanimacao", "label": "Reanimação" },
                { "name": "tipo_reanimacao", "label": "Tipo Reanim." },
                { "name": "reanimacao_iot_fora_por_que", "label": "Motivo IOT fora" },
                { "name": "temperatura", "label": "Temp" },
                { "name": "dispositivo_usado", "label": "Disp. Térmico" },
                { "name": "pam", "label": "PAM" }
            ]
        },
        {
            "title": "Ventilação",
            "fields": [
                { "name": "vent_vm_comp", "label": "VM", "composite": ["vent_vm", "vent_vm_tempo"] },
                { "name": "vent_vni_comp", "label": "VNI", "composite": ["vent_vni", "vent_vni_tempo"] },
                { "name": "vent_cpap_comp", "label": "CPAP", "composite": ["vent_cpap", "vent_cpap_tempo"] },
                { "name": "vent_cateter_comp", "label": "Cateter Nasal", "composite": ["vent_cateter", "vent_cateter_tempo"] },
                { "name": "vent_o2_comp", "label": "O2", "composite": ["vent_o2", "vent_o2_tempo"] }
            ]
        },
        {
            "title": "PROCEDIMENTOS NA UTIN",
            "fields": [
                { "name": "proc_umb_venoso", "label": "Cat. Umb. Veno", "composite": ["acesso_umb_venoso", "acesso_umb_venoso_inst", "acesso_umb_venoso_tempo"] },
                { "name": "proc_umb_arterial", "label": "Cat. Umb. Art", "composite": ["acesso_umb_arterial", "acesso_umb_arterial_inst", "acesso_umb_arterial_tempo"] },
                { "name": "proc_pic", "label": "PICC", "composite": ["acesso_pic", "acesso_pic_inst", "acesso_pic_tempo"] },
                { "name": "proc_flepo", "label": "Flebo", "composite": ["acesso_flepotomia", "acesso_flepotomia_inst", "acesso_flepotomia_tempo"] },
                { "name": "proc_perif", "label": "Acesso Perif.", "composite": ["acesso_venoso_perif", "acesso_venoso_perif_inst", "acesso_venoso_perif_tempo"] },
                { "name": "proc_retorno_vent", "label": "Retorno Vent.", "composite": ["acesso_retorno_vent", "acesso_retorno_vent_qual", "acesso_retorno_vent_tempo"] },
                { "name": "proc_vm", "label": "VM (p)", "composite": ["oxig_vm", "oxig_vm_instalacao", "oxig_vm_tempo"] },
                { "name": "proc_vni", "label": "VNI (p)", "composite": ["oxig_vni", "oxig_vni_instalacao", "oxig_vni_tempo"] },
                { "name": "proc_cpap", "label": "CPAP (p)", "composite": ["oxig_cpap", "oxig_cpap_instalacao", "oxig_cpap_tempo"] },
                { "name": "proc_cnaf", "label": "CNAF (p)", "composite": ["oxig_cnaf", "oxig_cnaf_instalacao", "oxig_cnaf_tempo"] },
                { "name": "proc_cat", "label": "Cat Nasal (p)", "composite": ["oxig_cat_nasal", "oxig_cat_nasal_instalacao", "oxig_cat_nasal_tempo"] },
                { "name": "proc_o2", "label": "O2 Inal.", "composite": ["oxig_o2_inalat", "oxig_o2_inalat_instalacao", "oxig_o2_inalat_tempo"] },
                { "name": "proc_oxig_retorno_vent", "label": "Retorno Vent. (Oxig)", "composite": ["oxig_retorno_vent", "oxig_retorno_vent_qual", "oxig_retorno_vent_tempo"] },
                { "name": "proc_hipo", "label": "Hipotermia terapêutica", "composite": ["procedimento_hipotermia", "procedimento_hipotermia_inicio", "procedimento_hipotermia_retirada"] },
                { "name": "proc_foto", "label": "Fototerapia", "composite": ["procedimento_fototerapia_tipo", "procedimento_fototerapia_irradiacao", "procedimento_fototerapia_duracao"] },
                { "name": "proc_outros_utin", "label": "Outros Proc. UTIN", "composite": ["procedimento_outros", "procedimento_outros_qual", "procedimento_outros_inst", "procedimento_outros_tempo"] }
            ]
        },
        {
            "title": "MEDICAMENTOS",
            "fields": [
                { "name": "med_surf_1", "label": "Surf 1", "composite": ["med_surf_1_dose", "med_surf_1_idade"] },
                { "name": "med_surf_2", "label": "Surf 2", "composite": ["med_surf_2_dose", "med_surf_2_idade"] },
                { "name": "med_surf_out", "label": "Surf Out", "composite": ["med_surf_outras_dose", "med_surf_outras_idade", "med_surf_outras_motivo"] },
                { "name": "med_atb_amp", "label": "Ampicilina", "composite": ["med_atb_ampicilina", "med_atb_ampicilina_inicio", "med_atb_ampicilina_dura"] },
                { "name": "med_atb_gen", "label": "Gentamicina", "composite": ["med_atb_gentamicina", "med_atb_gentamicina_inicio", "med_atb_gentamicina_dura"] },
                { "name": "med_atb_pen", "label": "Peni Benz", "composite": ["med_atb_peni_benz", "med_atb_peni_benz_inicio", "med_atb_peni_benz_dura"] },
                { "name": "med_atb_ami", "label": "Amicacina", "composite": ["med_atb_amicacina", "med_atb_amicacina_inicio", "med_atb_amicacina_dura"] },
                { "name": "med_atb_oxa", "label": "Oxacilina", "composite": ["med_atb_oxacilina", "med_atb_oxacilina_inicio", "med_atb_oxacilina_dura"] },
                { "name": "med_atb_pec", "label": "Peni Crist", "composite": ["med_atb_peni_cristal", "med_atb_peni_cristal_inicio", "med_atb_peni_cristal_dura"] },
                { "name": "med_atb_cef", "label": "Cefepima", "composite": ["med_atb_cefepima", "med_atb_cefepima_inicio", "med_atb_cefepima_dura"] },
                { "name": "med_atb_out", "label": "Outro ATB", "composite": ["med_atb_outros", "med_atb_outros_qual", "med_atb_outros_inicio", "med_atb_outros_dura"] },

                { "name": "med_vaso_dopa", "label": "Dopamina", "composite": ["med_vaso_dopamina", "med_vaso_dopamina_inicio", "med_vaso_dopamina_dura"] },
                { "name": "med_vaso_dobu", "label": "Dobutamina", "composite": ["med_vaso_dobutamina", "med_vaso_dobutamina_inicio", "med_vaso_dobutamina_dura"] },
                { "name": "med_vaso_adre", "label": "Adrenalina", "composite": ["med_vaso_adrenalina", "med_vaso_adrenalina_inicio", "med_vaso_adrenalina_dura"] },
                { "name": "med_vaso_nora", "label": "Noradrenalina", "composite": ["med_vaso_noradrenalina", "med_vaso_noradrenalina_inicio", "med_vaso_noradrenalina_dura"] },
                { "name": "med_vaso_milri", "label": "Milrinona", "composite": ["med_vaso_milrinona", "med_vaso_milrinona_inicio", "med_vaso_milrinona_dura"] },
                { "name": "med_vaso_vaso", "label": "Vasopressina", "composite": ["med_vaso_vasopressina", "med_vaso_vasopressina_inicio", "med_vaso_vasopressina_dura"] },
                { "name": "med_vaso_oxido", "label": "Óxido Nítrico", "composite": ["med_vaso_oxido_nitrico", "med_vaso_oxido_nitrico_inicio", "med_vaso_oxido_nitrico_dura"] },

                { "name": "med_conv_feno", "label": "Fenobarb.", "composite": ["med_conv_fenobarbital", "med_conv_fenobarbital_inicio", "med_conv_fenobarbital_dura"] },
                { "name": "med_conv_feni", "label": "Fenitoína", "composite": ["med_conv_fenitoina", "med_conv_fenitoina_inicio", "med_conv_fenitoina_dura"] },
                { "name": "med_conv_mida", "label": "Midazolan", "composite": ["med_conv_midazolan", "med_conv_midazolan_inicio", "med_conv_midazolan_dura"] },
                { "name": "med_conv_leve", "label": "Levetira.", "composite": ["med_conv_levetiracetam", "med_conv_levetiracetam_inicio", "med_conv_levetiracetam_dura"] },
                { "name": "med_conv_out", "label": "Outro Conv.", "composite": ["med_conv_outros", "med_conv_outros_qual", "med_conv_outros_inicio", "med_conv_outros_dura"] }
            ]
        },
        {
            "title": "MEDICAMENTOS (Outros)",
            "fields": [
                { "name": "med_caf", "label": "Cafeína", "composite": ["med_cafeina", "med_cafeina_inicio", "med_cafeina_dura"] },
                { "name": "med_dex", "label": "Dexametasona", "composite": ["med_dexametasona", "med_dexametasona_inicio", "med_dexametasona_dura"] },
                { "name": "med_hyd", "label": "Hydrocortisona", "composite": ["med_hydrocortisona", "med_hydrocortisona_inicio", "med_hydrocortisona_dura"] },
                { "name": "med_ibu", "label": "Ibuprofeno", "composite": ["med_ibuprofeno", "med_ibuprofeno_inicio", "med_ibuprofeno_dura"] },
                { "name": "med_par", "label": "Paracetamol", "composite": ["med_paracetamol", "med_paracetamol_inicio", "med_paracetamol_dura"] },
                { "name": "med_ome", "label": "Omeprazol", "composite": ["med_omeprazol", "med_omeprazol_inicio", "med_omeprazol_dura"] },
                { "name": "med_dom", "label": "Domperidona", "composite": ["med_domperidona", "med_domperidona_inicio", "med_domperidona_dura"] },
                { "name": "med_sim", "label": "Simeticona", "composite": ["med_simeticona", "med_simeticona_inicio", "med_simeticona_dura"] },
                { "name": "med_nist", "label": "Nistatina", "composite": ["med_nistatina_oral", "med_nistatina_oral_inicio", "med_nistatina_oral_dura"] },
                { "name": "med_sil", "label": "Sildenafil", "composite": ["med_sildenafil", "med_sildenafil_inicio", "med_sildenafil_dura"] },
                { "name": "med_out_med", "label": "Outros Med.", "composite": ["med_outros_medicamentos", "med_outros_medicamentos_qual", "med_outros_medicamentos_inicio", "med_outros_medicamentos_dura"] }
            ]
        },
        {
            "title": "INFECÇÃO",
            "fields": [
                 { "name": "infeccao_sepse", "label": "Sepse" },
                 { "name": "infeccao_pneumonia", "label": "Pneumonia" },
                { "name": "infeccao_hmc", "label": "HMC" },
                { "name": "infeccao_lcr", "label": "LCR" },
                { "name": "infeccao_urc", "label": "URC" },
                { "name": "infeccao_out", "label": "Outras Inf.", "composite": ["infeccao_outras", "infeccao_outras_qual"] }
            ]
        },
        {
            "title": "NUTRIÇÃO",
            "fields": [
                { "name": "nut_padr", "label": "NPP Padrão", "composite": ["nutricao_npp_padrao_inicio", "nutricao_npp_padrao_dura"] },
                { "name": "nut_total", "label": "NPP Total", "composite": ["nutricao_npp_total_inicio", "nutricao_npp_total_dura"] },
                { "name": "nut_col", "label": "Colostro", "composite": ["nutricao_imunoterapia_colostro", "nutricao_imunoterapia_duracao"] },
                { "name": "nut_ent_tr", "label": "Enteral Trófica", "composite": ["nutricao_enteral_trofica_inicio", "nutricao_enteral_trofica_dura"] },
                { "name": "nut_ent_nutr", "label": "Enteral Nutritiva", "composite": ["nutricao_enteral_nutritiva_inicio", "nutricao_enteral_nutritiva_tipo"] }
            ]
        },
        {
            "title": "HEMODERIVADOS",
            "fields": [
                { "name": "hemod_hem", "label": "Hemácias", "composite": ["hemod_hemacias", "hemod_hemacias_data"] },
                { "name": "hemod_plas", "label": "Plasma", "composite": ["hemod_plasma", "hemod_plasma_data"] },
                { "name": "hemod_plaq", "label": "Plaquetas", "composite": ["hemod_plaquetas", "hemod_plaquetas_data"] },
                { "name": "hemod_crio_c", "label": "Crioprec.", "composite": ["hemod_crio", "hemod_crio_data"] }
            ]
        },
        {
            "title": "EXAMES SUBMETIDOS",
            "fields": [
                { "name": "ex_fo", "label": "FO", "composite": ["exames_fo", "exames_fo_res"] },
                { "name": "ex_eoa", "label": "EOA", "composite": ["exames_eoa", "exames_eoa_res"] },
                { "name": "ex_peate", "label": "PEATE", "composite": ["exames_peate", "exames_peate_res"] },
                { "name": "ex_ustf", "label": "USTF", "composite": ["exames_ustf", "exames_ustf_res"] },
                { "name": "ex_eco", "label": "ECO", "composite": ["exames_eco", "exames_eco_res"] },
                { "name": "ex_aeeg", "label": "aEEG", "composite": ["exames_aeeg", "exames_aeeg_res"] },
                { "name": "ex_usg_abd", "label": "USG abd", "composite": ["exames_usg_abd", "exames_usg_abd_res"] },
                { "name": "ex_usg_ren", "label": "USG renal", "composite": ["exames_usg_renal", "exames_usg_renal_res"] },
                { "name": "ex_out_c", "label": "Outro Exame", "composite": ["exames_outros", "exames_outros_qual", "exames_outros_res"] }
            ]
        },
        {
            "title": "CIRURGIA",
            "fields": [
                { "name": "cir_c", "label": "Cirurgia", "composite": ["cirurgia_realizada", "cirurgia_tipo", "cirurgia_idade"] },
                { "name": "escore_escolhido", "label": "Escore Gravidade" },
                { "name": "diagnostico", "label": "Diagnóstico" },
                { "name": "desfecho_c", "label": "Desfecho (Completo)", "composite": ["desfecho", "desfecho_data", "desfecho_peso", "desfecho_idade", "desfecho_igc"] }
            ]
        },
        {
            "title": "ENCAMINHAMENTOS / MEDICAÇÃO / NUTRIÇÃO NA ALTA",
            "fields": [
                { "name": "alta_nut", "label": "Nutrição Alta", "composite": ["alta_lm", "alta_lm_outros"] },
                { "name": "alta_amb", "label": "Acompanhamento", "composite": ["alta_acompanhamento", "alta_acompanhamento_outros"] },
                { "name": "alta_medicamentos", "label": "Meds Alta" }
            ]
        }
    ]
};


let selectedColumns = JSON.parse(localStorage.getItem('table_selected_columns')) || ['identificacao_nome', 'idade_gestacional', 'peso_nascimento', 'desfecho_c'];
let patients = JSON.parse(localStorage.getItem('neonatal_patients_v2')) || [];
let allFields = [];

document.addEventListener('DOMContentLoaded', () => {
    allFields = schema.sections.flatMap(s => s.fields);
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

            // "Marcar/Desmarcar Tudo" Option
            const sectionFieldNames = section.fields.map(f => f.name);
            const isAllSelected = sectionFieldNames.every(name => selectedColumns.includes(name));
            
            const bulkLabel = document.createElement('label');
            bulkLabel.className = `column-option ${isAllSelected ? 'active' : ''}`;
            bulkLabel.style.borderTop = "1px solid var(--border-color)";
            bulkLabel.style.marginTop = "0.5rem";
            bulkLabel.style.paddingTop = "0.5rem";
            bulkLabel.style.fontWeight = "600";
            bulkLabel.style.fontSize = "0.75rem";

            const bulkCheckbox = document.createElement('input');
            bulkCheckbox.type = 'checkbox';
            bulkCheckbox.checked = isAllSelected;
            bulkCheckbox.onchange = () => toggleSection(sectionFieldNames, isAllSelected);

            bulkLabel.appendChild(bulkCheckbox);
            bulkLabel.appendChild(document.createTextNode(isAllSelected ? '[-] Limpar Seção' : '[+] Marcar Seção'));
            list.appendChild(bulkLabel);

            selectorContainer.appendChild(group);
        });
    }

    function toggleSection(fieldNames, isAllSelected) {
        if (isAllSelected) {
            selectedColumns = selectedColumns.filter(c => !fieldNames.includes(c));
        } else {
            // Add what is not there
            fieldNames.forEach(name => {
                if (!selectedColumns.includes(name)) selectedColumns.push(name);
            });
        }
        localStorage.setItem('table_selected_columns', JSON.stringify(selectedColumns));
        renderSelector();
        renderTable();
        updateCounter();
    }

    function toggleColumn(fieldName) {
        if (selectedColumns.includes(fieldName)) {
            selectedColumns = selectedColumns.filter(c => c !== fieldName);
        } else {
            selectedColumns.push(fieldName);
        }
        localStorage.setItem('table_selected_columns', JSON.stringify(selectedColumns));
        renderSelector();
        renderTable();
        updateCounter();
    }

    function updateCounter() {
        columnCounter.textContent = `(${selectedColumns.length})`;
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

        // Get labels for selected columns in schema order
        const visibleFields = allFields.filter(f => selectedColumns.includes(f.name));
        visibleFields.forEach(field => {
            const th = document.createElement('th');
            th.textContent = field.label;
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

            const visibleFields = allFields.filter(f => selectedColumns.includes(f.name));
            visibleFields.forEach(field => {
                const colName = field.name;
                const td = document.createElement('td');
                const fieldDef = field;
                let val = '-';

                if (fieldDef && fieldDef.composite) {
                    const parts = fieldDef.composite;
                    const mainVal = p[parts[0]];
                    
                    if (mainVal && mainVal !== 'false' && mainVal !== '-') {
                        const detail = parts.slice(1).map(k => p[k] || '-').join(' / ');
                        val = (typeof mainVal === 'boolean') ? `Sim (${detail})` : `${mainVal} (${detail})`;
                    } else {
                        val = '-';
                    }
                } else {
                    val = p[colName];
                }
                
                // Format values for display
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
