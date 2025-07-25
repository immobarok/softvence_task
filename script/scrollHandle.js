
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
    navbar.classList.add("bg-white/30", "backdrop-blur-md", "shadow-md");
  navbar.classList.remove("bg-white");
    } else {
    navbar.classList.remove("bg-white/30", "backdrop-blur-md", "shadow-md");
  navbar.classList.add("bg-white");
    }
  });
