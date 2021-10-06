var objeto = [];
var numero = '';
var contador = 0;

function teste(cep) {
	console.log(cep)

	$.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
		console.log('** Dados de Endereçamento **');
		liberar(dados);
	});


	// axios.get("https://viacep.com.br/ws/" + cep + "/json/?callback=?")
	// 	.then(function (response) {
	// 		objeto = response.data;
	// 		console.log(response.logradouro);
	// 		console.log(objeto.logradouro);

	// 		liberar(objeto.retorno)
	// 		//console.log(dados.uf)
	// 		return objeto;
	// 	});

}

function bloqueiaCampos() {
	console.log('** Bloqueio de campos **');
	
	$("#logradouro").val("");
	$("#numero").val("");
	$("#complemento").val("");
	$("#bairro").val("");
	$("#municipio").val("");
	$("#uf").val("");

	$("#logradouro").prop("readonly", true);
	$("#bairro").prop("readonly", true);
	$("#municipio").prop("readonly", true);
	$("#uf").prop("readonly", true);
}

function verificarCep(cep) {
	bloqueiaCampos();
	console.log(cep);
	console.log('contador = ' + contador);
	if (numero === '') {
		for (var i = 0; i < 5; i++) {
			numero = numero + cep.charAt(i);
		}
		for (var i = 6; i <= 8; i++) {
			numero = numero + cep.charAt(i);
		}
	}
	else {
		numero = '';
		if (numero === '') {
			for (var i = 0; i < 5; i++) {
				numero = numero + cep.charAt(i);
			}
			for (var i = 6; i <= 8; i++) {
				numero = numero + cep.charAt(i);
			}
		}
	}
	if (numero.length < 8) {
		$("#cepHelp").html("O CEP informado é inválido ou não foi encontrado.");
		return;
	}
	teste(numero);
	contador++;
	console.log('contador = ' + contador);
}

function liberar(dados) {
	if (dados.erro) {
		$("#cepHelp").html("O CEP informado é inválido ou não foi encontrado.");
		return;
	}

	$("#cepHelp").html("");

	$("#logradouro").val("");
	$("#numero").val("");
	$("#complemento").val("");
	$("#bairro").val("");
	$("#municipio").val("");
	$("#uf").val("");



	if (dados.uf !== "") {
		document.getElementById("uf").value = dados.uf;
		// document.getElementById("uf").readonly = true;
		$("#uf").prop("readonly", true);
	} else {
		$("#uf").removeAttr("readonly");
	}

	if (dados.localidade !== "") {
		document.getElementById("municipio").value = dados.localidade;
		// document.getElementById("municipio").readonly = true;
		$("#municipio").prop("readonly", true);
	} else {
		$("#municipio").removeAttr("readonly");
	}

	if (dados.logradouro !== "") {
		document.getElementById("logradouro").value = dados.logradouro;
		//document.getElementById("logradouro").readonly = true;
		$("#logradouro").prop("readonly", true);
	} else {
		$("#logradouro").removeAttr("readonly");
	}

	if (dados.bairro !== "") {
		document.getElementById("bairro").value = dados.bairro;
		// document.getElementById("bairro").readonly = true;
		$("#bairro").prop("readonly", true);
	} else {
		$("#bairro").removeAttr("readonly");
	}

	return;



}