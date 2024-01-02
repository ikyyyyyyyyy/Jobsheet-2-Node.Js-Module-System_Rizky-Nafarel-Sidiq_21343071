const fs = require("fs");


const yargs = require("yargs");
const catatan = require("./catatan.js");

yargs.version("10.1.0");

// yargs.command({
//   command: "tambah",
//   describe: "tambah sebuah catatan baru",
//   handler: function () {
//     console.log("sebuah catatan baru ditambahkan!");
//   },
// });

yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
    isi: {
      describe: "isi catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    catatan.tambahCatatan(argv.judul, argv.isi);
  },
});

yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  handler: function () {
    console.log("catatan berhasil dihapus!");
  },
  handler: function (argv) {
    //  console.log("Judul: " + argv.judul);
    catatan.hapusCatatan(argv.judul);
  },
});

yargs.command({
  command: "list",
  describe: "menampilkan daftar semua catatan",
  handler: function () {
    console.log("Daftar semua catatan:");
    // Implementasikan logika untuk menampilkan daftar catatan di sini
    const semuaCatatan = catatan.ambilCatatan();
    semuaCatatan.forEach((note, index) => {
      console.log(`${index + 1}. Judul: ${note.judul}`);
      console.log(`   Isi: ${note.isi}`);
    });
  },
});

yargs.command({
  command: "read",
  describe: "membaca sebuah catatan",
  builder: {
    judul: {
      describe: "Judul catatan yang ingin dibaca",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Membaca catatan dengan judul: " + argv.judul);
    // Implementasikan logika untuk membaca catatan berdasarkan judul di sini
    const semuaCatatan = catatan.ambilCatatan();
    const catatanDibaca = semuaCatatan.find(
      (note) => note.judul === argv.judul
    );
    if (catatanDibaca) {
      console.log(`Judul: ${catatanDibaca.judul}`);
      console.log(`Isi: ${catatanDibaca.isi}`);
    } else {
      console.log(chalk.red.inverse("Catatan tidak ditemukan!"));
    }
  },
});

// letakan bagian ini pada baris terakhir
//console.log(yargs.argv);

yargs.parse();
