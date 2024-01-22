

    //кнопки "показать все" и "скрыть"
    let buttonMoreServices = document.querySelector('.services__button-more');
    let buttonHideServices = document.querySelector('.services__button-hide');
    let servicesList = document.querySelector('.services__list');

    function updateStylesS() {
      if (servicesList.scrollHeight <= servicesList.clientHeight) {
        buttonMoreServices.style.display = "none";
      } else {
        buttonMoreServices.style.display = "flex";
      };
    }
    
    updateStylesS();
    window.addEventListener("resize", updateStylesS);


    buttonMoreServices.addEventListener("click", function() {
        servicesList.style.height = "100%";
        buttonMoreServices.style.display = "none";
        buttonHideServices.style.display = "flex";
    });

    buttonHideServices.addEventListener("click", function() {
        servicesList.style.height = "160px";
        buttonMoreServices.style.display = "flex";
        buttonHideServices.style.display = "none";
    });

    let buttonMoreRepair = document.querySelector('.repair__button-more');
    let buttonHideRepair = document.querySelector('.repair__button-hide');
    let RepairList = document.querySelector('.repair__list');

    function updateStylesR() {
      if (RepairList.scrollHeight <= RepairList.clientHeight) {
        buttonMoreRepair.style.display = "none";
      } else {
        buttonMoreRepair.style.display = "flex";
      };
    }
    
    updateStylesR();
    window.addEventListener("resize", updateStylesR);


    buttonMoreRepair.addEventListener("click", function() {
        RepairList.style.height = "100%";
        buttonMoreRepair.style.display = "none";
        buttonHideRepair.style.display = "flex";
    });

    buttonHideRepair.addEventListener("click", function() {
        RepairList.style.height = "160px";
        buttonMoreRepair.style.display = "flex";
        buttonHideRepair.style.display = "none";
    });

    let buttonMoreAboutus = document.querySelector('.about-us__button-more');
    let buttonHideAboutus = document.querySelector('.about-us__button-hide');
    let textaboutAs = document.querySelector('.about-us__text');
    function updateStyles() {
      if (textaboutAs.scrollHeight <= textaboutAs.clientHeight) {
        buttonMoreAboutus.style.display = "none";
      } else {
        buttonMoreAboutus.style.display = "flex";
      };
    }
    
    updateStyles();
    window.addEventListener("resize", updateStyles);
        

    buttonMoreAboutus.addEventListener("click", function() {
        textaboutAs.style.height = "100%";
        buttonMoreAboutus.style.display = "none";
        buttonHideAboutus.style.display = "flex";
    });

    buttonHideAboutus.addEventListener("click", function() {
        buttonMoreAboutus.style.display = "flex";
        buttonHideAboutus.style.display = "none";
        if (window.innerWidth < 768) {
            textaboutAs.style.height = "90px"; 
        } else if (window.innerWidth >= 768) {
            textaboutAs.style.height = "160px";
        }
    });


     //выделение элемента навигации
    let aboutAsLink = document.querySelectorAll('.about-us__menu-link');

    aboutAsLink.forEach(function(link) {
        link.addEventListener("click", function(event) {
        
        aboutAsLink.forEach(function(active) {
            active.classList.remove('about-us__active');
        });

        event.target.classList.add('about-us__active');
    });
    })

    //выделение элемента меню-бургер
    let menuLink = document.querySelectorAll('.menu__link');

    menuLink.forEach(function(link) {
        link.addEventListener("click", function(event) {
        
            menuLink.forEach(function(active) {
                active.classList.remove('menu__active');
            });

            event.target.classList.add('menu__active');
        });
    })

    //открытие/закрытие бургер-меню
    let burgerIcon = document.querySelector('.header__menu-burger');
    let menuBurger = document.querySelector('.menu');
    let closeIcon = document.querySelector('.header__burger-close');
    let background = document.querySelector('.background');

    burgerIcon.addEventListener("click", function() {
        menuBurger.style.display = "flex";
        background.style.display = "block";
    })

    closeIcon.addEventListener("click", function() {
        background.style.display = "none";
        menuBurger.style.display = "none";
    })

    background.addEventListener("click", function() {
        background.style.display = "none";
        menuBurger.style.display = "none";
    })

    //модальные окна
    let callIcon = document.querySelectorAll('.icon-call');
    let chatIcon = document.querySelectorAll('.icon-chat');
    let closeModal = document.querySelectorAll('.modal__close');
    let callModal = document.querySelector('.modal__call');
    let chatModal = document.querySelector('.modal__chat');
    let backgroundModal = document.querySelector('.background__modal');

    callIcon.forEach(function (call) {
        call.addEventListener("click", function() {
            callModal.style.display = "flex";
            backgroundModal.style.display = "block";
        })
    })

    chatIcon.forEach(function (chat) {
        chat.addEventListener("click", function() {
            chatModal.style.display = "flex";
            backgroundModal.style.display = "block";
        })
    })

    closeModal.forEach(function(close) {
        close.addEventListener("click", function() {
            chatModal.style.display = "none";
            callModal.style.display = "none";
            backgroundModal.style.display = "none";
        })
    })
    
    backgroundModal.addEventListener("click", function() {
        chatModal.style.display = "none";
        callModal.style.display = "none";
        backgroundModal.style.display = "none";
    })

//слайдер
const initSwiper = () => {
    const mediaQueryList = window.matchMedia("(max-width: 767px)");
    let swiper = null;
  
    const createSwiper = () => {
      swiper = new Swiper('.swiper', {
        loop: false,
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      });
    };
  
    const destroySwiper = () => {
      if (swiper) {
        swiper.destroy();
        swiper = null; 
      }
    };
  
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        createSwiper();
      } else {
        destroySwiper();
      }
    };
  
    mediaQueryList.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQueryList);
  
  
    // Функция для проверки разрешения экрана и обновления страницы при достижении 768px
    const checkResolutionAndReload = () => {
      if (window.innerWidth == 768) {
        location.reload();
      }
      if (window.innerWidth == 1440) {
        location.reload();
      }
    };
    
    window.addEventListener('resize', () => {
      checkResolutionAndReload();
    })
  }
  initSwiper();


