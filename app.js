let nomes = [];

function adicionarNome() {
    let nomeInput = document.getElementById('nome');
    let nome = nomeInput.value.trim();

    if (!nome) {
        alert("Por favor, digite um nome válido!");
        return;
    }

    if (nomes.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    nomeInput.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = '';

    nomes.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortear() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 nomes para realizar o sorteio!");
        return;
    }

    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById('resultado').textContent = `🎉 O amigo secreto é: ${sorteado}!`;
}

function toggleTheme() {
    document.body.classList.toggle('night-mode');
    let button = document.querySelector('.toggle-theme');
    button.textContent = document.body.classList.contains('night-mode') ? '☀️' : '🌙';
}