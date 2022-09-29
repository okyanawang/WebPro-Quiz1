// for SPA web, but animation doesnt work
const route = (event) => {
    // event = event || window.event;
    // event.preventDefault();
    // window.history.pushState({}, "", event.target.href);
    // handleLocation();
  };
  
  const routes = {
    "/quis1": "/index.html",
    "/quis1/profile": "/pages/profile.html",
    "/quis1/hometown": "/pages/hometown.html",
    "/quis1/food": "/pages/food.html",
    "/quis1/tourist": "/pages/tourist.html",
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