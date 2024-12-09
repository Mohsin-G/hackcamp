<?php
// Get the model name from the query parameter
$model = isset($_GET['model']) ? $_GET['model'] : 'bench500pic.splat';

// Now include display.phtml and pass the $model variable
require('views/Display.phtml');
