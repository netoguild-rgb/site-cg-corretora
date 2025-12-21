/* --- script.js --- */

// 1. Menu Mobile (Fazer o hambúrguer funcionar)
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        // Alterna entre mostrar e esconder o menu
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = '#fff';
            navLinks.style.width = '100%';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    });
}

// 2. Máscara de Telefone (Formata enquanto digita: (11) 99999-9999)
const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
});

// 3. Scroll Suave (Ao clicar no menu, desce macio até a seção)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Fecha o menu mobile se estiver aberto
        if(window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. Efeito de Navbar (Muda de cor ao rolar para baixo)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 50) {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});
