async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();

        if(consultaCEPConvertida.erro) {
            throw Error('CEP Não Existente!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP Inserido é Inválido. Tente Novamente</p>`;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


function redirecionaPagina() {
    const nome = document.getElementById('nome').value;
    const nascimento = document.getElementById('nascimento').value;
    const contato = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const cepVerificacao = document.getElementById('cep').value;
    const enderecoVerificacao = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;
    const bairroVerificao = document.getElementById('bairro').value;
    const cidadeVerificacao = document.getElementById('cidade').value;
    const estadoVerificacao = document.getElementById('estado').value;

    if(nome == "" 
    || nascimento == "" 
    || contato == "" 
    || email == "" 
    || cepVerificacao == "" 
    || enderecoVerificacao == "" 
    || numero == "" 
    || bairroVerificao == "" 
    || cidadeVerificacao == "" 
    || estadoVerificacao == "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        window.location.href='cadastro-finalizado.html'
    }
}