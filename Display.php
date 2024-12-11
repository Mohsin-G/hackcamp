<?php

$view = new stdClass();
$view->pageTitle = 'Display';

// Get the model name from the query parameter
if (isset($_GET['model'])) {
    $model = $_GET['model'];
}


// Now include display.phtml and pass the $model variable
require('views/Display.phtml');
