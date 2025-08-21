const btnComprar = document.getElementById ('btn-comprar');
btnComprar.addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && email && telefone) {
        alert(`Obrigado pela compra, ${nome}!`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});