document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('tableBody');
    const counter = document.getElementById('counter');

    const initialPatients = [];

    let patients = JSON.parse(localStorage.getItem('neonatal_patients_v2'));
    if (!patients) {
        patients = initialPatients;
        localStorage.setItem('neonatal_patients_v2', JSON.stringify(patients));
    } else {
        // Cleanup specific test patients if they exist
        const originalCount = patients.length;
        patients = patients.filter(p => 
            p.identificacao_nome !== "RN Geisli Batista Rodrigues" && 
            p.identificacao_nome !== "RN Ana Flávia Ferreira dos Santos"
        );
        if (patients.length !== originalCount) {
             localStorage.setItem('neonatal_patients_v2', JSON.stringify(patients));
        }
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
                <td><span style="color: var(--primary);">${p.idade_gestacional || '-'}</span> / ${p.peso_nascimento || '-'}g</td>
                <td><span class="status-badge ${statusClass}">${p.desfecho || 'Outro'}</span></td>
                <td><span style="color: var(--text-secondary); font-size: 0.8rem;">${p.timestamp || '-'}</span></td>
            `;
            tableBody.appendChild(row);
        });
    }
});
