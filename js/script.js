scrollToAnchors(".header-menu__list-item a[data-anchor]");
reactionsAddOne(".review-item__reactions-button");
reviewsToggler();
window.addEventListener("resize", () => makeMovable(".page-plan__grid"));
makeMovable(".page-plan__grid");
rotating();
//
window.addEventListener("resize", moveElementsOnResize);
moveElementsOnResize();
accordeon();
lottieAnim();
onHalfVisible(".chat__main", chatAnim); //intersection observer
// lottie json animations
//

function lottieAnim() {
  const anim = lottie;

  lottieHoverEffect("data-animated-sticker");

  function lottieHoverEffect(atribute) {
    const elements = document.querySelectorAll(`[${atribute}]`);

    elements.forEach((element) => {
      element.addEventListener("mouseover", hoverEventHandler);
      element.addEventListener("mouseout", outEventHandler);
    });

    function hoverEventHandler(e) {
      const animationName = this.dataset.animatedSticker;

      this.removeEventListener("mouseenter", hoverEventHandler);
      this.addEventListener("mouseleave", outEventHandler);

      anim.play(animationName);
    }
    function outEventHandler(e) {
      const animationName = this.dataset.animatedSticker;
      setTimeout(() => {
        this.addEventListener("mouseover", hoverEventHandler);
        this.removeEventListener("mouseout", outEventHandler);
        anim.stop(animationName);
      }, 3000);
    }
  }

  // presentation
  // tg-benefits
  anim.loadAnimation({
    container: document.querySelector(".tg-benefits__icon_medal>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/presentation/bottom/JSONAnim/medal.json",
    name: "medal",
  });
  anim.loadAnimation({
    container: document.querySelector(".tg-benefits__icon_money>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/presentation/bottom/JSONAnim/money.json",
    name: "money",
  });
  anim.loadAnimation({
    container: document.querySelector(".tg-benefits__icon_rocket>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/presentation/bottom/JSONAnim/rocket.json",
    name: "rocket",
  });
  anim.loadAnimation({
    container: document.querySelector(".tg-benefits__icon_arm>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/presentation/bottom/JSONAnim/arm.json",
    name: "arm",
  });
  // anim.loadAnimation({
  //   container: document.querySelector(".chat__sticker"),
  //   renderer: "canvas",
  //   loop: true,
  //   autoplay: true,
  //   path: "img/common/JSONAnim/AnimatedSticker-hello.json",
  //   name: "chat__sticker",
  // });

  // about

  anim.loadAnimation({
    container: document.querySelector(".page-about__item-icon_personal>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/about/JSONAnim/personal_cabinet.json",
    name: "personal",
  });
  anim.loadAnimation({
    container: document.querySelector(".page-about__item-icon_robot>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/about/JSONAnim/robot.json",
    name: "robot",
  });
  anim.loadAnimation({
    container: document.querySelector(".page-about__item-icon_keyboard>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/about/JSONAnim/keyboard.json",
    name: "keyboard",
  });
  anim.loadAnimation({
    container: document.querySelector(".page-about__item-icon_helmet>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/about/JSONAnim/helmet.json",
    name: "helmet",
  });
  anim.loadAnimation({
    container: document.querySelector(".page-about__item-icon_support>div"),
    renderer: "canvas",
    loop: false,
    autoplay: false,
    path: "img/about/JSONAnim/support.json",
    name: "support",
  });

  //
  // ducks
  anim.loadAnimation({
    container: document.querySelector(".json-anim-footer"),
    renderer: "canvas",
    loop: true,
    autoplay: true,
    path: "img/common/JSONAnim/AnimatedSticker-ok.json",
  });

  anim.loadAnimation({
    container: document.querySelector(".json-anim-page-request"),
    renderer: "canvas",
    loop: true,
    autoplay: true,
    path: "img/common/JSONAnim/AnimatedSticker-cool.json",
  });
  //
}

// swiper
//
const next = document.querySelectorAll(".slider__arrow-right");
const prev = document.querySelectorAll(".slider__arrow-left");

prev.forEach((button) => {
  button.addEventListener("click", () => {
    swiper1.slidePrev();
    swiper2.slidePrev();
  });
});
next.forEach((button) => {
  button.addEventListener("click", () => {
    swiper1.slideNext();
    swiper2.slideNext();
  });
});

const swiper1 = new Swiper(".swiper1", {
  loop: true,
  // updateOnWindowResize: true,
  slidesPerView: 1,
  centeredSlides: true,
  allowTouchMove: false,
  breakpoints: {
    600: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  },
});
const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // spaceBetween: 30,
  centeredSlides: true,
  allowTouchMove: false,
  updateOnWindowResize: true,
  // slidesPerView: "auto",
  slidesPerView: 1,

  breakpoints: {
    771: {
      slidesPerView: 1,
    },

    1600: {
      slidesPerView: 2,
      spaceBetween: 64,
    },
  },
});

//
//
//

function moveElementsOnResize() {
  let timer;
  clearTimeout(timer);
  timer = setTimeout(() => {
    const controlPoint = 770;
    const slides = document.querySelectorAll(".cases-slider__slide");

    slides.forEach((slide) => {
      const elToMove = slide.querySelector(".cases-slider__slide-view");
      const neib = slide.querySelector(".cases-slider__slide-content");
      const parent = slide;
      const beforeElement = neib.querySelector(".cases-slider__text");

      function move() {
        if (window.innerWidth >= controlPoint) {
          parent.prepend(elToMove);
        } else {
          neib.insertBefore(elToMove, beforeElement);
        }
      }

      move(); //вызываем в первый раз, на случай если сразу нужно перестраивать
    }, 700);
  });
}

function rotating() {
  const planets = document.querySelectorAll(".planet");
  const parentContainer = document.querySelector(
    ".page-presentation__view-back"
  );
  const centerX = parentContainer.offsetWidth / 2 - 40;
  const centerY = parentContainer.offsetHeight / 2 - 40;
  let running = true;

  const angles = [];
  planets.forEach((planet, index) => {
    angles.push(0);
  });

  function animate() {
    if (!running) return;

    planets.forEach((planet, index) => {
      const orbitWidth = parseInt(planet.dataset.orbitWidth);
      const speed = Number(planet.dataset.planetSpeed);
      const direction = planet.dataset.direction === "false" ? -1 : 1;

      angles[index] += (speed * direction) / 1000;
      const x =
        centerX + orbitWidth * Math.cos(angles[index] + (index * Math.PI) / 2);
      const y =
        centerY + orbitWidth * Math.sin(angles[index] + (index * Math.PI) / 2);

      planet.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
}

function scrollToAnchors(selector) {
  // Smooth scrolling function
  function scrollToSection(event) {
    event.preventDefault();
    const sectionId = event.currentTarget.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Add event listeners to menu links
  const links = document.querySelectorAll(selector);
  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function reviewsToggler() {
  const reviewsContainer = document.querySelector(".page-reviews__container");
  const hiddenElements = reviewsContainer.querySelectorAll(".hidden");
  const reviewsButton = reviewsContainer.querySelector(".more");
  reviewsButton.addEventListener("click", () => {
    hiddenElements.forEach((element) => element.classList.remove("hidden"));
    reviewsButton.classList.add("none");
  });
}

function accordeon() {
  const answerButton = document.querySelectorAll(".answers__item-button");
  const answers = document.querySelectorAll(".answers__item");
  const answersText = document.querySelectorAll(".answers__item-text");

  answers.forEach((answer) =>
    answer.addEventListener("click", toggleClickHandler)
  );

  function toggleClickHandler(e) {
    e.stopPropagation();

    if (e.target.closest(".answers__item-text")) return;

    const thisButton = this.querySelector(".answers__item-button");
    const thisText = this.querySelector(".answers__item-text");

    thisButton.classList.toggle("active");
    thisText.classList.toggle("active");
    this.classList.toggle("active");

    if (thisText.classList.contains("active")) {
      thisText.style.height = `${thisText.scrollHeight}px`;
    } else {
      thisText.style.height = 0;
    }
  }
}

/* 
попробуй добавить touch action:none если движение по x 
*/
function makeMovable(el) {
  const target = document.querySelector(el);
  const parent = target.parentNode;

  if (getResidual() <= 0) {
    target.removeAttribute("style");
    return;
  }

  let pointerStartPosition = 0;
  let offset = 0;
  let scrollTopValue = 0;
  target.style.left = 0;
  target.style.position = "relative";
  target.style.cursor = "grab";
  target.style.touchAction = "none";

  target.addEventListener("pointerdown", downHandler);

  function getWidth(el) {
    return el.offsetWidth;
  }
  function getScrollWidth(el) {
    return el.scrollWidth;
  }
  function getCurrentOffset() {
    return parseInt(target.style.left) || 0;
  }

  function getResidual() {
    const parentWidth = getWidth(parent);
    const targetWidth = getScrollWidth(target);
    return targetWidth - parentWidth;
  }

  //

  function moveHandler(e) {
    e.preventDefault();
    const deltaY = e.clientY - pointerStartPosition.y;
    const deltaX = e.clientX - pointerStartPosition.x;
    console.log("scrollTop :" + document.documentElement.scrollTop);
    console.log("deltaY :" + deltaY);
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      window.scrollTo(0, scrollTopValue - deltaY);
    } else {
      target.style.left = `${offset + deltaX}px`;
    }
  }
  function downHandler(e) {
    e.preventDefault();
    offset = getCurrentOffset();
    pointerStartPosition = { x: e.clientX, y: e.clientY };

    scrollTopValue = window.scrollY;
    target.style.left = `${offset}px`;

    target.addEventListener("pointermove", moveHandler);
    target.removeEventListener("pointerdown", downHandler);
    target.addEventListener("pointerup", upHandler);
  }

  function upHandler() {
    const currentOffset = getCurrentOffset();
    const residual = getResidual();
    const parentWidth = getWidth(parent);
    target.removeEventListener("pointermove", moveHandler);
    target.addEventListener("pointerdown", downHandler);
    target.style.transition = "left 0.3s";
    if (Math.abs(currentOffset) >= residual) {
      target.style.left = `-${residual}px`;
    }
    if (currentOffset > 0) {
      target.style.left = 0;
    }
    setTimeout(() => (target.style.transition = "none"), 400);
  }
}

// function makeMovable(el) {
//   const target = document.querySelector(el);
//   const parent = target.parentNode;

//   if (getResidual() <= 0) {
//     target.removeAttribute("style");
//     return;
//   }

//   let pointerStartPosition = { x: 0, y: 0 };
//   let offset = 0;
//   let scrollTopValue = 0;
//   target.style.left = 0;
//   target.style.position = "relative";
//   target.style.cursor = "grab";

//   target.addEventListener("mousedown", downHandler);
//   target.addEventListener("touchstart", downHandler);

//   function getWidth(el) {
//     return el.offsetWidth;
//   }
//   function getScrollWidth(el) {
//     return el.scrollWidth;
//   }
//   function getCurrentOffset() {
//     return parseInt(target.style.left) || 0;
//   }

//   function getResidual() {
//     const parentWidth = getWidth(parent);
//     const targetWidth = getScrollWidth(target);
//     return targetWidth - parentWidth;
//   }

//   function moveHandler(e) {
//     e.preventDefault();
//     const clientX = e.clientX || e.changedTouches[0].clientX;
//     const clientY = e.clientY || e.changedTouches[0].clientY;
//     const deltaY = clientY - pointerStartPosition.y;
//     const deltaX = clientX - pointerStartPosition.x;
//     console.log("scrollTop :" + document.documentElement.scrollTop);
//     console.log("deltaY :" + deltaY);
//     if (Math.abs(deltaY) > Math.abs(deltaX)) {
//       const newScrollTop = scrollTopValue - deltaY;
//       if (document.documentElement) {
//         document.documentElement.scrollTop = newScrollTop;
//       }
//       window.scrollTo(0, newScrollTop);
//     } else {
//       target.style.left = `${offset + deltaX}px`;
//     }
//   }

//   function downHandler(e) {
//     e.preventDefault();
//     if (e.touches && e.touches.length > 1) {
//       return;
//     }
//     offset = getCurrentOffset();
//     pointerStartPosition = {
//       x: e.clientX || e.touches[0].clientX,
//       y: e.clientY || e.touches[0].clientY,
//     };
//     scrollTopValue = window.scrollY;
//     target.style.left = `${offset}px`;

//     target.addEventListener("mousemove", moveHandler);
//     target.addEventListener("touchmove", moveHandler);
//     target.removeEventListener("mousedown", downHandler);
//     target.removeEventListener("touchstart", downHandler);
//     target.addEventListener("mouseup", upHandler);
//     target.addEventListener("touchend", upHandler);
//   }

//   function upHandler() {
//     const currentOffset = getCurrentOffset();
//     const residual = getResidual();
//     const parentWidth = getWidth(parent);
//     target.removeEventListener("mousemove", moveHandler);
//     target.removeEventListener("touchmove", moveHandler);
//     target.addEventListener("mousedown", downHandler);
//     target.addEventListener("touchstart", downHandler);
//     target.style.transition = "left 0.3s";
//     if (Math.abs(currentOffset) >= residual) {
//       target.style.left = `-${residual}px`;
//     }
//     if (currentOffset > 0) {
//       target.style.left = 0;
//     }
//     setTimeout(() => (target.style.transition = "none"), 400);
//   }
// }

//

//
function reactionsAddOne(button) {
  const buttons = document.querySelectorAll(button);
  const activeClass = "active";
  buttons.forEach((button) => {
    button.addEventListener("click", clickHandler);
  });
  function clickHandler(e) {
    e.stopPropagation();
    const button = e.currentTarget;
    const number = parseInt(button.querySelector("span").textContent);
    if (!button.classList.contains(activeClass)) {
      setNumber(button, number + 1);
      button.classList.add(activeClass);
    } else {
      setNumber(button, number - 1);
      button.classList.remove(activeClass);
    }
  }
  function getNumber(button) {
    return;
  }
  function setNumber(button, value) {
    button.querySelector("span").textContent = value;
  }
}

// функция для вызова chatAnim
function onHalfVisible(selector, callback) {
  const element = document.querySelector(selector);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.6) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(element);
}

function chatAnim() {
  const chat = document.querySelector(".chat");
  const messageContainer = document.querySelector(".chat__main");
  const messages = messageContainer.children;

  let delay = 0;

  messages[0].style.height = "auto"; // отображаем первое сообщение сразу при загрузке страницы

  for (let i = 0; i < messages.length; i++) {
    messages[i].style.opacity = "0"; // скрываем следующее сообщение

    setTimeout(() => {
      messages[i].style.display = "flex";
      messages[i].style.opacity = "1"; // отображаем следующее сообщение
      // messageContainer.scrollTop = messageContainer.scrollHeight; // прокручиваем контейнер сообщений вниз
    }, delay);

    delay += 600; // задержка перед показом каждого следующего сообщения
  }
}
