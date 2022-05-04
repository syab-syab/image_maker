var makeImage = document.getElementById("make-image");

// 各input要素
var createPreviewBtn = document.getElementById("create-preview");
var title = document.getElementById("title");
var place = document.getElementById("place");
var date = document.getElementById("date");
var time = document.getElementById("time");
var content = document.getElementById("content");

// 色
var backColor = document.getElementById("background-color");
var headingColor = document.getElementById("heading-color");
var fontColor = document.getElementById("font-color");

// 他の要素
var capture = document.getElementById("capture");
var heading = document.getElementsByClassName("heading");


// 画像にするボタンのセクション
var createImageBtn = document.getElementById('create-image-button-section');

// 画像セクション
var makeIimageSection = document.getElementById("make-image-section");

// 画像のダウンロードボタンのセクション
var imageDownloadSection = document.getElementById('image-download-button-section');

function createImage() {
  if (title.value == '' || place.value == '' || date.value == '' || time.value == '' ) {
    alert("必須項目を入力してください。");
  } else {
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
    if (content.value == '') {
      document.getElementById('origin-content').textContent = "特に無し"
    } else {
      var contentText = (content.value.includes('\n')) ? content.value.split('\n').join('<br>') : content.value;
      document.getElementById('origin-content').innerHTML = contentText;
    }
    
    createImageBtn.classList.remove("non-display");
    makeIimageSection.classList.remove("non-display");
  }
}

createPreviewBtn.addEventListener("click", createImage);


  
// 画像生成する関数
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
  
  imageDownloadSection.classList.remove("non-display");
}

makeImage.addEventListener('click', createScreenshot);
