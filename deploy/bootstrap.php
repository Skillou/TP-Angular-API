<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$paths = array("/src");
$isDevMode = false;

$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);

$dbParams = array(
    'driver' => 'pdo_pgsql',
    'user' => 'Skillou',
    'password' => 'rayanedu67',
    'dbname' => 'db_tp_skillou',
    'host' => 'localhost',
    'port' => '5432',
);

// $config = Setup::createAnnotationMetadataConfiguration($paths, $isDevMode);

$entityManager = EntityManager::create($dbParams, $config);
