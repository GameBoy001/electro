var curser = document.querySelector(".curser");
        document.addEventListener('mousemove', function(e){
            var X = e.clientX;
            var Y = e.clientY;
            curser.style.left = X + "px";
            curser.style.top = Y + "px";
        })
        document.addEventListener('mousemove', function(e){
            var X = e.clientX;
            var Y = e.clientY;
            curser.style.left = X + "px";
            curser.style.top = Y + "px";
        })
divApple = document.querySelector('.apple-list')
divSamsung = document.querySelector('.samsung-list')
divPlaystation = document.querySelector('.playstation-list')
divXbox = document.querySelector('.xbox-list')
divNintendo = document.querySelector('.nintendo-list')
divSteam = document.querySelector('.steam-list')
divOculus = document.querySelector('.oculus-list')
function dropdown() {
    if (divApple = document.querySelector('.apple-list')){
        divApple.classList.remove('apple-list')
        divApple.classList.add('apple-reveal')
        divSamsung.classList.remove('samsung-reveal')
        divSamsung.classList.add('samsung-list')
        divPlaystation.classList.remove('playstation-reveal')
        divPlaystation.classList.add('playstation-list')
        divXbox.classList.remove('xbox-reveal')
        divXbox.classList.add('xbox-list')
        divNintendo.classList.remove('nintendo-reveal')
        divNintendo.classList.add('nintendo-list')
        divSteam.classList.remove('steam-reveal')
        divSteam.classList.add('steam-list')
        divOculus.classList.remove('oculus-reveal')
        divOculus.classList.add('oculus-list')
      }
    else if (divApple = document.querySelector('.apple-reveal')){
        divApple.classList.remove('apple-reveal')
        divApple.classList.add('apple-list')
      }
    }

function dropdownsamsung() {
    if (divSamsung = document.querySelector('.samsung-list')){
        divSamsung.classList.remove('samsung-list')
        divSamsung.classList.add('samsung-reveal')
        divApple.classList.remove('apple-reveal')
        divApple.classList.add('apple-list')
        divPlaystation.classList.remove('playstation-reveal')
        divPlaystation.classList.add('playstation-list')
        divXbox.classList.remove('xbox-reveal')
        divXbox.classList.add('xbox-list')
        divNintendo.classList.remove('nintendo-reveal')
        divNintendo.classList.add('nintendo-list')
        divSteam.classList.remove('steam-reveal')
        divSteam.classList.add('steam-list')
        divOculus.classList.remove('oculus-reveal')
        divOculus.classList.add('oculus-list')
      }
    else if (divSamsung = document.querySelector('.samsung-reveal')){
        divSamsung.classList.remove('samsung-reveal')
        divSamsung.classList.add('samsung-list')
      }
    }

function dropdownplaystation() {
    if (divPlaystation = document.querySelector('.playstation-list')){
        divApple.classList.add('apple-list')
        divApple.classList.remove('apple-reveal')
        divSamsung.classList.remove('samsung-reveal')
        divSamsung.classList.add('samsung-list')
        divPlaystation.classList.add('playstation-reveal')
        divPlaystation.classList.remove('playstation-list')
        divXbox.classList.remove('xbox-reveal')
        divXbox.classList.add('xbox-list')
        divNintendo.classList.remove('nintendo-reveal')
        divNintendo.classList.add('nintendo-list')
        divSteam.classList.remove('steam-reveal')
        divSteam.classList.add('steam-list')
        divOculus.classList.remove('oculus-reveal')
        divOculus.classList.add('oculus-list')
      }
    else if (divPlaystation = document.querySelector('.playstation-reveal')){
        divPlaystation.classList.remove('playstation-reveal')
        divPlaystation.classList.add('playstation-list')
      }
    }

function dropdownxbox() {
    if (divXbox = document.querySelector('.xbox-list')){
        divSamsung.classList.add('samsung-list')
        divSamsung.classList.remove('samsung-reveal')
        divApple.classList.remove('apple-reveal')
        divApple.classList.add('apple-list')
        divPlaystation.classList.remove('playstation-reveal')
        divPlaystation.classList.add('playstation-list')
        divXbox.classList.add('xbox-reveal')
        divXbox.classList.remove('xbox-list')
        divNintendo.classList.remove('nintendo-reveal')
        divNintendo.classList.add('nintendo-list')
        divSteam.classList.remove('steam-reveal')
        divSteam.classList.add('steam-list')
        divOculus.classList.remove('oculus-reveal')
        divOculus.classList.add('oculus-list')
      }
    else if (divXbox = document.querySelector('.xbox-reveal')){
        divXbox.classList.remove('xbox-reveal')
        divXbox.classList.add('xbox-list')
      }
    }

function dropdownnintendo() {
    if (divNintendo = document.querySelector('.nintendo-list')){
        divApple.classList.add('apple-list')
        divApple.classList.remove('apple-reveal')
        divSamsung.classList.remove('samsung-reveal')
        divSamsung.classList.add('samsung-list')
        divPlaystation.classList.remove('playstation-reveal')
        divPlaystation.classList.add('playstation-list')
        divXbox.classList.remove('xbox-reveal')
        divXbox.classList.add('xbox-list')
        divNintendo.classList.add('nintendo-reveal')
        divNintendo.classList.remove('nintendo-list')
        divSteam.classList.remove('steam-reveal')
        divSteam.classList.add('steam-list')
        divOculus.classList.remove('oculus-reveal')
        divOculus.classList.add('oculus-list')
      }
    else if (divNintendo = document.querySelector('.nintendo-reveal')){
        divNintendo.classList.remove('nintendo-reveal')
        divNintendo.classList.add('nintendo-list')
      }
    }

function dropdownsteam() {
    if (divSteam = document.querySelector('.steam-list')){
        divSamsung.classList.add('samsung-list')
        divSamsung.classList.remove('samsung-reveal')
        divApple.classList.remove('apple-reveal')
        divApple.classList.add('apple-list')
        divPlaystation.classList.remove('playstation-reveal')
        divPlaystation.classList.add('playstation-list')
        divXbox.classList.remove('xbox-reveal')
        divXbox.classList.add('xbox-list')
        divNintendo.classList.remove('nintendo-reveal')
        divNintendo.classList.add('nintendo-list')
        divSteam.classList.add('steam-reveal')
        divSteam.classList.remove('steam-list')
        divOculus.classList.remove('oculus-reveal')
        divOculus.classList.add('oculus-list')
      }
    else if (divSteam = document.querySelector('.steam-reveal')){
        divSteam.classList.remove('steam-reveal')
        divSteam.classList.add('steam-list')
      }
    }

function dropdownoculus() {
    if (divOculus = document.querySelector('.oculus-list')){
        divApple.classList.add('apple-list')
        divApple.classList.remove('apple-reveal')
        divSamsung.classList.remove('samsung-reveal')
        divSamsung.classList.add('samsung-list')
        divPlaystation.classList.remove('playstation-reveal')
        divPlaystation.classList.add('playstation-list')
        divXbox.classList.remove('xbox-reveal')
        divXbox.classList.add('xbox-list')
        divNintendo.classList.remove('nintendo-reveal')
        divNintendo.classList.add('nintendo-list')
        divSteam.classList.remove('steam-reveal')
        divSteam.classList.add('steam-list')
        divOculus.classList.add('oculus-reveal')
        divOculus.classList.remove('oculus-list')
      }
    else if (divOculus = document.querySelector('.oculus-reveal')){
        divOculus.classList.remove('oculus-reveal')
        divOculus.classList.add('oculus-list')
      }
    }

const events = document.querySelectorAll('.event')