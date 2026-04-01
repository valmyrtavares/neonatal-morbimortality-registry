# 👶 Registro Neonatal: Morbimortalidade

Este sistema foi desenvolvido para facilitar o acompanhamento e registro de dados de morbimortalidade neonatal em ambiente hospitalar. O projeto evoluiu de uma planilha Excel para uma aplicação web moderna com interface dinâmica e foco na experiência do profissional de saúde.

🚀 **Acesse agora**: [https://neonatal-morbimortality-registry.vercel.app](https://neonatal-morbimortality-registry.vercel.app)

---

## 📖 Documentação para Profissionais de Saúde
Para entender como utilizar o sistema, as funcionalidades clínicas e a política de privacidade dos dados, acesse o nosso guia dedicado:
👉 **[Guia Clínico (HTML)](guia_clinico.html)**

---

## 🛠️ Funcionalidades Técnicas
- **Painel de Controle (Dashboard)**: Visualização rápida de registros recentes e métricas básicas.
- **Formulário Passo a Passo (Wizard)**: Registro detalhado de pacientes com 7 seções médicas e campos condicionais.
- **Resumo Pré-Salvamento**: Revisão completa dos dados antes da persistência.
- **Exportação para Excel**: Geração de relatórios robustos em formato `.xlsx` usando SheetJS.
- **Segurança Local**: Armazenamento via `localStorage` (sem banco de dados externo para este MVP).
- **Aesthetics Premium**: Interface em Dark Mode com Glassmorphism, animações suaves e design focado em legibilidade.

---

## 📂 Estrutura do Projeto
- `index.html`: Dashboard principal.
- `form.html`: Página do formulário wizard.
- `table.html`: Visualização de dados com seleção de colunas.
- `style.css`: Estilização consistente e sistema de design.
- `form.js` / `table.js` / `app.js`: Lógica de negócio e manipulação de dados.

## ⚙️ Como Executar Localmente
Basta abrir o arquivo `index.html` em qualquer navegador moderno ou rodar um servidor local (ex: Live Server).
