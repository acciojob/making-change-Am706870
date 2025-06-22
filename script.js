const makeChange = (c) => {
	const coins = {
		0: [p: 1]
		1: [n: 5]
		2: [d: 10]
		3: [q: 25]
	}
	const amount = {}
	for(let i=0; i=3;i++){
		const [bill, val] = coins[i]
		while(c >= val){
			amount += [bill,val]
			c -=coins[val]  
		}
	}
  // your name here
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
