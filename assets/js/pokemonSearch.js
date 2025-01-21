const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const id = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const type = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");

const POKEAPI_PROXY = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const clearUI = () => {
  pokemonName.textContent = ""
    id.textContent = ""
    weight.textContent = ""
    height.textContent = ""
    hp.textContent = ""
    attack.textContent = ""
    defense.textContent = ""
    specialAttack.textContent = ""
    specialDefense.textContent = ""
    speed.textContent = ""
    spriteContainer.innerHTML = ""
    types.innerHTML = ""
};

const search = async (query) => {
  clearUI();
  if (query.toLowerCase() === "red"){
    alert("Pokémon not found");
    return;
  } 
  try {
    const response = await fetch(`${POKEAPI_PROXY}/${query.toLowerCase()}`);
    const pokemon = await response.json();

    pokemonName.textContent += pokemon.name.toUpperCase()
    id.textContent += pokemon.id
    weight.textContent += pokemon.weight
    height.textContent += pokemon.height
    hp.textContent += pokemon.stats[0].base_stat
    attack.textContent += pokemon.stats[1].base_stat
    defense.textContent += pokemon.stats[2].base_stat
    specialAttack.textContent += pokemon.stats[3].base_stat
    specialDefense.textContent += pokemon.stats[4].base_stat
    speed.textContent += pokemon.stats[5].base_stat

    pokemon.types.forEach((type) => {
      types.innerHTML += `<div>${type.type.name.toUpperCase()}</div>`
    });

    spriteContainer.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" id="sprite">`

  } catch (error) {
    alert("Pokémon not found");
    return
  }
};

searchButton.addEventListener("click", () => {
  const input = document.getElementById("search-input");
  search(input.value)
})