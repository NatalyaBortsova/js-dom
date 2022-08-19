const card = [
  {
    id: 1,
    title: "Classic Love: Red Roses",
    type: "Red Roses",
    image: "images/roses/classic-love.webp",
    price: 49.9,
    reviews: 661,
    description:
      "Red flowers express true love. A bouquet of red roses is not just romantic and classic - it is also timeless and elegant. Their enchanting smell refines the absolute beauty in them and delivers passion. Red roses will always be a way to say something.",
  },
  {
    id: 2,
    title: "My Sweet Love: Red and Pink Roses",
    type: "Red and Pink Roses",
    image: "images/roses/my-sweet-love.webp",
    price: 49.9,
    reviews: 242,
    description:
      "Red roses express passion while pink roses represent the sweet side of red - romance and charm. This bouquet of red and pink fresh roses carries a whole bunch of love and it is a perfect, timeless and elegant way to say something.",
  },
  {
    id: 3,
    title: "In Harmony: Roses and Callas",
    type: "Roses and Callas",
    image: "images/roses/in-harmony.webp",
    price: 49.9,
    reviews: 252,
    description:
      "Calla lilies were named after the Greek word for beautiful - Calla. They are said to be a good luck charm for having year-round bliss. Their holiness and purity are complemented with classic and passionate red roses, making this a stunning yin-yang bouquet.",
  },
  {
    id: 4,
    title: "Dressed in Pink: Roses and Gerberas",
    type: "Roses and Gerberas",
    image: "images/roses/dressed-in-pink.webp",
    price: 39.9,
    reviews: 391,
    description:
      "This bouquet, made up of roses, gerberas and chrysanthemums in shades of pink, is characterised by its soft, gentle look. It’s the ideal gift to spruce up any room and bring life’s little pleasures into the home.",
  },
  {
    id: 5,
    title: "Pink Bloom: Roses and Alstroemerias",
    type: "Roses and Alstroemerias",
    image: "images/roses/pink-bloom.webp",
    price: 39.9,
    reviews: 89,
    description:
      "Send this bubbly pink bouquet to convey a sweet message of affection to someone you miss who lives far away. This arrangement of pink roses and alstroemerias releases the perfect blend of sweetness and energy to send your love across the distance to someone on their birthday, to celebrate a new baby or just because.",
  },
  {
    id: 6,
    title: "Vibrant Energy: Yellow and Pink Roses",
    type: "Yellow and Pink Roses",
    image: "images/roses/vibrant-energy.webp",
    price: 39.9,
    reviews: 312,
    description:
      "This bouquet of yellow and pink roses exudes pure, restorative energy. The pastel tones of the pink roses and gerberas contrast with the yellow roses to fill the home with vibrant energy. Choose this composition to draw a smile and brighten any space.",
  },
];

class Tabs {
  render() {
    let tabs = "";
    const sidebar = document.querySelector(".sidebar__list");
    if (sidebar) {
      card.forEach(({ id, type }) => {
        tabs += `
                <li class="sidebar__item">
                    <button class="sidebar__button" data-tab="${id}" type="button">${type}</button>
                </li>
                `;
      });
      sidebar.innerHTML = tabs;
    }
  }
}
class TabsContent {
  render() {
    let tabsContent = "";
    const content = document.querySelector(".content");
    if (content) {
      card.forEach(({ id, title, image, price, reviews, description }) => {
        tabsContent += `
                        <li class="content__item" data-content="${id}">
                          <article class="content__article">
                            <div class="content__image">
                              <img src="${image}" alt="${title}" width='260' height='300'>
                            </div>
                              <div class="content__info">
                                <h3 class="content__title">${title}</h3>
                                <span class="content__reviews">${reviews} reviews</span>
                                 <span class="content__price">USD $${price}</span>
                            <div class="content__text">
                              <p>${description}</p>
                               </div>
                            </div>
                          </article>
                      </li>
                `;
      });
      content.innerHTML = tabsContent;
    }
  }
}

const listTabs = new Tabs();
listTabs.render();

const tabsContent = new TabsContent();
tabsContent.render();

document.addEventListener("DOMContentLoaded", function (event) {
  //Tabs

  const tabs = document.querySelector("#tabs");
  const content = document.querySelectorAll(".content__item");
  const tabBtns = document.querySelectorAll(".sidebar__button");
  let activeItem = 0;

  function changeClassTab() {
    tabBtns[activeItem].classList.add("active");
    for (const tabBtn of tabBtns) {
      tabBtn.addEventListener("click", () => {
        clearActiveClasses();
        tabBtn.classList.add("active");
      });
    }
    function clearActiveClasses() {
      tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
      });
    }
  }

  function toggleTabContent() {
    content[activeItem].classList.add("active");
    tabBtns[activeItem].classList.add("active");
    tabs.addEventListener("click", (e) => {
      const currTab = e.target.dataset.tab;
      changeClassTab(e.target);
      for (let i = 0; i < content.length; i++) {
        tabBtns[i].classList.remove("active");
        content[i].classList.remove("active");
        if (content[i].dataset.content === currTab) {
          content[i].classList.add("active");
          tabBtns[i].classList.add("active");
        }
      }
    });
  }
  changeClassTab();
  toggleTabContent();

//burger

const burger = document.querySelector("#burger");
const menuItem = sidebar.querySelectorAll(".sidebar__item");

burger.addEventListener("click", toggleSidebarMenu);
document.addEventListener("click", (e) => {
  if (e.target !== burger && e.target !== tabs) {
    closeSidebarMenu();
  }
});
menuItem.forEach((el) => {
  el.addEventListener("click", closeSidebarMenu);
});
function toggleSidebarMenu() {
  sidebar.classList.toggle("active");
  burger.classList.toggle("active");
}

function closeSidebarMenu() {
  sidebar.classList.remove("active");
  burger.classList.remove("active");
}

});


