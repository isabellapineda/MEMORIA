imagenes = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg"
,"img/img7.jpg","img/img8.jpg","img/img9.jpg","img/img10.jpg","img/img11.jpg","img/img12.jpg",
"img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg"
,"img/img7.jpg","img/img8.jpg","img/img9.jpg","img/img10.jpg","img/img11.jpg","img/img12.jpg"];

var N_aleatorio;
var carta = false;
var r;
var click = 0
var contador = 0;
function Cartas(){
	N_aleatorio = Math.floor(Math.random()*(imagenes.length));
	seleccion = imagenes[N_aleatorio];
	return seleccion;
}
$("body").ready(function(){
	for(let i=1;i<7;i++){
		for(let j=1;j<7;j++){
			$("#tr"+i+" td:nth-child("+j+") .contenedor .atras").html("<img src='"+Cartas()+"'>");
			imagenes.splice(N_aleatorio,1);
		}
	}
})

$(document).on("click",".carta",function(){
	if (click<1) {
		click++;
		let r_actual = $(this);
		r_actual.css({'transform':'rotateY(180deg)',"transition":"1s"})
		r_actual.addClass("aux");
		r_actual.removeClass("carta");
		if (carta) {
			if (r.find(".atras img").attr("src") == r_actual.find(".atras img").attr("src")) {
				contador++;
				setTimeout(function(){
					$(".pts").html(contador);
				},700);
				if (c==12) {
					swal("!GANASTE!",{
						icon: "img/bien.png"
					});
				}
				else{
					setTimeout(function(){
						swal("!Acertaste¡",{
							icon: "img/bueno.gif",
						})
						r_actual.removeClass("carta");
						r.removeClass("carta");
					},700);
				}
			}
			else{
				setTimeout(function(){
					r_actual.css({'transform':'rotateY(0deg)',"transition":"1s"});
					r.css({'transform':'rotateY(0deg)',"transition":"1s"});
					r.addClass("carta");
					r.removeClass("aux");
					r_actual.addClass("carta");
					r_actual.removeClass("aux");

				},1000);
				setTimeout(function(){
					swal("¡Fallaste!",{
						icon: "img/fallar.png",
					})
				},600);

			}
			carta = false
			
		}
		else{
			r = r_actual;
			carta = true;
		}
		setTimeout(function(){
			click = 0;
		},420)
	}

})