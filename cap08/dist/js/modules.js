// fazendo o import
import { produtos } from "./produtos.js";
const grid = document.getElementById('grid-produtos');

// percorrendo os produtos
produtos.forEach(produto => {
    // criando o card
    const card = document.createElement('a');
    card.href = `#`; // link dinâmico
    card.className = 'border border-gray-700 pb-4 shadow text-white block text-center hover:scale-105 duration-300 rounded-sm';

    // imagem
    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.tipo_produto;
    img.className = 'mb-3 rounded-tl-sm rounded-tr-sm w-full';
    card.append(img);

    // tipo do produto
    const titulo = document.createElement('h2');
    titulo.textContent = produto.tipo_produto;
    titulo.className = 'text-2xl font-bold mb-1 text-gray-400';
    card.append(titulo);

    // cor
    const cor = document.createElement('p');
    cor.textContent = `Cor: ${produto.cor}`;
    cor.className = 'text-gray-300 text-lg';
    card.append(cor);

    // estoque
    const estoque = document.createElement('p');
    estoque.textContent = `Estoque: ${produto.estoque}`;
    estoque.className = 'text-lg text-gray-400 mt-1';
    card.append(estoque);

    // preço
    const preco = document.createElement('p');
    preco.textContent = `R$ ${produto.preco}`;
    preco.className = 'text-gray-400 font-semibold text-3xl';
    card.append(preco);
    // adicionando no grid
    grid.appendChild(card);
});