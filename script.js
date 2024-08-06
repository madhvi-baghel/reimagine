//loader start

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let sit = document.querySelector(".site-teaser");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return (sit.style.opacity = "0");
    }
    currentValue += Math.floor(Math.random() * 10) + 1;
    if (currentValue > 100) {
      currentValue = 100;
    }
    counterElement.innerHTML = currentValue + "%";
    let delay = Math.floor(Math.random() * 200) + 250;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}

startLoader();

gsap.from(".circles", 2, {
  top: "-100%",
  ease: "elastic.out",
  delay: 0.5,
});
gsap.to(".circle-inner", 1, {
  width: "75px",
  height: "75px",
  ease: "power4.inOut",
  delay: 2,
});

gsap.to(".circle-inner-rotater", 1, {
  scale: 1,
  ease: "power4.inOut",
  delay: 2.5,
});
gsap.to(".circles", 1.5, {
  rotation: 360,
  ease: "power4.inOut",
  delay: 3,
});
gsap.to(".block", 0.75, {
  display: "block",
  height: "200px",
  ease: "power4.inOut",
  delay: 4,
});
gsap.to(".block", 0.75, {
  width: "800px",
  ease: "power4.inOut",
  delay: 4.5,
});
gsap.to(".block", 1.5, {
  width: "0px",
  ease: "power4.inOut",
  delay: 5,
});
gsap.to(".block", 1.5, {
  height: "0px",
  ease: "power4.inOut",
  delay: 6,
});
gsap.to(".circles", 1.5, {
  rotation: 0,
  ease: "power4.inOut",
  delay: 6.5,
});
gsap.to(".loader", 2.5, {
  scale: 0,
  ease: "power4.inOut",
  delay: 7,
});

gsap.from(".container", {
  duration: 2,
  width: 0,
  ease: "power4.inOut",
  delay: 7,
});
//loader end
gsap.from("nav .links a, .links i,.links button",  1.5, {
  opacity: 0,
  y: -100,
  ease: "power4.inOut",
  delay: 8.5,
  stagger: 0.3,
});
// gsap.from("")

// slider
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

// IMAGE GALLERY
function imageGalleryAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".galleryImg",
        start: "top top",
        end: "top -450%",
        scrub: true,
      },
    })
    .to(".galleryImg", {
      stagger: 0.2,
      y: -700,
      scrub: true,
    });
}

imageGalleryAnimation();

// Horizontal Scroll
ScrollTrigger.create({
  trigger: ".horizontal-scroll",
  start: "top top",

  end: () => `+=${document.querySelector(".horizontal-scroll").offsetHeight}`,
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    gsap.set(".slider-wrapper", {
      x:
        -self.progress *
        (document.querySelector(".slider-wrapper").offsetWidth -
          window.innerWidth),
      ease: "power1.out",
    });

    const markerMaxMove =
      window.innerWidth -
      document.querySelector(".marker-wrapper").offsetWidth -
      170;
    const markerMove = 70 + self.progress * markerMaxMove;
    gsap.set(".marker-wrapper", {
      x: markerMove,
      ease: "power1.out",
    });
  },
});

// CARDS SECTION

const team = [
  { name: "Ava sinclair", role: "Creative Director" },
  { name: "Liam Archer", role: "Brand Strategist" },
  { name: "Zoe clementine", role: "Lead Designer" },
  { name: "Ethan Hawthorne", role: "Chief Innovation officer" },
  { name: "Ava sinclair", role: "Creative Director" },
  { name: "Liam Archer", role: "Brand Strategist" },
  { name: "Zoe clementine", role: "Lead Designer" },
  { name: "Ethan Hawthorne", role: "Chief Innovation officer" },
  { name: "Ava sinclair", role: "Creative Director" },
  { name: "Liam Archer", role: "Brand Strategist" },
];
const cursor = document.querySelector(".cursor");
const cursorIcon = cursor.querySelector("i");

const cursorWidth = cursor.offsetWidth / 2;
const cursorHeight = cursor.offsetWidth / 2;

let currentSlide = 1;
const totalSlides = 10;

const updateCursorClass = (xPosition) => {
  const halfPageWidth = window.innerWidth / 2;
  if (xPosition > halfPageWidth) {
    if (currentSlide < totalSlides) {
      cursorIcon.classList.remove("ph-arrow-left");
      cursorIcon.classList.add("ph-arrow-right");
      cursor.style.display = "";
    } else {
      cursor.style.display = "none";
    }
  } else {
    if (currentSlide > 1) {
      cursorIcon.classList.remove("ph-arrow-right");
      cursorIcon.classList.add("ph-arrow-left");
      cursor.style.display = "";
    } else {
      cursor.style.display = "none";
    }
  }
};

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX - cursorWidth,
    y: e.clientY - cursorHeight,
    duration: 1,
    ease: "power3.out",
  });
  updateCursorClass(e.clientX);
});

const updateInfo = (slideNumber) => {
  const member = team[slideNumber - 1];
  document.querySelector(".info .name").textContent = member.name;
  document.querySelector(".info .role").textContent = member.role;
};

const animateSlide = (slideNumber, reveal) => {
  const marquee = document.querySelector(`.t-${slideNumber}.marquee-wrapper`);
  const img = document.getElementById(`t-${slideNumber}`);
  const clipPathValue = reveal
    ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
    : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

  gsap.to(marquee, {
    clipPath: clipPathValue,
    duration: 1,
    ease: "power4.out",
    delay: 0.3,
  });

  gsap.to(img, {
    clipPath: clipPathValue,
    duration: 1,
    ease: "power4.out",
  });
};
updateInfo(currentSlide);

const handleRightClick = () => {
  if (currentSlide < totalSlides) {
    animateSlide(currentSlide + 1, true);
    currentSlide++;
    updateInfo(currentSlide);
  }
};

const handleLeftClick = () => {
  if (currentSlide > 1) {
    animateSlide(currentSlide, false);
    currentSlide--;
    updateInfo(currentSlide);
  }
};

document.addEventListener("click", (e) => {
  const halfPageWidth = window.innerWidth / 2;
  if (e.clientX > halfPageWidth) {
    handleRightClick();
  } else {
    handleLeftClick();
  }
});


function responsiveNone(){
  // document.addEventListener('DOMContentLoaded', function() {
  //   // Function to check if the window width matches any of the specified values
  //   function isMatchedWidth() {
  //     var width = window.innerWidth;
  //     return width === 765 || width === 465 || width === 360;
  //   }
  
  //   // Function to hide or show the card container based on the matched width
  //   function adjustVisibility() {
  //     var cardContainer = document.getElementById('card-container');
  //     if (isMatchedWidth()) {
  //       cardContainer.style.display = 'none';
  //     } else {
  //       cardContainer.style.display = 'block';
  //     }
  //   }
  
  //   // Initial check and adjustment
  //   adjustVisibility()
  
  //   // Adjust visibility on window resize
  //   window.addEventListener('resize', adjustVisibility);
  // });
  document.addEventListener('DOMContentLoaded', function() {
    // Function to check if the window width matches any of the specified values
    function isMatchedWidth() {
      // Using matchMedia to get a MediaQueryList object
      var widthMatches = window.matchMedia('(max-width: 765px)').matches ||
                         window.matchMedia('(max-width: 465px)').matches ||
                         window.matchMedia('(max-width: 360px)').matches;
      return widthMatches;
    }
  
    // Function to hide or show the card container based on the matched width
    function adjustVisibility() {
      var cardContainer = document.getElementById('card-container');
      if (isMatchedWidth()) {
        cardContainer.style.display = 'none';
      } else {
        cardContainer.style.display = 'block';
      }
    }
  
    // Initial check and adjustment
    adjustVisibility();
  
    // Adjust visibility on window resize
    window.addEventListener('resize', adjustVisibility);
  });
  
}
responsiveNone()