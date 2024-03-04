var cartitems = document.getElementById("cart-value");
var cartbutton = document.getElementById("cart");

var addbutton = document.getElementsByClassName("button");

var items = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function updateCart() {
  let cart_value = 0;
  for (i = 0; i < items.length; i++) {
    cart_value = cart_value + items[i].quantity;
  }
  cartitems.innerHTML = cart_value;
}

for (let i = 0; i < addbutton.length; i++) {
  addbutton[i].onclick = (e) => {
    items[i].quantity++;
    updateCart();
  };
}

var totalDollars = 0;
var totalCents = 0;

function priceUpdate() {
  let cents = 0;
  for (i = 0; i < items.length; i++) {
    cents =
      cents + items[i].quantity * (items[i].dollars * 100 + items[i].cents);
  }
  totalDollars = Math.floor(cents / 100);
  totalCents = cents % 100;
}

cartbutton.onclick = () => {
  priceUpdate();

  for (let i = 0; i < items.length; i++) {
    if (items[i].quantity != 0) {
      console.log(
        "Item name: " + items[i].name + " - Item quantity: " + items[i].quantity
      );
    }
  }

  console.log(
    "Total Amount: " + totalDollars + " Dollars " + totalCents + " Cents"
  );
};
