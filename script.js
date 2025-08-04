document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in-section");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    appearOnScroll.observe(section);
  });

  const hero = document.querySelector('.hero');
  hero.style.opacity = 0;
  setTimeout(() => {
    hero.style.opacity = 1;
    hero.style.transition = 'opacity 1.5s ease';
  }, 300);

  const uploadInput = document.getElementById('upload-photo');
  const profilePreview = document.getElementById('profilePreview');

  uploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      profilePreview.src = URL.createObjectURL(file);
    }
  });
});
