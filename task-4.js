const credits = 23580;
const pricePerDroid = 3000;

const input = prompt (`Введите количество`)

if (input === null) {
    console.log (`Отменено пользователем!`)
} else {
    const number = Number(input);
    const totalPrice = pricePerDroid * number;

    if (totalPrice <= credits) {
        let rest = credits - totalPrice
        alert (`Вы купили ${number}, дроидов, на счету осталось ${rest} кредитов.`);
    } else if (totalPrice > credits) {
        alert(`Недостаточно средств на счету!`);
    }
}
    
