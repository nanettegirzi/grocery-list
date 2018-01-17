$(document).ready(function () {
  $("#groceries").submit(function (event) {
    event.preventDefault();

    // create an array for items (as indicated in the HTML)
    var groceryItems = ["item1", "item2", "item3"];

    groceryItems.forEach(function(groceryItem) {
      var item = $("input#" + groceryItem).val();

      $("." + groceryItem).append(item);


      $("#output").show(groceryItem);
      $("#groceries").hide();
    });
  });
});
