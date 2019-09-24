document.getElementById("app2").style.display = "none"
window.addEventListener("click", function () {
  const css = import('./style.css');
  console.log("app1:");
  console.log(css)
});