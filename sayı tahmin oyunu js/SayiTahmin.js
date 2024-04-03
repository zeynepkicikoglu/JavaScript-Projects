const acilisDizgisi = "Sayı Tahmin Oyununa Hoş Geldiniz!!!";
var sonucParagrafi;
var tutulanDeger = 0;
var tahminAltSiniri = 1;
var tahminUstSiniri = 20;
var tahminSayisi;

function sayfaYukle() {
  var tahminGirisi = document.getElementById("input-3");
  sonucParagrafi = document.getElementById("p-1");
  sonucParagrafi.innerHTML = acilisDizgisi;

  document.getElementById("input-3").disabled = true;
  document.getElementById("button-1").disabled = true;

  document.getElementById("input-1").setAttribute("min", tahminAltSiniri);
  document.getElementById("input-1").setAttribute("max", tahminUstSiniri);
  document.getElementById("input-2").setAttribute("min", tahminAltSiniri);
  document.getElementById("input-2").setAttribute("max", tahminUstSiniri);
  tahminGirisi.setAttribute("min", tahminAltSiniri);
  tahminGirisi.setAttribute("max", tahminUstSiniri);

  tahminGirisi.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("button-1").click();
    }
  });

  alert("Sayfa Başarıyla Yüklendi...");
}

function yeniSayiTut() {
  var min = +document.getElementById("input-1").value;
  var max = +document.getElementById("input-2").value;
  var deger = rastgeleSayi(min, max);

  if (min < max) {
    var tahminGirisi = document.getElementById("input-3");
    tahminGirisi.setAttribute("min", min);
    tahminGirisi.setAttribute("max", max);
    tahminGirisi.disabled = false;
    tahminGirisi.value = min;
    document.getElementById("button-1").disabled = false;

    tutulanDeger = deger;
    tahminSayisi = 0;
    sonucParagrafi.innerHTML =
      min + " ile " + max + " aralığında bir sayı tuttum...";
    console.log(min + "," + max + "-->>" + deger);
  } else {
    alert("min < max şeklinde değer aralığı giriniz...");
  }
}

function rastgeleSayi(min, max) {
  var hamDeger, asilDeger;
  min = Math.ceil(min);
  max = Math.floor(max);
  hamDeger = Math.random();
  asilDeger = hamDeger * (max - min + 1) + min;
  asilDeger = Math.floor(asilDeger);
  return asilDeger;
}

function tahminEt() {
  var tahmin = ~~document.getElementById("input-3").value;

  if (tahmin > tutulanDeger)
    sonucParagrafi.innerHTML = ++tahminSayisi + ".tahminiz yanlış. Aşağı inin.";
  else if (tahmin < tutulanDeger)
    sonucParagrafi.innerHTML =
      ++tahminSayisi + ".tahminiz yanlış. Yukarı çıkın.";
  else {
    sonucParagrafi.innerHTML =
      "Tebrikler!" + ++tahminSayisi + "seferde bildiniz...";
    document.getElementById("input-3").disabled = true;
    document.getElementById("button").disabled = true;
  }
}
