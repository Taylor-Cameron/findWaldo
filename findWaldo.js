function findWaldo(list, found) {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === "Waldo") {
      found(i);
    }
  }
}

function actionWhenFound(index) {
    console.log("Found Waldo at index " + index + '!');
}

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);