let btnNumbers = document.querySelectorAll('.btn-number'),
    screenContent = document.querySelector('.screen'),
    cancelBtn = document.querySelector('.btn-del'),
    actionBtn = document.querySelectorAll('.btn-action'),
    resBtn = document.querySelector('.btn-res');

function del() {
    appData.res = appData.currentNumber = appData.oldNumber = appData.actionOld = appData.actionNow = '';
    appData.isAction = appData.howAction = appData.multuVvod = btnNumbers[10].disabled = false;
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
};

for (let i = 0; i < btnNumbers.length; i++) {

    btnNumbers[i].addEventListener('click', function () {
        if ((appData.actionNow >= 1 || appData.multuVvod == true) && (appData.oldNumber === 0 || appData.oldNumber)) {
            if (appData.actionNow == 5) {
                del();
                appData.actionNow = 5;
            }
            if ((appData.res === 0 || appData.res) && appData.multuVvod == false) {
                appData.oldNumber = appData.res;
                appData.currentNumber = '';
            }

            let number = btnNumbers[i].value;
            appData.currentNumber += number;

            if (btnNumbers[i].value == '.') {
                if (appData.actionNow >= 1) {
                    appData.currentNumber = '0.';
                }
                btnNumbers[10].disabled = true;
            }
            if (appData.actionNow >= 1) {
                appData.actionOld = appData.actionNow;
                if (appData.multuVvod == false) {
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
            if (btnNumbers[i].value == '.') {
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
        appData.actionNow = i + 1; //запоимнаем операцию
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
    if ((appData.currentNumber && appData.oldNumber)) {
        screenContent.textContent = appData.res;
        btnNumbers[10].disabled = false;
        appData.actionNow = 5;
        appData.howAction = false;
    }
});