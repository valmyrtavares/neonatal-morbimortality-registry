# Registro Neonatal - Morbimortalidade

Este sistema foi desenvolvido para facilitar o acompanhamento e registro de dados de morbimortalidade neonatal em ambiente hospitalar. O projeto evoluiu de uma planilha Excel para uma aplicação web moderna com interface dinâmica.

## Funcionalidades
- **Painel de Controle (Dashboard)**: Visualização rápida de registros recentes e métricas básicas.
- **Formulário Passo a Passo (Wizard)**: Registro detalhado de pacientes com 7 seções médicas e +30 campos.
- **Lógica Condicional**: Os campos exibidos mudam dinamicamente conforme os dados inseridos (ex: Reanimação, Corticóide).
- **Resumo Pré-Salvamento**: Verificação de todos os dados antes de finalizar o registro.
- **Exportação para Excel**: Geração de relatórios completos em formato `.xlsx`.
- **Aesthetics Premium**: Interface em Dark Mode com Glassmorphism e tipografia moderna.

## Estrutura do Projeto
- `index.html`: Dashboard principal.
- `form.html`: Página dedicada ao formulário wizard.
- `style.css`: Estilização consistente e animações.
- `form.js`: Lógica do formulário e validações.
- `app.js`: Lógica do painel de controle.
- `cleaned_data.json`: Dados iniciais de referência.

## Como Executar
Basta abrir o arquivo `index.html` em qualquer navegador moderno. Os dados são salvos localmente no seu dispositivo.
