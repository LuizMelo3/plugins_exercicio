$(document).ready(function() {
$('#carousel-imagens').slick({
    autoplay:true
});
});

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
});

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
});

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
});

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    messages: {
        nome: 'Por favor insira seu NOME',
        email: 'Por favor insira seu EMAIL',
        telefone: 'Pr favor insira seu TELEFONE',
        cpf: 'Por favor insira seu CPF',
        endereco: 'Por favor insira seu ENDEREÇO',
        cep: 'Por favor insira seu CEP'
    },
    submitHandler: function(form) {
        console.log(form)
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset()
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Por favor, preencha os campos para prosseguir com a compra!`);
        }
    }
})