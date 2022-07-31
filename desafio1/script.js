window.onload = function(){

    let frutas = [
        {produto: "Mamão", preco: 8.90},
        {produto: "Laranja", preco: 3.60},
        {produto: "Manga", preco: 5.30},
        {produto: "Melão", preco: 6.20},
        {produto: "Melância", preco: 4.80},
    ]
    
    const listaDeProd = document.querySelector("#produtos");
    
    (()=>{
    for(let listaFru of frutas){
        const listaLi = document.createElement("li");

        for(fru in listaFru){
            if( fru == "preco"){
                listaDeProd.appendChild(listaLi).setAttribute("data-preco", listaFru[fru]);
            }else{
                listaDeProd.appendChild(listaLi).textContent = `${listaFru[fru]}` ;
            }
        }
    }
    })()

    const cesta = document.querySelector("#cestaDoCliente"); 
    const listaProd = document.querySelectorAll("#produtos > li");
    const total = document.querySelector("#mostraTotalCompra");

    let minhaCesta = [];
    let valorTotal = 0;

    listaProd.forEach(function(itens){
        itens.addEventListener("click", function(){

        if(minhaCesta.indexOf(itens.textContent) != -1){
            alert(`A fruta ${itens.textContent} já está na cesta.`);
            
        }else{ 
            minhaCesta.push(itens.textContent);
            //adiciona as frutas na cesta do cliente
            let cestinha = document.createElement("li");
            cesta.appendChild(cestinha).textContent = itens.textContent

            //soma os preços das frutas que estão na cesta
            valorTotal += Number(itens.dataset.preco);
            total.value = valorTotal.toFixed(2);
        }
        })
    })
}