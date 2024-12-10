<?php
class ImageModel {
    public static function getImages() {
        return [
            [
                'src' => '/images/bottle.jpg',
                'title' => 'Bottle',
                'description' => 'In this project, we have used <strong>50</strong>  pictures.',
                'url' => 'Display.php?model=bottle50pic.splat'
            ],
            [
                'src' => '/images/chair.jpg',
                'title' => 'Chair',
                'description' => 'In this project, we have used <strong>100</strong> pictures.',
                'url' => 'Display.php?model=chair100pic.splat'
            ],
            [
                'src' => '/images/bench.jpg',
                'title' => 'Bench',
                'description' => 'In this project, we have used <strong>500</strong> pictures.',
                'url' => 'Display.php?model=bench500pic.splat'
            ],
        ];
    }
}

