(function () {
  const root = document.documentElement;
  const spotlight = document.querySelector(".spotlight");
  if (!spotlight) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let spotX = 50;
  let spotY = 50;

  function setSpot(x, y) {
    spotX = x;
    spotY = y;
    root.style.setProperty("--spot-x", `${x}%`);
    root.style.setProperty("--spot-y", `${y}%`);
  }

  function fromPointer(clientX, clientY) {
    setSpot(
      (clientX / window.innerWidth) * 100,
      (clientY / window.innerHeight) * 100
    );
  }

  setSpot(50, 50);

  if (!prefersReduced) {
    window.addEventListener(
      "mousemove",
      (e) => fromPointer(e.clientX, e.clientY),
      { passive: true }
    );

    window.addEventListener(
      "touchmove",
      (e) => {
        const touch = e.touches[0];
        if (touch) fromPointer(touch.clientX, touch.clientY);
      },
      { passive: true }
    );
  }
})();
