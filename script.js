// Fungsi untuk mengubah teks heading dan menampilkan informasi saat halaman dimuat
window.onload = function() {
    // Mengubah teks heading
    document.querySelector('h1').textContent = "Selamat datang di latihan JavaScript";

    // Variabel dan tipe data
    let name = "John";
    const age = 30;
    let fruits = ["Apple", "Banana", "Mango"];
    let person = {firstName: "John", lastName: "Doe", age: 30};

    // Menampilkan nama dan umur
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `Nama: ${name}, Umur: ${age}<br>`;

    // Menampilkan buah-buahan
    outputDiv.innerHTML += "Buah-buahan: <br>";
    for (let i = 0; i < fruits.length; i++) {
        outputDiv.innerHTML += fruits[i] + "<br>";
    }

    // Menampilkan properti objek
    outputDiv.innerHTML += `Nama Lengkap: ${person.firstName} ${person.lastName}<br>`;

    // Tampilkan hasil fungsi greet
    outputDiv.innerHTML += greet("Alice") + "<br>";
    outputDiv.innerHTML += greet("Bob") + "<br>";

    // Tampilkan hasil fungsi calculateSquare
    outputDiv.innerHTML += `Kuadrat dari 5: ${calculateSquare(5)}<br>`;
    outputDiv.innerHTML += `Kuadrat dari 10: ${calculateSquare(10)}<br>`;

    // Tampilkan hasil arrow function add
    outputDiv.innerHTML += `Hasil penjumlahan 3 dan 7: ${add(3, 7)}<br>`;

    // Menampilkan nama siswa
    outputDiv.innerHTML += "Daftar siswa:<br>";
    students.forEach(student => {
        outputDiv.innerHTML += student + "<br>";
    });

    // Menampilkan informasi mobil
    outputDiv.innerHTML += "Informasi mobil:<br>";
    for (let key in car) {
        outputDiv.innerHTML += `${key}: ${car[key]}<br>`;
    }

    // Menampilkan informasi setiap mobil
    outputDiv.innerHTML += "Informasi setiap mobil:<br>";
    cars.forEach(car => {
        outputDiv.innerHTML += `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}<br>`;
    });
};

// Fungsi checkValue
function checkValue() {
    let userInput = document.getElementById("userInput").value;
    let outputDiv = document.getElementById("output");

    // Menyimpan konten sebelumnya
    let previousContent = outputDiv.innerHTML;

    // Cek nilai input
    let newContent = "";
    if (userInput > 10) {
        newContent += "Nilai lebih besar dari 10<br>";
    } else if (userInput == 10) {
        newContent += "Nilai sama dengan 10<br>";
    } else {
        newContent += "Nilai kurang dari 10<br>";
    }

    // Menampilkan angka dari 1 hingga nilai input
    newContent += "Angka dari 1 hingga " + userInput + ":<br>";
    for (let i = 1; i <= userInput; i++) {
        newContent += i + "<br>";
    }

    // Gabungkan konten baru dengan konten sebelumnya
    outputDiv.innerHTML = previousContent + newContent;
}

// Fungsi greet
function greet(name) {
    return `Hello, ${name}`;
}

// Fungsi calculateSquare
function calculateSquare(number) {
    return number * number;
}

// Arrow function
const add = (a, b) => a + b;

// Array students
let students = ["Alice", "Bob", "Charlie"];
students.push("David");

// Objek car
let car = {brand: "Toyota", model: "Corolla", year: 2020};

// Array objek mobil
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2021},
    {brand: "Ford", model: "Mustang", year: 2022}
];
