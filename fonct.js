function counting(tableau){
	var nombre = 0;
for (var i = 0; i < tableau.length; i++) {

console.log("la longueur de la chaine" +i+ "est "+ tableau[i].length)
	
	if (tableau[i].length > 50 ) {
		nombre = nombre +1;
	}
}
	console.log("Le nombre d'enregistrements ayant plus que 50 caracteres est: ")
	console.log(nombre)
}
module.exports = counting;

/*var fruits = new Array();  
fruits.push("bananen fhnjf nnnnnnn ififhjif fihihfdfhidhdi idhidhsohf shfsuhfh", "pomme", "skhkdddjhskjbkjsjgsgkksjgksgfkskjskfgsdfkjhsfkjhpêche"); 

counting(fruits);*/