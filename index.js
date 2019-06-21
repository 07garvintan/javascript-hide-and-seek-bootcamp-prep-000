function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#next, .target')
}

function increaseRankBy(n) {
  var listItems = document.querySelectorAll('.ranked-list li');
  for (let item of listItems) {
    item.innerHTML = parseInt(item.innerHTML) + n;
  }
}

function deepestChild() {
  var current = document.querySelector('div#grand-node');
  var next = []
  while (current.children.length !== 0) {
    current = current.children[0];
  }
  return current;
} 
