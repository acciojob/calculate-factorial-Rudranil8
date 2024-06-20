//your JS code here. If required.
let x=prompt();
let p=1;
for(let i=x; i>=1; i--){
	p*=i;
}
alert(`The factorial of ${x} is ${p}`);