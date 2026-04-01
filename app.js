document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('tableBody');
    const counter = document.getElementById('counter');

    const initialPatients = [
        { id: 1, identificacao_nome: "RN Geisli Batista Rodrigues", idade_gestacional: 28, peso_nascimento: 1015, sexo: "feminino", apgar_1: 4, apgar_5: 8, desfecho: "alta", timestamp: "01/01/2026 10:00:00" },
        { id: 2, identificacao_nome: "RN Ana Flávia Ferreira dos Santos", idade_gestacional: 32, peso_nascimento: 2235, sexo: "masculino", apgar_1: 5, apgar_5: 9, desfecho: "alta", timestamp: "02/01/2026 11:30:00" }
    ];

    let patients = JSON.parse(localStorage.getItem('neonatal_patients_v2'));
    if (!patients || patients.length === 0) {
        patients = initialPatients;
        localStorage.setItem('neonatal_patients_v2', JSON.stringify(patients));
    }
    
    renderRecentTable();

    function renderRecentTable() {
        tableBody.innerHTML = '';
        counter.textContent = patients.length;

        // Show last 5
        const recent = [...patients].reverse().slice(0, 5);

        if (recent.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 3rem;">Nenhum registro encontrado.</td></tr>';
            return;
        }

        recent.forEach((p) => {
            const row = document.createElement('tr');
            const normalizedStatus = p.desfecho ? p.desfecho.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "outros";
            const statusClass = `status-${normalizedStatus}`;
            const sexoBadge = p.sexo ? `<span style="padding: 0.2rem 0.6rem; border-radius: 0.4rem; background: rgba(255,255,255,0.05); font-size: 0.75rem;">${p.sexo}</span>` : '-';
            
            row.innerHTML = `
                <td style="font-weight: 500;">${p.identificacao_nome || '-'}</td>
                <td>${sexoBadge}</td>
                <td><span style="color: var(--primary);">${p.idade_gestacional || '-'} s</span> / ${p.peso_nascimento || '-'}g</td>
                <td><span class="status-badge ${statusClass}">${p.desfecho || 'Outro'}</span></td>
                <td><span style="color: var(--text-secondary); font-size: 0.8rem;">${p.timestamp || '-'}</span></td>
            `;
            tableBody.appendChild(row);
        });
    }
});
