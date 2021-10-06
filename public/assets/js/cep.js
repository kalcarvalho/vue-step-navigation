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


	var num = 0;
	num = (dados.logradouro !== "" && dados.bairro !== "") ? 1 : num;
	if (dados.erro) {
		if (num === 0) {
			alert(objeto.msg);

			//				document.getElementById("logradouro").readonly = true;
			//				document.getElementById("numero").readonly = true;
			//				//document.getElementById("complemento").readonly = true;
			//				document.getElementById("bairro").readonly = true;
			//				document.getElementById("municipio").readonly = true;
			//				document.getElementById("uf").readonly = true;

			if (document.getElementById("uf").value !== "") {
				document.getElementById("uf").value = null;
			}

			if (document.getElementById("municipio").value !== "") {
				document.getElementById("municipio").value = null;
			}

			if (document.getElementById("logradouro").value !== "") {
				document.getElementById("logradouro").value = null;
			}

			if (document.getElementById("bairro").value !== "") {
				document.getElementById("bairro").value = null;
			}

		} else if (num === 1) {

			console.log(objeto.fields);

			//				document.getElementById("logradouro").readonly = false;
			//				document.getElementById("numero").readonly = false;
			//				//document.getElementById("complemento").readonly = false;
			//				document.getElementById("bairro").readonly = false;
			//				document.getElementById("municipio").readonly = false;
			//				document.getElementById("uf").readonly = false;

			if (dados.uf !== "") {
				document.getElementById("uf").value = dados.uf;
				document.getElementById("uf").readonly = true;
			}

			if (dados.localidade !== "") {
				document.getElementById("municipio").value = dados.localidade;
				document.getElementById("municipio").readonly = true;
			}

			if (dados.logradouro !== "") {
				document.getElementById("logradouro").value = dados.logradouro;
				document.getElementById("logradouro").readonly = true;
			}

			if (dados.bairro !== "") {
				document.getElementById("bairro").value = dados.bairro;
				document.getElementById("bairro").readonly = true;
			}

		} else if (num === 2) {
			//				document.getElementById("logradouro").readonly = false;
			//				document.getElementById("numero").readonly = false;
			//				//document.getElementById("complemento").readonly = false;
			//				document.getElementById("bairro").readonly = false;
			//				document.getElementById("municipio").readonly = false;
			//				document.getElementById("uf").readonly = false;

			if (dados.uf !== "") {
				document.getElementById("uf").value = dados.uf;
				document.getElementById("uf").readonly = true;
			}

			if (dados.localidade !== "") {
				document.getElementById("municipio").value = dados.localidade;
				document.getElementById("municipio").readonly = true;
			}
		}
	} else {

		if (document.getElementById("uf").value !== "") {
			document.getElementById("uf").value = null;
		}

		if (document.getElementById("municipio").value !== "") {
			document.getElementById("municipio").value = null;
		}

		if (document.getElementById("logradouro").value !== "") {
			document.getElementById("logradouro").value = null;
		}

		if (document.getElementById("bairro").value !== "") {
			document.getElementById("bairro").value = null;
		}





		if (num === 1) {
			// document.getElementById("logradouro").readonly = false;
			// document.getElementById("numero").readonly = false;
			// document.getElementById("complemento").readonly = false;
			// document.getElementById("bairro").readonly = false;
			// document.getElementById("municipio").readonly = false;
			// document.getElementById("uf").readonly = false;

			//				$("#logradouro").prop("readonly", false);
			//				$("#numero").prop("readonly", false);
			//				//$("#complemento").prop("readonly", false);
			//				$("#bairro").prop("readonly", false);
			//				$("#municipio").prop("readonly", false);
			//				$("#uf").prop("readonly", false);





		}

		if (num === 2) {
			// document.getElementById("logradouro").readonly = false;
			// document.getElementById("numero").readonly = false;
			// document.getElementById("complemento").readonly = false;
			// document.getElementById("bairro").readonly = false;
			// document.getElementById("municipio").readonly = false;
			// document.getElementById("uf").readonly = false;

			//				$("#logradouro").prop("readonly", false);
			//				$("#numero").prop("readonly", false);
			//				//$("#complemento").prop("readonly", false);
			//				$("#bairro").prop("readonly", false);
			//				$("#municipio").prop("readonly", false);
			//				$("#uf").prop("readonly", false);

			if (dados.uf !== "") {
				document.getElementById("uf").value = dados.uf;
				// document.getElementById("uf").readonly = true;
				$("#uf").prop("readonly", true);
			}

			if (dados.localidade !== "") {
				document.getElementById("municipio").value = dados.localidade;
				// document.getElementById("municipio").readonly = true;
				$("#municipio").prop("readonly", true);
			}


		}
	}

}