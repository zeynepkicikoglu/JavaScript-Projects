const fakulteler = [
  "Eğitim",
  "Mühendislik",
  "Fen",
  "Tıp",
  "Mühendislik",
  "Fen",
  "Tip",
  "Egitim",
  "Fen",
  "Egitim",
  "Fen",
  "Tip",
  "Fen",
  "Egitim",
  "Mühendislik",
  "Egitim",
  "Tip",
  "Mühendislik",
  "Egitim",
  "Tıp",
  "Mühendislik",
  "Tıp",
  "Egitim",
  "Egitim",
];

const puanlar = [
  417.355, 408.713, 407.854, 397.096, 394.234, 392.136, 389.05, 435.864,
  434.261, 432.9, 429.05, 427.991, 427.187, 423.875, 422.982, 422.697, 421.287,
  432.9, 384.964, 384.573, 383.073, 383.044, 432.211, 324.425,
];

const ogrenciNumaralari = [
  2021001, 2020002, 2019003, 2019004, 2018005, 2021006, 2021007, 2018008,
  2021009, 2021010, 2018011, 2020012, 2021013, 2018014, 2020015, 2019016,
  2018017, 2020018, 2021019, 2019020, 2019021, 2021022, 2019023, 2021024,
];

const ogrenciAdlari = [
  "Ayse",
  "Ahmet",
  "Ebru",
  "Emre",
  "Ahmet",
  "muhsin",
  "zeynep",
  "ilker",
  "Mutlu",
  "Canar",
  "Mehmet",
  "Kübra",
  "Veli",
  "Umut",
  "Mutlu",
  "Canan",
  "Deniz",
  "Lara",
  "İrem",
  "Elif",
  "Beste",
  "Eren",
  "Emre",
  "Ekiz",
];

const ogrenci = {
  no: -1,

  adi: "",

  fakulte: "",
  puan: 0.0,

  noAdi: function () {
    let geciciDizgi = this.no + " ->" + this.adi;

    return geciciDizgi;
  },

  tumBilgiler: function () {
    let geciciDizgi =
      this.no + ", " + this.adi + ", " + this.fakulte + ", " + this.puan;

    return geciciDizgi;
  },
};

function sayfaYukle() {
  var cizelge = document.getElementById("table-1");

  var ogrenciSayisi = ogrenciNumaralari.length;

  for (let k = 0; k < ogrenciSayisi; k++) {
    let numara = ogrenciNumaralari[k];

    let adi = ogrenciAdlari[k];

    ogrenci.no = numara;

    ogrenci.adi = adi;

    ogrenci.fakulte = fakulteler[k];

    ogrenci.puan = puanlar[k];

    cizelge.innerHTML +=
      " <tr> <td>" +
      ogrenci.no +
      "</td> <td>" +
      ogrenci.adi +
      "</td><td> " +
      ogrenci.fakulte +
      "</td><td> " +
      ogrenci.puan +
      "</td></tr>";
  }
}
