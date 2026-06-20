import { produtos } from "./produtos.js";

const grid = document.getElementById("grid-produtos");

// percorre todos os produtos
produtos.forEach(produto => {

    // card principal
    const card = document.createElement("div");
    card.className =
        "border border-gray-700 shadow rounded-sm bg-gray-800 text-white text-center hover:scale-105 duration-300";

// imagem
    const img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.tipo_produto;

    img.className =
        "w-full h-64 object-cover rounded-tl-sm rounded-tr-sm mb-3";

    card.appendChild(img);

    // título
    const titulo = document.createElement("h2");
    titulo.textContent = produto.tipo_produto;
    titulo.className = "text-xl font-bold text-gray-300 mb-1";

    card.appendChild(titulo);

    // cor
    const cor = document.createElement("p");
    cor.textContent = `Cor: ${produto.cor}`;
    cor.className = "text-gray-400 text-sm";

    card.appendChild(cor);

    // estoque
    const estoque = document.createElement("p");
    estoque.textContent = `Estoque: ${produto.estoque}`;
    estoque.className = "text-gray-400 text-sm";

    card.appendChild(estoque);

    // preço
    const preco = document.createElement("p");
    preco.textContent = `R$ ${produto.preco}`;
    preco.className = "text-green-400 font-bold text-2xl mt-2";

    card.appendChild(preco);

    // adiciona card no grid
    grid.appendChild(card);

});