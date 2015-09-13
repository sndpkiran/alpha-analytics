<?php

$x = time() * 1000 + 19800000;

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.quikr.com/public/adsByCategory?categoryId=149",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "x-quikr-app-id: 538",
    "x-quikr-signature: 990d0d784df76279d99d80671601a864ef30de43",
    "x-quikr-token-id: 3110753"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  $ar = json_decode($response,true);
  $ret = array($x,$ar['AdsByCategoryResponse']['AdsByCategoryData']['total']);
  echo json_encode($ret);
}