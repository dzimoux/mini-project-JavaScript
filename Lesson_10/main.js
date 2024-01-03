// Стоврити форму з трьома полями для name,suname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
// let form1 = document.forms['f1']
// console.log(form1)
// form1.onsubmit = function (ev) {
//     ev.preventDefault()
//     document.write(ev.target.username.value + ' ' + ev.target.surname.value + ' ' + ev.target.age.value)
// }


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================

// const blockCount = document.getElementById('counter1');
// window.onload = function(){
//     const countN1 = JSON.parse(localStorage.getItem('count'))  ?? 0;
//     blockCount.innerText = countN1;
//     localStorage.setItem('count', JSON.stringify(countN1 + 1))
// }




// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


//     let dateNow = Date.now();
//     let dataTime = localStorage.getItem('dateTime');
//     let sessions = JSON.parse(dataTime) || [];
//     sessions.push(dateNow)
// localStorage.setItem('dateTime', JSON.stringify(sessions) )
// let divOfVisit = document.getElementById('Date_of_visit')
// divOfVisit.innerHTML = 'User visited webpage ' + sessions


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//

const createdArray = [...Array(100).keys()];

const array = createdArray.map((item) => {
    return {
        id: item + 1,
        name: `Product ${item + 1}`,
    };
});

let buttonPrev = document.getElementById('prev')
let buttonNext = document.getElementById('next')
let divOF100 = document.getElementById('divOf100')
const makeDiv = (items) => {
    let htmlTeg = ``;
    items.forEach((item)=>{
        console.log(item)
        htmlTeg += `<div>${item.name}</div>`}
    )
    divOF100.innerHTML = htmlTeg

}


let currentPage = 1;
let limit = 10;
let totalPages = array.length / limit;


const firstof100 = array.slice(0,10);
makeDiv(firstof100)
buttonNext.onclick = function (){
if(currentPage + 1 > totalPages){
    return
}


    currentPage += 1
    if (currentPage === limit){
        buttonNext.disabled = true;
    }

    //page 1 = 1*10 =10
    //page 2 = 2*10 = 20
    //page3 = 3*10 = 30
  //10   //20   //30
    const endIndex = limit * currentPage;
    const startIndex = endIndex - limit; // 20
    const items = array.slice(startIndex,endIndex)
    makeDiv(items)

}

buttonPrev.onclick = function (){
    if(currentPage - 1 < 1){
        return
    }

    currentPage -= 1;
    if(currentPage > 2){
        buttonPrev.disabled = false;
    } else if (currentPage === 1){
        buttonPrev.disabled = true;
    }
    const endIndex =  currentPage * limit         //30
    const startIndex =     endIndex - limit      //20
    const items = array.slice(startIndex, endIndex)
    makeDiv(items)
}









//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// let newtextElem = document.createElement('p')
// newtextElem.setAttribute('id', 'text')
// console.log(newtextElem)
// let buttonRemoveId = document.getElementById('RemoveButID')
// buttonRemoveId.onclick = function (){
//     newtextElem.removeAttribute('id', 'text')
//     console.log(newtextElem)
// }

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let form2 = document.forms['f2']
// let butSubF2 = document.getElementById('submitB_f2')
//
//
// form2.onsubmit = function (ev) {
//     ev.preventDefault()
//     let inputForm = document.getElementById('input_f2')
//
//     if (inputForm.value > 18 && inputForm.value < 100) {
//         alert('Access! Now you can log in')
//     } else if (inputForm.value < 18 && inputForm.value > 0) {
//         alert('Error! Your age is under 18')
//     } else {
//         return
//     }
// }



//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)



// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


// const blockCount = document.getElementById('counter1');
// window.onload = function(){
//     const priceValue = JSON.parse(localStorage.getItem('count'))  ?? 100;
//     const price = priceValue + 'грн';
//     blockCount.innerText = price;
//    const timer = setTimeout(()=> {
//        localStorage.setItem('count', JSON.stringify(priceValue + 10))
//         console.log('finish')
//     },10000)
// }


