// Constand variables
const daily_milk = 3; // Liters of milk that one cow gives daily
const milk_price = 3; // Price of one liter of milk
const cow_price = 300; // Price of one cow

function calculate(day) {
  let cow_count = 1; // Count of current cows
  let income = 0; // Count of overall income
  let expense = 0; // Count of overall expense
  let milk_sold = 0; // Count of liters of milk that have been sold
  let farm_bought = 0; // Count of farm bought

  for (let i = 1; i <= day; i++) {
    // Sell milk and get income
    milk_sold += daily_milk * cow_count;
    income += cow_count * daily_milk * milk_price;

    // Buy new cows with the current budget
    if (income - expense >= 15000) {
      farm_bought += 1;
      expense += 15000;
    } else {
      while (income - expense >= cow_price) {
        cow_count += 1;
        expense += cow_price;
      }
    }
  }

  console.log(
    `Farmer has ${cow_count} cows after ${day} days.\nLiters of milk sold: ${milk_sold}\nOverall income: $${income}\nOverall Expense: $${expense}\nCurrent budget: $${
      income - expense
    }`
  );
}

calculate(100);
