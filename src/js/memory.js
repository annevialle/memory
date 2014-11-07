$(document).ready(function() {
	tableauCartes = new Array(5);

//création des cartes
	for(k=0;k<=5;k++) {
		var carte = $(document.createElement("div")).attr("id", "carte" + k + "").height(117).width(116).prependTo("#tableauCartes");
		$("#carte"+k).css("background", 'url(img/memory0' + k + '.png)').css("display", "inline-block").hide();

		tableauCartes[k] = $("#carte"+k);

	}

var game = new Object();
game.test = "test";
game.attribut2 = "blabla";

		console.log(game.attribut2);

//mélange des cartes
tableauCartes = _.shuffle(tableauCartes);

//affichage des cartes
	for(k=0;k<=5;k++) {

		tableauCartes[k].show();

	}

	$('#carte1').click(function(){
	      alert();
	 });

	console.log(tableauCartes);

});