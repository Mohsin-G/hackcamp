<?php
class ImageModel {
    public static function getImages() {
        return [
            [
                'src' => '/images/bottle.jpg',
                'title' => 'Model 1: Bottle',
                'description' => '<ul>
                 <li>Dataset of 50 pictures</li>
                 <li>File Size: 1.48MB</li>
                 <li>Maximum distance away from the object: 50cm</li>
                 </ul>',
                'url' => 'Display.php?model=bottle50pic.splat'
            ],
            [
                'src' => '/images/chair.jpg',
                'title' => 'Model 2: Chair',
                'description' =>'<ul>
                 <li>Dataset of 100 pictures</li>
                 <li>File Size: 16.5MB</li>
                 <li>Maximum distance away from the object: 80cm</li>
                 </ul>',
                'url' => 'Display.php?model=chair100pic.splat'
            ],
            [
                'src' => '/images/bench.jpg',
                'title' => 'Model 3: Bench',
                'description' => '<ul>
                 <li>Dataset of 500 pictures</li>
                 <li>File Size: 93.1MB</li>
                 <li>Maximum distance away from the object: 2m</li>
                 </ul>',
                'url' => 'Display.php?model=bench500pic.splat'
            ],
        ];
    }
}

