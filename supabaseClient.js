// Configuração do Cliente Supabase
const SUPABASE_URL = 'https://nbncwonfgfxmygrhkcdo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ibmN3b25mZ2Z4bXlncmhrY2RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNzI4MTksImV4cCI6MjA5MTY0ODgxOX0.S0JmISh7gyS1mZW_ahOKZg6Q-0cveJH3R5x6pZNrSA0';

// A biblioteca carregada via CDN expõe o objeto 'supabase' globalmente.
// Esse objeto contém a função 'createClient'.
// Vamos criar o nosso cliente e substituir a variável global para facilitar o uso.

if (window.supabase && typeof window.supabase.createClient === 'function') {
    const { createClient } = window.supabase;
    // Sobrescrevemos o objeto da biblioteca pelo cliente já configurado
    window.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase Cliente inicializado com sucesso.');
} else {
    console.error('Erro: SDK do Supabase não encontrado.');
}
