<?php

/**
 * Error Reporting (TODO: Remover na produção)
 */

ini_set('error_reporting', E_ALL & ~E_NOTICE);
ini_set('display_errors', 1);

/** Impedir acesso direto às páginas */
define('UMDC_VOBPSO_DVYT_T', 1);

/**
 * Definições iniciais de pasta
 */


if (!defined('APP_PATH_BASE')) {
    define('APP_PATH_BASE', $_SERVER['DOCUMENT_ROOT']);
    require_once APP_PATH_BASE . '/includes/defines.php';
}




/**
 * TODO: Implementar Sessão e Segurança 
 * 
 * Implementar segurança com $_SESSION e validação de login, 
 * além scripts anti-injection
 */

// require_once '../util/ApplicationUtil.class.php';

// $post = ApplicationUtil::validaParametro($_POST);
// $get = ApplicationUtil::validaParametro($_GET);
// $request = ApplicationUtil::validaParametro($_REQUEST);

// TODO: Provisório (utilizar $_POST e validar parâmetros)
$request = $_REQUEST;

$include = false;

/** TODO: Implement validação de form actions do request
 * 
 * showForm - para exibição
 * performAction - para executar alguma ação
 * command - para algum comando específico
 * getVariables - para carregar listas
 * 
 */

/**
 * Chamando diretamente o form na página principal do site
 * TODO: Modificar para implementar login na página principal.
 * ou para implementar alguma outra página diferente
 */

if ($include || array_key_exists('p', $request)) {
    if (!file_exists(__DIR__ . "\\$p.php")) {
        $p = 'errorPage';
        $include = false;
    } elseif ($p === 'errorPage') {
        $include = false;
    }
} else {

    $include = true;
    $p = 'form';
}


?>
<!DOCTYPE html>
<html lang="pt-br">

<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="description" content="Formulário de Requisição de Cadastro com Vue.js">
    <meta name="author" content="Kal Carvalho">
    <link rel="icon" href="favicon.ico" />

    <title>Requisição de Cadastro</title>

    <!-- Required Stylesheets -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <link href="public/assets/css/sb-admin-2.css" rel="stylesheet">
    <link href="public/assets/css/forms.css" rel="stylesheet">
    
    <!-- JavaScript -->
    <script 
        src="https://code.jquery.com/jquery-3.6.0.min.js" 
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" 
        crossorigin="anonymous"></script>

    <script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    <script src="vendor/igorescobar/jquery-mask-plugin/dist/jquery.mask.min.js"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.js'></script>

    <script>
        window.console = window.console || function(t) {};
    </script>

    <script>
        if (document.location.search.match(/type=embed/gi)) {
            window.parent.postMessage("resize", "*");
        }
    </script>

    <!--Evita enter-->
    <script type="text/javascript">
        $(document).ready(function() {
            $(window).keydown(function(event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    return false;
                }
            });
        });
    </script>

</head>

<body translate="no">
    <header role="banner" class="col-lg-3">
        <img id="logo-main" src="public/assets/img/logo.png" height="50">
    </header>
<div class="row"></div>
    <?php if ($include) {
        include_once APP_PATH_SRC . "/$p.php";
        exit();
    } ?>

</body>

</html>