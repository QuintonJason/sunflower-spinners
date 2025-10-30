// JS scripts placed here
const sunflower = document.querySelector('.sunflower-wrapper');

sunflower.addEventListener('click', () => {
    sunflower.classList.toggle('grow');
});

// gsap.from(".sunflower-stem", { duration: 1, x: -2000, rotation: 360 });

const tl = gsap.timeline();

tl.to(".sunflower-stem", { duration: 1, x: 100 })
  .to(".sunflower-top", { duration: 1, y: 100 })
  .to(".sunflower-top img", { duration: 1, rotation: 360 });