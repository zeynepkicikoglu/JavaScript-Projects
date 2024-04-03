const ogrenciNumaralari = [
  2020001, 2020002, 2020003, 2020004, 2020005, 2020006, 2020007, 2020008,
  2020009, 2020010, 2020011, 2020012, 2020013, 2020014, 2020015, 2020016,
  2020017, 2020018, 2020019, 2020020, 2020021, 2020022, 2020023, 2020024,
];
const ogrenciAdlari = [
  "Ali",
  "Ayşe",
  "Ahmet",
  "Fatma",
  "Mustafa",
  "Zeynep",
  "Mehmet",
  "Hatice",
  "Emine",
  "İbrahim",
  "Selin",
  "Burak",
  "Esra",
  "Cem",
  "Sevgi",
  "Gizem",
  "Kaan",
  "Ezgi",
  "Serkan",
  "Derya",
  "Özge",
  "Yasin",
  "Pınar",
  "Uğur",
];
var ogrenciSayisi;
function sayfaYukle() {
  var minOgrenciNumarasi = Math.min(...ogrenciNumaralari);
  var maxOgrenciNumarasi = Math.min(...ogrenciNumaralari);
  var ogrenciSayisi = ogrenciNumaralari.length;

  document.getElementById("input-1").setAttribute("min", minOgrenciNumarasi);
  document.getElementById("input-1").setAttribute("max", maxOgrenciNumarasi);

  document.getElementById("input-2").setAttribute("min", 1);
  document.getElementById("input-2").setAttribute("max", ogrenciSayisi);
  console.log("Öğrenci sayımız:" + ogrenciSayisi);
}
function numaradanBul() {
  var bulunacakOgrenciNumarasi = ~~document.getElementById("input-1").value;
  var ogrenciSirasi = ogrenciNumaralari.indexOf(bulunacakOgrenciNumarasi);

  var spanNesnesi = document.getElementById("span-1");

  spanNesnesi.innerHTML = bulunacakOgrenciNumarasi;
  //spanNesnesi.innerHTML += "," + ++ogrenciSirasi + ". Sırada...";

  if (ogrenciSirasi == -1) {
    spanNesnesi.innerHTML += " bulunamadı...";
  } else {
    spanNesnesi.innerHTML += "," + ++ogrenciSirasi + ". Sırada...";
  }
}

function siradanBul() {
  var bulunacakOgrenciSirasi = ~~document.getElementById("input-2").value;
  var spanNesnesi = document.getElementById("span-2");
  spanNesnesi.innerHTML = bulunacakOgrenciSirasi;

  if (bulunacakOgrenciSirasi < 1 || bulunacakOgrenciSirasi > ogrenciSayisi) {
    spanNesnesi.innerHTML += " sıralı öğrenci mevcut değildir...";
  } else {
    var ogrenciNumarasi = ogrenciNumaralari[bulunacakOgrenciSirasi - 1];
    var ogrenciAdi = ogrenciAdlari[bulunacakOgrenciSirasi - 1];

    spanNesnesi.innerHTML += "-)" + ogrenciNumarasi;
    spanNesnesi.innerHTML += "," + ogrenciAdi;
  }
}
