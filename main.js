const btn = document.querySelector('#button');
// массив из элементов которого формируется hex код цвета
hex = ['0', '1', '2', '3', '4', '5', '6', '7','8', '9', 'a','b' , 'c', 'd', 'e', 'f'];
// навешиваю прослушку на кнопку
btn.addEventListener('click', function (){
    // пусть цвет hexColor = переменная, которая формирует цвет заднего фона. она генерируется функцией описанной ниже
    let hexColor = generateRandomHex();
    // colorblock.style.background = hexColor( colorblock это ID <div></div> с class = background  )
    colorblock.style.background = hexColor;
    console.log(hexColor);
});
// получениe случайного числа, где hex.length это длина массива hex
function getRandomInt() {
    return Math.floor(Math.random() * hex.length);
};
// генерация случайного цвета, берется переменная hexColor изначально равная #, 
// формируется цикл с 6 шагами, (тк цвет состоит из комбинации 6 символов из массива hex)
function generateRandomHex(){
    let hexColor = '#';
    for( let i = 1; i<=6; i++){
    // в результате работы цикла формируется hexColor = # и 6 случайных элементов массива hex;
    hexColor = hexColor +  hex[getRandomInt()];
    }
    // в итоге выводим то что получилось в переменную hexColor;
    return hexColor;
}