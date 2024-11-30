document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (validateForm(name, email, message)) {
        alert('Formulário enviado com sucesso!');
    }
    
});

function validateForm(name, email, message) {
    if (name === '' || email === '' || message === '') {
        alert('Todos os campos são obrigatórios.');
        return false;
    }
    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function menuShow() {
    let menuMobile = document.querySelector('.ul2');
     if ( menuMobile.style.display == "flex") {
        menuMobile.style.display = "none";
    } else {
        menuMobile.style.display = "flex";
    }
}
function funcao1()
{
alert("Registration successfully completed!")}


