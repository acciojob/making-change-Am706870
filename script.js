const makeChange = (c) => {
	const coins = {
		0: ["q", 25],
		1: ["d", 10],
		2: ["n", 5],
		3: ["p", 1],
	};
	let amount = {}
	c = Number(c);
	
	for(let i=0; i<=3;i++){
		const [bill, val] = coins[i]
		const value = Math.floor(c/val) 
		
		
		if(value>0){
			
			amount[bill]	 = value;
		
			
			c -= value*val; 
		}else {
			amount[bill] = 0;
		}
	}
		return amount
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
