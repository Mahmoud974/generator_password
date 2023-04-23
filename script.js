var _a, _b;
var uppercase_letter = "AZERTYUIOPQSDFGHJKLMWXCVBN", lowercase_letter = uppercase_letter
    .toLowerCase()
    .split("")
    .reverse()
    .join(""), numbers_password = "1234567890";
var symbols_password = "'&é(§è!çà)-,;:=$%";
var new_password = [];
var new_password_reverse;
var new_password_one;
var generate_form = document.getElementById('generate_form');
var quantity = document.getElementById('quantity');
var password = document.getElementById('password');
var checked;
var copy_password = document.querySelector('#copy_password');
var nbreRange;
var box_color = document.querySelectorAll(".box_color");
/**
 * Choisir les éléments checkbox pour son MDP
 */
(_a = document.querySelector('#different_choice')) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function (e) {
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
(_b = document.querySelector('#range_quantity')) === null || _b === void 0 ? void 0 : _b.addEventListener("change", function (e) {
    new_password_reverse = new_password.join("").split("");
    nbreRange = Number(e.target.value);
    quantity.innerHTML = String(nbreRange);
    if (nbreRange > 6) {
        alert('okk');
    }
    console.log(nbreRange);
});
/**
 * Envoyer les données via le boutton confirmer
 */
generate_form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (new_password.length === 0 || nbreRange === undefined) {
        alert('Veuillez remplir le generator convenable!!');
        window.location.reload();
    }
    else if (nbreRange && !new_password_one) {
        for (var index = 0; index < nbreRange; index++) {
            new_password_one =
                new_password_reverse[Math.round(new_password_reverse.length * Math.random())];
            if (new_password_one === undefined) {
                alert('Veuiller commencer par la case');
                window.location.reload();
                break;
            }
            else {
                password.innerHTML += new_password_one;
                password.classList.add("text-slate-100");
            }
        }
    }
});
