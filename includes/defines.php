<?php

/** Impedir acesso direto à página */
defined('UMDC_VOBPSO_DVYT_T') or die('Acesso Restrito');

/** Global definitions */

$parts = explode(DIRECTORY_SEPARATOR, APP_PATH_BASE);

// Path definitions
define('APP_PATH_ROOT', implode(DIRECTORY_SEPARATOR, $parts));
define('APP_PATH_DOMAIN', APP_PATH_ROOT . '/domain');
define('APP_PATH_PERSISTENCE', APP_PATH_ROOT . '/persistence');
define('APP_PATH_SESSION', APP_PATH_ROOT . '/session');
define('APP_PATH_FACTORY', APP_PATH_ROOT . '/factory');
define('APP_PATH_CONFIGURATION', APP_PATH_ROOT . '/config');
define('APP_PATH_CONTROLLER', APP_PATH_ROOT . '/controller');
define('APP_PATH_COMMAND', APP_PATH_ROOT . '/command');
define('APP_PATH_FACADE', APP_PATH_ROOT . '/facade');
define('APP_PATH_VIEW', APP_PATH_ROOT . '/view');
define('APP_PATH_PAGES', APP_PATH_ROOT . '/pages');
define('APP_PATH_UTIL', APP_PATH_ROOT . '/util');
define('APP_PATH_LOG', APP_PATH_ROOT . '/log');
define('APP_PATH_SRC', APP_PATH_ROOT . '/src');

// Request Parameters and variables
define('REQUEST_PARAMETER_ACTION', 'action');
define('REQUEST_PARAMETER_COMMAND', 'command');
define('REQUEST_USUARIO_LOGIN', 'login');
define('REQUEST_USUARIO_SENHA', 'senha');
define('REQUEST_APPLICATION_ID', 'sistema_id');
define('USER_SESSION', 'user_session');

// Commands
define('LISTAR_LOCALEVENTO_COMMAND_VIEW', 'listar_local_evento_command');
define('LISTAR_OPERACAO_COMMAND_VIEW', 'listar_operacao_command');
define('LISTAR_MENU_PERFIL_COMMAND_VIEW', 'listar_menu_perfil_command');
define('LISTAR_REQUISICAO_CADASTRO_COMMAND_VIEW', 'listar_requisicao_cadastro_command');
define('LISTAR_AGENDAMENTO_COMMAND_VIEW', 'listar_agendamento_command');

// Page definitions
define('PAGE_LOGIN', 'login');
define('PAGE_DASHBOARD', 'dashboard');

// Message definitions
define('MESSAGE_LOGIN_ERROR', 'O email ou a senha informados estão inválidos. Por favor, verifique.');

?>