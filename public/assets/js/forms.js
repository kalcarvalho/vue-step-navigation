/* global Vue, valor */

Vue.component("step-navigation-step", {
    template: "#step-navigation-step-template",

    props: ["step", "currentstep"],

    computed: {
        indicatorclass() {
            return {
                active: this.step.id === this.currentstep,
                complete: this.currentstep > this.step.id
            };
        }
    }
});

Vue.component("step-navigation", {
    template: "#step-navigation-template",

    props: ["steps", "currentstep"]
});

Vue.component("step", {
    template: "#step-template",

    props: ["step", "stepcount", "currentstep"],

    computed: {
        active() {
            return this.step.id === this.currentstep;
        },

        nextstep() {
            return this.currentstep !== 1;
        },

        firststep() {
            return this.currentstep === 1;
        },

        laststep() {
            return this.currentstep === this.stepcount;
        },

        stepWrapperClass() {
            return {
                active: this.active
            };
        }
    },

    methods: {

        enviar() {

            // enviarEmail();

            doSubmit();

        },

        nextStep() {


            //Step 1
            {
                {
                    if (this.currentstep === 1) {


                        if (($("#nome").val() !== "") === false) {
                            $("#nomeHelp").html("Você deve informar um nome.");
                            return;
                        } else {
                            $("#nomeHelp").html("");
                        }

                        if (($("#nome").val().length >= 3) === false) {
                            $("#nomeHelp").html("Você deve informar um nome com no mínimo 3 caracteres.");
                            return;
                        } else {
                            $("#nomeHelp").html("");
                        }


                        if (($("#cpf").val() !== "" && $("#cpf").val().search(/[0-9]/g) === 0 && $("#cpf").val().length === 14) === false) {
                            $("#cpfHelp").html("Você deve informar um CPF válido.");
                            return;
                        } else {
                            $("#cpfHelp").html("");
                        }


                        if (($("#email").val() !== "" && $("#email").val().search(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/g) !== -1) === false) {
                            $("#emailHelp").html("Você deve informar um email válido");
                            return;
                        } else {
                            $("#emailHelp").html("");
                        }

                        if (($("#emailRepetido").val() !== "" && $("#emailRepetido").val().search(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/g) !== -1) === false) {
                            $("#emailRepetidoHelp").html("Você deve informar um email válido");
                            return;
                        } else {
                            $("#emailRepetidoHelp").html("");
                        }

                        if ($("#email").val() !== $("#emailRepetido").val()) {
                            $("#emailRepetidoHelp").html("O email de confirmação deve ser igual ao email anterior.");
                            return;
                        } else {
                            $("#emailRepetidoHelp").html("");
                        }

                        if (($("#cargo").val() !== "") === false) {
                            $("#cargoHelp").html("Você deve informar um cargo");
                            return;
                        } else {
                            $("#cargoHelp").html("");
                        }


                        this.$emit("step-change", this.currentstep + 1);


                    }
                }
            }

            //Step 2
            {
                {
                    if (this.currentstep === 2) {

                        if (($("#cep").val() !== "") === false) {
                            $("#cepHelp").html("Você deve informar um Cep válido.");
                            return;
                        } else {
                            $("#cepHelp").html("");
                        }

                        if (($("#logradouro").val() !== "" && $("#logradouro").val().search(/[0-9]/g) === -1) === false) {
                            $("#logradouroHelp").html("Você deve informar um logradouro válido.");
                            return;
                        } else {
                            $("#logradouroHelp").html("");
                        }


                        if (($("#numero").val() !== "" && $("#numero").val().search(/[0-9]/g) === 0) === false) {
                            $("#numeroHelp").html("Você deve informar um número válido.");
                            return;
                        } else {
                            $("#numeroHelp").html("");
                        }

                        if (($("#telefone").val() !== "") === false) {
                            $("#telefoneHelp").html("Você deve informar um número de telefone válido.");
                            return;
                        } else {
                            $("#telefoneHelp").html("");
                        }

                        if (($("#bairro").val() !== "" && $("#bairro").val().search(/[0-9]/g) === -1) === false) {
                            $("#bairroHelp").html("Você deve informar um bairro válido.");
                            return;
                        } else {
                            $("#bairroHelp").html("");
                        }


                        if (($("#municipio").val() !== "" && $("#municipio").val().search(/[a-zA-Z]/g) !== -1) === false) {
                            $("#municipioHelp").html("Você deve informar um município válido.");
                            return;
                        } else {
                            $("#municipioHelp").html("");
                        }


                        if (($("#uf").val() !== "" && $("#uf").val().search(/[a-zA-Z]/g) !== -1) === false) {
                            $("#ufHelp").html("Você deve informar uma UF válida.");
                            return;
                        } else {
                            $("#ufHelp").html("");
                        }


                        if (($("#emailInstituicao").val() !== "" && $("#emailInstituicao").val().search(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/g) !== -1) === false) {
                            $("#emailInstituicaoHelp").html("Você deve informar um e-mail válido.");
                            return;
                        } else {
                            $("#emailInstituicaoHelp").html("");
                        }


                        this.$emit("step-change", this.currentstep + 1);
                    }
                }
            }

            

            //Step4
            {
                {

                    if (this.currentstep === 3) {


                        //Atribui os valores do formulario (Informações do Requerente) para os labels no STEP 9
                        $("label#nomePrint").html("<strong>Nome Completo: </strong>" + $('#nome').val());
                        $("label#cpfPrint").html("<strong>CPF: </strong>" + $('#cpf').val());
                        $("label#emailPrint").html("<strong>E-mail: </strong>" + $('#email').val());

                        // Variável endereco armazena a concatenação dos campos para fornecer o endereço completo
                        var _endereco = $('#logradouro').val() + ", " + $('#numero').val() + ", " + $('#complemento').val() + ". " + $('#bairro').val() + ". " +
                            $('#municipio').val() + "-" + $('#uf').val() + ". " + $('#pais').val() + ". CEP: " + $('#cep').val();


                        $("label#enderecoPrint").html("<strong>Endereço: </strong>" + _endereco);
                        $("label#telefonePrint").html("<strong>Telefone: </strong>" + $('#telefone').val());
                        $("label#sitePrint").html("<strong>Site: </strong>" + $('#site').val());
                        $("label#emailInstituicaoPrint").html("<strong>Email: </strong>" + $('#emailInstituicao').val());

                        //Atribui os valores do formulario (Anexo de Arquivos) para os labels no STEP 9
                        $("label#parecerCursoPrint").html("<strong>Documento anexado: </strong>" + $('#autorizacaoAtualizado').val().split("\\").pop() + '<i class="fa fa-check" aria-hidden="true"></i>');


                        //Validação dos anexos STEP 8
                        if (($("#autorizacaoAtualizado").val() !== "") === false) {
                            $("#autorizacaoAtualizadoHelp").html("Você deve informar uma arquivo pdf.");
                            return;
                        } else {
                            $("#autorizacaoAtualizadoHelp").html("");
                            this.$emit("step-change", this.currentstep + 1);
                        }

                    }

                }
            }

            { //Step 4
                {

                    if (this.currentstep === 4) {
                        this.$emit("step-change", this.currentstep + 1);
                    }
                }
            }

            { //Step 5
                {

                    if (this.currentstep === 5) {
                        this.$emit("step-change", this.currentstep + 1);
                    }
                }
            }

        },


        //Step10 resumo das informações
        lastStep() {

            this.$emit("step-change", this.currentstep - 1);
        }
    }
});




new Vue({
    el: "#app",

    data: {
        currentstep: 1,

        steps: [
            {
                id: 1,
                title: "Pessoal",
                icon_class: "fa fa-address-card"
            },
            {
                id: 2,
                title: "Contato",
                icon_class: "fa fa-address-book"
            },
            {
                id: 3,
                title: "Anexos",
                icon_class: "fa fa-paperclip"
            },
            {
                id: 4,
                title: "Confirmação de Dados",
                icon_class: " fa fa-check-square-o"
            },
            {
                id: 5,
                title: "Enviar",
                icon_class: "fa fa-paper-plane"
            }
        ]
    },

    mounted: function () {
        console.log("mounted");

    },

    methods: {
        stepChanged(step) {
            this.currentstep = step;
        },

        doSubmit() {
            console.log("************************* SUBMIT *************************");
            console.log($("#requisicaoCadastroForm").serialize());
        }
    }
});

/****************** FIM DO VUEJS *********************/

function doSubmit() {
    /***
     * TODO: Implementar doSubmit para gravação de dados.
     */
    console.log("** doSubmit() ***");

    var url = "index.php";
    var msg = "";

    $("form#requisicaoCadastroForm").prop('noValidate', true);

    console.log($("#requisicaoCadastroForm").serialize());
    //    console.log($("input#performAction").val());

    $.post('index.php', $("#requisicaoCadastroForm").serialize(), function (data) {

        console.log(data);

        if (data) {
            redirectUrl("index.php?showForm=sucesso", msg);
        } else {
            redirectUrl("index.php?showForm=errorPage", msg);
        }

    }, "json");
}

function redirectUrl(url, msg) {

    var form = $('<form action="' + url + '" method="post">' +
        '<input type="hidden" name="msg" value="' + msg + '" />' +
        '</form>');

    $('body').append(form);
    form.submit();


};

var valor = 0;
var valores = [];



//Função para a impressão do STEP 4
$("#impressao").on("click", function () {
    window.print();
});


$("#preencher").on("click", function () {
    //  document.getElementById('preencher').addEventListener("click",
    //  function () {
    wForms = document.forms.length;
    for (x = 0; x <= wForms - 1; x++) {
        wElems = document.forms[x].elements.length;
        for (i = 0; i <= wElems - 1; i++) {
            wElement = document.forms[x].elements[i];

            wType = wElement.getAttribute("type");
            wName = wElement.getAttribute("name");
            if (wType == "text" || wType == "password" || wType == "url") {
                wElement.value = wName;
            }
            if (wType == "email") {
                wElement.value = "exemplo@server.com";
            }
            if (wType == "radio" || wType == "checkbox") {
                wElement.click();
            }
            if (wType == "datepicker") {
                wElement.value = "21/01/1978";
            }
            if (wType == "tel") {
                wElement.value = "(21)00000-0000";
            }
            if (wName == "numero" || wName == "numeroAto" || wName == "pagina" || wName == "numeroCurso" || wName == "paginaCurso" || wName == "numeroEspecialidade" || wName == "paginaEspecialidade") {
                wElement.value = "123";
            }
            if(wName === "logradouro") {
                wElement.value = "";
            } 
            if(wName === "pais") {
                wElement.value = "Brasil";
            } 
            if (wName == "selectAto" || wName == "selectDocumento" || wName == "selectDiario" || wName == "select" || wName == "selectCurso" || wName == "selectDocumentoCurso" || wName == "selectDiarioCurso"
                || wName == "selectAtoEspecialidade" || wName == "selectDocumentoEspecialidade" || wName == "selectDiarioEspecialidade") {
                wElement.value = 2;
            }
            if (wName == "cpf") {
                wElement.value = "335.791.504-99";
            }
            if (wName == "cnpj" || wName == "cnpjMantenedora") {
                wElement.value = "87.956.685/0001-22";
            }
            if (wName == "cep") {
                wElement.value = "28613-001";
            }
            // }
        }
    }


});

function $id(id) {
    return document.getElementById(id);
}

function OpenModalBox(header, inner, bottom) {
    var modalbox = $('#modalbox');
    modalbox.find('.modal-header-name span').html(header);
    modalbox.find('.devoops-modal-inner').html(inner);
    modalbox.find('.devoops-modal-bottom').html(bottom);
    modalbox.fadeIn('fast');
    $('body').addClass("body-expanded");
}
//
//  Close modalbox
//
//
function CloseModalBox() {
    var modalbox = $('#modalbox');
    modalbox.fadeOut('fast', function () {
        modalbox.find('.modal-header-name span').children().remove();
        modalbox.find('.devoops-modal-inner').children().remove();
        modalbox.find('.devoops-modal-bottom').children().remove();
        $('body').removeClass("body-expanded");
    });
}



function FileSelectHandler(e) {

    console.log(e);

    // cancel event and hover styling
    // FileDragHover(e);

    // fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // process all File objects
    //    for (var i = 0, f; f = files[i]; ++i) {
    //        console.log(i);
    //        //ParseFile(f);
    //        UploadFile(f);
    //    }

}


//function ParseFile(file) {
//    // display an image
//    if (file.size > $id("MAX_FILE_SIZE").value)
//        return;
//    if (file.type.indexOf("image") == 0) {
//        var reader = new FileReader();
//        reader.onload = function (e) {
//            var w = $(".devoops-modal").width();
//            $("#messages").html(
//                    "<p><strong>" + file.name + ":</strong><br />" +
//                    '<img src="' + e.target.result + '" / width="' + w / 2 + '"></p>'
//                    );
//        }
//        reader.readAsDataURL(file);
//    }
//}


function UploadFile(file) {

    var params = $("#formUpload").serialize();
    var tipoDocumento = jQuery('input[name="tipoDocumento"]').val();

    $("#fileSendHelp").html('Anexar arquivo até 1024 KBytes.');



    // following line is not necessary: prevents running on SitePoint servers
    //if (location.host.indexOf("sitepointstatic") >= 0) return;

    console.log("** Upload de arquivo **");
    console.log($("#formUpload").serialize());

    var xhr = new XMLHttpRequest();

    if (xhr.upload && (file.type == "image/jpeg" || file.type == "application/pdf" || file.type == "image/png") && file.size <= $id("MAX_FILE_SIZE").value) {

        // create progress bar
        var o = $id("progress");
        var progress = o.appendChild(document.createElement("p"));
        progress.appendChild(document.createTextNode("upload " + file.name));



        // progress bar
        xhr.upload.addEventListener("progress", function (e) {
            var pc = parseInt(100 - (e.loaded / e.total * 100));

            $("#progress p").addClass("progress");
            $("#progress p").html(parseInt((e.loaded / e.total * 100)) + "%");
            progress.style.backgroundPosition = pc + "%";
        }, false);

        // file received/failed
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                progress.className = (xhr.status == 200 ? "success" : "failure");
                console.log(xhr.responseText);

                data = JSON.parse(xhr.responseText);

                console.log(data);

                if (data.foto !== false) {
                    console.log("****");
                    $('button#event_submit').prop('disabled', false);
                    $('input:hidden[name=foto]').val(data.foto);
                    $('input#fileSend.form-control-file').prop('disabled', true);
                    $("#requisicaoCadastroForm").append('<input type="hidden" name="' + data.tipoDocumento + '" value="' + data.foto + '" />');
                }

            }
        };

        // start upload
        console.log("*** Form Upload ***");

        xhr.open("POST", "index.php?" + params, true);
        xhr.setRequestHeader("X_FILENAME", file.name);
        xhr.send(file);


    } else {

        $("#fileSendHelp").html('<i class="fas fa-exclamation-triangle px-3" style="color: #f00;"></i>Por favor, adicione um arquivo PDF com até 1024 KBytes.', MSG_STYLE.IMPORTANT);
    }

}


var MSG_STYLE = {
    NONE: 0,
    INFO: 1,
    IMPORTANT: 2,
    ERROR: 3
};

function showMessage(texto, MSG_STYLE) {
    $("p.message").html('<i class="fas fa-exclamation-triangle px-3" style="color: #f00;"></i>' + texto);
    $("#modalMensagem").modal({ backdrop: 'static' });

    $('#event_close').on('click', function () {

        console.log("** Fechar **");

    });
}


$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            return false;
        }
    });

    $("form#requisicaoCadastroForm").submit(function () {
        return false;
    });

    // createFormAdicionar("fileAto", "Ato da Instituição de Ensino");
    // createFormAdicionar("fileAutorizacao", "Ato da Autorização do Curso de Enfermagem");
    // createFormAdicionar("fileDiploma", "Modelo de Diploma");
    // createFormExcluir("fileAto", "Ato da Instituição de Ensino");
    // createFormExcluir("fileAutorizacao", "Ato da Autorização do Curso de Enfermagem");
    // createFormExcluir("fileDiploma", "Modelo de Diploma");
});

$("#abrir").on("click", function () {
    $("#myModal").modal({ backdrop: 'static' });


});