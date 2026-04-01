# 🩺 Registro Neonatal: Guia de Apoio à Decisão e Registro Clínico

Seja bem-vindo(a) ao sistema de **Registro de Morbimortalidade Neonatal**. Este aplicativo foi cuidadosamente desenvolvido para transformar a complexidade da coleta de dados à beira-leito em um processo fluido, seguro e humanizado.

Sabemos que no ambiente da UTI Neonatal, cada segundo e cada detalhe contam. Esta ferramenta foi pensada para ser sua aliada na organização das informações, permitindo que você foque no que realmente importa: **o cuidado com o recém-nascido**.

---

## 🎯 O que este aplicativo faz?

O projeto nasceu da necessidade de substituir planilhas estáticas por uma interface inteligente. Ele organiza todo o histórico do paciente — desde a história gestacional até o desfecho clínico — em um formato digital intuitivo, facilitando a análise de indicadores de saúde e a geração de relatórios para a equipe multidisciplinar.

---

## ✨ Funcionalidades Principais

### 1. Formulário em Etapas (Checklist Inteligente)
Para evitar a fadiga de decisão e o esquecimento de dados críticos, o registro é dividido em seções lógicas:
- **Identificação e História Gestacional**
- **Dados do Parto e Reanimação**
- **Assistência Ventilatória e Infecciosa**
- **Desfecho Clínico**
*O sistema exibe apenas os campos relevantes (ex: detalhes de reanimação só aparecem se você marcar que ela foi necessária).*

### 2. Resumo Clínico para Conferência
Antes de finalizar qualquer registro, o aplicativo apresenta uma tela de **Revisão**. Nela, você pode conferir todos os dados inseridos, garantindo a acurácia da informação antes de salvá-la definitivamente.

### 3. Emissão de Prontuário Visual
Ao finalizar o preenchimento, você tem a opção de gerar um **Prontuário Individual**. Este documento é formatado para impressão ou salvamento em PDF, servindo como um registro físico do atendimento ou para discussão em faturamento e passagens de plantão.

### 4. Tabela de Dados com Filtros Dinâmicos
Na visualização de registros, você não precisa lidar com colunas inúteis. O sistema permite que você **selecione exatamente quais dados quer visualizar** no momento (ex: apenas Peso e Idade Gestacional), facilitando a comparação rápida entre pacientes.

### 5. Exportação para Excel (Pesquisa e Gestão)
Com apenas um clique, todos os dados registrados são convertidos em uma planilha Excel (`.xlsx`). Isso é ideal para:
- Produção de trabalhos científicos.
- Apresentação de indicadores em reuniões de unidade.
- Backup externo de segurança.

---

## 🛡️ Segurança e Privacidade (Nota Importante)

Este é um **Produto em Fase de Teste (MVP)** e, por isso, possui uma característica importante:
- **Sem Banco de Dados Externo**: Por enquanto, todos os dados são salvos **apenas no seu navegador/computador** (via `localStorage`). 
- **Privacidade Total**: Nenhuma informação sai do seu dispositivo sem que você exporte o arquivo Excel manualmente.
- **Edição Flexível**: Você pode editar qualquer registro a qualquer momento para corrigir informações conforme o quadro clínico evolui.

---

> *Este sistema busca ser a ponte entre o dado bruto e a excelência clínica. Esperamos que ele facilite sua rotina e contribua para a melhoria constante dos desfechos neonatais em sua unidade.*

**[Acesse o Dashboard Principal](index.html)** | **[Novo Registro](form.html)**
