window.onload = () => {
    let body = document.querySelector('body');

    let modeBtn = document.querySelector('.mode_btn');
    let modeBtnImage = modeBtn.querySelector('.mode_btn img');
    
    let recommendColor = document.querySelector('.recommend__in')
    let titleColor = recommendColor.querySelector('h3');
    let textColor = recommendColor.querySelectorAll('ul li');



    function modeCahnge(colorDark, colorGray, colorLight) {
        let i = 0;
        body.style.backgroundColor = colorDark;
        recommendColor.style.backgroundColor = colorDark;

        textColor.forEach((item) => {
            item.style.backgroundColor = colorGray;
            item.style.color = colorLight;
        })
       /*  while(i < textColor.length) {
            textColor[i].style.backgroundColor = colorGray;
            textColor[i].style.color = colorLight;
            i = i + 1;
        } */
         
    }

    


    modeBtn.addEventListener('click', () => {
        if(getComputedStyle(body).backgroundColor === 'rgb(245, 245, 245)') {
            modeBtnImage.src = 'img/icon-moon.svg';
            modeBtnImage.setAttribute('alt', '다크모드');

            modeCahnge('#191919', '#313131', '#fff');


        } else {
            modeBtnImage.src = 'img/icon-sun.svg';
            modeBtnImage.setAttribute('alt', '라이트모드');

            modeCahnge('','', '');

        }
    });//modeBtn.click()

};//script end