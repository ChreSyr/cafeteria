const logoImage = document.getElementById("logo-image");
const logoSelect = document.getElementById("logo-select");

let logos = [];

const addOption = (id) => {
  logoImage.src = `logo-${id}.png`;

  const newOption = document.createElement("option");
  newOption.value = id;
  newOption.innerText = `Logo ${id}`;
  logoSelect.appendChild(newOption);

  if (id === 4) {
    return;
  }

  addOption(id + 1);
};

addOption(1);

logoSelect.addEventListener("change", (event) => {
  logoImage.src = `logo-${logoSelect.value}.png`;
});
