var goods = {
	"3344" : {
		"name": "Banana",
		"cost": 30,
		"img": "https://cdn2.iconfinder.com/data/icons/jetflat-fruits/90/002_014_banana_banan_plant_herb_fruit_food-128.png",
		"warehouse" : "yes"
	},
	"3345" : {
		"name": "Tomato",
		"cost": 40,
		"img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
		"warehouse" : "yes"
	},
	"334532" : {
		"name": "Apple",
		"cost": 45,
		"img": "https://cdn3.iconfinder.com/data/icons/fruits-8/512/apple-128.png",
		"warehouse" : "yes"
	}
};
console.log(goods);
var out = '';
for(var key in goods) {
	out+='Name: '+goods[key].name +'<br>';
	out+='Price: '+goods[key].cost +'<br>';
	out+='In stock: '+goods[key].warehouse +'<br>';
	out+='<img src="'+goods[key].img+'">';
	out+='<hr>';	
}
document.getElementById('out').innerHTML = out;