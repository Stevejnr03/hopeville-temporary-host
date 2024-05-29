function closeModal(){
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}


var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});


// Make mobile navigation work

function openClose(){
  var mobileNav = document.getElementById('main-nav');
  
  if( mobileNav.style.opacity === '1') {
       mobileNav.style.opacity = '0';
       mobileNav.style.pointerEvents = 'none';
       mobileNav.style.visibility = 'hidden';
       mobileNav.style.transform="translateX(100%)";
       document.getElementById('close-nav').style.display = "none";
      document.getElementById('open-nav').style.display = "block";
  
  }
  
  else {
      mobileNav.style.opacity = '1';
      mobileNav.style.pointerEvents = 'auto';
      mobileNav.style.visibility = 'visible';
      mobileNav.style.transform = 'translateX(0)';
      document.getElementById('close-nav').style.display = "block";
      document.getElementById('open-nav').style.display = "none";
  
  }
  }

  function closeNavOnClick(){
    var mobileNav = document.getElementById('main-nav');
    
    if ( window.matchMedia("(max-width: 63em)")){
  
    if( mobileNav.style.opacity === '1') {
         mobileNav.style.opacity = '0';
         mobileNav.style.pointerEvents = 'none';
         mobileNav.style.visibility = 'hidden';
         mobileNav.style.transform="translateX(100%)";
         document.getElementById('close-nav').style.display = "none";
        document.getElementById('open-nav').style.display = "block";
    
    }
  }
}

// hero slider

$(document).ready(function(){
  function play() {
      setInterval(function(){
          var next = $(".slider-image .active").removeClass("active").next(".hero-image");
          if (!next.length) {
              next = $(".slider-image .hero-image:first");
          }
          next.addClass("active");
      }, 7000);
  }
  play();
});


  // Smooth Scrolling Animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    // scroll to other link
    if (href !== "#" && href.startsWith("#"));

    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });

    // close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});


// Sticky navigation

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      document.getElementById("head-1-links").style.display = "none";
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky"); 
    }
   
    
  },

  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// testimonial slide

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}



