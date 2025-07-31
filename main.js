document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const target = +counter.getAttribute("data-target");
  let started = false;

  const countUp = () => {
    let current = 0;
    const duration = 2000; // duration in milliseconds
    const intervalTime = 10; // how often to update the number
    const steps = duration / intervalTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.innerText = target;
        clearInterval(interval);
      } else {
        counter.innerText = Math.ceil(current);
      }
    }, intervalTime);
  };

  // Detect when counter is in view
  window.addEventListener("scroll", () => {
    const sectionTop = counter.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && !started) {
      started = true;
      countUp();
    }
  });
});




  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    function formatNumber(value) {
      if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
      if (value >= 1_000_000) return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
      if (value >= 1_000) return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
      return value.toString();
    }

    function countUp() {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let current = 0;
        const duration = 2000;
        const intervalTime = 10;
        const steps = duration / intervalTime;
        const increment = target / steps;

        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.innerText = formatNumber(target);
            clearInterval(interval);
          } else {
            counter.innerText = formatNumber(Math.ceil(current));
          }
        }, intervalTime);
      });
    }

    // Run when in view
    window.addEventListener("scroll", () => {
      const trigger = document.querySelector(".counter");
      if (!trigger) return;

      const top = trigger.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight && !started) {
        started = true;
        countUp();
      }
    });
  });
