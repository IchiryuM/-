const statusText =
  document.getElementById("status");

const progress =
  document.getElementById("progress");

const percent =
  document.getElementById("percent");

const fang =
  document.getElementById("fang");

const pupils =
  document.querySelectorAll(".pupil");

const startButton =
  document.getElementById("start-button");

const bootPanel =
  document.querySelector(".boot-panel");

const bootScreen =
  document.getElementById("boot-screen");

const storyScreen =
  document.getElementById("story-screen");

const storyImage =
  document.getElementById("story-image");

const storyNext =
  document.getElementById("story-next");


/* =========================
   起動ステップ
========================= */

const steps = [

  {
    text: "妖怪パッドシステムを起動中でウィス...",
    progress: 8,
    duration: 1000
  },

  {
    text: "データを読み込んでいるでウィス...",
    progress: 18,
    duration: 900
  },

  {
    text: "だれが使うのか確認中でウィス...",
    progress: 32,
    duration: 1500
  },

  {
    text: "ユーザーを探しています...",
    progress: 45,
    duration: 2000
  },

  {
    text: "みなさんを発見！",
    progress: 58,
    duration: 1000
  },

  {
    text: "ユーザー認証中...",
    progress: 70,
    duration: 2500
  },

  {
    text: "妖怪レーダーを接続中...",
    progress: 82,
    duration: 1000
  },

  {
    text: "MAPデータを読み込み中...",
    progress: 90,
    duration: 1000
  },

  {
    text: "クエストデータを読み込み中...",
    progress: 96,
    duration: 2000
  },

  {
    text: "認証に成功したでウィス！",
    progress: 100,
    duration: 3000
  }

];


let currentStep = 0;


/* =========================
   目を動かす
========================= */

function moveEyes() {

  const positions = [
    -12,
    0,
    12,
    0
  ];

  const random =
    positions[
      Math.floor(
        Math.random() * positions.length
      )
    ];

  pupils.forEach(pupil => {

    pupil.style.transform =
      `translateX(${random}px)`;

  });

}


/* =========================
   起動処理
========================= */

function bootSystem() {

  if (currentStep >= steps.length) {

    finishBoot();

    return;
  }


  const step =
    steps[currentStep];


  statusText.textContent =
    step.text;


  progress.style.width =
    step.progress + "%";


  percent.textContent =
    step.progress + "%";


  /*
    牙を進行率に合わせて移動
    0～100%の範囲
  */

  const fangPosition = 4 + (step.progress * 0.88);
    fang.style.left = fangPosition + "%";


  /*
    目を動かす
  */

  moveEyes();


  currentStep++;


  setTimeout(
    bootSystem,
    step.duration
  );

}


/* =========================
   起動完了
========================= */

function finishBoot() {

  statusText.textContent =
    "妖怪パッドへようこそ！";


  percent.textContent =
    "100%";


  bootPanel.classList.add(
    "success"
  );


  /*
    最後に目を中央へ
  */

  pupils.forEach(pupil => {

    pupil.style.transform =
      "translateX(0px)";

  });


  setTimeout(() => {

    startButton.hidden = false;

  }, 700);

}


/* =========================
   起動開始
========================= */

setTimeout(
  bootSystem,
  800
);


/* =========================
   ストーリー画像
========================= */

const storyImages = [

  "images/クエスト受注.png"

];

let storyIndex = 0;


/* =========================
   START
========================= */

startButton.addEventListener(
  "click",
  () => {

    /* 今の起動画面を消す */

    bootScreen.style.display =
      "none";


    /* ストーリー画面を表示 */

    storyScreen.hidden =
      false;


    /* 最初の画像 */

    storyIndex = 0;

    storyImage.src =
      storyImages[storyIndex];

  }
);


/* =========================
   次へ
========================= */

storyNext.addEventListener(
  "click",
  () => {

    storyIndex++;


    if (
      storyIndex <
      storyImages.length
    ) {

      storyImage.src =
        storyImages[storyIndex];

    }

  }
);