// javascript

// Fungsi untuk menhitung Luas Segitiga
function luasSegitiga() {
    var panjangAlas = document.getElementById('panjang-alas').value;
    var tinggi = document.getElementById('tinggi').value;
    if (panjangAlas == '' || tinggi == '' || panjangAlas.includes('e') || tinggi.includes('e')) {
        alert("Form masih kosong bro")
    } else{
        luasSegitiga = 0.5 * panjangAlas * tinggi;
        document.getElementById('result').textContent = `Hasil Perhitungan: ${luasSegitiga}`;
    }
}

// Funsi untuk menghitung Keliling Segitiga
function kelilingSegitiga() {
    var s1 = document.getElementById('s1').value;
    var s2 = document.getElementById('s2').value;
    var s3 = document.getElementById('s3').value;
    if (s1 == '' || s2 == '' || s3 == '' || s1.includes('e') || s2.includes('e') || s3.includes('e')) {
        alert("Form masih kosong bro")
    } else{
        kelilingSegitiga =  parseInt(s1) + parseInt(s2) + parseInt(s3);
        let gethasil = document.getElementById('hasil').textContent = `Hasil Perhitungan: ${kelilingSegitiga}`;
        console.log(gethasil);
    }
}

function selectionJajar() {
    let jajargenjang = document.getElementById('keliling-segitiga-btn').style.backgroundColor = 'cadetblue';
}