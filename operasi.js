let kata = "ABCDEF";
console.log(kata.charAt(0));
console.log(kata.charAt(4));
console.log(kata.charAt(3));
console.log(kata.charAt(5));

let namaLengkap = "Ucup Serucup";
console.log(namaLengkap.indexOf("S"));
 
let namaDepan = "Ucup";
let namaBelakang = "Serucup";
console.log(namaDepan.concat(" ", namaBelakang, " Si manis"));

let kata1 = "Ucup Belajar Javascript";
console.log(kata1.substring(4, 13));
console.log(kata1.slice(4, 13));
console.log(kata1.slice(0, 4));
 
let kalimat = "Ucup suka bermain bola";
console.log("Sebelum di-replace:", kalimat);

kalimat = kalimat.replace("bola", "basket");
console.log("Setelah di-override:", kalimat);

let contoh1 = "Ucup Suka Bermain Bola, Ucup Suka Bermain Bola";
console.log(contoh1.toUpperCase());

let contoh2 = "Ucup Suka Bermain Bola, Ucup Suka Bermain Bola";
console.log(contoh2.toLowerCase());


