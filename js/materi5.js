$(document).ready(function(){
			$('.kolom').hide();
			
	$('.klik').click(function(){
      $('.kolom').show(500);
      $('.first').hide();
		});	
  });
  
//   $(document).ready(function(){
//   $(".o").hide();
//     $(".read").click(function(){
//       $(".read").hide(0);
//       $(".o").show(100);
//     });
// });

//pertanyaan 1
function cekjwb(){
  var aaa= document.getElementById("aa").value;
  var ceka = document.getElementById("ceka");

  if (aaa == "0,25") {
    ceka.src = "../../img/benar.png";
    document.getElementById("aa").style="border: 2px solid green";    
    document.getElementsByClassName('m3')[0].style.display='block';
    document.getElementsByClassName('none3')[0].style.display='none'; 
  } else {
    ceka.src = "../../img/salah.png";
    document.getElementById("aa").style="border: 2px solid red";
    document.getElementsByClassName('m3')[0].style.display='none';
    document.getElementsByClassName('none3')[0].style.display='block'; 
  }
}

//SOAL 2 a
function cek1(){
  let a1= document.getElementById("2aa1").value;
  let b1= document.getElementById("2ab1").value;
  let c1= document.getElementById("2ac1").value;

  if (a1 == "7,2" && b1 == "10" && c1 == "-12") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j1')[0].style.display='block';
    document.getElementsByClassName('none1')[0].style.display='none';
  } else {
    document.getElementsByClassName('none1')[0].style.display='block'; 
    document.getElementById("2aa1").style="border: 3px solid red"; 
    document.getElementById("2ab1").style="border: 3px solid red"; 
    document.getElementById("2ac1").style="border: 3px solid red";
  }
  
  if (a1 == "7,2"){
    document.getElementById("2aa1").style="border: 3px solid green";   
  } else{
    document.getElementById("2aa1").style="border: 3px solid red";
  }
  
  if (b1 == "10"){
    document.getElementById("2ab1").style="border: 3px solid green";   
  } else{
    document.getElementById("2ab1").style="border: 3px solid red";
  }
  
  if (c1 == "-12"){
    document.getElementById("2ac1").style="border: 3px solid green";   
  } else{
    document.getElementById("2ac1").style="border: 3px solid red";
  }

}

function cek11(){
  let a1= document.getElementById("2aa1").value;
  
  if (a1 == "7,2"){
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
  
  if (c1 == "-12"){
    document.getElementById("2ac1").style="border: 3px solid green";      
    document.getElementsByClassName('none1')[0].style.display='none';   
  } else{
    document.getElementById("2ac1").style="border: 3px solid red";    
    document.getElementsByClassName('j1')[0].style.display='none';  
    document.getElementsByClassName('none1')[0].style.display='block';
  }
}

//SOAL 2 b
function cek2(){
  let a2= document.getElementById("2aa2").value;
  let b2= document.getElementById("2ab2").value;
  let c2= document.getElementById("2ac2").value;

  if (a2 == "72" && b2 == "10" && c2 == "-12") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j2')[0].style.display='block';
    document.getElementsByClassName('none')[0].style.display='none';
  } else {
    document.getElementsByClassName('none')[0].style.display='block'; 
    document.getElementById("2aa2").style="border: 3px solid red"; 
    document.getElementById("2ab2").style="border: 3px solid red"; 
    document.getElementById("2ac2").style="border: 3px solid red";
  }
  
  if (a2 == "72"){
    document.getElementById("2aa2").style="border: 3px solid green";   
  } else{
    document.getElementById("2aa2").style="border: 3px solid red";
  }
  
  if (b2 == "10"){
    document.getElementById("2ab2").style="border: 3px solid green";   
  } else{
    document.getElementById("2ab2").style="border: 3px solid red";
  }
  
  if (c2 == "-12"){
    document.getElementById("2ac2").style="border: 3px solid green";   
  } else{
    document.getElementById("2ac2").style="border: 3px solid red";
  }

}

function cek21(){
  let a2= document.getElementById("2aa2").value;
  
  if (a2 == "72"){
    document.getElementById("2aa2").style="border: 3px solid green";     
    document.getElementsByClassName('none')[0].style.display='none';    
  } else{
    document.getElementById("2aa2").style="border: 3px solid red";    
    document.getElementsByClassName('j2')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

function cek22(){
  let b2= document.getElementById("2ab2").value;
  
  if (b2 == "10"){
    document.getElementById("2ab2").style="border: 3px solid green";        
    document.getElementsByClassName('none')[0].style.display='none'; 
  } else{
    document.getElementById("2ab2").style="border: 3px solid red";    
    document.getElementsByClassName('j2')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

function cek23(){
  let c2= document.getElementById("2ac2").value;
  
  if (c2 == "-12"){
    document.getElementById("2ac2").style="border: 3px solid green";      
    document.getElementsByClassName('none')[0].style.display='none';   
  } else{
    document.getElementById("2ac2").style="border: 3px solid red";    
    document.getElementsByClassName('j2')[0].style.display='none';  
    document.getElementsByClassName('none')[0].style.display='block';
  }
}

//SOAL 2 c
function cek3(){
  let a3= document.getElementById("2aa3").value;
  let b3= document.getElementById("2ab3").value;
  let c3= document.getElementById("2ac3").value;

  if (a3 == "3,6" && b3 == "10" && c3 == "-10") {
    // document.getElementsByClassName('cek')[0].style.display='none';
    document.getElementsByClassName('j3')[0].style.display='block';
    document.getElementsByClassName('none4')[0].style.display='none';
  } else {
    document.getElementsByClassName('none4')[0].style.display='block'; 
    document.getElementById("2aa3").style="border: 3px solid red"; 
    document.getElementById("2ab3").style="border: 3px solid red"; 
    document.getElementById("2ac3").style="border: 3px solid red";
  }
  
  if (a3 == "3,6"){
    document.getElementById("2aa3").style="border: 3px solid green";   
  } else{
    document.getElementById("2aa3").style="border: 3px solid red";
  }
  
  if (b3 == "10"){
    document.getElementById("2ab3").style="border: 3px solid green";   
  } else{
    document.getElementById("2ab3").style="border: 3px solid red";
  }
  
  if (c3 == "-10"){
    document.getElementById("2ac3").style="border: 3px solid green";   
  } else{
    document.getElementById("2ac3").style="border: 3px solid red";
  }

}

function cek31(){
  let a3= document.getElementById("2aa3").value;
  
  if (a3 == "3,6"){
    document.getElementById("2aa3").style="border: 3px solid green";     
    document.getElementsByClassName('none4')[0].style.display='none';    
  } else{
    document.getElementById("2aa3").style="border: 3px solid red";    
    document.getElementsByClassName('j3')[0].style.display='none';  
    document.getElementsByClassName('none4')[0].style.display='block';
  }
}

function cek32(){
  let b3= document.getElementById("2ab3").value;
  
  if (b3 == "10"){
    document.getElementById("2ab3").style="border: 3px solid green";        
    document.getElementsByClassName('none4')[0].style.display='none'; 
  } else{
    document.getElementById("2ab3").style="border: 3px solid red";    
    document.getElementsByClassName('j3')[0].style.display='none';  
    document.getElementsByClassName('none4')[0].style.display='block';
  }
}

function cek33(){
  let c3= document.getElementById("2ac3").value;
  
  if (c3 == "-10"){
    document.getElementById("2ac3").style="border: 3px solid green";      
    document.getElementsByClassName('none4')[0].style.display='none';   
  } else{
    document.getElementById("2ac3").style="border: 3px solid red";    
    document.getElementsByClassName('j3')[0].style.display='none';  
    document.getElementsByClassName('none4')[0].style.display='block';
  }
}


$('.in').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-zA-Z\s]/g,'') ); }
);


//Input Soal 
$('input[class="bp"]').keyup(function(e)
                                {
  if (/^[a-zA-Z\s]+$/.test(this.value))
  {
    this.value = this.value.replace(/^[a-zA-Z\s]+$/, '');
  }
});

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

