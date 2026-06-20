// recuperando os elementos no código HTML
let botao = document.querySelector('#btnAdicionar');
let input = document.querySelector('#novaEspecificacao');
let lista = document.querySelector('#lista');

//adicionando o listener para o evento click e chamando a função
botao.addEventListener('click', () => {

    //recuperando o valor do formulário
    let valor = input.value;

    //verificando se o valor não está vazio
    if (valor !== '') {

        // criando um novo elemento li
        let novoItem = document.createElement('li');

        //adicionando o valor digitado ao elemento criado
        novoItem.textContent = valor;

        //adicionado a classe item
        novoItem.className = 'item';

        //inserindo o novo elemento na lista
        lista.appendChild(novoItem);

        //limpando o campo do formulário
        input.value = '';
    }
});