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
function cek(){
  let v1= document.getElementById("v1").value;
  let q1= document.getElementById("q1").value;
  let h1= document.getElementById("h1").value;

  if (v1 == "9" && q1 == "30" && h1 == "270") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j1')[0].style.display='block';
  } else {
    document.getElementsByClassName('none')[0].style.display='none'; 
    document.getElementById("v1").style="border: 3px solid red"; 
    document.getElementById("q1").style="border: 3px solid red"; 
    document.getElementById("h1").style="border: 3px solid red";
  }
  
  if (v1 == "9"){
    document.getElementById("v1").style="border: 3px solid green";   
  } else{
    document.getElementById("v1").style="border: 3px solid red";
  }
  
  if (q1 == "30"){
    document.getElementById("q1").style="border: 3px solid green";   
  } else{
    document.getElementById("q1").style="border: 3px solid red";
  }
  
  if (h1 == "270"){
    document.getElementById("h1").style="border: 3px solid green";   
  } else{
    document.getElementById("h1").style="border: 3px solid red";
  }

}

function cek11(){
  let v1= document.getElementById("v1").value;
  
  if (v1 == "9"){
    document.getElementById("v1").style="border: 3px solid green";     
    document.getElementsByClassName('none')[0].style.display='none';    
  } else{
    document.getElementById("v1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

function cek12(){
  let q1= document.getElementById("q1").value;
  
  if (q1 == "30"){
    document.getElementById("q1").style="border: 3px solid green";        
    document.getElementsByClassName('none')[0].style.display='none'; 
  } else{
    document.getElementById("q1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

function cek13(){
  let h1= document.getElementById("h1").value;
  
  if (h1 == "270"){
    document.getElementById("h1").style="border: 3px solid green";      
    document.getElementsByClassName('none')[0].style.display='none';   
  } else{
    document.getElementById("h1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

//SOAL 2
function cek2(){
  let a2= document.getElementById("2aa").value;
  let b2= document.getElementById("2ab").value;
  let c2= document.getElementById("2ac").value;

  if (a2 == "45" && b2 == "15" && c2 == "3") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j2')[0].style.display='block';
  } else {
    document.getElementsByClassName('none2')[0].style.display='none'; 
    document.getElementById("2aa").style="border: 3px solid red"; 
    document.getElementById("2ab").style="border: 3px solid red"; 
    document.getElementById("2ac").style="border: 3px solid red";
  }
  
  if (a2 == "45"){
    document.getElementById("2aa").style="border: 3px solid green";   
  } else{
    document.getElementById("2aa").style="border: 3px solid red";
  }
  
  if (b2 == "15"){
    document.getElementById("2ab").style="border: 3px solid green";   
  } else{
    document.getElementById("2ab").style="border: 3px solid red";
  }
  
  if (c2 == "3"){
    document.getElementById("2ac").style="border: 3px solid green";   
  } else{
    document.getElementById("2ac").style="border: 3px solid red";
  }

}

function cek21(){
  let a2= document.getElementById("2aa").value;
  
  if (a2 == "45"){
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
  
  if (b2 == "15"){
    document.getElementById("2ab").style="border: 3px solid green";        
    document.getElementsByClassName('none2')[0].style.display='none'; 
  } else{
    document.getElementById("2ab").style="border: 3px solid red";    
    document.getElementsByClassName('j2')[0].style.display='none';  
    document.getElementsByClassName('none2')[0].style.display='block';
  }
}

function cek23(){
  let c3= document.getElementById("2ac").value;
  
  if (c3 == "3"){
    document.getElementById("2ac").style="border: 3px solid green";      
    document.getElementsByClassName('none2')[0].style.display='none';   
  } else{
    document.getElementById("2ac").style="border: 3px solid red";    
    document.getElementsByClassName('j2')[0].style.display='none';  
    document.getElementsByClassName('none2')[0].style.display='block';
  }
}

//SOAL 3
function cek3(){
  let a3= document.getElementById("3aa").value;
  let b3= document.getElementById("3ab").value;
  let c3= document.getElementById("3ac").value;

  if (a3 == "100" && b3 == "10" && c3 == "10") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j3')[0].style.display='block';
  } else {
    document.getElementsByClassName('none3')[0].style.display='none'; 
    document.getElementById("3aa").style="border: 3px solid red"; 
    document.getElementById("3ab").style="border: 3px solid red"; 
    document.getElementById("3ac").style="border: 3px solid red";
  }
  
  if (a3 == "100"){
    document.getElementById("3aa").style="border: 3px solid green";   
  } else{
    document.getElementById("3aa").style="border: 3px solid red";
  }
  
  if (b3 == "10"){
    document.getElementById("3ab").style="border: 3px solid green";   
  } else{
    document.getElementById("3ab").style="border: 3px solid red";
  }
  
  if (c3 == "10"){
    document.getElementById("3ac").style="border: 3px solid green";   
  } else{
    document.getElementById("3ac").style="border: 3px solid red";
  }

}

function cek31(){
  let a3= document.getElementById("3aa").value;
  
  if (a3 == "100"){
    document.getElementById("3aa").style="border: 3px solid green";     
    document.getElementsByClassName('none3')[0].style.display='none';    
  } else{
    document.getElementById("3aa").style="border: 3px solid red";    
    document.getElementsByClassName('j3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek32(){
  let b3= document.getElementById("3ab").value;
  
  if (b3 == "10"){
    document.getElementById("3ab").style="border: 3px solid green";        
    document.getElementsByClassName('none3')[0].style.display='none'; 
  } else{
    document.getElementById("3ab").style="border: 3px solid red";    
    document.getElementsByClassName('j3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

function cek33(){
  let c3= document.getElementById("3ac").value;
  
  if (c3 == "10"){
    document.getElementById("3ac").style="border: 3px solid green";      
    document.getElementsByClassName('none3')[0].style.display='none';   
  } else{
    document.getElementById("3ac").style="border: 3px solid red";    
    document.getElementsByClassName('j3')[0].style.display='none';  
    document.getElementsByClassName('none3')[0].style.display='block';
  }
}

//SOAL 4
function cek4(){
  let a4= document.getElementById("4aa").value;
  let b4= document.getElementById("4ab").value;
  let c4= document.getElementById("4ac").value;

  if (a4 == "210" && b4 == "30" && c4 == "70") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j4')[0].style.display='block';
  } else {
    document.getElementsByClassName('none4')[0].style.display='none'; 
    document.getElementById("4aa").style="border: 3px solid red"; 
    document.getElementById("4ab").style="border: 3px solid red"; 
    document.getElementById("4ac").style="border: 3px solid red";
  }
  
  if (a4 == "210"){
    document.getElementById("4aa").style="border: 3px solid green";   
  } else{
    document.getElementById("4aa").style="border: 3px solid red";
  }
  
  if (b4 == "30"){
    document.getElementById("4ab").style="border: 3px solid green";   
  } else{
    document.getElementById("4ab").style="border: 3px solid red";
  }
  
  if (c4 == "70"){
    document.getElementById("4ac").style="border: 3px solid green";   
  } else{
    document.getElementById("4ac").style="border: 3px solid red";
  }

}

function cek41(){
  let a4= document.getElementById("4aa").value;
  
  if (a4 == "210"){
    document.getElementById("4aa").style="border: 3px solid green";     
    document.getElementsByClassName('none4')[0].style.display='none';    
  } else{
    document.getElementById("4aa").style="border: 3px solid red";    
    document.getElementsByClassName('j4')[0].style.display='none';  
    document.getElementsByClassName('none4')[0].style.display='block';
  }
}

function cek42(){
  let b4= document.getElementById("4ab").value;
  
  if (b4 == "30"){
    document.getElementById("4ab").style="border: 3px solid green";        
    document.getElementsByClassName('none4')[0].style.display='none'; 
  } else{
    document.getElementById("4ab").style="border: 3px solid red";    
    document.getElementsByClassName('j4')[0].style.display='none';  
    document.getElementsByClassName('none4')[0].style.display='block';
  }
}

function cek43(){
  let c4= document.getElementById("4ac").value;
  
  if (c4 == "70"){
    document.getElementById("4ac").style="border: 3px solid green";      
    document.getElementsByClassName('none4')[0].style.display='none';   
  } else{
    document.getElementById("4ac").style="border: 3px solid red";    
    document.getElementsByClassName('j4')[0].style.display='none';  
    document.getElementsByClassName('none4')[0].style.display='block';
  }
}

//Input Soal 
$('input[class="bp"]').keyup(function(e)
                                {
  if (/^[a-zA-Z\s]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z\s]+$/, '');
  }
});

