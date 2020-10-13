gsap.to(".first", 1.5, { delay: 0.5, top: "-100%", ease: Expo.easeInOut });
gsap.to(".second", 1.5, { delay: 0.7, top: "-100%", ease: Expo.easeInOut });
gsap.to(".third", 1.5, { delay: 0.9, top: "-100%", ease: Expo.easeInOut });
gsap.from(".nav__item", {
    opacity: 0,
    duration: 3,
    delay: 2,
    y: 25,
    ease: "expo.out",
    stagger: 0.2,
});
gsap.from(".home__information", {
    opacity: 0,
    duration: 3,
    delay: 2.5,
    y: 25,
});
gsap.from(".animated", {
    opacity: 0,
    duration: 3,
    delay: 2.3,
    y: 25,
    ease: "expo.out",
    stagger: 0.3,
});
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 2.3, x: 30 });