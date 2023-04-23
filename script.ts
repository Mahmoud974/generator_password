const uppercase_letter:string = "AZERTYUIOPQSDFGHJKLMWXCVBN",
lowercase_letter:string = uppercase_letter
  .toLowerCase()
  .split("")
  .reverse()
  .join(""),numbers_password:string = "1234567890";
let symbols_password:string = "'&é(§è!çà)-,;:=$%";
let new_password:string[] = [];

let new_password_reverse:any
let new_password_one:string;
let generate_form = <HTMLElement>document.getElementById('generate_form');
let quantity =<HTMLElement>document.getElementById('quantity');
let password=<HTMLHeadElement>document.getElementById('password');
let checked:any;
let copy_password = <HTMLElement>document.querySelector('#copy_password')
let nbreRange:number; 
let box_color = document.querySelectorAll(".box_color")

/**
 * Choisir les éléments checkbox pour son MDP
 */
document.querySelector('#different_choice')?.addEventListener("change", (e:any)=> {
switch (e.target.id) {
    case "uppercase_letter":
      new_password.push(uppercase_letter);
      break;
    case "lowercase_letter":
      new_password.push(lowercase_letter);
      break;
    case "numbers":
      new_password.push(numbers_password);
      break;
    case "symbols":
      new_password.push(symbols_password);
      break;
}
});

/**
 * Choisir la quantité souhaité pour son MDP
 */
  document.querySelector('#range_quantity')?.addEventListener("change", (e:any):void => {
    new_password_reverse = new_password.join("").split("");
 nbreRange = Number(e.target.value);
  quantity.innerHTML = String(nbreRange)
  if(nbreRange > 6){
    alert('okk')
  }
  console.log( nbreRange);
  
  });
  /**
   * Envoyer les données via le boutton confirmer
   */
generate_form.addEventListener("submit", (e:any):void => {
  e.preventDefault();
  if(new_password.length === 0 || nbreRange === undefined ){ 
   alert('Veuillez remplir le generator convenable!!')
   window.location.reload()
}
else if (nbreRange && !new_password_one  ){
for (let index = 0; index < nbreRange; index++) {
   new_password_one =
    new_password_reverse[
      Math.round(new_password_reverse.length * Math.random())
    ];
  if(new_password_one === undefined){
    alert('Veuiller commencer par la case');
    window.location.reload()
    break;
  }
  else{
  password.innerHTML += new_password_one;
  password.classList.add("text-slate-100");

  }
}
}
}
);




