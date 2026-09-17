// Langkah 1: Deklarasi variabel
let inputKodeVoucher = '1234'; // Tipe Data: String
let kodeResmi = 1234;          // Tipe Data: Number

// Langkah 2: Pembandingan variabel
console.log("Pengujian ==");
console.log(inputKodeVoucher == kodeResmi);  // Output: true

console.log("Pengujian ===");
console.log(inputKodeVoucher === kodeResmi); // Output: false

// Langkah 3: Kondisi Filter Diskon
if (inputKodeVoucher === kodeResmi) {
  console.log('Voucher Valid & Tipe Cocok');
} else if (inputKodeVoucher == kodeResmi) {
  console.log('Voucher Valid tapi Perlu Konversi Tipe Data');
} else {
  console.log('Voucher Tidak Valid');
}

// Langkah 4: Pengujian dengan Boolean / Type Coercion lainnya
inputKodeVoucher = true;
console.log("Uji Coba Boolean (true == 1234):", inputKodeVoucher == kodeResmi); // Output: false