//To-Do list:
//1. animate the sprites
//2. Add an error handle box for the user to see that the name entered is incorrect.


const fetchPokemonButton = document.getElementById("fetchPokemonButton");
const pokemonImage = document.getElementById("pokemonImage");

// Input field for the pokemon name
const inputPokemonName = document.getElementById("enterPokemonName");


//where the sprite will be stored
let pokeImage = null;

const POKEMON_NAME = document.getElementById("pokemonName");

//responsible for the pokemon id
const POKEMON_ID = document.getElementById("pokemonId");

const POKEMON_TYPE = document.getElementById("pokemonType");

//responsible for the id and type
const SECTION_ONE = document.getElementById("sectionOne");

//responsible for the abilities
const SECTION_TWO = document.getElementById("sectionTwo");

//responsible for the states // remember to put the innerHTML to "" in all of the sections
//also to display block as they are set to none in the html code
const SECTION_THREE = document.getElementById("sectionThree");

async function loadPokemon(data){
    await loadPokemonSprite(data);
    await loadSectionOne(data);
    await loadSectionTwo(data);
    await loadSectionThree(data);

}

async function loadPokemonSprite(data){
    pokeImage = data.sprites.front_default;
    pokemonImage.src = pokeImage;
    pokemonImage.style.display = "block";
}

async function loadSectionOne(data){
    SECTION_ONE.style.display = "block";
    POKEMON_NAME.textContent = data.name.toUpperCase();
    POKEMON_ID.textContent = data.id;
    POKEMON_TYPE.textContent = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
    POKEMON_NAME.textContent = data.name.toUpperCase();
    POKEMON_NAME.style.display = "block";
}

async function loadSectionTwo(data){
    SECTION_TWO.innerHTML = "";
    let abilitycounter = 0;
    data.abilities.forEach(item => {
        abilitycounter++;
        if (!item.is_hidden) {
            const ABILITY = document.createElement("p");
            ABILITY.textContent = `Abilitiy${abilitycounter}: ${item.ability.name.charAt(0).toUpperCase()}${item.ability.name.slice(1)}`;
            SECTION_TWO.append(ABILITY);
        }
    });

    SECTION_TWO.style.display = "block";
}

async function loadSectionThree(data){
    SECTION_THREE.innerHTML = "";
    data.stats.forEach(item => {
        const STAT_ITEM = document.createElement("p");
        STAT_ITEM.textContent = `${item.stat.name.charAt(0).toUpperCase()}${item.stat.name.slice(1)}:${item.base_stat}`;
        SECTION_THREE.append(STAT_ITEM);
    });
    SECTION_THREE.style.display = "block";
}



async function FetchPokemon() {

    try {
        let pokemonName = inputPokemonName.value;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

        if (!response.ok) {
            throw new Error("Error fetching data from API");
        }
        else
        {
            const data = await response.json();

            console.log(data);

            await loadPokemon(data);
        }
    }
    catch (error) {
        console.error(error);
    }

}