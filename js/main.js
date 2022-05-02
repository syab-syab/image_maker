var makeImage = document.getElementById("make-image");

// テスト
var createPreview = document.getElementById("create-preview");
var title = document.getElementById("title");
var place = document.getElementById("place");
var date = document.getElementById("date");
var time = document.getElementById("time");
var content = document.getElementById("content");
var capture = document.getElementById("capture");
var heading = document.getElementsByClassName("heading");

// 背景色関係
// 背景色は document.getElementById("background-color").value で取得できる
// 他の色にもidを指定して同じように色の値を取得する
var backColor = document.getElementById("background-color");
var headingColor = document.getElementById("heading-color");
var fontColor = document.getElementById("font-color");

// 画像セクション
var makeIimageSection = document.getElementById("make-image-section")

// 画像のダウンロードボタンのセクション
var imageDownloadSection = document.getElementById('image-download-section')

function createImage() {
  capture.classList.remove("non-display");
  capture.style.backgroundColor = backColor.value;
  for (var i = 0; i < heading.length; i++) {
    heading[i].style.backgroundColor = headingColor.value;
  }
  capture.style.color = fontColor.value;

  document.getElementById('origin-title').textContent = title.value;
  document.getElementById('origin-place').textContent = place.value;
  document.getElementById('origin-date').textContent = date.value;
  document.getElementById('origin-time').textContent = time.value;
  // var contentText = content.value.split('\n').join('<br>');
  var contentText = (content.value.includes('\n')) ? content.value.split('\n').join('<br>') : content.value;
  document.getElementById('origin-content').innerHTML = contentText;
  
  makeIimageSection.classList.remove("non-display");
}

createPreview.addEventListener("click", createImage);


  
// スクショ生成する関数
function createScreenshot() {
  // オプションの指定
  var options = {
    // 画質を良くする
    scale: 3
  }
  // フォームに入力したら画像を表示
  html2canvas(document.getElementById("capture"), options).then(function(canvas) {
    //imgのsrcに、生成した画像urlを入れて表示。
    var imgData = canvas.toDataURL();
    var createImage = document.getElementById("created-image");
    createImage.src = imgData;
    // 表示される画像のサイズの調整
    createImage.width = document.getElementById("capture").clientWidth;
    // aタグのhrefに生成した画像を入れてダウンロードできるようにする
    var imageDownload = document.getElementById("image-download");
    imageDownload.href = imgData;
  });
  // 画質の問題はクリアしたから、表示される画像のサイズを調整する
  
  imageDownloadSection.classList.remove("non-display");
}

// 生成ボタンをクリックしたらスクショを撮る
makeImage.addEventListener('click', createScreenshot);
