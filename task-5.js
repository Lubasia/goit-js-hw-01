let input = prompt(`Введите страну`);

if (input !== null) {
    input = input.toLowerCase();
}
let price;

switch (input) {
    case "китай":
        price = 100;
        break;
    case "чили":
        price = 250;
        break;
    case "австралия":
        price = 170;
        break;
    case "индия":
        price = 80;
        break;
    case "ямайка":
        price = 120;
        break;
    default:
        price = -1;
        alert(`В вашей стране доставка не доступна`);
}
if (price !== -1) {
    alert (`Доставка в ${input} будет стоить ${price} кредитов`)
} 
