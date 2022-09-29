// for SPA web, but animation doesnt work
const route = (event) => {
  // event = event || window.event;
  // event.preventDefault();
  // window.history.pushState({}, "", event.target.href);
  // handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/pages/home/index.html",
  "/quis1": "/pages/home/index.html",
  "/quis1/profile": "/pages/profile/index.html",
  "/quis1/hometown": "/pages/hometown/index.html",
  "/quis1/food": "/pages/food/index.html",
  "/quis1/tourist": "/pages/tourist/index.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  // console.log(path);
  const route = routes[path] || routes[404];
  // console.log(route);
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();