function buscar() {

    let cep = document.getElementById('cep').value

    fetch('https://viacep.com.br/ws/' + cep + '/json/')
    .then(resposta => resposta.json())
    .then(dados => {

        document.getElementById('endereco').value = dados.logradouro
        document.getElementById('bairro').value = dados.bairro
        document.getElementById('cidade').value = dados.localidade
        document.getElementById('estado').value = dados.uf

    })

}