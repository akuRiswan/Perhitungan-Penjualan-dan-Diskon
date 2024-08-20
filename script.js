let harga = document.getElementById("input-harga");
let jumlah = document.getElementById("input-jumlah");
let diskon = document.getElementById("input-diskon");

let sebelumDiskon = document.getElementById("sebelum-diskon");
let totalDiskon = document.getElementById("total-diskon");
let setelahDiskon = document.getElementById("setelah-diskon");

function count() {
  let totalHarga = harga.value * jumlah.value;
  let totalDiskonValue = (totalHarga * diskon.value) / 100;
  let stlhDiskon = totalHarga - totalDiskonValue;

  sebelumDiskon.innerHTML = `Total Sebelum Diskon: Rp ${totalHarga}`;
  totalDiskon.innerHTML = `Total Diskon: Rp ${totalDiskonValue}`;
  setelahDiskon.innerHTML = `Total Setelah Diskon: Rp ${stlhDiskon}`;
}

harga.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    jumlah.focus();
  }
});

jumlah.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    diskon.focus();
  }
});

diskon.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    count();
  }
});
