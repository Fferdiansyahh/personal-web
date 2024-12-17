// // var angka = 10
// // var angka2 = 2

// // var angka3 = 10 + 2

// // console.log(angka3)

// var today = formatDataToWIB(new Date);
// var author = "Ferdian";

// console.log(today, author)

// document.write(`${today} | ${author}`)

// function formatDataToWIB(date) {
//     let months = [
//         "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
//         "Jul", "Agus", "Sep", "Okt", "Nov", "Des",
//     ];
//     let day = date.getDate().toString().padStart(2, "0");
//     let month = months[date.getMonth()];
//     let year = date.getFullYear();

//     let hours = date.getHours().toString().padStart(2, "0");
//     let minutes = date.getMinutes().toString().padStart(2, "0");

//     let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;

//     return formattedDate;

// }

//Melakukan logging pada console
// console.log("Halo semuanya");
// console.log("Aku suka olahraga")
// console.log("Sekarang hari Selasa, 10 Desmber 2024")

//COntoh Alert
// alert("Anda dihalaman home")

// let text;
// if (confirm("Apakah Anda ingin mengahapus") == true) {
//   alert("Data sudah terhapus");
// } else {
//   alert("You canceled!");
// }

//var, let, cons
//var
// var ucapan = "Selamat pagi";
// console.log(ucapan);
// var ucapan = "Selamat siang";
// console.log(ucapan);
// //let
// let ucapanSelamat = "selamat kamu dapet nilai 100";
// // let ucapanSelamat = "selamat kamu dapet nilai 100"; => tidak bisa
// ucapanSelamat = "selamat kamu lulus!"; // =>> Bisa
// console.log(ucapanSelamat);

// const fullName = "Ferdian";
// // fullName = "Farhan"; // tidak bisa di-Assign ulang atau Assign ulang
// address = "tanjung priok";

// console.log(fullName);
// console.log(address);

//operator + - * /
// let jumlah = 1 + 2;
// console.log(jumlah);

// let kurang = 5 - 2;
// console.log(kurang);

// let operatorKali = 10 * 2;
// console.log(operatorKali);

// let operatorBagi = 10 / 2;
// console.log(operatorBagi);

// let operatorModulo = 27 % 7; // angkat terdekat  dibawah 15 yang bisa dibagi 2 adalah 14
// console.log(operatorModulo);

// Operator pembanding / comparason operators
// number 1, 2, 10, 40, 40.3, 33000.5
// String " Ferdiansyah",'Ferdian'  data dengan titik dua
// let nama = "Ferdian";
// let perkenalan = `Hai, nama saya ${nama}`; // ===> concatenation
// let perkenalanTemplate = "Halo, nama saya";
// console.log(perkenalan);
// console.log(perkenalanTemplate, nama);
// console.log(perkenalanTemplate + nama);
// // console.log("variable nama :", nama);
// array, object,
// boolean true, false
// ==
// let equal = 5 == "5"; // hanya membandingkan value sama meskipun tipe data beda
// console.log(equal);

// //===
// let strongEqual = 5 === "5"; //hanya membandingkan value tipe data yang sama
// console.log(strongEqual);

// let notEqual = 5 != 7;
// console.log(notEqual);

// let greaterThan = 5 > 8;
// console.log("Apakah 5 lebih besar dari 2", greaterThan);

// let lessThan = 5 < 8;
// console.log("Apakah 5 lebih lecil dari 2", lessThan);

// conditional statement
// let age = 17;
// let batasUmur = 18;
// if (age >= batasUmur) {
//   console.log(
//     `anda adalah orang dewasa karena umur anda (${age} tahun) lebih besar atau sama dengan ${batasUmur} tahun`
//   );
// } else {
//   console.log(
//     `anda masih dibawah umur karena umur anda (${age} tahun) lebih muda dari ${batasUmur} tahun`
//   );
// }

// let fruit = "mango";

// switch (fruit) {
//   case "banana":
//     console.log("this is banana");
//     // proses apapun .. .. . . .
//     break;
//   case "apple":
//     console.log("this is apple");
//     break;
//   case "durian":
//     console.log("this is durian");
//     break;
//   case "strawberry":
//     console.log("this is strawberry");
//     break;
//   default:
//     console.log("fruit is unknown");
// }

// loop for, while, do ... while

// kita ingin console log 'I love you' 15 kali
// for (let i = 0; i < 15 ; i++) {
//   // increment, decrement
//   console.log("I love you ke", i);
// }

function ucapan(name, progLanguage, hobby) {
  console.log("Selamat siang!");
  console.log(`Nama saya ${name}`);
  console.log(`${name} suka bahasa pemrograman ${progLanguage}`);
  console.log(`${name} suka bermain ${hobby}`);
}

function perkenalan() {
  console.log("Berikut adalah perkenalan dari saya.");
  ucapan("Leo", "Javascript", "sepak bola");
}

// function changeColor(e) {
//   console.log(e);
//   let testButton = document.getElementById("testButton");
//   testButton.style.backgroundColor = "red";
//   console.log("anda mengarahkan mouse ke tombol");
// }

// function revertColor() {
//   let testButton = document.getElementById("testButton");
//   testButton.style.backgroundColor = "green";
//   console.log("anda mengarahkan mouse jauh dari tombol");
// }

// function penjumlahan(a, b) {
//   console.log(a + b);
// }

// penjumlahan(15, 6);

//Array
// let fruit = ["apple", "banana", "cerry"]; // daftar nama-nama buah ==> array of strings
// let primeNumber = [2, 3, 5]; // daftar bilangan prima ==> array of numbers
// let evenNumber = [2, 4, 6, 8, 10]; // daftar bilangan genap ==> array of numbers
// console.log(evenNumber);
// console.log(fruit);

// let person = {
//   name: "Ferdian",
//   address: "Kayuagung",
//   favoriteLanguage: "Javascript",
//   hobby: "Coding",
//   shoeSize: 41,
// };

// console.log(person.address);
let blog = {
  title: "Pengaruh tidur malam setiap hari",
  author: "Leo G",
  postedAt: new Date(),
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum assumenda neque expedita sequi quod maiores, est impedit. Labore esse fugiat ipsum dolor, praesentium ipsa dolorem, debitis fuga modi non ullam quia dicta quasi similique natus beatae, vel officia assumenda magnam quod! Fuga voluptatem nisi laudantium error quos unde esse!",
};

// ucapan(person.name, person.favoriteLanguage, person.hobby);
console.log(blog);
