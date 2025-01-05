// Add box-shadow to navigation bar when scrolling
window.addEventListener("scroll", () => {
  const navbar = document.getElementsByTagName("nav")[0];
  if (window.scrollY > 15) {
    navbar.classList.add("sticky_box_shadow");
  } else {
    navbar.classList.remove("sticky_box_shadow");
  }
});

// Carousels
var glideMulti1 = new Glide(".multi1", {
  type: "carousel",
  perView: 4,
  breakpoints: {
    1024: {
      perView: 3,
    },
    800: {
      perView: 1,
    },
  }
});

glideMulti1.mount();

var glideMulti2 = new Glide(".multi2", {
  type: "carousel",
  perView: 6,
  breakpoints: {
    1024: {
      perView: 4,
    },
    800: {
      perView: 2,
    },
  }
});

glideMulti2.mount();

var glideMulti3 = new Glide(".multi3", {
  type: "carousel",
  perView: 4,
  breakpoints: {
    1024: {
      perView: 3,
    },
    800: {
      perView: 1,
    },
  }
});

glideMulti3.mount();

var glideMulti4 = new Glide(".multi4", {
  type: "carousel",
  perView: 4,
  breakpoints: {
    1024: {
      perView: 3,
    },
    800: {
      perView: 1,
    },
  }
});

glideMulti4.mount();

// Mobile navigation bar
function openNav() {
  document.getElementById("navbar").classList.remove('hidden');
}

function closeNav() {
  document.getElementById("navbar").classList.add('hidden');
}