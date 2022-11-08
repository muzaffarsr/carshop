update_goods();

function update_goods() {
	let result_price = 0;
	let tbody = document.querySelector('.list');
	tbody.innerHTML = "";
	let goods = JSON.parse(localStorage.getItem('goods'));
	if(goods.length) {
		table1.hidden = false;
		for(let i=0; i<goods.length; i++) {
			tbody.insertAdjacentHTML('beforeend',
			`
			<tr class="align-middle">
				<td>${i+1}</td>
				<td class='name'>${goods[i][1]}</td>
				<td class='price'>${goods[i][2].toLocaleString()}</td>
				<td><button class="btn btn-danger" data-delete="${goods[i][0]}">&#10006</button></td>
			</tr>
			`
			)
		}
	}else {
		table1.hidden = true;
	}
}

document.querySelector('.list').addEventListener('click', function(e) {
	if(!e.target.dataset.delete){
		return
	}
	Swal.fire({
		icon: 'warning',
  		title: 'Warning!',
  		text: 'Are You Sure You Want To Delete The Item?',
  		showCancelButton: true,
  		confirmButtonColor: '#3085d6',
  		cancelButtonColor: '#d33',
  		confirmButtonText: 'Ok',
  		cancelButtonText: 'Cancel',
	}).then((result) => {
		if(result.isConfirmed){
			let goods = JSON.parse(localStorage.getItem('goods'))
			for(let i=0; i<goods.length; i++){
				if(goods[i][0] == e.target.dataset.delete){
					goods.splice(i, 1)
					localStorage.setItem('goods', JSON.stringify(goods))
					update_goods()
				}
			}
			Swal.fire(
				"Deleted!",
				"The Selected Product Was Successfully Deleted",
				"success"
			)
		}
	})
})