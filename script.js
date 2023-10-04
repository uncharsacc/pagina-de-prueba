document.querySelectorAll(".swiper").forEach(function (s) {
  let next = s.querySelector(".swiper-button-next");
  let prev = s.querySelector(".swiper-button-prev");

  new Swiper(s, {
    navigation: {
      nextEl: next,
      prevEl: prev
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
});
