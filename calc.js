let btnNumbers = document.querySelectorAll('.btn-number'),
    screenContent = document.querySelector('.screen'),
    cancelBtn = document.querySelector('.btn-del'),
    actionBtn = document.querySelectorAll('.btn-action'),
    resBtn = document.querySelector('.btn-res');

function del() {
    appData.res = appData.currentNumber = appData.oldNumber = appData.actionOld = appData.actionNow = '';
    appData.isAction = appData.howAction = appData.multuVvod = btnNumbers[10].disabled  = false;
}
let appData = {
    currentNumber: '',
    isAction: false,
    oldNumber: '',
    res: '',
    howAction: false,
    actionOld: '',
    multuVvod: false,
    actionNow: '',
    tochka: false
};

for (let i = 0; i < btnNumbers.length; i++) {

    btnNumbers[i].addEventListener('click', function () {
        if ( (appData.actionNow >= 1 || appData.multuVvod == true) && (appData.currentNumber === 0 || appData.oldNumber === 0 || appData.currentNumber || appData.oldNumber)) {
            if(appData.isAction == true){
                del();
                appData.isAction = 5;
            }
            if ((appData.res === 0 || appData.res) && appData.multuVvod == false) {
                appData.oldNumber = appData.res;
                appData.currentNumber = '';
            }
           
            let number = btnNumbers[i].value;
                appData.currentNumber += number;
              
                if(btnNumbers[i].value =='.'){
                        if(appData.actionNow >=1 || appData.isAction==5)
                        {
                            appData.currentNumber = '0.';
                        }
                        btnNumbers[10].disabled = true;
                }
                if (appData.actionNow >= 1 ) {
                    appData.actionOld = appData.actionNow; 
                    if(appData.multuVvod==false){
                        appData.actionNow = '';
                    }
                    appData.multuVvod = true;
                }
                screenContent.textContent = appData.currentNumber;
            rasschet();
        } else {
            if ((appData.res === 0 || appData.res) && appData.multuVvod == false) {
                appData.oldNumber = appData.res;
                appData.currentNumber = '';
            }
            let number = btnNumbers[i].value;
            appData.currentNumber += number;
            if(btnNumbers[i].value =='.'){
                appData.currentNumber = '0.';
                btnNumbers[10].disabled = true;
            }
            screenContent.textContent = appData.currentNumber;
            appData.multuVvod = true;
        }
        appData.howAction = true;
        appData.isAction = false;
    });
}

cancelBtn.addEventListener('click', function () {
    del();
    screenContent.textContent = appData.currentNumber;
});

for (let i = 0; i < actionBtn.length; i++) {
    actionBtn[i].addEventListener('click', function () {
        appData.multuVvod = false; //отключаем ввод нескольких символов
        if (appData.howAction == true) { //если до этого были цифры - записываем их 
            appData.oldNumber = appData.currentNumber; 
            appData.currentNumber = '';
        }
        appData.howAction = false; //выключаем ввод чисел
        if (appData.res === 0 || appData.res) { //если есть результат то выводим его
            screenContent.textContent = appData.res;
        }
        appData.isAction = false; //отключаем =
        appData.actionNow = i+1; //запоимнаем операцию
        btnNumbers[10].disabled = false; //разрешаем точку
    })
}

function rasschet() {
    if (appData.actionOld == 1) {
        appData.res = (+appData.currentNumber) * (+appData.oldNumber);
    }
    if (appData.actionOld == 2) {
        appData.res = +appData.currentNumber + (+appData.oldNumber);
    }
    if (appData.actionOld == 3) {
        appData.res = (+appData.oldNumber) - (+appData.currentNumber);
    }
    if (appData.actionOld == 4) {
        appData.res = (+appData.oldNumber) / (+appData.currentNumber);
    }
    appData.res = String(appData.res);
}

resBtn.addEventListener('click', function () {
    if ((appData.currentNumber && appData.oldNumber) ) {
        screenContent.textContent = appData.res;
        btnNumbers[10].disabled = false;
        appData.isAction = true;
        appData.actionNow = 5;
        appData.howAction = false;
    }
});



// actionBtn[0].addEventListener('click', function () {

//     if(appData.howActionPlus == 0)
//     {
//         appData.mass.push(+appData.dataNumbers);
//         appData.howActionPlus = 1;
//         appData.howActionMinus = 0;
//         appData.howActionSplit = 0;
//         appData.howActionMult = 0;
//     }
// })

// actionBtn[1].addEventListener('click', function () {

//     if(appData.howActionPlus == 0)
//     {
//         appData.mass.push(+appData.dataNumbers);
//         appData.howActionPlus = 1;
//         appData.howActionMinus = 0;
//         appData.howActionSplit = 0;
//         appData.howActionMult = 0;
//     }
// })

// actionBtn[2].addEventListener('click', function () {

//     if(appData.howActionPlus == 0)
//     {
//         appData.mass.push(+appData.dataNumbers);
//         appData.howActionPlus = 1;
//         appData.howActionMinus = 0;
//         appData.howActionSplit = 0;
//         appData.howActionMult = 0;
//     }
// })

// actionBtn[3].addEventListener('click', function () {

//     if(appData.howActionPlus == 0)
//     {
//         appData.mass.push(+appData.dataNumbers);
//         appData.howActionPlus = 1;
//         appData.howActionMinus = 0;
//         appData.howActionSplit = 0;
//         appData.howActionMult = 0;
//     }
// })cancelBtn.addEventListener('click', function () {
//     del();
//     screenContent.textContent = appData.dataNumbers;
// })


// 








// function del()
// {
//     appData.dataNumbers = '';
//     appData.dataNumbers2 = '';
// }

// cancelBtn.addEventListener('click', function () {
//    del();
//     screenContent.textContent = appData.dataNumbers;

// // });
// for (let i = 0; i < actionBtn.length; i++) {
//     actionBtn[i].addEventListener('click', function () {
//         if (appData.dataNumbers2 && appData.dataNumbers || appData.howAction==false){
//             if (appData.whatAction == 0) //Для умножения
//         {
//             appData.res = +appData.dataNumbers * (+appData.dataNumbers2);
//         }
//             if (appData.whatAction == 1) //Для плюса
//         {
//             appData.res = +appData.dataNumbers + (+appData.dataNumbers2);
//         }
//             if (appData.whatAction == 2) //Для минуса
//         {
//             appData.res =  +appData.dataNumbers2 - (+appData.dataNumbers);
//         }
//             if (appData.whatAction == 3 || 1==1) //Для минуса
//         {
//             screenContent.textContent = appData.res ;
//         }
//         screenContent.textContent = appData.res;
//         if (i == actionBtn.length) {
//             del();
//         }
//         appData.isAction = true;
//         appData.whatAction = i;
//         appData.dataNumbers2 = appData.dataNumbers;
//         }

//     });
// }