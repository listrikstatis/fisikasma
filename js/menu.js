// function ganti1() {
// 	document.getElementById("img").src="img/home.png";
// }

// function ganti2(){
// 	document.getElementById("img").src="img/kd.png";
// }

// function ganti3(){
// 	document.getElementById("img").src="img/petunjuk.png";
// }

$(document).ready(function(){
    $(".hal2").hide();
    $(".hal3").hide();
          $(".no1").click(function(){
                $(".hal2").hide(0);
                $(".hal3").hide(0);
                $(".hal1").show(0);
                $(".no1").addClass("active");
                $(".no2").removeClass("active");
                $(".no3").removeClass("active");
          });
          $(".no2").click(function(){
                $(".hal2").show(0);
                $(".hal1").hide(0);
                $(".hal3").hide(0);
                $(".no2").addClass("active");
                $(".no1").removeClass("active");
                $(".no3").removeClass("active");
          });
          $(".no3").click(function(){
                $(".hal3").show(0);
                $(".hal2").hide(0);
                $(".hal1").hide(0);
                $(".no3").addClass("active");
                $(".no2").removeClass("active");
                $(".no1").removeClass("active");
          });
});

