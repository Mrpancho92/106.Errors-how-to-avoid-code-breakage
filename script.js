'use strict';

// try {
//     console.log('normal');
//     console.log(a);
//     console.log('result');
// } catch(error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally { 
    // Выполнится в любом случае, завершить начатые операции при любов варианте развития событий
// }
// error - это объект ошибки
//console.log(a); // - если тут ошибка то код дальше не выполняется
// console.log('Still normal');

try { 
    document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
});

} catch(e) {
    console.log(e);
}

// Можно еще так - catch(e) {} - код пойдет дальше без вывода ошибки.
// Благодаря try catch код выполняется дальше. Строка 28 выводит значение normal.
console.log('normal');
// Всегда помнить - Если где то в коде может быть сбой то всегда использовать эту конструкцию.