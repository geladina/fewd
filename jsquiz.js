function createListItem(text) {
  var li = document.createElement("li");
  li.textContent = text;
};

function addItem() {
  event.preventDefault();

  var input = document.querySelector("input#new-item-name");
  var list  = document.querySelector("ul");
  var li    = createListItem(input);

  list.appendChild(li);
}

document.querySelector("form#new-item").addEventListener("submit", addItem);
