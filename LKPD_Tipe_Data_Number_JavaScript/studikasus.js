let hargaBarang = 15000;
let jumlahBarang = 7;
let persentaseDiskon = 0.10; // 10%

let totalAwal = hargaBarang * jumlahBarang;
let besaranDiskon = totalAwal * persentaseDiskon;
let totalBayar = totalAwal - besaranDiskon;

console.log("Total Sebelum Diskon: Rp " + totalAwal);
console.log("Besaran Diskon: Rp " + besaranDiskon);
console.log("Total yang Harus Dibayar: Rp " + totalBayar);