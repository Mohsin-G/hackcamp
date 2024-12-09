<?php
class ImageModel {
    public static function getImages() {
        return [
            [
                'src' => '/images/bottle.jpg',
                'title' => 'Bottle',
                'description' => 'In this project, we have used 50 pictures.',
                'url' => 'Display.php',


            ],
            [
                'src' => '/images/chair.jpg',
                'title' => 'Chair',
                'description' => 'In this project, we have used 100 pictures.',
                'url' => 'Display.php',
            ],
            [
                'src' => '/images/bench.jpg',
                'title' => 'Bench',
                'description' => 'In this project, we have used 500 pictures.',
                'url' => 'Display.php',

            ],
        ];
    }
}
