const menu = document.getElementById('menu');
const barsItem = document.getElementById('bars');
const truckItem = document.getElementById('truck');
const gearItem = document.getElementById('gear');
const mugItem = document.getElementById('mug');
const allMenuItems = document.querySelectorAll('.list__item');
const allTextItems = document.querySelectorAll('.text');
const rootStyles = document.documentElement.style;

const menuItemsArray = [...allMenuItems];
const textItemArray = [...allTextItems];

const moveBall = element => {
  rootStyles.setProperty('--translateX', element.offsetLeft + 'px');
  console.log(element.offsetLeft);
};

const addClassList = id => {
  menuItemsArray.forEach((item, index) => {
    item.classList.remove('list__item--selected');
    textItemArray[index].classList.remove('text--selected');
    console.log(item.id, id);

    if (item.id === id) {
      item.classList.add('list__item--selected');
      textItemArray[index].classList.add('text--selected');
    }
  });
};

moveBall(barsItem);
addClassList(menuItemsArray[0].id);

menu.addEventListener('click', e => {
  if (!e.target.id === 'menu') return;
  else {
    moveBall(e.target);
    addClassList(e.target.id);
  }
});
