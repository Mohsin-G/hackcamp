<?php
require_once('models/imageModel.php');

$view = new stdClass();
$view->pageTitle = 'Homepage';

$images = ImageModel::getImages();
require_once('views/index.phtml');
