// const scrollers = document.querySelectorAll(".alive_longSection__middle_img");

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
//     addAnimation();
// }

// function addAnimation(){
//     scrollers.forEach((scroller) => {
//         scroller.setAttribute("data-animated", true);

//         const scrollerInner = scroller.querySelector(".people1");
//         // const scrollerContent = Array.from(scrollerInner.children);

//         scrollerContent.forEach((item) => {
//             const duplicatedItem = item.cloneNode(true);
//             duplicatedItem.setAttribute("aria-hidden", true);
//             scroller.appendChild(duplicatedItem);
//         });
//     })
// }



// let circulProgress = document.querySelector("alive_longSection__circle_item");
// let progressValue = document.querySelector('.progressValue')

// let progressStartValue = 0,
//     progressEndValue = 76,
//     speed = 100;

// let progress = setInterval(() => {
//     progressStartValue++;

//     progressValue.textContent = `${progressStartValue}%`;
//     circulProgress.style.background = `conic-gradient(rgba(87, 213, 255) ${progressStartValue * 3.6}deg, transparent 0deg);`

//     if(progressStartValue === progressEndValue){
//         clearInterval(progress);
//     }
// }, speed);