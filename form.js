const schema = {
    "sections": [
        {
            "title": "Identificação",
            "fields": [
                { "name": "identificacao_nome", "label": "Nome", "type": "text" },
                { "name": "identificacao_rh", "label": "RH", "type": "text" },
                { "name": "identificacao_nascimento", "label": "DN (data de nascimento)", "type": "datetime-local" }
            ]
        },
        {
            "title": "História Gestacional",
            "fields": [
                { "name": "idade_materna", "label": "Idade Materna", "type": "number", "min": 10, "max": 60, "width": "half" },
                { "name": "consultas_pn", "label": "Número de consultas pré natal", "type": "number", "min": 0, "max": 30, "width": "half" },
                { "name": "patologias_maternas", "label": "Patologias Maternas", "type": "select", "multiple": true, "options": ["colo curto", "obesidade", "HAC", "DMG", "ITU", "TPP", "pré-eclâmpsia", "sífilis", "hipotireoidismo", "tabagismo", "VAP", "Narguilé", "Doença psiquiátrica", "uso de drogas", "diabetes", "HAS", "eclâmpsia", "vaginose bacteriana"] },
                { "name": "patologias_psiquiatrica_qual", "label": "Qual doença psiquiátrica?", "type": "text", "showIf": { "field": "patologias_maternas", "includes": "Doença psiquiátrica" }, "placeholder": "Qual?" },
                { "name": "patologias_drogas_qual", "label": "Qual droga?", "type": "text", "showIf": { "field": "patologias_maternas", "includes": "uso de drogas" }, "placeholder": "Qual?" },
                { "name": "corticoide_antenatal", "label": "Corticóide Antenatal", "type": "boolean", "width": "half" },
                { "name": "corticoide_ciclos", "label": "Ciclos", "type": "number", "min": 0, "max": 10, "showIf": { "field": "corticoide_antenatal", "equals": true }, "width": "half" },
                { "name": "outras_medicacoes_maternas", "label": "Medicações", "type": "text" }
            ]
        },
        {
            "title": "Dados do Parto",
            "fields": [
                { "name": "apresentacao_parto", "label": "Apresentação", "type": "select", "options": ["cefálica", "pélvica", "transversa", "outra"] },
                { "name": "tempo_amniorrexe_horas", "label": "Tempo de bolsa rota (em horas) :", "type": "number", "min": 0, "max": 1000 },
                { "name": "tipo_parto", "label": "Tipo de Parto", "type": "select", "options": ["normal", "cesárea", "fórceps", "vácuo"] },
                { "name": "causas_cesarea", "label": "Causas de cesárea", "type": "select", "multiple": true, "options": ["Mecônio", "Sofrimento fetal agudo", "CIUR", "Doença materna descompensada", "Pré Eclâmpsia", "Eclâmpsia", "Síndrome HELLP", "Apresentação anômala", "Falha de indução", "Desproporção céfalo-pélvica", "Parada de descida", "Cesárea a pedido", "Outro"], "showIf": { "field": "tipo_parto", "equals": "cesárea" } },
                { "name": "causas_cesarea_outro", "label": "Qual causa de cesária?", "type": "text", "showIf": { "field": "causas_cesarea", "includes": "Outro" }, "placeholder": "Especifique a causa" },
                { "name": "local_parto", "label": "Local do Parto", "type": "select", "options": ["hospitalar", "não hospitalar"] },
                { "name": "streptococcus_b", "label": "Streptococcus B", "type": "select", "options": ["positivo", "negativo", "desconhecido"] },
                { "name": "profilaxia", "label": "Profilaxia:", "type": "boolean", "width": "half" },
                { "name": "tipo_profilaxia", "label": "Tipo de Profilaxia:", "type": "select", "options": ["Adequada", "Inadequada"], "width": "half", "showIf": { "field": "profilaxia", "equals": true } }
            ]
        },
        {
            "title": "Recém-Nascido",
            "fields": [
                { "name": "idade_gestacional", "label": "Idade Gestacional", "type": "text" },
                { "name": "peso_nascimento", "label": "Peso de nascimento (g)", "type": "number", "min": 300, "max": 6000 },
                { "name": "sexo", "label": "Sexo", "type": "select", "options": ["masculino", "feminino", "indefinido"] },
                { "name": "apgar_1", "label": "Apgar 1 min", "type": "number", "min": 0, "max": 10, "width": "third" },
                { "name": "apgar_5", "label": "Apgar 5 min", "type": "number", "min": 0, "max": 10, "width": "third" },
                { "name": "apgar_10", "label": "Apgar 10 min", "type": "number", "min": 0, "max": 10, "width": "third" },
                { "name": "reanimacao", "label": "Reanimação", "type": "boolean" },
                { "name": "tipo_reanimacao", "label": "Tipo de Reanimação", "type": "select", "multiple": true, "options": ["Aspiração", "VPP com balão e máscara", "VPP com Baby Puff", "Massagem cardíaca", "IOT na reanimação", "Cateterismo umbilical", "Expansão", "Adrenalina", "Bicarbonato", "IOT fora da reanimação"], "showIf": { "field": "reanimacao", "equals": true } },
                { "name": "reanimacao_iot_fora_por_que", "label": "Por que IOT fora da reanimação?", "type": "text", "showIf": { "field": "tipo_reanimacao", "includes": "IOT fora da reanimação" }, "placeholder": "Qual?" },
                { "name": "temperatura", "label": "Temperatura", "type": "number", "min": 30, "max": 42 },
                { "name": "dispositivo_usado", "label": "Dispositivo usado:", "type": "select", "options": ["saco plástico", "Colchão térmico"] },
                { "name": "pam", "label": "PAM", "type": "number", "min": 10, "max": 120 }
            ]
        },
        {
            "title": "Ventilação",
            "fields": [
                { "name": "vent_vm", "label": "1- VM", "type": "boolean", "width": "half" },
                { "name": "vent_vm_tempo", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "vent_vm", "equals": true } },
                { "name": "vent_vni", "label": "2- VNI", "type": "boolean", "width": "half" },
                { "name": "vent_vni_tempo", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "vent_vni", "equals": true } },
                { "name": "vent_cpap", "label": "3- CPAP", "type": "boolean", "width": "half" },
                { "name": "vent_cpap_tempo", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "vent_cpap", "equals": true } },
                { "name": "vent_cateter", "label": "4- Cateter Nasal", "type": "boolean", "width": "half" },
                { "name": "vent_cateter_tempo", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "vent_cateter", "equals": true } },
                { "name": "vent_o2", "label": "5- O2", "type": "boolean", "width": "half" },
                { "name": "vent_o2_tempo", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "vent_o2", "equals": true } }
            ]
        },
        {
            "title": "PROCEDIMENTOS NA UTIN",
            "fields": [
                { "type": "subtitle", "label": "1- Tipo de acesso venoso central:" },
                { "name": "acesso_umb_venoso", "label": "Cateter Umbilical Venoso", "type": "boolean", "width": "half" },
                { "name": "acesso_umb_venoso_inst", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_umb_venoso", "equals": true } },
                { "name": "acesso_umb_venoso_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_umb_venoso", "equals": true } },

                { "name": "acesso_umb_arterial", "label": "Cateter Umbilical Arterial", "type": "boolean", "width": "half" },
                { "name": "acesso_umb_arterial_inst", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_umb_arterial", "equals": true } },
                { "name": "acesso_umb_arterial_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_umb_arterial", "equals": true } },

                { "name": "acesso_pic", "label": "PICC", "type": "boolean", "width": "half" },
                { "name": "acesso_pic_inst", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_pic", "equals": true } },
                { "name": "acesso_pic_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_pic", "equals": true } },

                { "name": "acesso_flepotomia", "label": "Flebotomia", "type": "boolean", "width": "half" },
                { "name": "acesso_flepotomia_inst", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_flepotomia", "equals": true } },
                { "name": "acesso_flepotomia_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_flepotomia", "equals": true } },

                { "name": "acesso_venoso_perif", "label": "Acesso venoso periférico", "type": "boolean", "width": "half" },
                { "name": "acesso_venoso_perif_inst", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_venoso_perif", "equals": true } },
                { "name": "acesso_venoso_perif_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "acesso_venoso_perif", "equals": true } },

                { "name": "acesso_retorno_vent", "label": "Retorno a algum tipo de ventilação", "type": "boolean", "width": "half" },
                { "name": "acesso_retorno_vent_qual", "label": "Qual(is)?", "type": "text", "width": "quarter", "enableIf": { "field": "acesso_retorno_vent", "equals": true } },
                { "name": "acesso_retorno_vent_tempo", "label": "Por quanto tempo?", "type": "text", "width": "quarter", "enableIf": { "field": "acesso_retorno_vent", "equals": true } },
                { "type": "subtitle", "label": "Oxigenação/ventilação" },
                { "name": "oxig_vm", "label": "VM", "type": "boolean", "width": "half" },
                { "name": "oxig_vm_instalacao", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_vm", "equals": true } },
                { "name": "oxig_vm_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_vm", "equals": true } },

                { "name": "oxig_vni", "label": "VNI", "type": "boolean", "width": "half" },
                { "name": "oxig_vni_instalacao", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_vni", "equals": true } },
                { "name": "oxig_vni_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_vni", "equals": true } },

                { "name": "oxig_cpap", "label": "CPAP", "type": "boolean", "width": "half" },
                { "name": "oxig_cpap_instalacao", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_cpap", "equals": true } },
                { "name": "oxig_cpap_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_cpap", "equals": true } },

                { "name": "oxig_cnaf", "label": "CNAF", "type": "boolean", "width": "half" },
                { "name": "oxig_cnaf_instalacao", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_cnaf", "equals": true } },
                { "name": "oxig_cnaf_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_cnaf", "equals": true } },

                { "name": "oxig_cat_nasal", "label": "Cat nasal", "type": "boolean", "width": "half" },
                { "name": "oxig_cat_nasal_instalacao", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_cat_nasal", "equals": true } },
                { "name": "oxig_cat_nasal_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_cat_nasal", "equals": true } },

                { "name": "oxig_o2_inalat", "label": "O2 inalat", "type": "boolean", "width": "half" },
                { "name": "oxig_o2_inalat_instalacao", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_o2_inalat", "equals": true } },
                { "name": "oxig_o2_inalat_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "oxig_o2_inalat", "equals": true } },

                { "name": "oxig_retorno_vent", "label": "Retorno a algum tipo de ventilação", "type": "boolean", "width": "half" },
                { "name": "oxig_retorno_vent_qual", "label": "Qual(is)?", "type": "text", "width": "quarter", "enableIf": { "field": "oxig_retorno_vent", "equals": true } },
                { "name": "oxig_retorno_vent_tempo", "label": "Por quanto tempo?", "type": "text", "width": "quarter", "enableIf": { "field": "oxig_retorno_vent", "equals": true } },

                { "name": "procedimento_hipotermia", "label": "Hipotermia terapêutica", "type": "boolean", "width": "half", "marginTop": true },
                { "name": "procedimento_hipotermia_inicio", "label": "Idade de início:", "type": "number", "width": "quarter", "enableIf": { "field": "procedimento_hipotermia", "equals": true } },
                { "name": "procedimento_hipotermia_retirada", "label": "Idade de retirada:", "type": "number", "width": "quarter", "enableIf": { "field": "procedimento_hipotermia", "equals": true } },

                { "name": "procedimento_fototerapia_tipo", "label": "4- Fototerapia (tipo):", "type": "select", "options": ["Bilisky", "Bilibed"], "width": "quarter" },
                { "name": "procedimento_fototerapia_irradiacao", "label": "Irradiação:", "type": "text", "width": "quarter" },
                { "name": "procedimento_fototerapia_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "procedimento_fototerapia_irradiacao", "notEmpty": true } },
                { "name": "procedimento_fototerapia_duracao", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "procedimento_fototerapia_irradiacao", "notEmpty": true } },

                { "name": "procedimento_outros", "label": "5- Outros procedimentos", "type": "boolean", "width": "quarter", "marginTop": true },
                { "name": "procedimento_outros_qual", "label": "Qual?", "type": "text", "width": "quarter", "enableIf": { "field": "procedimento_outros", "equals": true } },
                { "name": "procedimento_outros_inst", "label": "Idade instalação:", "type": "number", "width": "quarter", "enableIf": { "field": "procedimento_outros", "equals": true } },
                { "name": "procedimento_outros_tempo", "label": "Tempo de uso:", "type": "number", "width": "quarter", "enableIf": { "field": "procedimento_outros", "equals": true } }
            ]
        },
        {
            "title": "MEDICAMENTOS",
            "fields": [
                 { "type": "subtitle", "label": "1- Surfactante:" },

                 { "name": "med_surf_1_dose", "label": "1º dose:", "type": "boolean", "width": "half" },
                { "name": "med_surf_1_idade", "label": "Idade de adm:", "type": "number", "width": "half", "enableIf": { "field": "med_surf_1_dose", "equals": true } },
                { "name": "med_surf_2_dose", "label": "2º dose:", "type": "boolean", "width": "half" },
                { "name": "med_surf_2_idade", "label": "Idade de adm:", "type": "number", "width": "half", "enableIf": { "field": "med_surf_2_dose", "equals": true } },
                 { "name": "med_surf_outras_dose", "label": "Outras doses:", "type": "boolean", "width": "half" },
                 { "name": "med_surf_outras_idade", "label": "Idade de adm:", "type": "number", "width": "quarter", "enableIf": { "field": "med_surf_outras_dose", "equals": true } },
                 { "name": "med_surf_outras_motivo", "label": "Motivo:", "type": "text", "width": "quarter", "enableIf": { "field": "med_surf_outras_dose", "equals": true } },

                { "type": "subtitle", "label": "2- Antibióticos:" },
                { "name": "med_atb_ampicilina", "label": "Ampicilina", "type": "boolean", "width": "half" },
                { "name": "med_atb_ampicilina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_ampicilina", "equals": true } },
                { "name": "med_atb_ampicilina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_ampicilina", "equals": true } },

                { "name": "med_atb_gentamicina", "label": "Gentamicina", "type": "boolean", "width": "half" },
                { "name": "med_atb_gentamicina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_gentamicina", "equals": true } },
                { "name": "med_atb_gentamicina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_gentamicina", "equals": true } },

                { "name": "med_atb_peni_benz", "label": "Peni Benz", "type": "boolean", "width": "half" },
                { "name": "med_atb_peni_benz_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_peni_benz", "equals": true } },
                { "name": "med_atb_peni_benz_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_peni_benz", "equals": true } },

                { "name": "med_atb_amicacina", "label": "Amicacina", "type": "boolean", "width": "half" },
                { "name": "med_atb_amicacina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_amicacina", "equals": true } },
                { "name": "med_atb_amicacina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_amicacina", "equals": true } },

                { "name": "med_atb_oxacilina", "label": "Oxacilina", "type": "boolean", "width": "half" },
                { "name": "med_atb_oxacilina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_oxacilina", "equals": true } },
                { "name": "med_atb_oxacilina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_oxacilina", "equals": true } },

                { "name": "med_atb_peni_cristal", "label": "Penicilina Cristalina", "type": "boolean", "width": "half" },
                { "name": "med_atb_peni_cristal_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_peni_cristal", "equals": true } },
                { "name": "med_atb_peni_cristal_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_peni_cristal", "equals": true } },

                { "name": "med_atb_cefepima", "label": "Cefepima", "type": "boolean", "width": "half" },
                { "name": "med_atb_cefepima_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_cefepima", "equals": true } },
                { "name": "med_atb_cefepima_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_atb_cefepima", "equals": true } },

                { "name": "med_atb_outros", "label": "Outros", "type": "boolean", "width": "half" },
                { "name": "med_atb_outros_qual", "label": "Qual?", "type": "text", "width": "half", "enableIf": { "field": "med_atb_outros", "equals": true } },
                { "name": "med_atb_outros_inicio", "label": "Idade início:", "type": "number", "width": "half", "enableIf": { "field": "med_atb_outros", "equals": true } },
                { "name": "med_atb_outros_dura", "label": "Duração:", "type": "number", "width": "half", "enableIf": { "field": "med_atb_outros", "equals": true } },

                { "type": "subtitle", "label": "3- Drogas vasoativas:" },
                { "name": "med_vaso_dopamina", "label": "Dopamina", "type": "boolean", "width": "half" },
                { "name": "med_vaso_dopamina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_dopamina", "equals": true } },
                { "name": "med_vaso_dopamina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_dopamina", "equals": true } },

                { "name": "med_vaso_dobutamina", "label": "Dobutamina", "type": "boolean", "width": "half" },
                { "name": "med_vaso_dobutamina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_dobutamina", "equals": true } },
                { "name": "med_vaso_dobutamina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_dobutamina", "equals": true } },

                { "name": "med_vaso_adrenalina", "label": "Adrenalina", "type": "boolean", "width": "half" },
                { "name": "med_vaso_adrenalina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_adrenalina", "equals": true } },
                { "name": "med_vaso_adrenalina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_adrenalina", "equals": true } },

                { "name": "med_vaso_noradrenalina", "label": "Noradrenalina", "type": "boolean", "width": "half" },
                { "name": "med_vaso_noradrenalina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_noradrenalina", "equals": true } },
                { "name": "med_vaso_noradrenalina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_noradrenalina", "equals": true } },

                { "name": "med_vaso_milrinona", "label": "Milrinona", "type": "boolean", "width": "half" },
                { "name": "med_vaso_milrinona_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_milrinona", "equals": true } },
                { "name": "med_vaso_milrinona_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_milrinona", "equals": true } },

                { "name": "med_vaso_vasopressina", "label": "Vasopressina", "type": "boolean", "width": "half" },
                { "name": "med_vaso_vasopressina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_vasopressina", "equals": true } },
                { "name": "med_vaso_vasopressina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_vasopressina", "equals": true } },

                { "name": "med_vaso_oxido_nitrico", "label": "Óxido nítrico", "type": "boolean", "width": "half" },
                { "name": "med_vaso_oxido_nitrico_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_oxido_nitrico", "equals": true } },
                { "name": "med_vaso_oxido_nitrico_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_vaso_oxido_nitrico", "equals": true } },

                { "type": "subtitle", "label": "4- Anticonvulsivantes:" },
                { "name": "med_conv_fenobarbital", "label": "Fenobarbital", "type": "boolean", "width": "half" },
                { "name": "med_conv_fenobarbital_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_conv_fenobarbital", "equals": true } },
                { "name": "med_conv_fenobarbital_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_conv_fenobarbital", "equals": true } },

                { "name": "med_conv_fenitoina", "label": "Fenitoína", "type": "boolean", "width": "half" },
                { "name": "med_conv_fenitoina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_conv_fenitoina", "equals": true } },
                { "name": "med_conv_fenitoina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_conv_fenitoina", "equals": true } },

                { "name": "med_conv_midazolan", "label": "Midazolan", "type": "boolean", "width": "half" },
                { "name": "med_conv_midazolan_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_conv_midazolan", "equals": true } },
                { "name": "med_conv_midazolan_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_conv_midazolan", "equals": true } },

                { "name": "med_conv_levetiracetam", "label": "Levetiracetam", "type": "boolean", "width": "half" },
                { "name": "med_conv_levetiracetam_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_conv_levetiracetam", "equals": true } },
                { "name": "med_conv_levetiracetam_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_conv_levetiracetam", "equals": true } },

                { "name": "med_conv_outros", "label": "Outros", "type": "boolean", "width": "half" },
                { "name": "med_conv_outros_qual", "label": "Qual?", "type": "text", "width": "half", "enableIf": { "field": "med_conv_outros", "equals": true } },
                { "name": "med_conv_outros_inicio", "label": "Idade início:", "type": "number", "width": "half", "enableIf": { "field": "med_conv_outros", "equals": true } },
                { "name": "med_conv_outros_dura", "label": "Duração:", "type": "number", "width": "half", "enableIf": { "field": "med_conv_outros", "equals": true } }
            ]
        },
        {
            "title": "MEDICAMENTOS (Outros)",
            "fields": [
                { "type": "subtitle", "label": "5- Outros medicamentos:" },
                { "name": "med_cafeina", "label": "Cafeína", "type": "boolean", "width": "half" },
                { "name": "med_cafeina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_cafeina", "equals": true } },
                { "name": "med_cafeina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_cafeina", "equals": true } },

                { "name": "med_dexametasona", "label": "Dexametasona", "type": "boolean", "width": "half" },
                { "name": "med_dexametasona_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_dexametasona", "equals": true } },
                { "name": "med_dexametasona_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_dexametasona", "equals": true } },

                { "name": "med_inalacao_adrenalina", "label": "Inalação com Adrenalina", "type": "boolean", "width": "half" },
                { "name": "med_inalacao_adrenalina_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_inalacao_adrenalina", "equals": true } },
                { "name": "med_inalacao_adrenalina_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_inalacao_adrenalina", "equals": true } },

                { "name": "med_omeprazol", "label": "Omeprazol", "type": "boolean", "width": "half" },
                { "name": "med_omeprazol_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_omeprazol", "equals": true } },
                { "name": "med_omeprazol_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_omeprazol", "equals": true } },

                { "name": "med_domperidona", "label": "Domperidona", "type": "boolean", "width": "half" },
                { "name": "med_domperidona_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_domperidona", "equals": true } },
                { "name": "med_domperidona_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_domperidona", "equals": true } },

                { "name": "med_simeticona", "label": "Simeticona", "type": "boolean", "width": "half" },
                { "name": "med_simeticona_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_simeticona", "equals": true } },
                { "name": "med_simeticona_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_simeticona", "equals": true } },

                { "name": "med_nistatina_oral", "label": "Nistatina oral", "type": "boolean", "width": "half" },
                { "name": "med_nistatina_oral_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_nistatina_oral", "equals": true } },
                { "name": "med_nistatina_oral_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_nistatina_oral", "equals": true } },

                { "name": "med_sildenafil", "label": "Sildenafil", "type": "boolean", "width": "half" },
                { "name": "med_sildenafil_inicio", "label": "Idade início:", "type": "number", "width": "quarter", "enableIf": { "field": "med_sildenafil", "equals": true } },
                { "name": "med_sildenafil_dura", "label": "Duração:", "type": "number", "width": "quarter", "enableIf": { "field": "med_sildenafil", "equals": true } },

                { "name": "med_outros_medicamentos", "label": "Outros", "type": "boolean", "width": "half" },
                { "name": "med_outros_medicamentos_qual", "label": "Qual?", "type": "text", "width": "half", "enableIf": { "field": "med_outros_medicamentos", "equals": true } },
                { "name": "med_outros_medicamentos_inicio", "label": "Idade início:", "type": "number", "width": "half", "enableIf": { "field": "med_outros_medicamentos", "equals": true } },
                { "name": "med_outros_medicamentos_dura", "label": "Duração:", "type": "number", "width": "half", "enableIf": { "field": "med_outros_medicamentos", "equals": true } }
            ]
        },
        {
            "title": "INFECÇÃO",
            "fields": [
                { "name": "infeccao_sepse", "label": "Sepse", "type": "select", "options": ["precoce", "tardia"] },
                { "name": "infeccao_pneumonia", "label": "Pneumonia", "type": "select", "options": ["congênita", "PAV"] },
                { "name": "infeccao_hmc", "label": "HMC", "type": "select", "options": ["negativa", "positiva", "afastado infecção"] },
                { "name": "infeccao_lcr", "label": "LCR", "type": "select", "options": ["negativa", "positiva", "afastado infecção"] },
                { "name": "infeccao_urc", "label": "URC", "type": "select", "options": ["negativa", "positiva", "afastado infecção"] },
                { "name": "infeccao_outras", "label": "Outras infecções?", "type": "boolean", "width": "half" },
                { "name": "infeccao_outras_qual", "label": "Qual?", "type": "text", "width": "half", "enableIf": { "field": "infeccao_outras", "equals": true } }
            ]
        },
        {
            "title": "NUTRIÇÃO",
            "fields": [
                { "name": "nutricao_imunoterapia_colostro", "label": "Imunoterapia com colostro:", "type": "boolean", "width": "half" },
                { "name": "nutricao_imunoterapia_duracao", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "nutricao_imunoterapia_colostro", "equals": true } },

                { "name": "nutricao_enteral_trofica_inicio", "label": "Enteral trófica (início):", "type": "date", "width": "half" },
                { "name": "nutricao_enteral_trofica_dura", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "nutricao_enteral_trofica_inicio", "notEmpty": true } },

                { "name": "nutricao_enteral_nutritiva_inicio", "label": "Enteral nutritiva (início):", "type": "date", "width": "half" },
                { "name": "nutricao_enteral_nutritiva_tipo", "label": "Tipo de dieta:", "type": "select", "options": ["LM própria mãe exclusivo", "LM BLH exclusivo", "Ambos", "Fórmula Láctea exclusiva", "Aleitamento Misto"], "width": "half" },

                { "name": "nutricao_npp_padrao_inicio", "label": "NPP padrão (início):", "type": "date", "width": "half" },
                { "name": "nutricao_npp_padrao_dura", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "nutricao_npp_padrao_inicio", "notEmpty": true } },

                { "name": "nutricao_npp_total_inicio", "label": "NPP total (início):", "type": "date", "width": "half" },
                { "name": "nutricao_npp_total_dura", "label": "Duração (dias):", "type": "number", "width": "half", "enableIf": { "field": "nutricao_npp_total_inicio", "notEmpty": true } }
            ]
        },
        {
            "title": "HEMODERIVADOS",
            "fields": [
                { "name": "hemod_hemacias", "label": "Hemácias", "type": "boolean", "width": "half" },
                { "name": "hemod_hemacias_data", "label": "Quando?", "type": "date", "width": "half", "enableIf": { "field": "hemod_hemacias", "equals": true } },
                { "name": "hemod_plasma", "label": "Plasma", "type": "boolean", "width": "half" },
                { "name": "hemod_plasma_data", "label": "Quando?", "type": "date", "width": "half", "enableIf": { "field": "hemod_plasma", "equals": true } },
                { "name": "hemod_plaquetas", "label": "Plaquetas", "type": "boolean", "width": "half" },
                { "name": "hemod_plaquetas_data", "label": "Quando?", "type": "date", "width": "half", "enableIf": { "field": "hemod_plaquetas", "equals": true } },
                { "name": "hemod_crio", "label": "Crioprecipitado", "type": "boolean", "width": "half" },
                { "name": "hemod_crio_data", "label": "Quando?", "type": "date", "width": "half", "enableIf": { "field": "hemod_crio", "equals": true } },

            ]
        },
        {
            "title": "EXAMES SUBMETIDOS",
            "fields": [
                { "name": "exames_fo", "label": "FO", "type": "boolean", "width": "half" },
                { "name": "exames_fo_res", "label": "Resultado:", "type": "select", "options": ["Negativo", "Positivo"], "width": "half", "enableIf": { "field": "exames_fo", "equals": true } },

                { "name": "exames_eoa", "label": "EOA", "type": "boolean", "width": "half" },
                { "name": "exames_eoa_res", "label": "Resultado:", "type": "select", "options": ["Negativo", "Positivo"], "width": "half", "enableIf": { "field": "exames_eoa", "equals": true } },

                { "name": "exames_peate", "label": "PEATE", "type": "boolean", "width": "half" },
                { "name": "exames_peate_res", "label": "Resultado:", "type": "select", "options": ["Negativo", "Positivo"], "width": "half", "enableIf": { "field": "exames_peate", "equals": true } },

                { "name": "exames_ustf", "label": "USTF", "type": "boolean", "width": "half" },
                { "name": "exames_ustf_res", "label": "Resultado:", "type": "select", "options": ["Negativo", "Positivo"], "width": "half", "enableIf": { "field": "exames_ustf", "equals": true } },

                { "name": "exames_eco", "label": "ECO", "type": "boolean", "width": "half" },
                { "name": "exames_eco_res", "label": "Resultado:", "type": "select", "options": ["Negativo", "Positivo"], "width": "half", "enableIf": { "field": "exames_eco", "equals": true } },

                { "name": "exames_aeeg", "label": "aEEG", "type": "boolean", "width": "half" },
                { "name": "exames_aeeg_res", "label": "Resultado:", "type": "select", "options": ["Negativo", "Positivo"], "width": "half", "enableIf": { "field": "exames_aeeg", "equals": true } },

                { "name": "exames_usg_abd", "label": "USG abd", "type": "boolean", "width": "half" },
                { "name": "exames_usg_abd_res", "label": "Resultado:", "type": "select", "options": ["Negativo", "Positivo"], "width": "half", "enableIf": { "field": "exames_usg_abd", "equals": true } },

                { "name": "exames_usg_renal", "label": "USG renal", "type": "boolean", "width": "half" },
                { "name": "exames_usg_renal_res", "label": "Resultado:", "type": "select", "options": ["Negativo", "Positivo"], "width": "half", "enableIf": { "field": "exames_usg_renal", "equals": true } },

                { "name": "exames_outros", "label": "Outros", "type": "boolean", "width": "half" },
                { "name": "exames_outros_qual", "label": "Qual?", "type": "text", "width": "quarter", "enableIf": { "field": "exames_outros", "equals": true } },
                { "name": "exames_outros_res", "label": "Resultado:", "type": "text", "width": "quarter", "enableIf": { "field": "exames_outros", "equals": true } }
            ]
        },
        {
            "title": "CIRURGIA",
            "fields": [
                { "name": "cirurgia_realizada", "label": "Realizou Cirurgia?", "type": "boolean", "width": "half" },
                { "name": "cirurgia_tipo", "label": "Tipo", "type": "text", "width": "half", "showIf": { "field": "cirurgia_realizada", "equals": true } },
                { "name": "cirurgia_idade", "label": "Idade RN no procedimento", "type": "number", "width": "half", "showIf": { "field": "cirurgia_realizada", "equals": true } },
                { "name": "escore_escolhido", "label": "Escore de Gravidade", "type": "select", "options": ["nSOFA", "SNAP", "Risco de morte"], "width": "half" },
                { "name": "diagnostico", "label": "DIAGNÓSTICOS:", "type": "textarea", "width": "full" },
                { "name": "desfecho", "label": "Desfecho", "type": "select", "options": ["Alta", "Transf", "Óbito"], "width": "half" },
                { "name": "desfecho_idade", "label": "Idade", "type": "number", "width": "quarter" },
                { "name": "desfecho_igc", "label": "IGC", "type": "text", "width": "quarter" },
                { "name": "desfecho_data", "label": "Data", "type": "date", "width": "quarter" },
                { "name": "desfecho_peso", "label": "Peso", "type": "number", "width": "quarter" }
            ]
        },
        {
            "title": "ENCAMINHAMENTOS / MEDICAÇÃO / NUTRIÇÃO NA ALTA",
            "fields": [
                { "name": "alta_lm", "label": "Nutrição", "type": "select", "options": ["LM própria mãe exclusivo", "Fórmula Láctea segmento", "Aleitamento Misto", "Outros leites"], "width": "half" },
                { "name": "alta_lm_outros", "label": "Qual leite?", "type": "text", "width": "half", "enableIf": { "field": "alta_lm", "equals": "Outros leites" } },
                { "name": "alta_acompanhamento", "label": "Acompanhamento", "type": "select", "options": ["AMB Prematuro (Dra Fernanda)", "AMB Canguru (Dra Adriana)", "UBS", "AMB amamentação (Fono/Enf)", "Outros acompanhamentos"], "width": "half" },
                { "name": "alta_acompanhamento_outros", "label": "Quais?", "type": "text", "width": "half", "enableIf": { "field": "alta_acompanhamento", "equals": "Outros acompanhamentos" } },
                { "name": "alta_medicamentos", "label": "Medicamentos da Alta", "type": "textarea", "width": "full" }
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

            let currentRow = null;
            section.fields.forEach(field => {
                if (field.type === 'subtitle') {
                    currentRow = null;
                    const sub = document.createElement('div');
                    sub.className = 'form-subtitle';
                    sub.innerText = field.label;
                    stepDiv.appendChild(sub);
                    return;
                }

                const group = document.createElement('div');
                const isSmallColumn = field.width === 'half' || field.width === 'third' || field.width === 'quarter';
                group.className = field.width ? `form-group form-group-${field.width}` : 'form-group';
                if (field.showIf) group.classList.add('hidden-field');
                if (field.enableIf) group.classList.add('disabled-group');
                group.dataset.name = field.name;

                let inputHtml = '';
                if (field.type === 'boolean') {
                    group.className = field.width ? `form-group form-group-${field.width} boolean-group` : 'form-group boolean-group';
                    if (field.showIf) group.classList.add('hidden-field');
                    if (field.enableIf) group.classList.add('disabled-group');
                    inputHtml = `<label for="f_${field.name}">${field.label}</label><input type="checkbox" id="f_${field.name}" name="${field.name}" style="width: 20px; height: 20px;">`;
                } else if (field.type === 'select' && field.multiple) {
                    inputHtml = `<label>${field.label}</label><div class="checkbox-grid">`;
                    field.options.forEach(opt => {
                        inputHtml += `<label class="checkbox-item"><input type="checkbox" name="${field.name}" value="${opt}"><span>${opt}</span></label>`;
                    });
                    inputHtml += `</div>`;
                } else if (field.type === 'select') {
                    inputHtml = `<label for="f_${field.name}">${field.label}</label><select id="f_${field.name}" name="${field.name}" ${field.required ? 'required' : ''} ${field.enableIf ? 'disabled' : ''}><option value="">Selecione</option>${field.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select>`;
                } else if (field.type === 'textarea') {
                    inputHtml = `<label for="f_${field.name}">${field.label}</label><textarea id="f_${field.name}" name="${field.name}" ${field.required ? 'required' : ''} ${field.enableIf ? 'disabled' : ''} placeholder="${field.placeholder || 'Digite aqui...'}" rows="4"></textarea>`;
                } else {
                    inputHtml = `<label for="f_${field.name}">${field.label}</label><input type="${field.type}" id="f_${field.name}" name="${field.name}" ${field.required ? 'required' : ''} ${field.enableIf ? 'disabled' : ''} ${field.min !== undefined ? `min="${field.min}"` : ''} ${field.max !== undefined ? `max="${field.max}"` : ''} step="any" placeholder="${field.placeholder || 'Digite aqui...'}">`;
                }

                group.innerHTML = inputHtml;

                if (isSmallColumn) {
                    if (!currentRow || field.marginTop) {
                        currentRow = document.createElement('div');
                        currentRow.className = 'form-row';
                        if (field.marginTop) currentRow.style.marginTop = '2rem';
                        stepDiv.appendChild(currentRow);
                    }
                    currentRow.appendChild(group);
                } else {
                    currentRow = null;
                    stepDiv.appendChild(group);
                }
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
        summaryDiv.className = 'wizard-step-content summary-step fade-in-up';
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
        // Desativado a pedido para testes - permitindo avançar sempre.
        return true; 
        
        if (stepIdx === schema.sections.length) return true;
        const section = schema.sections[stepIdx];
        let isValid = true;
        let firstErrorInput = null;

        section.fields.forEach(f => {
            if (f.type === 'subtitle') return;
            const group = document.querySelector(`.form-group[data-name="${f.name}"]`);
            if (group && !group.classList.contains('hidden-field')) {
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
                if (f.type === 'subtitle') return;
                
                const groupEl = document.querySelector(`.form-group[data-name="${f.name}"]`);
                if (groupEl && !groupEl.classList.contains('hidden-field')) {
                    let val = currentData[f.name];
                    let originalVal = originalPatientData ? originalPatientData[f.name] : undefined;

                    // Formatting function
                    const fmt = (v) => {
                        if (Array.isArray(v)) return v.length > 0 ? v.join(', ') : 'Nenhum';
                        if (typeof v === 'boolean') return v ? 'Sim' : 'Não';
                        if (v === null || v === '' || v === undefined) return '-';
                        
                        // Handle datetime-local strings (YYYY-MM-DDTHH:mm)
                        if (typeof v === 'string' && v.includes('T')) {
                            const parts = v.split('T');
                            const datePart = parts[0];
                            const timePart = parts[1];
                            const dateParts = datePart.split('-');
                            if (dateParts.length === 3) {
                                const [year, month, day] = dateParts;
                                // Simple check to ensure we have digits
                                if (day && month && year) {
                                    return `${day}/${month}/${year} ${timePart}`;
                                }
                            }
                        }
                        
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

    function evaluateCondition(condition, value) {
        if (condition.notEmpty) {
            return value !== "" && value !== null && value !== undefined;
        }
        if (condition.includes !== undefined) {
            return Array.isArray(value) && value.includes(condition.includes);
        }
        return value === condition.equals;
    }

    function updateVisibility() {
        const formData = getFormData();
        schema.sections.forEach(section => {
            section.fields.forEach(field => {
                if (field.showIf) {
                    const group = document.querySelector(`.form-group[data-name="${field.name}"]`);
                    const condition = field.showIf;
                    const dependentValue = formData[condition.field];
                    
                    if (evaluateCondition(condition, dependentValue)) {
                        group.classList.remove('hidden-field');
                    } else {
                        group.classList.add('hidden-field');
                    }
                }

                if (field.enableIf) {
                    const group = document.querySelector(`.form-group[data-name="${field.name}"]`);
                    const input = document.getElementById(`f_${field.name}`);
                    const condition = field.enableIf;
                    const dependentValue = formData[condition.field];
                    
                    if (evaluateCondition(condition, dependentValue)) {
                        group.classList.remove('disabled-group');
                        if (input) input.disabled = false;
                    } else {
                        group.classList.add('disabled-group');
                        if (input) {
                            input.disabled = true;
                            input.value = '';
                        }
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
