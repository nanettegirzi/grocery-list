$(document).ready(function () {
  $("#groceries").submit(function (event) {
    event.preventDefault();

    var groceryItems = ["item1", "item2", "item3"];

    var sortedList = [];

    groceryItems.forEach(function(groceryItem) {
      var userInput = $("input#" + groceryItem).val();
      $("." + groceryItem).text(userInput);
      sortedList.push(userInput);
    });

    sortedList.sort();

    var toUpper = function(sortedList) {
      return sortedList.toUpperCase();
    }

    var capitalizedList = sortedList.map(toUpper);

    capitalizedList.forEach(function(userInput) {
      $("#list").append("<li>" + userInput + "</li>");
    });

    // document.write(capitalizedList);

      $("#output").show();
      $("#groceries").hide();
    });
  });
