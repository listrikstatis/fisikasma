// $(document).ready(function(){
//     $(".contohsoal").hide();
//     $(".pertanyaan").hide();
//     $(".soalbtn").hide();
//           $(".contohbtn").click(function(){
//               $(".contohsoal").show(0);
//               $(".contohbtn").hide(0);              
//               $(".soalbtn").show(0);
//           });     
          
//           $(".soalbtn").click(function(){
//               $(".pertanyaan").show(0);
//               $(".soalbtn").hide(0);
//           });
// });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("soalnya");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeuy", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeuy";
}

//SOAL 1
function cek3(){
  let mi1= document.getElementById("mi1").value;

  if (mi1 == "2000") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('m3')[0].style.display='block';    
    document.getElementById("mi1").style="border: 3px solid green";    
    document.getElementsByClassName('none3')[0].style.display='none'; 
  } else {          
    document.getElementsByClassName('m3')[0].style.display='none'; 
    document.getElementById("mi1").style="border: 3px solid red"; 
    document.getElementsByClassName('none3')[0].style.display='block'; 
}
}

function cek2(){
  let mi2= document.getElementById("mi2").value;

  if (mi2 == "150") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('m2')[0].style.display='block';    
    document.getElementById("mi2").style="border: 3px solid green";    
    document.getElementsByClassName('none1')[0].style.display='none'; 
  } else {          
    document.getElementsByClassName('m2')[0].style.display='none'; 
    document.getElementById("mi2").style="border: 3px solid red"; 
    document.getElementsByClassName('none1')[0].style.display='block'; 
}
}

//SOAL 3
function cekno3(){
  let mn3= document.getElementById("mn3").value;

  if (mn3 == "40") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('m2')[0].style.display='block';    
    document.getElementById("mn3").style="border: 3px solid green";    
    document.getElementsByClassName('none2')[0].style.display='none'; 
  } else {          
    document.getElementsByClassName('m2')[0].style.display='none'; 
    document.getElementById("mn3").style="border: 3px solid red"; 
    document.getElementsByClassName('none2')[0].style.display='block'; 
}
}

//Input Soal 
$('input[class="md"]').keyup(function(e)
                                {
  if (/^[a-zA-Z\s]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z\s]+$/, '');
  }
});

