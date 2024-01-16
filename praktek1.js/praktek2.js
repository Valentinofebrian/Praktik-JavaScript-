// 1. Simpan berat dan tinggi Madan dan Joan pada sebuah variable.
const beratMadan = 70; // misalnya dalam kg
const tinggiMadan = 1.75; // misalnya dalam meter

const beratJoan = 65; // misalnya dalam kg
const tinggiJoan = 1.70; // misalnya dalam meter

// 2. Hitung kedua IMT menggunakan rumus yang disediakan.
const imtMadan = beratMadan / Math.pow(tinggiMadan, 2);
const imtJoan = beratJoan / Math.pow(tinggiJoan, 2);

// 3. Buat variable dengan nama madanHigherIMT. berisikan nilai hasil perbandingan apakah IMT Madan lebih tinggi dari Joan.
const madanHigherIMT = imtMadan > imtJoan;

// 4. Tampilkan data pada console.
console.log("Berat Madan:", beratMadan, "kg");
console.log("Tinggi Madan:", tinggiMadan, "m");
console.log("IMT Madan:", imtMadan);

console.log("Berat Joan:", beratJoan, "kg");
console.log("Tinggi Joan:", tinggiJoan, "m");
console.log("IMT Joan:", imtJoan);

console.log("Madan memiliki IMT lebih tinggi dari Joan:", madanHigherIMT);