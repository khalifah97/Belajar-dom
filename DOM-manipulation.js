/* 
DOM Manipulation 
 DOM merepresentasikan elemen didalam document.html menjadi sebuah object yang didalamnya mengandung property property yang mengandung informasi mengenai element tersebut. property property ini dapat dimanipulasi diantaranya :

 memanipulasi elemen
 elemen.innerHTML ==> isi elemen html
 elelmen.style.<property css> ==> memanipulasi property pada css
 elemen.textContent ==> memanipulasi text didalam elemen
 dll.

 kemudian kita dapat memanipulasi attribut didalam suatu elemen dengan menggunakan method :
 elemen.setAttribut("nama atribut", "nilai attribut") ==> digunakan untuk membuat attribute didalam elemen
 elemen.getAttribut("nama attribut") ==> digunakan untuk mengambil nilai dari attribut pada elemen
 elemen.removeAttribut("nama attribut") ==> digunakan untuk menghapus suatu attribut pada elemen

 khusus attribut class dapat memiliki banyak nilai didalamnya membentuk list class yang diebut classList. classList merupakan object yang didalamnya memuat method diantaranya :
1. elemen.classList.add("") ==> menambahkan nilai baru pada class 
2. elemen.classList.remove("") ==> menghapus class dari classlist
3. elemen.classList.toggle("") ==> menambahkan class kedalam classList jika class tersebut tidak ada didalam classList, menghilangkan class dari classList jika class ada didalam classList
4. elemen.classList.item("") ==> mendapatkan class pada posisi yang sesuai dengan argument yang diteruskan
5. elemen.classList.contains("") ==> mengecek apakah class dimaksud ada dalam classList
6. elemen.classList.replace("") ==> mengganti class yang sudah ada pada classList dengan class baru
dengan hal ini kita dapat memanipulasi style baru pada suatu elemen dengan menambahkan class menggunakan javascript pada suatu elemen ketika kita berinteraksi dengan halaman web.

memanipulasi node
==> kita dapat menambahkan, menghapus dan mengganti node node pada DOM Tree. adapun method method yang digunakan :
document.createElement("<nama elemen>") ==> untuk membuat node elemen baru.
document.createTextNode("<isi text>") ==> untuk membuat node text baru.
parentNode.appendChild("<child node>") ==> untuk menambahkan child node.
parentNode.insertBefore("<node baru>" , "node child setelahnya ketika node baru masuk") => untuk menyisipkan node baru kedalam parentNode.
parentNode.removeChild("<nama node>") ==> untuk menghapus nodeChild yang dimaksud dari parentNode.
parentNode.replaceChild("<nodeChild baru", "<nodeChild target") ==> untuk mengganti nodeChild dengan nodeChild yang baru.
*/
