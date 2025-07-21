var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent event from bubbling up

    const parentLi = this.closest('.dropdown');

    // Toggle current dropdown
    parentLi.classList.toggle('active');

    // Close other dropdowns
    document.querySelectorAll('.dropdown.active').forEach(openDropdown => {
      if (openDropdown !== parentLi) {
        openDropdown.classList.remove('active');
      }
    });
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown.active').forEach(openDropdown => {
    openDropdown.classList.remove('active');
  });
});


 const btn = document.getElementById('backToTopBtn');

  // Show button on scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  // Scroll to top on click
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });



  // counter section 
    // const counters = document.querySelectorAll('.counter-item');
    // const speed = 100; // lower = faster

    // counters.forEach(counter => {
    //     const updateCount = () => {
    //         const target = +counter.getAttribute('data-target');
    //         const count = +counter.innerText;
    //         const increment = target / speed;

    //         if (count < target) {
    //             counter.innerText = Math.ceil(count + increment);
    //             setTimeout(updateCount, 20);
    //         } else {
    //             counter.innerText = target;
    //         }
    //     };

    //     updateCount();
    // });

      const counters = document.querySelectorAll('.counter-item');

    counters.forEach(item => {
        const h2 = item.querySelector('h2');
        const target = +item.getAttribute('data-target');
        let count = 0;

        const updateCount = () => {
            const increment = Math.ceil(target / 50); // adjust speed here
            count += increment;

            if (count < target) {
                h2.innerText = `${count}+`;
                setTimeout(updateCount, 30);
            } else {
                h2.innerText = `${target}+`;
            }
        };

        updateCount();
    });
     const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.visibility = "visible";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.visibility = "hidden";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });



  // scroll the header 
   const header = document.querySelector('.container header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

 window.addEventListener('scroll', function () {
  const header = document.querySelector('.container header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// Show the message when "Hire Me" is clicked
document.getElementById("hireBtn").addEventListener("click", function () {
  const messageBox = document.getElementById("hireMessage");
  messageBox.classList.toggle("hidden");

  // Scroll to the message if it is shown
  if (!messageBox.classList.contains("hidden")) {
    messageBox.scrollIntoView({ behavior: "smooth" });
  }
});


