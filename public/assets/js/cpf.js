// Formata o CPF A cada tecla digitada
$("#cpf").keypress(function(){
	
	$("#cpf").mask("999.999.999-99");

});

// Valida o CNPJ A cada tecla digitada
$(".cnpj").keypress(function(){
	
	
	$(".cnpj").mask("99.999.999/9999-99");
	
});



// Valida o CEP A cada tecla digitada
$("#cep").keypress(function(){
	
	
	$("#cep").mask("99999-999");
	
});


$(".data").keypress(function(){
	
	$(".data").mask("99/99/9999");

});

$("#telefone").keypress(function(){
	
	
	$("#telefone").mask("(99)99999-9999");
	
});


//Quando perde o foco
$("#cpf").focusout(function(){	

	var cpf = $("#cpf").val();
	
	cpf = cpf.replace(/[^0-9]/g,'');
	
	
	var texto ;
	
        
	texto  = validarCPF(cpf) ? "" : "Você deve informar um número de CPF válido.";
	
	if(cpf === "" || cpf === null){
		texto = "";
	}
	
	//$("#teste1").val(texto);
	document.getElementById("cpfHelp").value = texto;
	document.getElementById("cpfHelp").innerHTML =  texto;
});

//Quando perde o foco
$("#cnpj").focusout(function(){	

	var cnpj = $("#cnpj").val();
	
	cnpj = cnpj.replace(/[^0-9]/g,'');
	
	
	var texto = validarCNPJ(cnpj) ? "" : "*001-Você deve informar um número de CNPJ válido.";
        
        console.log(cnpj);
        console.log(texto);
	
	if(cnpj === "" || cnpj === null){
		texto = "";
	}
	//$("#teste2").val(texto);
	document.getElementById("cnpjHelp").value = texto;
	document.getElementById("cnpjHelp").innerHTML =  texto;
        
});

//Quando perde o foco
$("#cnpjMantenedora").focusout(function(){	

	var cnpj = $("#cnpjMantenedora").val();
	
	cnpj = cnpj.replace(/[^0-9]/g,'');
	
	
	var texto;
	


	texto  = validarCNPJ(cnpj) ? "" : "*002-Você deve informar um número de CNPJ válido.";
	
	if(cnpj === "" || cnpj === null){
		texto = "";
	}
	//$("#teste2").val(texto);
	document.getElementById("cnpjMantenedoraHelp").value = texto;
	document.getElementById("cnpjMantenedoraHelp").innerHTML =  texto;
});

//Quando perde o foco
$("#email").focusout(function(){	

	var email = $("#email").val();
	
	email = email.replace(/[^a-z0-9._%+-]+@[^a-z0-9.-]+\.[^a-z]{3}/g,'');
	
	
	var texto;


	texto  = checkMail(email) ? "" : "Informe um E-mail válido.";
	
	if(email === "" || email === null){
		texto = "";
	}
	document.getElementById("emailHelp").value = texto;
	document.getElementById("emailHelp").innerHTML =  texto;
});

//Quando perde o foco
$("#emailRepetido").focusout(function(){	

	var email = $("#emailRepetido").val();
	
	email = email.replace(/[^a-z0-9._%+-]+@[^a-z0-9.-]+\.[^a-z]{3}/g,'');
	
	
	var texto;
	
	texto  = checkMail(email) ? "" : "E-mail informado não corresponde com o anterior.";
	
	if(email === "" || email === null){
		texto = "";
	}
	document.getElementById("emailRepetidoHelp").value = texto;
	document.getElementById("emailRepetidoHelp").innerHTML = texto;
});

//Quando perde o foco
$("#emailInstituicao").focusout(function(){	

	var email = $("#emailInstituicao").val();
	
	email = email.replace(/[^a-z0-9._%+-]+@[^a-z0-9.-]/g,'');
	
	
	var texto;
	
	console.log("focusout",email);


	texto  = checkMail(email) ? "" : "Informe um E-mail válido.";
	
	if(email === "" || email === null){
		texto = "";
	}
	document.getElementById("emailInstituicaoHelp").value = texto;
	document.getElementById("emailInstituicaoHelp").innerHTML =  texto;
});


function checkMail(mail){
	var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
	if(typeof(mail) === "string"){
		if(er.test(mail)){
			console.log("aprovado");
			return true;
		}
		else{
		console.log("reprovado");
		return false;
		}
	}
	else if(typeof(mail) === "object"){
		if(er.test(mail.value)){
		console.log("aprovado");
		return true;
		}
	}else{
		console.log("reprovado");
		return false;
	}
}


function validarCPF(cpf) {
	
	var Soma;
	var Resto;
	Soma = 0;

	if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || 
		cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || 
		cpf == "88888888888" || cpf == "99999999999") return false;

	for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11))  Resto = 0;
	if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

	Soma = 0;
		
	for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
	Resto = (Soma * 10) % 11;

	if ((Resto == 10) || (Resto == 11))  Resto = 0;
	if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
	return true;
}

function validarCNPJ(cnpj) {

	
	if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || 
		cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || 
		cnpj == "88888888888888" || cnpj == "99999999999999") return false;
		
		
	// Valida DVs
	tamanho = cnpj.length - 2
	numeros = cnpj.substring(0,tamanho);
	digitos = cnpj.substring(tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (i = tamanho; i >= 1; i--) {
	  soma += numeros.charAt(tamanho - i) * pos--;
	  if (pos < 2)
			pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(0))
		return false;
		 
	tamanho = tamanho + 1;
	numeros = cnpj.substring(0,tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (i = tamanho; i >= 1; i--) {
	  soma += numeros.charAt(tamanho - i) * pos--;
	  if (pos < 2)
			pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(1))
		  return false;
		   
	return true;


}