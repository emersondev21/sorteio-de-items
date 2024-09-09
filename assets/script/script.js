let itens = [];

function adicionarItem() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();

    if (item) {
        itens.push(item);
        atualizarLista();
        itemInput.value = '';
        itemInput.focus();
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaItens');
    lista.innerHTML = '';

    itens.forEach(function(item, index) {
        const li = document.createElement('li');
        li.textContent = item;

        // Botão de remover item
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = function() {
            removerItem(index);
        };

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerItem(index) {
    itens.splice(index, 1);
    atualizarLista();
}

function sortearItem() {
    if (itens.length === 0) {
        document.getElementById('result').textContent = 'Nenhum item na lista para sortear.';
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * itens.length);
    const itemSorteado = itens[indiceSorteado];

    document.getElementById('result').innerHTML = 'Item sorteado<br>🎊' + itemSorteado + '🎊';
}