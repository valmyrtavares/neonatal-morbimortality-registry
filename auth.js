(function() {
    const FIXED_EMAIL = 'registro@neonatal.com';

    async function checkAuth() {
        if (!window.supabase) {
            console.error("Supabase não carregado para autenticação.");
            return;
        }

        // Verifica se existe uma sessão ativa no Supabase
        const { data: { session } } = await window.supabase.auth.getSession();
        
        if (session) {
            console.log("Sessão ativa encontrada.");
            return true;
        }

        showAuthScreen();
        return false;
    }

    function showAuthScreen() {
        const overlay = document.createElement('div');
        overlay.className = 'auth-overlay';
        overlay.id = 'authOverlay';

        overlay.innerHTML = `
            <div class="auth-card">
                <div style="font-size: 3rem; margin-bottom: 1.5rem;">🔒</div>
                <h2>Acesso Restrito</h2>
                <p>Por favor, insira a senha de acesso para continuar.</p>
                
                <div class="password-wrapper">
                    <input type="password" id="authPassword" placeholder="••••••••" autofocus>
                    <button type="button" class="eye-btn" id="togglePassword" title="Mostrar/Esconder senha">
                        👁️
                    </button>
                </div>
                
                <button type="button" id="authSubmitBtn">Entrar no Sistema</button>
                <div id="authError" class="auth-error">Senha incorreta ou erro de conexão.</div>
            </div>
        `;

        document.body.appendChild(overlay);

        const input = overlay.querySelector('#authPassword');
        const submitBtn = overlay.querySelector('#authSubmitBtn');
        const toggleBtn = overlay.querySelector('#togglePassword');
        const errorMsg = overlay.querySelector('#authError');

        async function attemptLogin() {
            const password = input.value;
            if (!password) return;

            submitBtn.disabled = true;
            submitBtn.textContent = 'Verificando...';
            errorMsg.classList.remove('visible');

            try {
                const { data, error } = await window.supabase.auth.signInWithPassword({
                    email: FIXED_EMAIL,
                    password: password
                });

                if (error) throw error;

                // Sucesso no login
                overlay.style.opacity = '0';
                overlay.style.transition = 'opacity 0.4s ease';
                setTimeout(() => {
                    window.location.reload(); // Recarrega para garantir que todos os componentes vejam a sessão
                }, 400);

            } catch (err) {
                console.error("Erro no login:", err.message);
                errorMsg.textContent = err.message.includes('Invalid login credentials') 
                    ? 'Senha incorreta. Tente novamente.' 
                    : 'Erro ao conectar. Verifique sua internet.';
                
                errorMsg.classList.add('visible');
                input.style.borderColor = '#ef4444';
                input.value = '';
                input.focus();
                
                // Shake effect
                const card = overlay.querySelector('.auth-card');
                card.style.animation = 'none';
                void card.offsetWidth; // trigger reflow
                card.style.animation = 'authShake 0.4s cubic-bezier(.36,.07,.19,.97) both';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Entrar no Sistema';
            }
        }

        submitBtn.onclick = attemptLogin;
        
        input.onkeydown = (e) => {
            if (e.key === 'Enter') attemptLogin();
            if (errorMsg.classList.contains('visible')) {
                errorMsg.classList.remove('visible');
                input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }
        };

        toggleBtn.onclick = () => {
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            toggleBtn.textContent = isPassword ? '🙈' : '👁️';
        };
    }

    // Add Shake Animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes authShake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
        }
    `;
    document.head.appendChild(style);

    // Initial check
    window.addEventListener('DOMContentLoaded', () => {
        // Pequeno delay para garantir que o supabaseClient.js inicializou o window.supabase
        setTimeout(checkAuth, 100);
    });
})();
