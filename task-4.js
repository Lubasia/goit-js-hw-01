const credits = 23580;
const pricePerDroid = 3000;

let input = prompt (`Введите количество`)

if (input === null) {
    console.log (`Отменено пользователем!`)
} else {
    let number = Number(input);
    let totalPrice = pricePerDroid * number;

    if (totalPrice <= credits) {
        let remainder = credits - totalPrice
        alert (`Вы купили ${number}, дроидов, на счету осталось ${remainder}, кредитов.`);
    } else if (totalPrice > credits) {
        alert(`Недостаточно средств на счету!`);
    }
}
    
