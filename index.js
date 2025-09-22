// Temporary structure: The code is currently written in a straightforward, step-by-step way
// for ease of testing and incremental UI updates. Sections are updated individually
// rather than using a single render function. This will be refactored later for
// better modularity, readability, and maintainability.

//Yes i know its a mess -_- but it works :)

const fetchPokemonButton = document.getElementById("fetchPokemonButton");
const pokemonImage = document.getElementById("pokemonImage");


async function FetchPokemon() {

    try {
        const inputPokemonName = document.getElementById("enterPokemonName").value.toLowerCase();



        console.log(pokemonName);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemonName}`);

        if (!response.ok) {
            throw new Error("Error");
        }

        const data = await response.json();

        console.log(data);

        console.log(data.name);

        console.log("-----");


        const pokeImage = data.sprites.front_default;

        pokemonImage.src = pokeImage;
        pokemonImage.style.display = "block";

        const POKEMON_NAME = document.getElementById("pokemonName");

        POKEMON_NAME.textContent = data.name.toUpperCase();
        POKEMON_NAME.style.display = "Block";

        const POKEMON_ID = document.getElementById("pokemonId");

        POKEMON_ID.textContent = data.id;

        const POKEMON_TYPE = document.getElementById("pokemonType");

        POKEMON_TYPE.textContent = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);

        const SECTION_ONE = document.getElementById("sectionOne");
        SECTION_ONE.style.display = "block";

        const SECTION_TWO = document.getElementById("sectionTwo");

        SECTION_TWO.innerHTML = "";

        SECTION_TWO.style.display = "block";

        let abilitycounter = 0;

        data.abilities.forEach(ability => {
            if (!ability.is_hidden == true) {
                abilitycounter++;
                const ABILITY = document.createElement("p");
                console.log(`Ability${abilitycounter}: ${ability.ability.name}`);

                ABILITY.textContent = `Ability${abilitycounter}: ${ability.ability.name.charAt(0).toUpperCase()}${ability.ability.name.slice(1)}`;

                SECTION_TWO.appendChild(ABILITY);
            }
        });

        const SECTION_THREE = document.getElementById("sectionThree");
        SECTION_THREE.innerHTML = "";
        
        SECTION_THREE.style.display = "block";

        data.stats.forEach(item => {
            const statItem = document.createElement("p");
            statItem.textContent = `${item.stat.name.charAt(0).toUpperCase()}${item.stat.name.slice(1)}:${item.base_stat}`;
            SECTION_THREE.appendChild(statItem);

        });

    }
    catch (error) {
        console.error(error);
    }

}