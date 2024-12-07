// var angka = 10
// var angka2 = 2

// var angka3 = 10 + 2

// console.log(angka3)

var today = formatDataToWIB(new Date);
var author = "Ferdian";




console.log(today, author)


document.write(`${today} | ${author}`)

function formatDataToWIB(date) {
    let months = [
        "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
        "Jul", "Agus", "Sep", "Okt", "Nov", "Des",
    ];
    let day = date.getDate().toString().padStart(2, "0");
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");

    let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;

    return formattedDate;

}