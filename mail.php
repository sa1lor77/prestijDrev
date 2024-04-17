<?php
$result = [];
$errors = [];
// $result['status'] = 1;
// Получение данных в запросе
$data   = json_decode(trim(file_get_contents("php://input")), true);
$result['data'] = $data;

$name = $data["name"];
if(empty($name)) {
  $errors[] = 'name';
} 
// Номер
$phone = $data["number"];
if(empty($phone)) {
  $errors[] = 'number';
} 

// // Проверка на ошибки
if(empty($errors)) {
//   // Отправляем письмо
  $result['status'] = 1;
  // Данные для сообщения
  $from = "admin@prestige-drev.ru"; // Откуда
  $to = 'tellmepls209@mail.ru,1018800@mail.ru'; // Куда (через запятую)
  $message = "Заявка с сайта, Имя: $name, Номер телефона: $phone"; // Текст сообщения
  $siteName = 'Престиж Древ'; // Название сайта
  $siteUrl = 'prestige-drev.ru'; // URL сайта
  // Отправка сообщения
  $headers = array(
    'From: "'.$siteUrl.'" <'.$from.'>' ,
    'Reply-To: "'.$siteUrl.'" <'.$from.'>' ,
    'Content-type: text/html; charset=UTF-8'
);
$headers = implode("\r\n" , $headers);

$to = explode(",",$to);
$message = "Сайт: $siteUrl <br><br>$message";

foreach ($to as $key => $val) {
    mail($val, $theme, $message, $headers);
  }
  } else {
    // Ошибка
    $result['status'] = 0;
    $result['errors'] = $errors;
}

echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
