document.addEventListener("DOMContentLoaded", function() {
  const qtyInput = document.getElementById("pm-qty");
  const minusBtn = document.getElementById("pm-minus");
  const plusBtn = document.getElementById("pm-plus");

  // Decrease quantity
  minusBtn.addEventListener("click", function() {
    let currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) {
      qtyInput.value = currentQty - 1;
    }
  });

  // Increase quantity
  plusBtn.addEventListener("click", function() {
    let currentQty = parseInt(qtyInput.value);
    qtyInput.value = currentQty + 1;
  });

  // Validate input
  qtyInput.addEventListener("input", function() {
    if (qtyInput.value < 1 || isNaN(qtyInput.value)) {
      qtyInput.value = 1;
    }
  });

  // Lazy load images
  const images = document.querySelectorAll("img[data-src]");
  const loadImg = (img) => {
    const src = img.getAttribute("data-src");
    if (!src) return;
    img.src = src;
  };
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImg(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  images.forEach(img => imgObserver.observe(img));
});