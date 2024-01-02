const chalk = require("chalk");

// Contoh mencetak teks dengan warna biru
console.log(chalk.blue("Teks berwarna biru"));

// Contoh mencetak teks dengan warna merah muda (magenta)
console.log(chalk.magenta("Teks berwarna merah muda"));

// Contoh mencetak teks dengan latar belakang kuning dan teks berwarna merah
console.log(
  chalk.bgYellow.red("Teks dengan latar belakang kuning dan teks merah")
);

// Contoh mencetak teks tebal (bold) dengan warna hijau
console.log(chalk.bold.green("Teks tebal berwarna hijau"));

// Contoh mencetak teks dengan garis bawah (underscore) dan warna cyan
console.log(chalk.underline.cyan("Teks dengan garis bawah dan warna cyan"));
