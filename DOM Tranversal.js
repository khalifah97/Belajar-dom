/* 
DOM Tranversal
==> konsep yang memungkin kita dapat menelusri node node didalam hirarki atau silsilah didalam DOM

dengan menggunakan DOM Tranvesal. kita dapa menelusuri node node disekitar node yang kita seleksi, dan dapat memanipulasi node node tersebut.
adapun property yang digunakan :
elemen.parentElement --> menelusuri parent elemen dari suatu node element
elemen.parentNode --> menelusuri parent node dari suatu node
elemen.nextSibling --> menelusuri node setelahnya dari suatu node
elemen.nextElementSibling --> menelusuri node element setelahnya dari suatu node element
elemen.previousSibling --> menelusuri node sebelumnya  dari suatu node node
elemen.previousElementSibling --> menelusuri node element sebelumnya dari suatu node element
elemen.childNode --> mengembalikan nodeList dari node child didalam suatu element
elemen.children --> mengembalikan HTML collection dari elemen didalam suatu element
elemen.firstElementChild --> menelusuri elemen pertama didalam suatu element
elemen.lastElementChild --> menelusuri elemen terakhir didalam suatu element

contoh :
misalkan didalam elemen html ada elemen seperti :
<div class="container">
    <div class="card">
    <img src="img/sandhika.jpeg" width="96" height="96" />
    <span class="nama">Sandhika Galih</span>
    <span class="telp">08123456789</span>
    <span class="close">×</span>
</div>
jika kita men clik span.close, kita ingin menghilangkan div.card:
kita dapat melakukan :

const close = document.queryselector(".close");
close.addEventListener("click", function(){
    close.parentElement.style.display = "none"; --> kita mengakses parent element dari close 
})

dengan melakukan ini, kita mengatur agar property dari element parent dari .close valuenya menjadi none ketika kita men klick mouse pada .close 
 */
