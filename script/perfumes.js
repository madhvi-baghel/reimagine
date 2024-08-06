function createCard(imageSrc, altText, title, price) {
  const card = document.createElement("div");
  card.className = "pro";

  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = altText;
  card.appendChild(img);

  const des = document.createElement("div");
  des.className = "des";

  const h3 = document.createElement("h3");
  h3.textContent = title;
  des.appendChild(h3);

  const starDiv = document.createElement("div");
  starDiv.className = "star";

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.className = "fa fa-star";
    starDiv.appendChild(star);
  }

  des.appendChild(starDiv);

  const h4 = document.createElement("h4");
  h4.textContent = price;
  des.appendChild(h4);

  card.appendChild(des);

  const cartLink = document.createElement("a");
  cartLink.href = "#";
  cartLink.innerHTML = '<i class="fa-thin fa-cart-shopping cart"></i>';
  card.appendChild(cartLink);

  return card;
}

function appendCards() {
  const proContainer = document.querySelector(".pro-container");
  const cardData = [
    {
      imageSrc: "img/2.6.jpg",
      altText: "Product 1",
      title: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      imageSrc: "img/2.7.jpg",
      altText: "Product 2",
      title: "Space Explorer T-Shirts",
      price: "$85",
    },
    {
      imageSrc: "img/2.5.jpg",
      altText: "Product 1",
      title: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      imageSrc: "img/2.9.jpg",
      altText: "Product 2",
      title: "Space Explorer T-Shirts",
      price: "$85",
    },
    {
      imageSrc: "img/2.10.jpg",
      altText: "Product 1",
      title: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      imageSrc: "img/2.12.jpg",
      altText: "Product 2",
      title: "Space Explorer T-Shirts",
      price: "$85",
    },
    {
      imageSrc: "img/2.3.jpg",
      altText: "Product 1",
      title: "Cartoon Astronaut T-Shirts",
      price: "$78",
    },
    {
      imageSrc: "img/2.4.jpg",
      altText: "Product 2",
      title: "Space Explorer T-Shirts",
      price: "$85",
    },
  ];

  for (let i = 0; i < cardData.length; i++) {
    const card = createCard(
      cardData[i].imageSrc,
      cardData[i].altText,
      cardData[i].title,
      cardData[i].price
    );
    proContainer.appendChild(card);
  }
}

appendCards();

// GSAP animation for navbar
gsap.from("nav", {
  duration: 1,
  opacity: 0,
  y: -50,
  ease: "power4.out",
});

// GSAP animation for video header
gsap.from(".videoContainer", {
  duration: 1,
  opacity: 0,
  x: -50,
  ease: "power4.out",
});

gsap.from(".text", {
  duration: 1,
  opacity: 0,
  x: 50,
  ease: "power4.out",
});

// GSAP animation for product cards
gsap.from(".pro", {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  ease: "power4.out",
});

document.addEventListener("DOMContentLoaded", function () {
  // Select both buttons
  var button1 = document.querySelector(".text a #button1"); // Assuming one of the buttons has an ID for distinction
  var button2 = document.querySelector(".text a #button2"); // Assuming the other button has an ID for distinction

  // Select both sections
  var featuredProducts = document.getElementById("featuredProducts");
  var newArrivals = document.getElementById("newArrivals");

  // Assign event listeners to each button
  button1.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    featuredProducts.scrollIntoView({ behavior: "smooth" });
  });

  button2.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    newArrivals.scrollIntoView({ behavior: "smooth" });
  });
});
