/* 
preventDefault() dan event bubbling

preventDefault() adalah method dari event yang berfungsi menghentikan prilaku bawaan dari suatu elemen dalam event tertentu.
prilaku default contohnya seperti tag a yang akan secara otomatis berpindah ke path didalam attribut href ketika diklick.
dengan mengggunakan method preventDefault() makan prilaku ini akan dihentikan.

event bubling 
==> konsep yang menjelaskan ketika suatu elemen child diberikan event dan event listener, serta parent elementnya juga memiliki event listenernya sendiri. ketika child element event listenernya di trigger, aksi ini juga mentrigger event listener yang ada pada parent elementnya juga. karena child element tadi juga merupakan bagian dari parent elemen.
untuk menghindari problem ini. kita dapat menggunakan:
 event.stopPropagation().
 ==> berguna agar event listener yang di trigger hanya event listener dari child.

sebenarnya, memberikan event dan event listener pada suatu child elemen ia memiliki kelemahan. apalagi elemen tersebut merupakan sebuah list htmlCollection. html collection hanya akan menyeleksi elemen elemen yang ada didalam document.htmlnya saja. jadi elemen yang tambahan hasil dari sumber lain seperti manipulasi node misalnya, tidak akan dimasukkan kedalam hntml collection. sehingga event dan event listener tidak akan berlaku.

contoh: 
diberikan document html 
<div class="container">
      <div class="card">
        <img src="img/sandhika.jpeg" width="96" height="96" />
        <span class="nama">Sandhika Galih</span>
        <span class="telp">08123456789</span>
        <span class="close">×</span>
      </div>
      <div class="card">
        <img src="img/sandhika.jpeg" width="96" height="96" />
        <span class="nama">Sandhika Galih</span>
        <span class="telp">08123456789</span>
        <span class="close">×</span>
      </div>
      <div class="card">
        <img src="img/sandhika.jpeg" width="96" height="96" />
        <span class="nama">Sandhika Galih</span>
        <span class="telp">08123456789</span>
        <span class="close">×</span>
      </div>
      <div class="card">
        <img src="img/sandhika.jpeg" width="96" height="96" />
        <span class="nama">Sandhika Galih</span>
        <span class="telp">08123456789</span>
        <span class="close">×</span>
      </div>
    </div>

    di javascript :
    const close = document.querySelectorAll(".close"); --> html collection berisi 4 cards karena 4 ini berada didalam document html.
    close.forEach((elemen) => {
        elemen.addEventListener("click", function (event) {
            event.target.parentElement.style.display = "none";
        });
    });
    jika ada cards yang bukan didalam document html maka event dan event listenernya tidak akan ditambahkan karena card ini tidak termasuk dalam html collection hasil selection dibaris 45.

    untuk menghindari lebih baik kita manfaatkan prilaku dari konsep event bubling namun prilakunya dibalik. kita memberikan event dan event listener pada parent element, melakukan pengecekan terhadap semua child element dan hanya melakukan aksi hanya pada element child tertentu. pengecekan ini disebut dengan event binding
    contoh :
    const container = document.querySelector(".container");
    container.addEventListener("click", function (e) {
        if (e.target.classList.contains("close")) { --> merupakan event binding
            e.target.parentElement.style.display = "none";
        }
    });

*/
