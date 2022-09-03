<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/reset.css" type="text/css">
  <link rel="stylesheet" href="css/base.css" type="text/css">
  <title></title>
</head>

<body>
  <section>
    <div class="img_wrap">
      <ul>
        <li class="active">
          <img src="img/001.jpg">
        </li>
        <li class="">
          <img src="img/002.jpg">
        </li>
        <li class="">
          <img src="img/002_1.jpg">
        </li>
        <li class="">
          <img src="img/003.jpg">
        </li>
        <li class="">
          <img src="img/004.jpg">
        </li>
        <li class="">
          <img src="img/005.jpg">
        </li>
        <li class="">
          <img src="img/006.jpg">
        </li>
        <li class="">
          <img src="img/007.jpg">
        </li>
      </ul>
      <p class="text">※音が出ます</p>
    </div>
    <button type="button">出荷を防ぎますか？</button>
  </section>
  <section>
    <audio id="audio_syukka">
      <source src="audio/syukka.mp3" type="audio/mp3">
    </audio>
    <audio id="audio_docchi">
      <source src="audio/docchi.mp3" type="audio/mp3">
    </audio>
    <audio id="audio_hu">
      <source src="audio/hu-.mp3" type="audio/mp3">
    </audio>
    <audio id="audio_se">
      <source src="audio/se-.mp3" type="audio/mp3">
    </audio>
    <audio id="audio_gu">
      <source src="audio/gu-.mp3" type="audio/mp3">
    </audio>
    <audio id="audio_wata">
      <source src="audio/wata-.mp3" type="audio/mp3">
    </audio>
    <audio id="audio_ha">
      <source src="audio/ha!.mp3" type="audio/mp3">
    </audio>
  </section>
  <section id="modalArea" class="modalArea">
    <div id="modalBG" class="modalBG"></div>
    <div class="modalWrap">
      <div class="modalContents">
        <h1>どこでも出荷を防ぐボタン！</h1>
        <p>音が出ます！音量にご注意ください！</p>
      </div>
      <div id="closeModal" class="closeModal">
        OK！
      </div>
    </div>
  </section>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="jquery/main.js"></script>
</body>

</html>
