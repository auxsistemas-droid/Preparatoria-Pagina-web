const pasos = document.querySelectorAll(".paso");
const dots = document.querySelectorAll(".dot");

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("activo");

        const index = Array.from(pasos).indexOf(e.target);
        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === index);
        });
      } else {
        e.target.classList.remove("activo");
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: "0px",
  },
);

pasos.forEach((p) => obs.observe(p));

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    pasos[idx].scrollIntoView({ behavior: "smooth" });
  });
});
