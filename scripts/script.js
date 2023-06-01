const flatsInfo = [
  {
    city: "Rostov-on-Don<br> LCD admiral",
    area: "81 m2",
    duration: "3.5 months",
    price: "Upon request",
    url: "./imges/flat_2_1.jpg",
  },
  {
    city: "Sochi<br> Thieves",
    area: "105 m2",
    duration: "4 months",
    price: "Upon request",
    url: "./imges/flat_2_2.jpg",
  },
  {
    city: "Rostov-on-Don<br> Patriotic",
    area: "93 m2",
    duration: "3 months",
    price: "Upon request",
    url: "./imges/flat_2_3.jpg",
  },
];

let currentIndex = 0;

//navi
const arrowLeft = document.getElementById("completed_arrow_left");
const arrowRigth = document.getElementById("completed_arrow_rigth");

const sliderDotz = document.querySelectorAll(".completed-dotz");
const cityLink = document.querySelectorAll(".completed-content-list-ul-item");

//discription
const cityDisc = document.getElementById("completed_item_city");
const areaDisc = document.getElementById("completed_item_area");
const durationDisc = document.getElementById("completed_item_duration");
const priceDisc = document.getElementById("completed_item_price");
//image
const mainPic = document.getElementById("completed_image");

//functions;
const scrollData = (index) => {
  cityDisc.innerHTML = flatsInfo[index].city;
  areaDisc.innerText = flatsInfo[index].area;
  durationDisc.innerText = flatsInfo[index].duration;
  priceDisc.innerText = flatsInfo[index].price;
  mainPic.src = flatsInfo[index].url;
};

const getPos = (dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    scrollData(currentIndex);
    thisSlide(currentIndex);
  });
};

const thisSlide = (index) => {
  sliderDotz.forEach((item) => item.classList.remove("active_dot"));
  sliderDotz[index].classList.add("active_dot");

  cityLink.forEach((item) => item.classList.remove("active_list_item"));
  cityLink[index].classList.add("active_list_item");
};

arrowRigth.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > flatsInfo.length - 1) {
    currentIndex = 0;
  }
  scrollData(currentIndex);
  thisSlide(currentIndex);
});

arrowLeft.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = flatsInfo.length - 1;
  }
  scrollData(currentIndex);
  thisSlide(currentIndex);
});

cityLink.forEach(getPos);
sliderDotz.forEach(getPos);
