document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.getElementById('tableBody');
    const counter = document.getElementById('counter');

    await renderRecentTable();

    async function renderRecentTable() {
        // Aguarda até que o Supabase esteja pronto
        if (!window.supabaseReady) {
            console.log("Aguardando Supabase para carregar tabela recente...");
            setTimeout(renderRecentTable, 500);
            return;
        }

        if (!window.supabase || !window.supabase.from) {
            tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 3rem;">Erro: Cliente Supabase não inicializado corretamente.</td></tr>';
            return;
        }

        tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-secondary); padding: 3rem;">Carregando registros...</td></tr>';

        try {
            const { data, error, count } = await window.supabase
                .from('pacientes')
                .select('*', { count: 'exact' })
                .order('created_at', { ascending: false })
                .limit(5);

            if (error) {
                // Erro específico para projeto pausado ou erro de rede
                if (error.message && error.message.includes('FetchError')) {
                    throw new Error("Não foi possível conectar ao banco de dados. O serviço pode estar pausado ou você está sem internet.");
                }
                throw error;
            }

            const patients = data || [];
            tableBody.innerHTML = '';
            counter.textContent = count || 0;

            if (patients.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 4rem; color: var(--text-secondary);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📭</div>
                    <strong>Banco de dados vazio</strong><br>
                    Os dados aparecerão aqui assim que você realizar o primeiro cadastro.
                </td></tr>`;
                return;
            }

            patients.forEach((p) => {
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
        } catch (err) {
            console.error('Erro ao carregar registros do Supabase:', err);
            tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #ef4444; padding: 3rem;">
                <strong>Erro ao conectar com o banco de dados</strong><br>
                <span style="font-size: 0.8rem; opacity: 0.8;">${err.message || 'Verifique sua conexão ou se o projeto no Supabase está ativo.'}</span>
            </td></tr>`;
        }
    }
});
