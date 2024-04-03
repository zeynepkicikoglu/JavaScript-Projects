const acilisDizgisi =
  '<div style="border: #222299 solid 2px; "> Hos geldiniz... </div>';
const veriGirisDizgisi = "Adinizi Giriniz";
const bilgiDizgisi_1 = "Su anda sistemde";
const bilgiDizgisi_2 = " islem yapiyor...";
const yukleDizgisi = "yukle";
const temizleDizgisi = "temizle";
const girisDugmeDizgisi = "Giris";
const cikisDugmeDizgisi = "Cıkıs";

function sayfaYukle() {
  if (arguments[0] == yukleDizgisi) {
    var paragraphObject = document.getElementById("p-1");
    document.getElementById("button-1").innerText = girisDugmeDizgisi;
    document.getElementById("input-1").value = veriGirisDizgisi;

    paragraphObject.innerHTML = acilisDizgisi;

    document.addEventListener("dblclick", belgeCiftTiklandi);

    document
      .getElementById("input-1")
      .addEventListener("dblclick", girisNesnesiCiftTiklandi);
    document
      .getElementById("input-1")
      .addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("button-1").click();
        }
      });

    console.log(paragraphObject.dataset);
    console.log(paragraphObject.dataset.kisaAdi);
    console.log(paragraphObject.dataset.uzunAdi);
    paragraphObject.dataset.yeniBirNitelik1 = "Yeni Bir Nitelik..";
    paragraphObject.dataset.yasi = 36;
    console.log(paragraphObject.dataset.yeniBirNitelik1);
    console.log(paragraphObject.dataset.yasi);

    let optionGroupObject;
    let optionGroupArray = [
      "Etkinlik Alanı",
      "Aritmetik ve Mantaksal Karşılastırma",
    ];

    let optionArray = [
      ["Etkinlik Alanı-1", "Etkinlik Alanı-2"],
      [
        "Aritmetik ve Mantıksal Karsalastarma-1",
        "Aritmetik ve Mantıksal Karsalastarma -2",
      ],
    ];

    let selectObject_1 = document.getElementById("select-1");
    let optionObject;
    let k = 0;

    for (let optionGroupGeciciDizgi of optionGroupArray) {
      optionGroupObject = document.createElement("optgroup");
      optionGroupObject.innerHTML =
        optionGroupObject.value =
        optionGroupObject.label =
          optionGroupGeciciDizgi;
      for (let optionGeciciDizgi of optionArray[k]) {
        optionObject = document.createElement("option");
        optionObject.innerHTML = optionObject.value = optionGeciciDizgi;
        optionGroupObject.appendChild(optionObject);
      }
      selectObject_1.append(optionGroupObject);
      k++;
    }
    document.getElementById("select-1").disabled = true;
    document.getElementById("button-2").disabled = true;
  }
}

function belgeCiftTiklandi(event) {
  alert("Belgeye cift takladinız (2)...");
  console.log(event.target);
  console.log(event.currentTarget);
}

function girisNesnesiCiftTiklandi(event) {
  alert("Giris nesnesine cift tikladinaz (2) ...");
  event.stopPropagation();
}

function giris() {
  var geciciDizgi = "?";
  geciciDizgi = document.getElementById("input-1").value;
  if (document.getElementById("button-").innerText != cikisDugmeDizgisi) {
    if (geciciDizgi != veriGirisDizgisi) {
      alert("Hos geldiniz " + geciciDizgi);
      document.getElementById("p-1").innerHTML =
        bilgiDizgisi_1 + geciciDizgi + bilgiDizgisi_2;
      document.getElementById("select-1").disabled = false;
      document.getElementById("button-2").disabled = false;
      document.getElementById("button-1").innerText = cikisDugmeDizgisi;
    } else {
      alert("Önce adanızı giriniz");
      document.getElementById("input-1").focus();
    }
  } else {
    alert('Böylece kullanicinın "Cıkis"ı gerçeklestirilir...');
  }
}
function secilenUygulamayiCalistir() {
  var selectElement = document.getElementById("select-1");
  alert(selectElement.options[selectElement.selectedIndex].text);
}

function veriGirisiBasladi(cagiranGirisNesnesi, renkDizgisi) {
  cagiranGirisNesnesi.style.background = renkDizgisi;
  if (cagiranGirisNesnesi.value == veriGirisDizgisi)
    cagiranGirisNesnesi.value = "";
}

function veriGirisiBitti(cagiranGirisNesnesi) {
  cagiranGirisNesnesi.style.background = "#FFFFFF";
  if (cagiranGirisNesnesi.value == "")
    cagiranGirisNesnesi.value = veriGirisDizgisi;
}
function temizle() {
  sayfaYukle(temizleDizgisi);
}
