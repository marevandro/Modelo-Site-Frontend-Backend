const listItems = document.querySelectorAll('.header-black li');

function hideItems() {
  for (let i = listItems.length - 1; i >= 0; i--) {
    setTimeout(() => {
      listItems[i].style.opacity = '0';
    }, (listItems.length - i) * 200);
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 600) {
    hideItems();
  } else {
    listItems.forEach((item) => {
      item.style.opacity = '1';
    });
  }
});
