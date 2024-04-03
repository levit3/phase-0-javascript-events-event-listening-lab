function addingEventListener() {
  let button = document.getElementById("button");
  const div = document.getElementsByTagName("div")[1];
  button.addEventListener("click", () => document.body.remove());
}
addingEventListener();
