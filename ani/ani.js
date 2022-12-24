const elements = document.querySelectorAll('.ani');


window.addEventListener('scroll', () => {

  elements.forEach(element => {
    const top = element.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      element.classList.add('animated');
    }
  });
});