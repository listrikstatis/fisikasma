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

//SOAL 2
function cek1(){
  let a1= document.getElementById("2aa1").value;
  let b1= document.getElementById("2ab1").value;
  let c1= document.getElementById("2ac1").value;

  if (a1 == "2,25" && b1 == "10" && c1 == "-7") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j1')[0].style.display='block';
    document.getElementsByClassName('none1')[0].style.display='none';
  } else {
    document.getElementsByClassName('none1')[0].style.display='block'; 
    document.getElementById("2aa1").style="border: 3px solid red"; 
    document.getElementById("2ab1").style="border: 3px solid red"; 
    document.getElementById("2ac1").style="border: 3px solid red";
  }
  
  if (a1 == "2,25"){
    document.getElementById("2aa1").style="border: 3px solid green";   
  } else{
    document.getElementById("2aa1").style="border: 3px solid red";
  }
  
  if (b1 == "10"){
    document.getElementById("2ab1").style="border: 3px solid green";   
  } else{
    document.getElementById("2ab1").style="border: 3px solid red";
  }
  
  if (c1 == "-7"){
    document.getElementById("2ac1").style="border: 3px solid green";   
  } else{
    document.getElementById("2ac1").style="border: 3px solid red";
  }

}

function cek11(){
  let a1= document.getElementById("2aa1").value;
  
  if (a1 == "2,25"){
    document.getElementById("2aa1").style="border: 3px solid green";     
    document.getElementsByClassName('none1')[0].style.display='none';    
  } else{
    document.getElementById("2aa1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none1')[0].style.display='block';
  }
}

function cek12(){
  let b1= document.getElementById("2ab1").value;
  
  if (b1 == "10"){
    document.getElementById("2ab1").style="border: 3px solid green";        
    document.getElementsByClassName('none1')[0].style.display='none'; 
  } else{
    document.getElementById("2ab1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none1')[0].style.display='block';
  }
}

function cek13(){
  let c1= document.getElementById("2ac1").value;
  
  if (c1 == "-7"){
    document.getElementById("2ac1").style="border: 3px solid green";      
    document.getElementsByClassName('none1')[0].style.display='none';   
  } else{
    document.getElementById("2ac1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none1')[0].style.display='block';
  }
}

//SOAL 3
function cek3(){
  let cb3= document.getElementById("cb3").value;

  if (cb3 == "4,5" || cb3 =="4.5") {
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

//SOAL 2
function cek2(){
  let a2= document.getElementById("2aa").value;
  let b2= document.getElementById("2ab").value;
  let c2= document.getElementById("2ac").value;

  if (a2 == "1,8" && b2 == "10" && c2 == "2") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j2')[0].style.display='block';
    document.getElementsByClassName('none2')[0].style.display='none';
  } else {
    document.getElementsByClassName('none2')[0].style.display='block'; 
    document.getElementById("2aa").style="border: 3px solid red"; 
    document.getElementById("2ab").style="border: 3px solid red"; 
    document.getElementById("2ac").style="border: 3px solid red";
  }
  
  if (a2 == "1,8"){
    document.getElementById("2aa").style="border: 3px solid green";   
  } else{
    document.getElementById("2aa").style="border: 3px solid red";
  }
  
  if (b2 == "10"){
    document.getElementById("2ab").style="border: 3px solid green";   
  } else{
    document.getElementById("2ab").style="border: 3px solid red";
  }
  
  if (c2 == "2"){
    document.getElementById("2ac").style="border: 3px solid green";   
  } else{
    document.getElementById("2ac").style="border: 3px solid red";
  }

}

function cek21(){
  let a2= document.getElementById("2aa").value;
  
  if (a2 == "1,8"){
    document.getElementById("2aa").style="border: 3px solid green";     
    document.getElementsByClassName('none2')[0].style.display='none';    
  } else{
    document.getElementById("2aa").style="border: 3px solid red";    
    document.getElementsByClassName('j2')[0].style.display='none';  
    document.getElementsByClassName('none2')[0].style.display='block';
  }
}

function cek22(){
  let b2= document.getElementById("2ab").value;
  
  if (b2 == "10"){
    document.getElementById("2ab").style="border: 3px solid green";        
    document.getElementsByClassName('none2')[0].style.display='none'; 
  } else{
    document.getElementById("2ab").style="border: 3px solid red";    
    document.getElementsByClassName('j2')[0].style.display='none';  
    document.getElementsByClassName('none2')[0].style.display='block';
  }
}

function cek23(){
  let c2= document.getElementById("2ac").value;
  
  if (c2 == "2"){
    document.getElementById("2ac").style="border: 3px solid green";      
    document.getElementsByClassName('none2')[0].style.display='none';   
  } else{
    document.getElementById("2ac").style="border: 3px solid red";    
    document.getElementsByClassName('j2')[0].style.display='none';  
    document.getElementsByClassName('none2')[0].style.display='block';
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
