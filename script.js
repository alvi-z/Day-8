/* =========================================================
   GRAND FINALE — JAVASCRIPT
   Royal Whimsical Birthday Adventure
========================================================= */


/* =========================================================
   THEATRE VIDEO
========================================================= */

const VIDEO_LINK =
  "https://drive.google.com/file/d/1GZOnTMVF6m6B4HVt0aZSIin6RP_FJ5Kn/view?usp=drivesdk";


/* =========================================================
   PAGE NAVIGATION
========================================================= */

let currentPage = "welcomePage";


function goToPage(pageId) {

  const nextPage =
    document.getElementById(pageId);

  if (!nextPage) {
    console.error(
      "Page not found:",
      pageId
    );
    return;
  }


  /* Hide EVERY page first.
     This prevents pages accidentally
     appearing on top of each other. */

  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });


  /* Show requested page */

  nextPage.classList.add("active");


  /* Update state */

  currentPage = pageId;


  /* Always return to top */

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });


  /* Small magical sparkle */

  if (
    pageId === "kitchenPage" ||
    pageId === "libraryPage" ||
    pageId === "cafePage" ||
    pageId === "antiquePage"
  ) {

    setTimeout(
      buildingSparkle,
      180
    );

  }

}


/* =========================================================
   GO BACK
========================================================= */

function goBack() {

  if (
    currentPage === "welcomePage"
  ) {
    return;
  }


  /* From secondary pages,
     return to the village */

  if (
    currentPage === "kitchenPage" ||
    currentPage === "libraryPage" ||
    currentPage === "cafePage" ||
    currentPage === "antiquePage"
  ) {

    goToPage("villagePage");

    return;

  }


  /* From letter */

  if (
    currentPage === "letterPage"
  ) {

    goToPage("libraryPage");

    return;

  }


  /* From theatre ending */

  if (
    currentPage === "videoEndingPage"
  ) {

    goToPage("cafePage");

    return;

  }


  /* From coupons */

  if (
    currentPage === "cakeCouponPage"
  ) {

    goToPage("kitchenPage");

    return;

  }


  if (
    currentPage === "finalCouponPage"
  ) {

    goToPage("villagePage");

    return;

  }


  /* From goodbye */

  if (
    currentPage === "goodbyePage"
  ) {

    goToPage("villagePage");

  }

}


/* =========================================================
   BUILDING NAVIGATION
========================================================= */

function openBuilding(building) {

  buildingSparkle();


  switch (building) {

    case "kitchen":

      goToPage("kitchenPage");

      resetCake();

      break;


    case "library":

      goToPage("libraryPage");

      resetLibrary();

      break;


    case "cafe":

      goToPage("cafePage");

      resetCafe();

      break;


    case "antique":

      goToPage("antiquePage");

      resetAntique();

      break;


    default:

      console.error(
        "Unknown building:",
        building
      );

  }

}


/* =========================================================
   BUILDING SPARKLE
========================================================= */

function buildingSparkle() {

  const sparkle =
    document.createElement("div");

  sparkle.className =
    "building-sparkle";

  sparkle.textContent =
    Math.random() > 0.5
      ? "✦"
      : "✧";


  sparkle.style.left =
    (
      Math.random() * 80 + 10
    ) + "%";


  sparkle.style.top =
    (
      Math.random() * 60 + 20
    ) + "%";


  document.body.appendChild(
    sparkle
  );


  setTimeout(() => {

    sparkle.remove();

  }, 900);

}


/* =========================================================
   =========================================================
   CAKE GAME
   =========================================================
   ========================================================= */


/*
   Correct order:

   1. Milk
   2. Vegetable Oil
   3. Cocoa Powder
   4. Sugar
   5. Chocolate
   6. Butter
   7. Eggs
   8. Baking Powder
*/

const cakeOrder = [
  "milk",
  "oil",
  "cocoa",
  "sugar",
  "chocolate",
  "butter",
  "eggs",
  "baking"
];


const ingredientNames = {

  milk:
    "milk",

  oil:
    "vegetable oil",

  cocoa:
    "cocoa powder",

  sugar:
    "sugar",

  chocolate:
    "chocolate",

  butter:
    "butter",

  eggs:
    "eggs",

  baking:
    "baking powder"

};


const bowlLayerMap = {

  milk:
    "milkLayer",

  oil:
    "oilLayer",

  cocoa:
    "cocoaLayer",

  sugar:
    "sugarLayer",

  chocolate:
    "chocolateLayer",

  butter:
    "butterLayer",

  eggs:
    "eggLayer",

  baking:
    "bakingLayer"

};


let cakeStep = 0;

let cakeStarted = false;

let cakeMixed = false;

let cakeBaked = false;


/* =========================================================
   START CAKE GAME
========================================================= */

function startCakeGame() {

  cakeStarted = true;

  cakeStep = 0;

  cakeMixed = false;

  cakeBaked = false;


  const instructions =
    document.getElementById(
      "kitchenInstructions"
    );

  const game =
    document.getElementById(
      "cakeGame"
    );

  const finished =
    document.getElementById(
      "cakeFinished"
    );


  if (instructions) {
    instructions.classList.add(
      "hidden"
    );
  }


  if (game) {
    game.classList.remove(
      "hidden"
    );
  }


  if (finished) {
    finished.classList.add(
      "hidden"
    );
  }


  resetIngredientButtons();

  resetBowl();


  document
    .getElementById("mixButton")
    ?.classList.add("hidden");

  document
    .getElementById("ovenButton")
    ?.classList.add("hidden");


  updateCakeInstruction();

}


/* =========================================================
   RESET CAKE
========================================================= */

function resetCake() {

  cakeStep = 0;

  cakeStarted = false;

  cakeMixed = false;

  cakeBaked = false;


  const instructions =
    document.getElementById(
      "kitchenInstructions"
    );

  const game =
    document.getElementById(
      "cakeGame"
    );

  const finished =
    document.getElementById(
      "cakeFinished"
    );


  if (instructions) {
    instructions.classList.remove(
      "hidden"
    );
  }


  if (game) {
    game.classList.add(
      "hidden"
    );
  }


  if (finished) {
    finished.classList.add(
      "hidden"
    );
  }


  resetIngredientButtons();

  resetBowl();


  document
    .getElementById("mixButton")
    ?.classList.add("hidden");

  document
    .getElementById("ovenButton")
    ?.classList.add("hidden");


  const instruction =
    document.getElementById(
      "cakeInstruction"
    );

  if (instruction) {
    instruction.textContent = "";
    instruction.style.color = "";
  }

}


/* =========================================================
   RESET INGREDIENT BUTTONS
========================================================= */

function resetIngredientButtons() {

  document
    .querySelectorAll(
      ".ingredient-button"
    )
    .forEach(button => {

      button.classList.remove(
        "used"
      );

    });

}


/* =========================================================
   RESET BOWL
========================================================= */

function resetBowl() {

  document
    .querySelectorAll(
      ".bowl-layer"
    )
    .forEach(layer => {

      layer.classList.remove(
        "visible"
      );

    });


  const bowlArea =
    document.querySelector(
      ".bowl-area"
    );

  if (bowlArea) {
    bowlArea.classList.remove(
      "mixing"
    );
  }

}


/* =========================================================
   CAKE INSTRUCTION
========================================================= */

function updateCakeInstruction() {

  const instruction =
    document.getElementById(
      "cakeInstruction"
    );


  if (!instruction) {
    return;
  }


  if (
    cakeStep <
    cakeOrder.length
  ) {

    const nextIngredient =
      cakeOrder[cakeStep];


    instruction.textContent =
      "Add the " +
      ingredientNames[nextIngredient] +
      ".";


    instruction.style.color =
      "";


    return;

  }


  if (!cakeMixed) {

    instruction.textContent =
      "Everything is in! Now mix the batter.";


    document
      .getElementById("mixButton")
      ?.classList.remove("hidden");


    return;

  }


  if (!cakeBaked) {

    instruction.textContent =
      "Perfect! Time to put the cake in the oven.";


    document
      .getElementById("ovenButton")
      ?.classList.remove("hidden");


    return;

  }

}


/* =========================================================
   ADD INGREDIENT
========================================================= */

function addIngredient(ingredient) {

  if (!cakeStarted) {
    return;
  }


  if (
    cakeStep >=
    cakeOrder.length
  ) {
    return;
  }


  const expectedIngredient =
    cakeOrder[cakeStep];


  /* =======================================================
     CORRECT INGREDIENT
  ======================================================= */

  if (
    ingredient ===
    expectedIngredient
  ) {

    const button =
      document.querySelector(
        `.ingredient-button[data-ingredient="${ingredient}"]`
      );


    if (button) {

      button.classList.add(
        "used"
      );

    }


    showIngredientInBowl(
      ingredient
    );


    cakeStep++;


    updateCakeInstruction();


    return;

  }


  /* =======================================================
     WRONG INGREDIENT
  ======================================================= */

  const instruction =
    document.getElementById(
      "cakeInstruction"
    );


  if (!instruction) {
    return;
  }


  instruction.textContent =
    "Hmm... not that one yet! Try another ingredient.";

  instruction.style.color =
    "#a85f59";


  const wrongButton =
    document.querySelector(
      `.ingredient-button[data-ingredient="${ingredient}"]`
    );


  if (wrongButton) {

    wrongButton.animate(

      [
        {
          transform:
            "translateX(0)"
        },

        {
          transform:
            "translateX(-7px)"
        },

        {
          transform:
            "translateX(7px)"
        },

        {
          transform:
            "translateX(-5px)"
        },

        {
          transform:
            "translateX(0)"
        }
      ],

      {
        duration: 400
      }

    );

  }


  setTimeout(() => {

    if (
      cakeStep <
      cakeOrder.length
    ) {

      updateCakeInstruction();

    }

  }, 900);

}


/* =========================================================
   SHOW INGREDIENT IN BOWL
========================================================= */

function showIngredientInBowl(
  ingredient
) {

  const layerId =
    bowlLayerMap[ingredient];


  if (!layerId) {
    console.error(
      "No bowl layer mapped for:",
      ingredient
    );

    return;
  }


  const layer =
    document.getElementById(
      layerId
    );


  if (!layer) {
    console.error(
      "Bowl layer not found:",
      layerId
    );

    return;
  }


  /* Restart animation */

  layer.classList.remove(
    "visible"
  );


  void layer.offsetWidth;


  layer.classList.add(
    "visible"
  );


  /* Bounce CSS bowl */

  const bowl =
    document.querySelector(
      ".css-bowl"
    );


  if (bowl) {

    bowl.animate(

      [
        {
          transform:
            "scale(1)"
        },

        {
          transform:
            "scale(1.045) rotate(-1deg)"
        },

        {
          transform:
            "scale(1)"
        }
      ],

      {
        duration: 400,
        easing: "ease-out"
      }

    );

  }


  createBowlSparkles();

}


/* =========================================================
   BOWL SPARKLES
========================================================= */

function createBowlSparkles() {

  const bowl =
    document.querySelector(
      ".css-bowl"
    );


  if (!bowl) {
    return;
  }


  const rect =
    bowl.getBoundingClientRect();


  for (
    let i = 0;
    i < 3;
    i++
  ) {

    const sparkle =
      document.createElement("div");


    sparkle.className =
      "building-sparkle";


    sparkle.textContent =
      i % 2 === 0
        ? "✦"
        : "✧";


    sparkle.style.left =
      (
        rect.left +
        Math.random() *
          rect.width
      ) + "px";


    sparkle.style.top =
      (
        rect.top +
        Math.random() *
          rect.height * 0.65
      ) + "px";


    document.body.appendChild(
      sparkle
    );


    setTimeout(() => {

      sparkle.remove();

    }, 900);

  }

}


/* =========================================================
   MIX CAKE
========================================================= */

function mixCake() {

  if (!cakeStarted) {
    return;
  }


  if (
    cakeStep <
    cakeOrder.length
  ) {
    return;
  }


  if (cakeMixed) {
    return;
  }


  cakeMixed = true;


  document
    .getElementById("mixButton")
    ?.classList.add("hidden");


  const instruction =
    document.getElementById(
      "cakeInstruction"
    );


  if (instruction) {

    instruction.textContent =
      "Mixing... mixing... mixing...";

  }


  const bowlArea =
    document.querySelector(
      ".bowl-area"
    );


  if (bowlArea) {

    bowlArea.classList.add(
      "mixing"
    );

  }


  setTimeout(() => {

    if (bowlArea) {

      bowlArea.classList.remove(
        "mixing"
      );

    }


    updateCakeInstruction();

  }, 1400);

}


/* =========================================================
   BAKE CAKE
========================================================= */

function bakeCake() {

  if (!cakeMixed) {
    return;
  }


  if (cakeBaked) {
    return;
  }


  cakeBaked = true;


  document
    .getElementById("ovenButton")
    ?.classList.add("hidden");


  const instruction =
    document.getElementById(
      "cakeInstruction"
    );


  if (instruction) {

    instruction.textContent =
      "Into the oven it goes... 🔥";

  }


  setTimeout(() => {

    const game =
      document.getElementById(
        "cakeGame"
      );

    const finished =
      document.getElementById(
        "cakeFinished"
      );


    if (game) {

      game.classList.add(
        "hidden"
      );

    }


    if (finished) {

      finished.classList.remove(
        "hidden"
      );

    }


    createCelebration();

  }, 1800);

}


/* =========================================================
   CAKE CELEBRATION
========================================================= */

function createCelebration() {

  const symbols = [
    "✦",
    "✧",
    "❀",
    "♡"
  ];


  for (
    let i = 0;
    i < 12;
    i++
  ) {

    const sparkle =
      document.createElement("div");


    sparkle.className =
      "building-sparkle";


    sparkle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    sparkle.style.left =
      (
        20 +
        Math.random() * 60
      ) + "%";


    sparkle.style.top =
      (
        20 +
        Math.random() * 55
      ) + "%";


    sparkle.style.fontSize =
      (
        16 +
        Math.random() * 15
      ) + "px";


    document.body.appendChild(
      sparkle
    );


    setTimeout(() => {

      sparkle.remove();

    }, 1000);

  }

}


/* =========================================================
   CAKE COUPON
========================================================= */

function openCakeCoupon() {

  goToPage(
    "cakeCouponPage"
  );

}


/* =========================================================
   =========================================================
   BOOKSTORE
   =========================================================
   ========================================================= */


/*
   BOOK III contains the letter.
*/

const correctBook = 3;

let librarySolved = false;


/* =========================================================
   BOOK CLASS
========================================================= */

function getBookClass(number) {

  const classes = {

    1: "one",
    2: "two",
    3: "three",
    4: "four"

  };


  return classes[number] || "";

}


/* =========================================================
   CHECK BOOK
========================================================= */

function checkBook(bookNumber) {

  if (librarySolved) {
    return;
  }


  const feedback =
    document.getElementById(
      "bookFeedback"
    );


  /* =======================================================
     WRONG BOOK
  ======================================================= */

  if (
    bookNumber !==
    correctBook
  ) {

    if (feedback) {

      feedback.textContent =
        "Nope... just a book. Keep looking.";

    }


    const bookClass =
      getBookClass(bookNumber);


    const book =
      document.querySelector(
        `.book-${bookClass}`
      );


    if (book) {

      book.animate(

        [
          {
            transform:
              "translateX(0)"
          },

          {
            transform:
              "translateX(-7px)"
          },

          {
            transform:
              "translateX(7px)"
          },

          {
            transform:
              "translateX(0)"
          }
        ],

        {
          duration: 350
        }

      );

    }


    return;

  }


  /* =======================================================
     CORRECT BOOK
  ======================================================= */

  librarySolved = true;


  if (feedback) {

    feedback.textContent =
      "Wait... something is moving inside this one...";

  }


  const selectedBook =
    document.querySelector(
      `.book-${getBookClass(bookNumber)}`
    );


  if (selectedBook) {

    selectedBook.animate(

      [
        {
          transform:
            "translateY(0)"
        },

        {
          transform:
            "translateY(-12px) rotate(-2deg)"
        },

        {
          transform:
            "translateY(0) rotate(1deg)"
        },

        {
          transform:
            "translateY(-5px)"
        },

        {
          transform:
            "translateY(0)"
        }
      ],

      {
        duration: 900,
        easing: "ease-in-out"
      }

    );

  }


  /* Give animation time to finish,
     then create clickable letter. */

  setTimeout(
    createFallingLetter,
    850
  );

}


/* =========================================================
   CREATE FALLING LETTER
========================================================= */

function createFallingLetter() {

  /* Remove old letter */

  const oldLetter =
    document.querySelector(
      ".falling-letter-button"
    );


  if (oldLetter) {
    oldLetter.remove();
  }


  /* Create clickable button */

  const letter =
    document.createElement(
      "button"
    );


  letter.type =
    "button";

  letter.className =
    "falling-letter-button";


  letter.innerHTML = `
    <span>✉</span>
    <small>FOR YOU</small>
  `;


  /*
     IMPORTANT:
     append directly to body so it isn't
     trapped underneath the bookstore
     overlay.
  */

  document.body.appendChild(
    letter
  );


  /* Position above bookstore */

  const bookArea =
    document.querySelector(
      ".book-selection"
    );


  let startX =
    window.innerWidth / 2 - 35;

  let startY = 100;


  if (bookArea) {

    const rect =
      bookArea.getBoundingClientRect();


    startX =
      rect.left +
      rect.width / 2 -
      35;


    startY =
      rect.top +
      20;

  }


  letter.style.left =
    startX + "px";


  letter.style.top =
    startY + "px";


  /* Falling animation */

  letter.animate(

    [
      {
        transform:
          "translateY(-55px) rotate(-8deg)",

        opacity: 0
      },

      {
        transform:
          "translateY(30px) rotate(5deg)",

        opacity: 1,

        offset: 0.45
      },

      {
        transform:
          "translateY(105px) rotate(-3deg)",

        opacity: 1
      }
    ],

    {
      duration: 1000,

      easing:
        "ease-out",

      fill:
        "forwards"
    }

  );


  /*
     CLICK HANDLER.

     Using onclick-style event listener
     directly on the actual button means
     the letter is reliably clickable.
  */

  letter.addEventListener(
    "click",
    function(event) {

      event.preventDefault();

      event.stopPropagation();


      letter.remove();


      goToPage(
        "letterPage"
      );

    }
  );


  /* Keyboard accessibility */

  letter.addEventListener(
    "keydown",
    function(event) {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        letter.click();

      }

    }
  );


  /* Pulse after falling */

  setTimeout(() => {

    if (
      document.body.contains(
        letter
      )
    ) {

      letter.classList.add(
        "letter-ready"
      );

    }

  }, 1050);

}


/* =========================================================
   RESET LIBRARY
========================================================= */

function resetLibrary() {

  const feedback =
    document.getElementById(
      "bookFeedback"
    );


  if (librarySolved) {

    if (feedback) {

      feedback.textContent =
        "You found your letter. ✉";

    }


    return;

  }


  if (feedback) {

    feedback.textContent =
      "One of these books is hiding something for you.";

  }


  const letter =
    document.querySelector(
      ".falling-letter-button"
    );


  if (letter) {

    letter.remove();

  }

}


/* =========================================================
   =========================================================
   THEATRE
   =========================================================
   ========================================================= */


/* =========================================================
   RESET THEATRE
========================================================= */

function resetCafe() {

  const message =
    document.getElementById(
      "cafeMessage"
    );

  const videoCard =
    document.getElementById(
      "cafeVideoCard"
    );


  if (message) {

    message.classList.remove(
      "hidden"
    );

    message.style.opacity = "";

    message.style.transform = "";

  }


  if (videoCard) {

    videoCard.classList.add(
      "hidden"
    );

  }

}


/* =========================================================
   LOOK CLOSER / ENTER THEATRE
========================================================= */

function lookCloser() {

  const message =
    document.getElementById(
      "cafeMessage"
    );

  const videoCard =
    document.getElementById(
      "cafeVideoCard"
    );


  if (
    !message ||
    !videoCard
  ) {
    return;
  }


  message.animate(

    [
      {
        opacity: 1,
        transform:
          "scale(1)"
      },

      {
        opacity: 0,
        transform:
          "scale(0.95)"
      }
    ],

    {
      duration: 300,
      fill: "forwards"
    }

  );


  setTimeout(() => {

    message.classList.add(
      "hidden"
    );


    videoCard.classList.remove(
      "hidden"
    );


    videoCard.animate(

      [
        {
          opacity: 0,
          transform:
            "translateY(15px)"
        },

        {
          opacity: 1,
          transform:
            "translateY(0)"
        }
      ],

      {
        duration: 500
      }

    );

  }, 300);

}


/* =========================================================
   OPEN VIDEO
========================================================= */

function openVideo() {

  /*
     Open Drive video.
  */

  window.open(
    VIDEO_LINK,
    "_blank",
    "noopener,noreferrer"
  );


  /*
     Then show ending page.
  */

  setTimeout(() => {

    goToPage(
      "videoEndingPage"
    );

  }, 450);

}


/* =========================================================
   =========================================================
   ANTIQUE SHOP
   =========================================================
   ========================================================= */


/* =========================================================
   RESET ANTIQUE
========================================================= */

function resetAntique() {

  const question =
    document.getElementById(
      "antiqueQuestion"
    );

  const notAllowed =
    document.getElementById(
      "giftNotAllowed"
    );


  if (question) {

    question.classList.remove(
      "hidden"
    );

  }


  if (notAllowed) {

    notAllowed.classList.add(
      "hidden"
    );

  }

}


/* =========================================================
   GIFT CHOICE
========================================================= */

function giftChoice(choice) {

  const question =
    document.getElementById(
      "antiqueQuestion"
    );

  const notAllowed =
    document.getElementById(
      "giftNotAllowed"
    );


  if (
    !question ||
    !notAllowed
  ) {
    return;
  }


  /* NO */

  if (
    choice === "no"
  ) {

    question.animate(

      [
        {
          transform:
            "translateX(0)"
        },

        {
          transform:
            "translateX(-8px)"
        },

        {
          transform:
            "translateX(8px)"
        },

        {
          transform:
            "translateX(-5px)"
        },

        {
          transform:
            "translateX(0)"
        }
      ],

      {
        duration: 400
      }

    );


    return;

  }


  /* YES */

  if (
    choice === "yes"
  ) {

    question.classList.add(
      "hidden"
    );


    notAllowed.classList.remove(
      "hidden"
    );


    notAllowed.animate(

      [
        {
          opacity: 0,

          transform:
            "translateY(15px)"
        },

        {
          opacity: 1,

          transform:
            "translateY(0)"
        }
      ],

      {
        duration: 450
      }

    );

  }

}


/* =========================================================
   FINAL COUPON
========================================================= */

function showFinalCoupon() {

  goToPage(
    "finalCouponPage"
  );

}


/* =========================================================
   GOODBYE
========================================================= */

function showGoodbye() {

  goToPage(
    "goodbyePage"
  );

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
       Make sure every page starts hidden.
    */

    document
      .querySelectorAll(".page")
      .forEach(page => {

        page.classList.remove(
          "active"
        );

      });


    /*
       Welcome page is the ONLY
       page active initially.
    */

    const welcome =
      document.getElementById(
        "welcomePage"
      );


    if (welcome) {

      welcome.classList.add(
        "active"
      );

    }


    currentPage =
      "welcomePage";


    /*
       Prevent buttons from accidentally
       submitting forms.
    */

    document
      .querySelectorAll("button")
      .forEach(button => {

        button.type =
          "button";

      });


    /*
       Reset individual games.
    */

    resetCake();

    resetCafe();

    resetAntique();


    /*
       Important:
       DO NOT reset librarySolved here.
       If the letter has already been found,
       it should remain found during the session.
    */

  }
);


/* =========================================================
   PREVENT DOUBLE-TAP ZOOM
========================================================= */

document.addEventListener(
  "dblclick",
  event => {

    if (
      event.target.closest(
        "button"
      )
    ) {

      event.preventDefault();

    }

  },
  {
    passive: false
  }
);


/* =========================================================
   PREVENT IMAGE DRAGGING
========================================================= */

document.addEventListener(
  "dragstart",
  event => {

    if (
      event.target.tagName ===
      "IMG"
    ) {

      event.preventDefault();

    }

  }
);
