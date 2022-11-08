update_goods();

function update_goods() {
	let result_price = 0;
	let goods = JSON.parse(localStorage.getItem('goods'));
	if(goods.length) {
		for(let i=0; i<goods.length; i++) {
			products.insertAdjacentHTML('beforeend',
			`
			<ul class="products-container">
				<li class="products-element">
					<img class="products-element__img" src="${goods[i][3]}">
					<span class="products-element__name">${goods[i][1]}</span>
					<span class="products-element__price">Price: ${goods[i][2].toLocaleString()}$</span>
					<button class="products-element__btn">Buy</button>
				</li>
			</ul>
			`
			)
		}
	}
}