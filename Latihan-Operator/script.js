// Ambil elemen DOM
const inputAngka1 = document.getElementById("angka1");
const selectOperator = document.getElementById("operator");
const inputAngka2 = document.getElementById("angka2");
const elementHasil = document.getElementById("hasil");
const resultBox = document.getElementById("resultBox");

// Fungsi utama untuk menghitung hasil operasi
function hitung() {
    const val1 = inputAngka1.value.trim();
    const val2 = inputAngka2.value.trim();
    const operator = selectOperator.value;

    // Bersihkan kelas error dan highlight sebelumnya
    elementHasil.classList.remove("error", "highlight");

    // Jika salah satu input belum diisi atau operator belum dipilih
    if (val1 === "" || val2 === "" || !operator) {
        elementHasil.textContent = "Hasil";
        resultBox.classList.remove("active");
        return;
    }

    // Konversi ke tipe Number (tipe data numerik)
    const a = parseFloat(val1);
    const b = parseFloat(val2);

    if (isNaN(a) || isNaN(b)) {
        elementHasil.textContent = "Input Tidak Valid";
        elementHasil.classList.add("error");
        return;
    }

    let hasil;

    // Evaluasi berdasarkan operator yang dipilih
    switch (operator) {
        case "+":
            hasil = a + b;
            break;
        case "-":
            hasil = a - b;
            break;
        case "*":
            hasil = a * b;
            break;
        case "/":
            if (b === 0) {
                elementHasil.textContent = "Tidak bisa bagi 0";
                elementHasil.classList.add("error");
                return;
            }
            hasil = a / b;
            break;
        case "%":
            if (b === 0) {
                elementHasil.textContent = "Modulo 0 tidak valid";
                elementHasil.classList.add("error");
                return;
            }
            hasil = a % b;
            break;
        case "**":
            hasil = a ** b;
            break;
        default:
            elementHasil.textContent = "Pilih Operator";
            return;
    }

    // Rapikan hasil desimal jika ada pembulatan floating point (contoh: 0.1 + 0.2)
    if (typeof hasil === "number" && !Number.isInteger(hasil)) {
        hasil = parseFloat(hasil.toFixed(6));
    }

    // Tampilkan hasil ke DOM
    elementHasil.textContent = hasil;
    elementHasil.classList.add("highlight");
    resultBox.classList.add("active");
}

// Event listener 'input' membuat perhitungan langsung dieksekusi secara otomatis saat angka diketik
inputAngka1.addEventListener("input", hitung);
inputAngka2.addEventListener("input", hitung);

// Event listener 'change' mengeksekusi perhitungan saat operator diganti
selectOperator.addEventListener("change", hitung);
