fetch("http://localhost:3000/cars")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((car) => {
      addCars(car);
    });
  });

// clone, then populate, then append a new template
function addCars(car) {
  const template = document
    .getElementById("car-template")
    .content.cloneNode(true);
  template.querySelector('.card-img-top').src = car.imageUrl;
  template.querySelector(".car-make").innerText = car.make;
  template.querySelector(".car-model").innerText = `${car.model} ${car.year}`;
  document.querySelector("#car-list").appendChild(template);
}