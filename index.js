const container = document.querySelector(".scroller");
const scenes = document.querySelectorAll(".scene");
const images = document.querySelectorAll(".photo");
console.log(images);

const scroller = new window.Scroller({
  container: container,
  scenes: scenes
});

scroller.on("scene:enter", d => {
  images[d.index].classList.add("active");
});

scroller.on("scene:exit", d => {
  console.log(d.isScrollingDown);
  if (d.index != 0 && !d.isScrollingDown) {
    images[d.index].classList.remove("active");
  }
});

window.addEventListener("load", event => {
  images[0].classList.add("active");
});

// starts up the IntersectionObserver
scroller.init();
