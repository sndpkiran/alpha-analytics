<?php

$x = time() * 1000 + 19800000;
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.quikr.com/public/adsByLocation?lat=28.6100&lon=77.2300&from=0&size=1",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "x-quikr-app-id: 538",
    "x-quikr-signature: 469abd5bfd1618e4c8b9727f5ce7e432a975ff39",
    "x-quikr-token-id: 3036279"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  $ar = json_decode($response,true);
  $ret = array($x,$ar['AdsByLocationResponse']['AdsByLocationData']["total"] );
  echo json_encode($ret);
}
?>