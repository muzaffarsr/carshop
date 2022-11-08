if(!localStorage.getItem('goods')) {
	localStorage.setItem('goods', JSON.stringify([]))
}

document.querySelector('button.add_new').addEventListener('click', function(e) {
	let name = document.getElementById('car_name').value
	let pricetext = document.getElementById('car_price').value
	let price = Number.parseInt(pricetext)
	let img = document.getElementById('car_img').value
	if(name && price) {
		document.getElementById('car_name').value = '';
		document.getElementById('car_price').value = '';
		document.getElementById('car_img').value = '';
		let goods = JSON.parse(localStorage.getItem('goods'));
		goods.push(['good_'+goods.length, name, price, img]);
		localStorage.setItem('goods', JSON.stringify(goods));
		e.preventDefault();
		Swal.fire(
			"Added!",
			"Car Added Successfully!",
			"success"
		)
	}
		
})