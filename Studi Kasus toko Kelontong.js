function hitungKasir(hargaBarang, jumlahBarang, persenDiskon = 0) {
    const subtotal = hargaBarang * jumlahBarang;

    const nominalDiskon = subtotal * (persenDiskon / 100);

    const setelahDiskon = subtotal - nominalDiskon;

    const ppn = setelahDiskon * 0.11;

    const totalAkhir = setelahDiskon + ppn;

    return {
        subtotal,
        nominalDiskon,
        ppn,
        totalAkhir
    };
}

const hasilTransaksi = hitungKasir(10000, 3, 10);

console.log(`Subtotal    : Rp${hasilTransaksi.subtotal}`);
console.log(`Diskon      : Rp${hasilTransaksi.nominalDiskon}`);
console.log(`PPN (11%)   : Rp${hasilTransaksi.ppn}`);
console.log(`Total Akhir : Rp${hasilTransaksi.totalAkhir}`);