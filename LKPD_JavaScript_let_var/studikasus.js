const daftarSiswa = [
    { nama: "Peter", nilai: [80, 90, 85] },
    { nama: "Andi", nilai: [75, 80, 70] }
];
for (let i = 0; i < daftarSiswa.length; i++) {
    let total = 0;
    for (let j = 0; j < daftarSiswa[i].nilai.length; j++) {
        total += daftarSiswa[i].nilai[j];
    }
    // Menggunakan let untuk penampung nilai rata-rata tiap siswa 
    let rataRata = total / daftarSiswa[i].nilai.length;
    console.log(`Rata-rata ${daftarSiswa[i].nama}: ${rataRata}`);
}