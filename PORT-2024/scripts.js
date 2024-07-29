  const showHeader = document.getElementById("header");
  const menuIcon = document.getElementById('menu-icon')
  const menuGrid = document.getElementById('menu-grid');
  const firstSection = document.getElementById('sec-one');
  const scrollElements = document.querySelectorAll(".js-scroll");

  scrollElements.forEach((el) => {
    el.style.opacity = 0
  })

  const elementInView = (el, percentageScroll = 300 ) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/300))
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    })
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation()
    showHeader.style.display = "flex";
  });

  const showMenu = () => {
    menuGrid.style.display = 'grid';
    menuIcon.style.display = 'none';
    showHeader.style.backgroundColor = '#000000';
  }
