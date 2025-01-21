/* =====================================================
   Resume section tabs and tab contents
===================================================== */
// const resumeTab = document.querySelector(".resume-tabs");
// const resumePortfolioTabBtns = resumeTab.querySelectorAll(".tab-btn");
// const resumeTabContents = document.querySelectorAll(".resume-tab-content");

// var resumeTabNav = function (resumeTabClick) {
//    resumeTabContents.forEach((resumeTabContent) => {
//       resumeTabContent.style.display = "none";
//       resumeTabContent.classList.remove("active");
//    });

//    resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
//       resumePortfolioTabBtn.classList.remove("active");
//    });

//    resumeTabContents[resumeTabClick].style.display = "flex";

//    setTimeout(() => {
//       resumeTabContents[resumeTabClick].classList.add("active");
//    }, 100);

//    resumePortfolioTabBtns[resumeTabClick].classList.add("active");
// };

// resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
//    resumePortfolioTabBtn.addEventListener("click", () => {
//       resumeTabNav(i);
//    });
// });

/* =====================================================
   Service modal open/close function
===================================================== */
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
   const serviceCard = serviceCardWithModal.querySelector(".service-card");
   const serviceBackDrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
   const serviceModal = serviceCardWithModal.querySelector(".service-modal");
   const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

   serviceCard.addEventListener("click", () => {
      serviceBackDrop.style.display = "flex";

      setTimeout(() => {
         serviceBackDrop.classList.add("active");
      }, 100);

      setTimeout(() => {
         serviceModal.classList.add("active");
      }, 300);
   });

   modalCloseBtn.addEventListener("click", () => {
      setTimeout(() => {
         serviceBackDrop.style.display = "none";
      }, 500);

      setTimeout(() => {
         serviceBackDrop.classList.remove("active");
         serviceModal.classList.remove("active");
      }, 100);

   });
});

/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.
document.addEventListener("DOMContentLoaded", () => {
   const portfilioTabs = document.querySelector(".porfolio-tabs");
   const porfolioTabBtns = portfilioTabs.querySelectorAll(".tab-btn");
   const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

   porfolioTabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
         const filter = tabBtn.getAttribute("data-filter");

         cardsWithModals.forEach((cardWithModal) => {
            if (filter === "all" || cardWithModal.classList.contains(filter)) {
               cardWithModal.classList.remove("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "1";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            }
            else {
               cardWithModal.classList.add("hidden");

               setTimeout(() => {
                  cardWithModal.style.opacity = "0";
                  cardWithModal.style.transition = ".5s ease";
               }, 1);
            }
         });
         // Add active class to the clicked tab button.
         porfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
         tabBtn.classList.add("active");
      });
   });
});

// Open/Close Portfolio modals.
const porfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

porfolioCardsWithModals.forEach((porfolioCardWithModal) => {
   const porfolioCard = porfolioCardWithModal.querySelector(".portfolio-card");
   const porfolioBackdrop = porfolioCardWithModal.querySelector(".porfolio-modal-backdrop");
   const porfolioModal = porfolioCardWithModal.querySelector(".portfolio-modal");
   const modalCloseBtn = porfolioCardWithModal.querySelector(".modal-close-btn");

   porfolioCard.addEventListener("click", () => {
      porfolioBackdrop.style.display = "flex";

      setTimeout(() => {
         porfolioBackdrop.classList.add("active");
      }, 300);

      setTimeout(() => {
         porfolioModal.classList.add("active");
      }, 300);
   });

   modalCloseBtn.addEventListener("click", () => {
      setTimeout(() => {
         porfolioBackdrop.style.display = "none";
      }, 500);

      setTimeout(() => {
         porfolioBackdrop.classList.remove("active");
         porfolioModal.classList.remove("active");
      }, 100);
   });
});

/* =====================================================
   Testimonial Swiper
===================================================== */
var swiper = new Swiper(".sue-client-swiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */
(function () {
   emailjs.init("evlMkikWBW8CL4XdS");
})();

const sueContactForm = document.getElementById("sue-contact-form");
const sueContactFormAlert = document.querySelector(".contact-form-alert");

sueContactForm.addEventListener('submit', function (event) {
   event.preventDefault();
   emailjs.sendForm('service_zs98yar', 'template_7pa0mbg', '#sue-contact-form')
      .then(() => {
         sueContactFormAlert.innerHTML = "<span>Your message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
         sueContactForm.reset();

         setTimeout(() => {
            sueContactFormAlert.innerHTML = "";
         }, 5000);
      }, (error) => {
         sueContactFormAlert.innerHTML = "<span>Message not sent 😕</span> <i class='ri-error-warning-fill'></i>";
         sueContactFormAlert.title = error;
      });
});

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */
window.addEventListener("scroll", () => {
   const sueHeader = document.querySelector(".sue-header");

   sueHeader.classList.toggle("shrink", window.scrollY > 0);
});

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.
window.addEventListener("scroll", () => {
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;

   navMenuSections.forEach((navMenuSection) => {
      let sectionHeight = navMenuSection.offsetHeight;
      let sectionTop = navMenuSection.offsetTop - 50;
      let id = navMenuSection.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
      } else {
         document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
      }
   });
});

// Javascript to show bottom navigation menu on home(page load).
window.addEventListener("DOMContentLoaded", () => {
   const bottomNav = document.querySelector(".bottom-nav");

   bottomNav.classList.toggle("active", window.scrollY < 10);
});

// Javascript to show/hide bottom navigation menu on home(scroll).
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
   bottomNav.classList.add("active");

   if (window.scrollY < 10) {
      function scrollStoped() {
         bottomNav.classList.add("active");
      }

      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStoped, 2000);
   }

   if (window.scrollY > 10) {
      menuHideBtn.classList.add("active");

      function scrollStoped() {
         bottomNav.classList.remove("active");
      }

      clearTimeout(navTimeout);
      navTimeout = setTimeout(scrollStoped, 2000);
   }
});

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.