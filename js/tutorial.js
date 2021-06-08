//input nilai ke variabel localstorage
localStorage.setItem("nkuis1",80);
localStorage.setItem("nkuis2",80);
localStorage.setItem("nkuis3",80);
localStorage.setItem("nkuis4",80);
localStorage.setItem("nkuis5",80);

//input nilai ke variabel localstorage
// localStorage.setItem("nkuis1",0);
// localStorage.setItem("nkuis2",0);
// localStorage.setItem("nkuis3",0);
// localStorage.setItem("nkuis4",0);
// localStorage.setItem("nkuis5",0);

//hapus variabel dari localstorage
// localStorage.removeItem("nkuis1");
// localStorage.removeItem("nkuis2");
// localStorage.removeItem("nkuis3");
// localStorage.removeItem("nkuis4");
// localStorage.removeItem("nkuis5");

//hapus semua variabel dari localstorage
// localStorage.clear();

console.log(localStorage);

/*subbab 2*/
function materi2(){
    var skor = localStorage.getItem("nkuis1");
    if (skor>=80){
      window.location.href='../Materi2/potensial.html#potensial';
    } else{
      alert('Maaf, Kamu belum bisa membuka materi ini!');
    }
}
function kuis2(){
    var skor = localStorage.getItem("nkuis1");
    // var skor = 80;
    if (skor>=80){
      window.location.href='../Materi2/latihan2.html#potensial';
    } else{
      alert('Maaf, Kamu belum bisa membuka kuis ini!');
    }
}

/*subbab 3*/
function materi3(){
  var skor = localStorage.getItem("nkuis2");
  if (skor>=80){
    window.location.href='../Materi3/kapasitor.html#kapasitor';
  } else{
    alert('Maaf, Kamu belum bisa membuka materi ini!');
  }
}
function materi3b(){
  var skor = localStorage.getItem("nkuis2");
  if (skor>=80){
    window.location.href='../Materi3/kapasitor3.html#kapasitor';
  } else{
    alert('Maaf, Kamu belum bisa membuka materi ini!');
  }
}

function kuis3(){
  var skor = localStorage.getItem("nkuis2");
  if (skor>=80){
    window.location.href='../Materi3/latihan3.html#kapasitor';
  } else{
    alert('Maaf, Kamu belum bisa membuka kuis ini!');
  }
}

/*evaluasi*/
function evaluasi(){
  var skor = localStorage.getItem("nkuis3");
  if (skor>=75){
    window.location.href='../evaluasi/evaluasi.html#evaluasi';
  } else{
    alert('Maaf, Kamu belum bisa membuka Evaluasi ini!');
  }
}