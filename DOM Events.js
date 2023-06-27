/* 
Events 
==> merepresentasikan pristiwa pada suatu elemen. contohnya elemen ketika diklik, dll. serta dapat dipicu oleh user atau API. event ini sudah ada didalam suatu elemen. event event ini dapat dilihat didalam directori elemen (menggunakan method console.dir(<elemen>)). property event biasanya ditandai dengan imbuhan on diikuti dengan event.

event Listener
==> merepresentasikan reaksi dari suatu pristiwa yang dialami oleh suatu elemen. biasanya berisikan function.

dengan memahami konsep ini, elemen di html dapat berinteraksi dengan user dan menjadi antarmuka yang menghubungkan user dgn halaman web atau aplikasi.

untuk menambahkan event listener kepada suatu elemen kita dapat menggunakan 2 cara.
1. event Handling. terdiri dari 2 type :
    a. menggunakan inline attribut pada elemen dengan manambahkan attribut on<event> yang nilainya merupakan function yang berisi statement. namun cara ini sangat tidak disarankan. karena merombak halaman html itu sendiri.
    b. menggunakan method elemen. karena didalam DOM elemen direpresentasikan sebagai object, maka attribut didalam elemen merupakan property dari suatu elemen. sehingga kita dapat mengakses on<event> tadi, kemudian mengisikan nilainya dengan function.

2. menggunakan method addEventListener()
    method ini menerima 2 argument. yang pertama adalah eventnya, yang kedua adalah callback yang merupakan event listenernya.

    contoh :
event handling :
a. <p onclick="function(){p.style.color = "red"}">paragraph 1</p> --> text nodenya berubah menjadi warna merah saat diklick
b. const p = document.querySelector("p");
    p.onClick = function () {
        p.style.color = "red" --> tulisan dari p menjadi berwarna merah saat di klik
    }

method addEventListener() :
p.addEventListener("click",function(){
    p.style.color = "red" --> --> tulisan dari p menjadi berwarna merah saat di klik
})

kedua cara diatas hampir tidak memiliki perbedaan. hanya saja event handling akan menghilngkan event listener pertama kali dibuat dari event yang sama jika dibuat lebih dari satu kali. sementara method addEventListener() akan melakukan akan menjalankan dua event Listener saat dua duanya dibuat pada event yang sama.




*/
