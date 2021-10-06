<?php

/** Impedir acesso direto à página */
defined('UMDC_VOBPSO_DVYT_T') or die('Acesso Restrito');

$nivel = $_REQUEST['nivel'];

?>
<div class="row">
    <div class="col"></div>
    <button type="button" id="preencher" class="btn btn-danger"> Preencher Dados para Teste</button>
    <div class="col"></div>
</div>
<div id="wrapper">


    <form method="POST" action="" id="formulario">
        <div class="container">
            <h1 style="padding: 20px 0px; text-align: center;">Preenchimento do Cadastro</h1>
            <div id="app">
                <!--<div class="table-responsive">-->
                <step-navigation :steps="steps" :currentstep="currentstep">
                </step-navigation>


                <!-- STEP 1 -->
                <div id="step1" v-show="currentstep == 1">
                    <h4>Informações Pessoais</h4>


                    <div class="form-group">
                        <label for="nome">Nome Completo:</label>
                        <input type="text" name="nome" id="nome" class="form-control" aria-describedby="nomeHelp" placeholder="Nome completo" required="" />
                        <small id="nomeHelp" class="form-text text-danger"></small>
                    </div>

                    <div class="form-group">
                        <label for="cpf">CPF:</label>
                        <input type="text" name="cpf" id="cpf" class="form-control" aria-describedby="cpfHelp" placeholder="CPF" required="" data-validator="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}$" title="Digite o CPF no formato 000.000.000-00" maxlength="14" />
                        <small class="text-danger" id="cpfHelp"></small>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail:</label>
                        <input type="email" name="email" id="email" class="form-control" aria-describedby="emailHelp" placeholder="Insira o e-mail" required="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z.-]{3,9}$" />
                        <small class="text-danger" id="emailHelp"></small>
                    </div>
                    <div class="form-group">
                        <label for="emailRepetido">Confirmar E-mail:</label>
                        <input type="email" name="emailRepetido" id="emailRepetido" class="form-control" aria-describedby="emailRepetidoHelp" placeholder="Repita o e-mail" required="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z.-]{3,9}$" />
                        <small class="text-danger" id="emailRepetidoHelp"></small>
                    </div>

                </div>

                <!-- STEP 2 -->
                <div v-show="currentstep == 2">
                    <h4>Dados de contato</h4>
                    <div class="row">
                        <div class="form-group col-md-2">
                            <label for="cep">CEP</label>
                            <input type="text" name="cep" id="cep" onkeypress="verificarCep(document.getElementById('cep').value)" class="form-control" aria-describedby="cepHelp" placeholder="CEP" required="" pattern="\d{5}-\d{3}$" title="Digite o CEP no formato 00000-000" maxlength="9">
                            <small id="cepHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-md-10">
                            <label for="instituicaoEnsino">Logradouro</label>
                            <input type="text" name="logradouro" id="logradouro" class="form-control" aria-describedby="logradouroHelp" placeholder="Endereço" required="" pattern="[a-zA-ZÀ-ú\s'-]+$" readonly/>
                            <small id="logradouroHelp" class="form-text text-danger"></small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-2">
                            <label for="numero">Número</label>
                            <input type="text" name="numero" id="numero" class="form-control" aria-describedby="numeroHelp" placeholder="Número" required />
                            <small id="numeroHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="complemento">Complemento <span class="text-danger">(Opcional)</span></label>
                            <input type="text" name="complemento" id="complemento" class="form-control" aria-describedby="complementoHelp" placeholder="Complemento do endereço" pattern="[a-zA-ZÀ-ú\s'-]+$" />
                            <small id="complementoHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="bairro">Bairro</label>
                            <input type="text" name="bairro" id="bairro" class="form-control" aria-describedby="bairroHelp" placeholder="Bairro" required="" pattern="[a-zA-ZÀ-ú\s'./-]+$" readonly />
                            <small id="bairroHelp" class="form-text text-danger"></small>
                        </div>

                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="municipio">Município</label>
                            <input type="text" name="municipio" id="municipio" class="form-control" aria-describedby="municipioHelp" placeholder="Município" required="" pattern="[a-zA-ZÀ-ú\s'-]+$" readonly />
                            <small id="municipioHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="uf">UF</label>
                            <input type="text" name="uf" id="uf" class="form-control" aria-describedby="ufHelp" placeholder="UF" required="" pattern="[a-zA-Z\s]+$" maxlength="2" readonly />
                            <small id="ufHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="pais">País</label>
                            <input type="text" name="pais" id="pais" class="form-control" aria-describedby="paisHelp" placeholder="País" required="" value="Brasil" pattern="[a-zA-ZÀ-ú\s]+$" readonly />
                            <small id="paisHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="telefone">Telefone</label>
                            <input type="tel" name="telefone" id="telefone" class="form-control" aria-describedby="telefoneHelp" placeholder="Telefone comercial" required="" pattern="^\(d{2}\)d{5}-\d{4}$" title="Digite o telefone no formato (00)00000-0000" maxlength="13" />
                            <small id="paisHelp" class="form-text text-danger"></small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="site">Site <span class="text-danger">(Opcional)</span></label>
                            <input type="url" name="site" id="site" class="form-control" aria-describedby="siteHelp" placeholder="Site">
                            <small id="siteHelp" class="form-text text-danger"></small>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="emailInstituicao">E-mail</label>
                            <input type="email" name="emailInstituicao" id="emailInstituicao" class="form-control" aria-describedby="emailInstituicaoHelp" placeholder="Email instituicional" required="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z.-]{3,9}$" />
                            <small id="emailInstituicaoHelp" class="text-danger"></small>
                        </div>
                    </div>
                </div>


                <!-- STEP 3 -->
                <div v-show="currentstep == 3">
                    <h4>Anexo de arquivos</h4>


                    <div class="form-group">
                        <label class="col-sm-6 control-label"> <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Documento </label>
                        <div class="col-sm-6 was-validated">
                            <input type="file" class="form-control" id="autorizacaoAtualizado" aria-describedby="fileAtoAutorizacaoHelp" accept="application/pdf" required>
                            <small id="autorizacaoAtualizadoHelp" class="text-danger"></small>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="textarea">Observações:</label>
                        <textarea class="form-control" name="textarea" rows="4"></textarea>
                    </div>


                </div>

                <!-- STEP 4 -->
                <div v-show="currentstep == 4">

                    <h4> Confirmaçao De Dados </h4>
                    <!-- CONFIRMAÇÃO DE DADOS 1-->
                    <fieldset class="scheduler-border">
                        <legend class="scheduler-border">Informações pessoais e de contato</legend>
                        <div>
                            <label id="nomePrint" class="labelPrint"></label>
                        </div>
                        <div>
                            <label id="cpfPrint" class="labelPrint"></label>
                            <label id="emailPrint" class="labelPrint"></label>
                        </div>
                    </fieldset>




                    <!-- CONFIRMAÇÃO DE DADOS 2 -->
                    <fieldset class="scheduler-border">
                        <legend class="scheduler-border">Dados de Endereçamento</legend>
                        <div>
                            <label id="enderecoPrint" class="labelPrint"></label>
                        </div>
                        <div>
                            <label id="telefonePrint" class="labelPrint"></label>
                            <label id="emailInstituicaoPrint" class="labelPrint"></label>
                            <label id="sitePrint" class="labelPrint"></label>
                        </div>
                    </fieldset>


                    <!-- CONFIRMAÇÃO DE DADOS 6 -->
                    <fieldset class="scheduler-border">
                        <legend class="scheduler-border">Dados do Contrato</legend>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet tempus lectus. Curabitur feugiat tortor nec lacus tempor, nec consequat sapien malesuada. Maecenas nibh nunc, viverra quis cursus non, semper fermentum est. Suspendisse dapibus euismod enim. Nullam in aliquam velit. Mauris at rutrum nulla. Fusce mi libero, iaculis hendrerit risus at, placerat imperdiet enim. Maecenas in tincidunt mauris, id tempus leo. Nam nunc augue, suscipit in pulvinar et, vehicula ac arcu. Donec sodales id elit vel cursus. Nam faucibus nisl non nisi tristique, sit amet porttitor nibh interdum. In hac habitasse platea dictumst. Proin non dolor nec urna faucibus dignissim at nec enim. Proin scelerisque eget mi non tempus. Vivamus tempus ipsum enim, sit amet condimentum elit sodales vitae. Aliquam luctus tempus volutpat.</p>
                            <p>Nulla facilisis mi vitae vulputate eleifend. Aliquam erat volutpat. Ut vitae fringilla arcu. Duis egestas ultrices viverra. Ut eget enim enim. Fusce venenatis tellus ultrices tellus tempus consectetur. Quisque luctus arcu nec dolor pellentesque, eget venenatis nunc pharetra. Praesent lacinia eros risus, vel porta ante vestibulum sed. Vivamus ut rhoncus orci. Praesent sagittis, neque eget convallis ultricies, velit ante suscipit orci, eget iaculis nisl lorem quis augue. Etiam ut fermentum ligula, nec cursus turpis. Phasellus lacinia eu dui ac egestas. Sed volutpat molestie semper.</p>
                            <p>Ut eu mi molestie, efficitur metus sit amet, posuere arcu. Cras non nibh magna. Integer malesuada luctus diam ac tempor. Phasellus a eleifend urna. Curabitur aliquet in diam quis lacinia. Nulla porta tincidunt elit, sagittis suscipit erat rhoncus eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac erat nibh. Phasellus vulputate imperdiet molestie. Nunc lorem mauris, scelerisque vel pulvinar et, varius laoreet mi. Nullam consequat efficitur ante, in fringilla purus volutpat non. Maecenas ultrices vitae quam vel tempor. Phasellus a tortor mauris. Curabitur vehicula augue tincidunt, dapibus massa non, feugiat nibh. Praesent in auctor nulla.</p>
                            <p>Nam a venenatis quam, sit amet rutrum tellus. Suspendisse tristique convallis condimentum. Maecenas congue euismod tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In fermentum quis est id lacinia. Nulla facilisi. Nulla consequat, erat at euismod fringilla, nunc ex scelerisque dolor, a efficitur erat nibh nec ipsum. Maecenas sed lectus eu mi eleifend porta at vitae dolor. Mauris imperdiet feugiat lectus, eget rutrum arcu elementum eu. Praesent vel lacus tincidunt, placerat sapien sed, elementum metus. Donec eu risus libero.</p>
                            <p>Donec ultricies volutpat neque scelerisque aliquam. Integer quam mauris, porttitor quis efficitur id, ornare id ipsum. Phasellus eu ex sed lacus rutrum sagittis. Sed mauris augue, lobortis eget neque convallis, lobortis vehicula leo. Pellentesque aliquet tristique iaculis. Nulla facilisi. Etiam rutrum id orci at euismod. Fusce cursus aliquam vehicula. Pellentesque posuere turpis ut massa porta tristique. Ut ligula enim, sodales non ornare a, euismod at orci.</p>

                        </div>

                        <div>
                            <label id="cnpjMantenedoraPrint" class="labelPrint"></label>
                        </div>
                    </fieldset>


                    <!-- CONFIRMAÇÃO DE DADOS 7 -->
                    <fieldset class="scheduler-border">
                        <legend class="scheduler-border">Anexo de Arquivos</legend>
                        <div>
                            <label id="parecerCursoPrint" class="labelPrint"></label>
                        </div>
                        <div>
                            <label id="diplomaPrint" class="labelPrint"></label>
                        </div>
                        <div>
                            <label id="historicoPrint" class="labelPrint"></label>
                        </div>
                        <div>
                            <label id="listagemDocentePrint" class="labelPrint"></label>
                        </div>
                        <div>
                            <label id="listagemTecnicoPrint" class="labelPrint"></label>
                        </div>
                        <div>
                            <label id="PlanoCursoPrint" class="labelPrint"></label>
                        </div>
                        <div>
                            <label id="fichaAssinaturaPrint" class="labelPrint"></label>
                        </div>
                    </fieldset>

                    <button type="button" id="impressao" class="btn btn-dark"><i class="fa fa-print" aria-hidden="true"></i>
                        Imprimir
                    </button>
                </div>
                <div v-show="currentstep == 5">

                    <h4> Enviar os Dados </h4>


                </div>




                <step v-for="step in steps" :currentstep="currentstep" :key="step.id" :step="step" :stepcount="steps.length" @step-change="stepChanged">
                </step>
                <script type="x-template" id="step-navigation-template">
                    <ol class="step-indicator">
							<li v-for="step in steps" is="step-navigation-step" :key="step.id" :step="step" :currentstep="currentstep">
							</li>
						</ol>
					</script>
                <script type="x-template" id="step-navigation-step-template">
                    <li :class="indicatorclass">
							<div class="step"><i :class="step.icon_class"></i></div>
							<div class="caption hidden-xs hidden-sm">Step <span v-text="step.id"></span>: <span v-text="step.title"></span></div>
						</li>
					</script>
                <script type="x-template" id="step-template">
                    <div class="step-wrapper" :class="stepWrapperClass">
							<button type="button" class="btn btn-primary" @click="lastStep" :disabled="firststep">
								Voltar
							</button>
							<button type="button" class="btn btn-primary" @click="nextStep" :disabled="laststep">
								Próxima
							</button>
							<button type="submit" class="btn btn-primary" v-if="laststep">
								Enviar
							</button>
                                                      
                                                   
						</div>
					</script>
            </div>
        </div>
    </form>
</div>

<script src='/public/assets/js/forms.js'></script>
<script src='/public/assets/js/cep.js'></script>
<script src='/public/assets/js/cpf.js'></script>