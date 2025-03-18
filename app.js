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
    let lista = document.getElementById('lista-participantes'); 
    lista.innerHTML = '';

    nomes.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearDuplas() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 nomes para formar as duplas!");
        return;
    }

    let embaralhado = [...nomes].sort(() => Math.random() - 0.5);
    let duplas = [];
    
    for (let i = 0; i < embaralhado.length; i += 2) {
        if (i + 1 < embaralhado.length) {
            duplas.push(`${embaralhado[i]} 🤝 ${embaralhado[i + 1]}`);
        } else {
            duplas.push(`${embaralhado[i]} (Sem dupla, precisa de mais um participante!)`);
        }
    }

    exibirDuplas(duplas);
}

function exibirDuplas(duplas) {
    const lista = document.getElementById("lista-participantes");
    lista.innerHTML = "<h3>Duplas do Amigo Secreto:</h3>";
    
    duplas.forEach(dupla => {
        let li = document.createElement("li");
        li.textContent = dupla;
        lista.appendChild(li);
    });
}

function resetarLista() {
    nomes = [];  
    document.getElementById("lista-participantes").innerHTML = ""; 
    document.getElementById("resultado").textContent = "";
}

function toggleTheme() {
    document.body.classList.toggle('night-mode');
    let button = document.querySelector('.toggle-theme');
    button.textContent = document.body.classList.contains('night-mode') ? '☀️' : '🌙';
}

document.querySelector(".pet-button").addEventListener("click", function() {
    let bubble = document.querySelector(".speech-bubble");
    bubble.style.display = bubble.style.display === "block" ? "none" : "block";
});

// Atualiza o evento do botão "Sortear"
document.getElementById("botao-sortear").addEventListener("click", sortearDuplas);
