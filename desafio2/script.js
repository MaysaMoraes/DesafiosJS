window.onload = function(){

    const buscar = document.querySelector("#buscar")
    const cep = document.querySelector("#cep")
    const logradouro = document.querySelector("#logradouro")
    const bairro = document.querySelector("#bairro")
    const cidade = document.querySelector("#localidade")
    const estado = document.querySelector("#uf")

    let buscarCep =  async function(cep){
        let viaCep = `https://viacep.com.br/ws/${cep}/json/`
        try{
            let retornoFetch = await fetch(viaCep);
            let dadosRetorno = await retornoFetch.json();
            logradouro.value = dadosRetorno.logradouro
            bairro.value = dadosRetorno.bairro
            cidade.value = dadosRetorno.localidade
            estado.value = dadosRetorno.uf
        }catch(error){
            alert(error)
        }
}
    buscar.addEventListener("click", function(){
        buscarCep(cep.value)
    })
}
