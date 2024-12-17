// SYNCHRONOUS
// console.log("start");
// function fetchData() {
//   const data = "Data Fetched";
//   return data;
// }
// const result = fetchData();
// console.log(result);
// console.log("End");

// ASYNCHRONOUS
// console.log("start");
// function getData() {
//   const data = "Data Fetched";
//   console.log(data);
// }
// function fetchDataAsync() {
//   setTimeout(() => getData(), 2000);
// }
// fetchDataAsync();
// console.log("End");

//callback
// function sayHello() {
//   console.log("Hello Everyone");
// }

// function greating(name, callback) {
//   callback();
//   console.log("Hi,", name);
// }
// greating("Ferdian", sayHello);

//Callback problem
// setTimeout(() => {
//   console.log("this is calback");
// }, 2000);

// function proses1() {
//   setTimeout(() => {
//     console.log("proses pertama");
//   }, 2000);
// }
// function proses2() {
//   setTimeout(() => {
//     console.log("proses kedua");
//   }, 3000);
// }
// function proses3() {
//   setTimeout(() => {
//     console.log("proses ketiga");
//   }, 1000);
// }

// setTimeout(() => {
//   proses1();
//   proses2();
//   proses3();
// }, 1000);

// async function multiProses() {
//   await proses1();
//   await proses2();
//   await proses3();
// }

// multiProses();

function proses1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("proses pertama");
      resolve();
    }, 2000);
  });
}

function proses2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("proses kedua");
    }, 3000);
    reject("ada yang salah dengan proses 2");
  });
}
function proses3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("proses ketiga");
    }, 1000);
    resolve();
  });
}

// proses1()
//   .then(() => proses2())
//   .then(() => proses3())
//   .catch((error) => console.error("Error", error));

async function executeProcesses() {
  try {
    await proses1();
    await proses2();
    await proses3();
  } catch (error) {
    console.error("Error:", error);
  }
}

executeProcesses();
