<?php
require_once('models/imageModel.php');
$images = ImageModel::getImages();
require_once('views/index.phtml');
