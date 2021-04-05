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
  let mi2= document.getElementById("mi2").value;
  let mi3= document.getElementById("mi3").value;
  let mi4= document.getElementById("mi4").value;
  let mi5= document.getElementById("mi5").value;
  let mi6= document.getElementById("mi6").value;
  let mi7= document.getElementById("mi7").value;
  let mi8= document.getElementById("mi8").value;

  if (mi2 == "10" && mi1 == "2,5" && mi3 == "-5" && mi4 == "0,3" && mi5 == "2" && mi6 == "2,5" && mi7 == "10" && mi8 == "6") {
    // document.getElementsByClassName('cek3')[0].style.display='none';
    document.getElementsByClassName('m3')[0].style.display='block';
  } else {
    document.getElementsByClassName('none3')[0].style.display='none'; 
    document.getElementById("mi1").style="border: 3px solid red"; 
    document.getElementById("mi2").style="border: 3px solid red"; 
    document.getElementById("mi3").style="border: 3px solid red"; 
    document.getElementById("mi4").style="border: 3px solid red"; 
    document.getElementById("mi5").style="border: 3px solid red"; 
    document.getElementById("mi6").style="border: 3px solid red"; 
    document.getElementById("mi7").style="border: 3px solid red";  
    document.getElementById("mi8").style="border: 3px solid red";
  }
  
  if (mi1 == "2,5"){
    document.getElementById("mi1").style="border: 3px solid green";   
  } else{
    document.getElementById("mi1").style="border: 3px solid red";
  }
  
  if (mi2 == "10"){
    document.getElementById("mi2").style="border: 3px solid green";   
  } else{
    document.getElementById("mi2").style="border: 3px solid red";
  }
  
  if (mi3 == "-5"){
    document.getElementById("mi3").style="border: 3px solid green";   
  } else{
    document.getElementById("mi3").style="border: 3px solid red";
  }
  
  if (mi4 == "0,3"){
    document.getElementById("mi4").style="border: 3px solid green";   
  } else{
    document.getElementById("mi4").style="border: 3px solid red";
  }
  
  if (mi5 == "2"){
    document.getElementById("mi5").style="border: 3px solid green";   
  } else{
    document.getElementById("mi5").style="border: 3px solid red";
  }
  
  if (mi6 == "2,5"){
    document.getElementById("mi6").style="border: 3px solid green";   
  } else{
    document.getElementById("mi6").style="border: 3px solid red";
  }
  
  if (mi7 == "10"){
    document.getElementById("mi7").style="border: 3px solid green";   
  } else{
    document.getElementById("mi7").style="border: 3px solid red";
  }

  if (mi8 == "6"){
    document.getElementById("mi8").style="border: 3px solid green";   
  } else{
    document.getElementById("mi8").style="border: 3px solid red";
  }
}

function cek31(){
  let mi1= document.getElementById("mi1").value;
  
  if (mi1 == "2,5"){
    document.getElementById("mi1").style="border: 3px solid green";     
    document.getElementsByClassName('none3')[0].style.display='none';    
  } else{
    document.getElementById("mi1").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek32(){
  let mi2= document.getElementById("mi2").value;
  
  if (mi2 == "10"){
    document.getElementById("mi2").style="border: 3px solid green";        
    document.getElementsByClassName('none3')[0].style.display='none'; 
  } else{
    document.getElementById("mi2").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek33(){
  let mi3= document.getElementById("mi3").value;
  
  if (mi3 == "-5"){
    document.getElementById("mi3").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("mi3").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek34(){
  let mi4= document.getElementById("mi4").value;
  
  if (mi4 == "0,3"){
    document.getElementById("mi4").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("mi4").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek35(){
  let mi5= document.getElementById("mi5").value;
  
  if (mi5 == "2"){
    document.getElementById("mi5").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("mi5").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek36(){
  let mi6= document.getElementById("mi6").value;
  
  if (mi6 == "2,5"){
    document.getElementById("mi6").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("mi6").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek37(){
  let mi7= document.getElementById("mi7").value;
  
  if (mi7 == "10"){
    document.getElementById("mi7").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none'; 
  } else{
    document.getElementById("mi7").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';    
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek38(){
  let mi8= document.getElementById("mi8").value;
  
  if (mi8 == "6"){
    document.getElementById("mi8").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none'; 
  } else{
    document.getElementById("mi8").style="border: 3px solid red";    
    document.getElementsByClassName('m3')[0].style.display='none';    
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}


//SOAL 2
function salahh(){
  document.getElementById('b1').style.display = 'none';
  document.getElementById('s1').style.display = 'block';
}
function benarr(){
  document.getElementById('b1').style.display = 'block';
  document.getElementById('s1').style.display = 'none';
}


//SOAL 3
function cekno3(){
  let mn3= document.getElementById("mn3").value;

  if (mn3 == "200") {
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

