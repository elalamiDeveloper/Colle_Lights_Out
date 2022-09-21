"use strict";

const boxes = document.querySelectorAll(".box");
const newGame = document.querySelector(".new_game");
const counterBox = document.querySelector(".counter");

let counter = 25;

const init = function () {
  const aleatoir = () => {
    const x = Math.floor(Math.random() * 2) + 1;
    return x === 1 ? true : false;
  };

  Object.entries(boxes).forEach(([i, box]) => {
    box.setAttribute("id", +i + 1);
    box.setAttribute("active", aleatoir());
  });

  counter = 25;
  counterBox.textContent = 25;
};

init();

boxes.forEach((box) =>
  box.addEventListener("click", function () {
    // Increment Counter
    counter--;
    counterBox.textContent = counter;

    // Modifie Active Attribute
    const idClicked = +box.getAttribute("id");
    boxes.forEach((box2) => {
      if (
        +box2.getAttribute("id") === idClicked ||
        (+box2.getAttribute("id") === idClicked + 1 &&
          +box2.getAttribute("id") % 5 !== 1) ||
        (+box2.getAttribute("id") === idClicked - 1 &&
          +box2.getAttribute("id") % 5 !== 0) ||
        +box2.getAttribute("id") === idClicked + 5 ||
        +box2.getAttribute("id") === idClicked - 5
      ) {
        box2.setAttribute(
          "active",
          box2.getAttribute("active") === "true" ? "false" : "true"
        );
      }
    });
  })
);

newGame.addEventListener("click", init);
