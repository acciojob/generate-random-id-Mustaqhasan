function makeid(l) {
  // write your code here
	let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%^&*";

	let res="";
    
    for(let i=0; i<l; i++){
        let max=string.length-1;
        let min=0;
        let num=Math.floor(Math.random() * (max-min+1))+min;
        res=res+string[num];
    }
    console.log(res)
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
