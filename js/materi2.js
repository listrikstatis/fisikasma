// Video
$(document).ready(function(){
      $('.kolom').hide();
      $('.tanya').hide();
      
    document.getElementById('videooo').addEventListener('ended',myHandler,false);

    function myHandler(e) {
      $('.kolom').show(600);
      $('.tanya').show(1000);
      $('.first').hide(100);
    }    
  });

// slide
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

// halaman 1
function salah(){
  document.getElementById('b1').style.display = 'none';
  document.getElementById('s1').style.display = 'block';
}
function benar(){
  document.getElementById('b1').style.display = 'block';
  document.getElementById('s1').style.display = 'none';
}

function salah2(){
  document.getElementById('b2').style.display = 'none';
  document.getElementById('s2').style.display = 'block';
}
function benar2(){
  document.getElementById('b2').style.display = 'block';
  document.getElementById('s2').style.display = 'none';
}

// halaman 2-------------------------------------------------------------------------------------------------------------
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

// soal 2
function salahh(){
  document.getElementById('b1').style.display = 'none';
  document.getElementById('s1').style.display = 'block';
}
function benarr(){
  document.getElementById('b1').style.display = 'block';
  document.getElementById('s1').style.display = 'none';
}

//SOAL 3
function cek3(){
  let cb3= document.getElementById("cb3").value;

  if (cb3 == "0,8" || cb3 =="0.8") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('co1')[0].style.display='block';    
    document.getElementById("cb3").style="border: 3px solid green";    
    document.getElementsByClassName('non1')[0].style.display='none'; 
  } else {          
    document.getElementsByClassName('co1')[0].style.display='none'; 
    document.getElementById("cb3").style="border: 3px solid red"; 
    document.getElementsByClassName('non1')[0].style.display='block'; 
}
}

//SOAL 1
function cek(){
  let cb31= document.getElementById("cb31").value;
  let cb32= document.getElementById("cb32").value;
  let cb33= document.getElementById("cb33").value;
  let cb34= document.getElementById("cb34").value;
  let cb35= document.getElementById("cb35").value;
  let cb36= document.getElementById("cb36").value;
  let cb37= document.getElementById("cb37").value;

  if (cb31 == "10" && cb32 == "20" && cb33 == "0,2" && cb34 == "2" && cb35 == "4,5" && cb36 == "10" && cb37 == "13") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('co3')[0].style.display='block';
  } else {          
    document.getElementsByClassName('non3')[0].style.display='none'; 
    document.getElementById("cb31").style="border: 3px solid red"; 
    document.getElementById("cb32").style="border: 3px solid red"; 
    document.getElementById("cb33").style="border: 3px solid red"; 
    document.getElementById("cb34").style="border: 3px solid red"; 
    document.getElementById("cb35").style="border: 3px solid red"; 
    document.getElementById("cb36").style="border: 3px solid red"; 
    document.getElementById("cb37").style="border: 3px solid red"; 
  }
  if (cb31 == "10"){
    document.getElementById("cb31").style="border: 3px solid green";   
  } else {
    document.getElementById("cb31").style="border: 3px solid red"; 
  }
  
  if(cb32 == "20"){
    document.getElementById("cb32").style="border: 3px solid green";
  } else {
    document.getElementById("cb32").style="border: 3px solid red"; 
  }
  
  if(cb33 == "0,2"){
    document.getElementById("cb33").style="border: 3px solid green";
  } else {
    document.getElementById("cb33").style="border: 3px solid red"; 
  }
  
  if(cb34 == "2"){
    document.getElementById("cb34").style="border: 3px solid green";
  } else {
    document.getElementById("cb34").style="border: 3px solid red"; 
  }
  
  if(cb35 == "4,5"){
    document.getElementById("cb35").style="border: 3px solid green";
  } else {
    document.getElementById("cb35").style="border: 3px solid red"; 
  }
  
  if(cb36 == "10"){
    document.getElementById("cb36").style="border: 3px solid green";
  } else {
    document.getElementById("cb36").style="border: 3px solid red"; 
  }
  
  if(cb37 == "13"){
    document.getElementById("cb37").style="border: 3px solid green";
  } else {
    document.getElementById("cb37").style="border: 3px solid red"; 
  }
}

function cek11(){
  let cb31= document.getElementById("cb31").value;
  
  if (cb31 == "10"){
    document.getElementById("cb31").style="border: 3px solid green";     
    document.getElementsByClassName('non3')[0].style.display='none';    
  } else{
    document.getElementById("cb31").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek12(){
  let cb32= document.getElementById("cb32").value;
  
  if (cb32 == "20"){
    document.getElementById("cb32").style="border: 3px solid green";        
    document.getElementsByClassName('non3')[0].style.display='none'; 
  } else{
    document.getElementById("cb32").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek13(){
  let cb33= document.getElementById("cb33").value;
  
  if (cb33 == "0,2"){
    document.getElementById("cb33").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none';   
  } else{
    document.getElementById("cb33").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek14(){
  let cb34= document.getElementById("cb34").value;
  
  if (cb34 == "2"){
    document.getElementById("cb34").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none';   
  } else{
    document.getElementById("cb34").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek15(){
  let cb35= document.getElementById("cb35").value;
  
  if (cb35 == "4,5"){
    document.getElementById("cb35").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none';   
  } else{
    document.getElementById("cb35").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek16(){
  let cb36= document.getElementById("cb36").value;
  
  if (cb36 == "10"){
    document.getElementById("cb36").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none';   
  } else{
    document.getElementById("cb36").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';  
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}

function cek17(){
  let cb37= document.getElementById("cb37").value;
  
  if (cb37 == "13"){
    document.getElementById("cb37").style="border: 3px solid green";      
    document.getElementsByClassName('non3')[0].style.display='none'; 
  } else{
    document.getElementById("cb37").style="border: 3px solid red";    
    document.getElementsByClassName('co3')[0].style.display='none';    
    document.getElementsByClassName('non3')[0].style.display='block';
  }
}


//Input soal 
$('input[class="cb"]').keyup(function(e)
                                {
  if (/^[a-zA-Z\s]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z\s]+$/, '');
  }
});
