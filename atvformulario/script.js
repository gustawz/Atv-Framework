// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const form = document.getElementById('cadastroForm');
    
    // Adiciona evento de submit ao formulário
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário
        event.preventDefault();
        
        // Captura os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        
        // Validações básicas
        if (!nome || !email || !senha) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        // Validação de email básica
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido!');
            return;
        }
        
        // Validação de senha (mínimo 6 caracteres)
        if (senha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres!');
            return;
        }
        
        // Exibe os dados capturados em um alert
        const dadosUsuario = `Dados do Usuário Cadastrado:\n\n` +
                           `Nome: ${nome}\n` +
                           `E-mail: ${email}\n` +
                           `Senha: ${'*'.repeat(senha.length)} (${senha.length} caracteres)`;
        
        alert(dadosUsuario);
        
        // Opcional: Limpa o formulário após o envio
        form.reset();
        
        // Feedback visual de sucesso
        const submitBtn = document.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Cadastro Realizado!';
        submitBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }, 2000);
    });
    
    // Adiciona efeitos visuais aos campos
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        // Efeito de foco
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        // Remove efeito ao perder foco
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        // Validação em tempo real
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#28a745';
            } else {
                this.style.borderColor = '#e1e5e9';
            }
        });
    });
    
    // Validação específica para email em tempo real
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value.trim() !== '') {
            if (emailRegex.test(this.value)) {
                this.style.borderColor = '#28a745';
            } else {
                this.style.borderColor = '#dc3545';
            }
        } else {
            this.style.borderColor = '#e1e5e9';
        }
    });
    
    // Validação específica para senha em tempo real
    const senhaInput = document.getElementById('senha');
    senhaInput.addEventListener('input', function() {
        if (this.value.length >= 6) {
            this.style.borderColor = '#28a745';
        } else if (this.value.length > 0) {
            this.style.borderColor = '#ffc107';
        } else {
            this.style.borderColor = '#e1e5e9';
        }
    });
});

// Função adicional para demonstrar captura de dados (pode ser chamada externamente)
function obterDadosFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    return {
        nome: nome,
        email: email,
        senha: senha
    };
}