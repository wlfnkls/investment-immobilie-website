<?php

$error = array();

// FIRSTNAME
if (empty($_POST["firstname"])) {
  $error[] = "Vorname darf nicht leer sein!";
} else {
    $firstname = $_POST["firstname"];
}

// LASTNAME
if (empty($_POST["lastname"])) {
  $error[] = "Nachname darf nicht leer sein!";
} else {
  $lastname = $_POST["lastname"];
}

// COMPANY
if (!empty($_POST["company"])) {
  $company = $_POST["company"];
}

// STREET
if (!empty($_POST["street"])) {
  $street = $_POST["street"];
}

// LOCATION
if (!empty($_POST["location"])) {
  $location = $_POST["location"];
}

// EMAIL
if (empty($_POST["email"]) OR !filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL)) {
  $error[] = "Email darf nicht leer sein oder ist falsch formatiert!";
} else {
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
}

// REQUEST
if (empty($_POST["request"])) {
  $error[] = "Anfragegrund darf nicht leer sein!";
} else {
  $request = $_POST["request"];
}

// OBJECT
if (empty($_POST["object"])) {
  $error[] = "Betreff darf nicht leer sein!";
} else {
  $object = $_POST["object"];
}

// MESSAGE
if (empty($_POST["messege"])) {
  $error[] = "Nachricht darf nicht leer sein!";
} else {
    $message = $_POST["messege"];
}

// DSGVO
if (empty($_POST["dsgvo"]) OR !isset($_POST["dsgvo"])) {
  $error[] = "Sie müssen den Datenschutzbestimmungen zustimmen!";
} else {
  $dsgvo = $_POST["dsgvo"];
}

//Add your email here
// $EmailTo = "niklas.schellhoeh@gmail.com";
$EmailTo = "kontakt@investment-immobilie.net";
$Subject = "Neue Anfrage";
$SubjectCopy = "Ihre Anfrage an INVESTMENT-IMMOBILIE";
$headers = "From: Investment-Immobilie <kontakt@investment-immobilie.net>\r\n";
$headers .= "Content-type: text/html";

// prepare email body text
if(empty($error)) {
  $BodyHead = "<!DOCTYPE html lang='de'><head><meta charset='UTF-8' /></head><html><body style='font-size:16px;'>";
  $BodyImg = "<img src='https://drive.google.com/uc?export=view&id=1wAIJ8fVkux5vewMFAyHFXEO35KRzYtSZ' alt='Logo' title='Logo' style='display:block' width='250' height='auto' />";
  $Body .= $BodyHead;
  $Body .= "<br />";
  $Body .= $BodyImg;
  $Body .= "<br />";
  $Body .= "<br />";
  $Body .= "<strong>Name: </strong>";
  $Body .= $lastname.", ".$firstname;
  $Body .= "<br />";
  $Body .= "<strong>Firma: </strong>";
  $Body .= $company;
  $Body .= "<br />";
  $Body .= "<strong>Straße und Hausnummer: </strong>";
  $Body .= $street;
  $Body .= "<br />";
  $Body .= "<strong>PLZ und Ort: </strong>";
  $Body .= $location;
  $Body .= "<br />";
  $Body .= "<strong>Email: </strong>";
  $Body .= $email;
  $Body .= "<br />";
  $Body .= "<strong>Anfrage: </strong>";
  $Body .= $request;
  $Body .= "<br />";
  $Body .= "<br />";
  $Body .= "<strong>".$object."</strong>";
  $Body .= "<br />";
  $Body .= $message;
  $Body .= "<br />";
  $Body .= '</body></html>';


  $BodyCopy .= $BodyHead;
  $BodyCopy .= "<br />";
  $BodyCopy .= $BodyImg;
  $BodyCopy .= "<br />";
  $BodyCopy .= "<br />";
  $BodyCopy .= "<strong>Hallo ".$firstname." ".$lastname.",</strong>";
  $BodyCopy .= "<br />";
  $BodyCopy .= "<br />";
  $BodyCopy .= "Ihre Anfrage hat uns erreicht!";
  $BodyCopy .= "<br />";
  $BodyCopy .= "Hier eine Kopie Ihrer Anfrage";
  $BodyCopy .= "<br />";
  $BodyCopy .= "~~~~~~~~~~~~~~~~~~~~~~~~~~~";
  $BodyCopy .= "<br />";
  $BodyCopy .= "<br />";
  $BodyCopy .= "<strong>Name: </strong>";
  $BodyCopy .= $lastname.", ".$firstname;
  $BodyCopy .= "<br />";
  $BodyCopy .= "<strong>Firma: </strong>";
  $BodyCopy .= $company;
  $BodyCopy .= "<br />";
  $BodyCopy .= "<strong>Straße und Hausnummer: </strong>";
  $BodyCopy .= $street;
  $BodyCopy .= "<br />";
  $BodyCopy .= "<strong>PLZ und Ort: </strong>";
  $BodyCopy .= $location;
  $BodyCopy .= "<br />";
  $BodyCopy .= "<strong>Email: </strong>";
  $BodyCopy .= $email;
  $BodyCopy .= "<br />";
  $BodyCopy .= "<strong>Anfrage: </strong>";
  $BodyCopy .= $request;
  $BodyCopy .= "<br />";
  $BodyCopy .= "<br />";
  $BodyCopy .= "<strong>".$object."</strong>";
  $BodyCopy .= "<br />";
  $BodyCopy .= $message;
  $BodyCopy .= "<br />";
  $BodyCopy .= '</body></html>';

// send email
  $success = mail($EmailTo, $Subject, $Body, $headers);
  $copy = mail($email, $SubjectCopy, $BodyCopy, $headers);

  $arr = array('success' => $success, 'email' => $email);
}


// TODO redirect to success page
if ($success && empty($error) && $copy) {
  echo json_encode($arr);
} else {
  echo json_encode(array('success' => false, 'error' => $error));
}

?>