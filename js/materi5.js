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
  document.getElementById("aa").value = document.getElementById("aa").value.toLowerCase();
  var aaa= document.getElementById("aa").value;
  var ceka = document.getElementById("ceka");

  if (aaa == "dendrit") {
    ceka.src = "../../img/benar.png";
    document.getElementById("aa").style="border: 2px solid green";
  } else {
    ceka.src = "../../img/salah.png";
    document.getElementById("aa").style="border: 2px solid red";
  }
}

function cekjwba(){
  document.getElementById("ab").value = document.getElementById("ab").value.toLowerCase();
	var abb= document.getElementById("ab").value; 
	var cekb = document.getElementById("cekb");

   if (abb == "akson" || abb == "neurit") {
    cekb.src = "../../img/benar.png";
    document.getElementById("ab").style="border: 2px solid green";
  } else {
    cekb.src = "../../img/salah.png";
    document.getElementById("ab").style="border: 2px solid red";
  }
}

function cekjwbb(){
  document.getElementById("ac").value = document.getElementById("ac").value.toLowerCase();
  	var acc= document.getElementById("ac").value;
  	var cekc = document.getElementById("cekc");

  if (acc == "badan sel") {
    cekc.src = "../../img/benar.png";
    document.getElementById("ac").style="border: 2px solid green";
  } else {
    cekc.src = "../../img/salah.png";
    document.getElementById("ac").style="border: 2px solid red";
  }
}

function cekjwbc(){
  document.getElementById("ad").value = document.getElementById("ad").value.toLowerCase();
  var add= document.getElementById("ad").value;  
  var cekd = document.getElementById("cekd");

  if (add == "nodus ranvier") {
    cekd.src = "../../img/benar.png";
    document.getElementById("ad").style="border: 2px solid green";
  } else {
    cekd.src = "../../img/salah.png";
    document.getElementById("ad").style="border: 2px solid red";
  }
}

function cekjwbd(){
  document.getElementById("ae").value = document.getElementById("ae").value.toLowerCase();
	var aee= document.getElementById("ae").value;  
  	var ceke = document.getElementById("ceke");
  if (aee == "myelin") {
    ceke.src = "../../img/benar.png";
    document.getElementById("ae").style="border: 2px solid green";
  } else {
    ceke.src = "../../img/salah.png";
    document.getElementById("ae").style="border: 2px solid red";
  }

}

$('.in').bind('keyup blur',function(){ 
    var node = $(this);
    node.val(node.val().replace(/[^a-zA-Z\s]/g,'') ); }
);

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" activeuy", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " activeuy";
// }

