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

//pertanyaan bagian sel saraf 
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

