const btnOne = document.querySelector('#one')
const btnTwo = document.querySelector('#two')
const btnStart = document.querySelector('#start')
const image = document.querySelector('#myImage')
const question = document.querySelector('.where')


function home() {

    myImage.setAttribute('src', 'snowman1.jpg')
    question.textContent = 'КУДА ЕМУ ПОЙТИ?'
    btnOne.style = 'display: block'
    btnOne.textContent = 'НАПРАВО'
    btnTwo.style = 'display: block'
    btnTwo.textContent = 'ВНИЗ'
    btnStart.style = 'display: none'

//----------------начало блок первая кнопка----------------------------

    btnOne.addEventListener('click', oneRight)

    function oneRight() {
        myImage.setAttribute('src', 'snowman2.jpg')
        question.textContent = 'А ТЕПЕРЬ?'
        btnOne.style = 'display: block'
        btnOne.textContent = 'НАПРАВО'
        btnTwo.style = 'display: block'
        btnTwo.textContent = 'ВНИЗ'
        btnStart.style = 'display: none'

        btnOne.addEventListener('click', twoRight)
        function twoRight() {
            myImage.setAttribute('src', 'snowman3.jpg')
            question.textContent = 'Идем дальше?'
            btnOne.style = 'display: block'
            btnOne.textContent = 'ВНИЗ'
            btnTwo.style = 'display: none'
            btnTwo.textContent = ''
            btnStart.style = 'display: none'

            btnOne.addEventListener('click', threeDown)
            function threeDown() {
                myImage.setAttribute('src', 'snowman4.jpg')
                question.textContent = 'ОЙ! ЗДЕСЬ НЕТ ВЫХОДА!'
                btnOne.style = 'display: none'
                btnOne.textContent = ''
                btnTwo.style = 'display: none'
                btnTwo.textContent = ''
                btnStart.style = 'display: block'
                btnStart.addEventListener('click', home)
            }
        }

        btnTwo.addEventListener('click', twoDown)
        function twoDown() {
            myImage.setAttribute('src', 'snowman5.jpg')
            question.textContent = 'ЗДЕСЬ НЕТ ВЫХОДА!'
            btnOne.style = 'display: none'
            btnTwo.style = 'display: none'
            btnStart.style = 'display: block'
            btnStart.addEventListener('click', home)
        }
    }
    //----------------конец блок первая кнопка----------------------------


    //----------------начало блок вторая кнопка---------------------------
    btnTwo.addEventListener('click', oneDown)

    function oneDown() {
        myImage.setAttribute('src', 'snowman1.2.jpg')
        question.textContent = 'ИДЕМ ДАЛЬШЕ?'
        btnOne.style = 'display: block'
        btnOne.textContent = 'НАПРАВО'
        btnTwo.style = 'display: block'
        btnTwo.textContent = 'ВНИЗ'
        btnStart.style = 'display: none'

        btnOne.addEventListener('click', fourRight)
        function fourRight() {
            myImage.setAttribute('src', 'snowman1.3.jpg')
            question.textContent = 'Я ЗАБЛУДИЛСЯ, ПОМОГИ МНЕ!'
            btnOne.style = 'display: block'
            btnOne.textContent = 'НАПРАВО'
            btnTwo.style = 'display: block'
            btnTwo.textContent = 'ВНИЗ'
            btnStart.style = 'display: none'

            btnOne.addEventListener('click', fiveRight)
            function fiveRight() {
                myImage.setAttribute('src', 'snowman1.4.jpg')
                question.textContent = 'ЧТО ТЕПЕРЬ ДЕЛАТЬ?!'
                btnOne.style = 'display: none'
                btnOne.textContent = ''
                btnTwo.style = 'display: none'
                btnTwo.textContent = ''
                btnStart.style = 'display: block'
                btnStart.addEventListener('click', home)
            }

            btnTwo.addEventListener('click', fiveDown)
            function fiveDown() {
                myImage.setAttribute('src', 'snowman1.5.jpg')
                question.textContent = 'ЧУВСТВУЮ СКОРО ВЫХОД!'
                btnOne.style = 'display: block'
                btnOne.textContent = 'НАПРАВО'
                btnTwo.style = 'display: none'
                btnTwo.textContent = ''
                btnStart.style = 'display: none'


                btnOne.addEventListener('click', eightRight)
                function eightRight() {
                    myImage.setAttribute('src', 'snowman1.6.jpg')
                    question.textContent = 'УРРРААА! СПАСИБО ЗА ПОМОЩЬ!!!'
                    btnOne.style = 'display: none'
                    btnOne.textContent = ''
                    btnTwo.style = 'display: none'
                    btnTwo.textContent = ''
                    btnStart.style = 'display: none'
                }
            }

        }

        btnTwo.addEventListener('click', fourDown)
        function fourDown () {
            myImage.setAttribute('src', 'snowman6.jpg')
            question.textContent = 'БЫСТРЕЕ!'
            btnOne.style = 'display: block'
            btnOne.textContent = 'НАПРАВО'
            btnTwo.style = 'display: none'
            btnTwo.textContent = ''
            btnStart.style = 'display: none'

            btnOne.addEventListener('click', sevenRight)
            function sevenRight() {
                myImage.setAttribute('src', 'snowman7.jpg')
                question.textContent = 'МНЕ СТРАШНО, ЗДЕСЬ НЕТ ВЫХОДА!'
                btnOne.style = 'display: none'
                btnOne.textContent = ''
                btnTwo.style = 'display: none'
                btnTwo.textContent = ''
                btnStart.style = 'display: block'
                btnStart.addEventListener('click', home)
            }

        }

    }
//----------------конец блок вторая кнопка---------------------------

}

home()

