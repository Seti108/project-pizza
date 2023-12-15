// Start here

// Step 1 - Welcome and introduction
// Your code goes here

const errorAlert = () => {
  alert(
    "Thats's not a valid response. Please start over if you want to make and order"
  );
  location.reload();
};

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);

// Write a prompt to ask for the name, and store the answer in a variable.
const firstName = prompt("Please enter your first name!");

// Added this to prevent making an order without taking the name

//Create a new alert using the name variable, to say something like “Hi Diego!”
if (firstName) {
  alert(`Hi ${firstName}! Let's get started`);
} else {
  errorAlert();
}

// Step 2 - Food choice

// Nested arrays will reduce the need for many variables for food and prices
const foodChoices = [
  ["Pizza", 10],
  ["Pasta", 8],
  ["Salad", 20],
];

// Use promt to show the user the menu
let foodChoiceOfUser;
if (firstName) {
  foodChoiceOfUser = Number(
    prompt(`
  Please choose what food you want to order by writing the number next to the dish:

  - 1 Pizza 10 €
  - 2 Pasta 8 $
  - 3 Salad 20 $
`)
  );
}

//Alert the user with the chosen food item

if (foodChoiceOfUser !== 0) {
  if (foodChoiceOfUser > 3) {
    errorAlert();
  } else {
    alert(
      `You've ordered ${foodChoices[foodChoiceOfUser - 1][0]} for a cost of ${
        foodChoices[foodChoiceOfUser - 1][1]
      } € `
    );
  }
}

// Step 3 - Subtype choice
// Adding the vaiables for the topping choice as well as the topping itself
let topping;
let toppingChoiceNumber;

//Switch statement with handling of incorrent input
if (foodChoiceOfUser < 4 && foodChoiceOfUser !== 0) {
  switch (foodChoiceOfUser) {
    case 1:
      const pizzaToppings = ["Pineapple", "Banana", "Ketchup"];
      toppingChoiceNumber = Number(
        prompt(`
        Choose your pizza toppings by writing the number corresponding to the topping you like:
          - 1 Pineapple
          - 2 Banana
          - 3 Ketchup`)
      );

      if (toppingChoiceNumber < 4 && toppingChoiceNumber !== 0) {
        alert(
          `You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${
            pizzaToppings[toppingChoiceNumber - 1]
          }. `
        );
        topping = pizzaToppings[toppingChoiceNumber - 1];
        break;
      } else {
        errorAlert();

        break;
      }

    case 2:
      const pastaToppings = ["Olives", "Feta cheese", "Sun-dried tomatoes"];
      toppingChoiceNumber = Number(
        prompt(`
      Choose your pasta toppings by writing the number corresponding to the topping you like:
        - 1 Olives
        - 2 Feta cheese
        - 3 Sun-dried tomatoes
      `)
      );

      if (toppingChoiceNumber < 4 && toppingChoiceNumber !== 0) {
        alert(
          `You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${
            pastaToppings[toppingChoiceNumber - 1]
          }. `
        );
        topping = pastaToppings[toppingChoiceNumber - 1];
        break;
      } else {
        errorAlert();

        break;
      }

    case 3:
      const saladToppings = ["Grapes", "Avocado", "Red onion"];
      toppingChoiceNumber = Number(
        prompt(`
      Choose your salad toppings by writing the number corresponding to the topping you like:
      - 1 Grapes
      - 2 Avocado
      - 3 Red onion
        `)
      );
      if (toppingChoiceNumber < 4 && toppingChoiceNumber !== 0) {
        alert(
          `You've chosen ${foodChoices[foodChoiceOfUser - 1][0]} with ${
            saladToppings[toppingChoiceNumber - 1]
          }. `
        );
        topping = saladToppings[toppingChoiceNumber - 1];
        break;
      } else {
        errorAlert();

        break;
      }

    default:
      errorAlert();
  }
}
// Step 4 - Age

//Use the prompt to let the user enter their age
let userAge;
if (topping) {
  userAge = Number(
    prompt(`Write your age as a number to determine portion size.`)
  );
  // Use alert to display the order and cost
  if (userAge > 18) {
    alert(
      `Awesome, you've ordered a full size portion of ${
        foodChoices[foodChoiceOfUser - 1][0]
      } with ${topping} for ${foodChoices[foodChoiceOfUser - 1][1]} €.`
    );
  } else if (userAge < 18 && userAge !== 0) {
    alert(
      `Awesome, you've ordered a children's portion of ${
        foodChoices[foodChoiceOfUser - 1][0]
      } with ${topping} for ${foodChoices[foodChoiceOfUser - 1][1]} €.`
    );
  }
}

// Step 5 - Order confirmation
//Use a prompt to ask if the user wants to confirm the order and give appropriate message for each response
let confirmation;
if (userAge > 0) {
  confirmation = Number(
    prompt(`Please confirm your order by typing the appropriate number below:
      1 - Confirm order
      2 - Cancel order
    `)
  );
} else if (userAge === 0) {
  errorAlert();
}

if (confirmation) {
  if (confirmation === 1) {
    alert("Great, your order is being prepared!");
  } else if (confirmation === 2) {
    alert("Sorry to see you go. Start a new order by refreshing the page!");
  } else {
    errorAlert();
  }
}
