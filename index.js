const fetchPokemonButton = document.getElementById("fetchPokemonButton");
const pokemonImage = document.getElementById("pokemonImage");


async function FetchPokemon() {

    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        

        console.log(pokemonName);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Error");
        }

        const data = await response.json();

        console.log(data);

        console.log(data.name);

        const pokemonType = document.getElementById("pokemonType");

        pokemonType.textContent = data.types[0].type.name;

        console.log("-----");

        console.log(data.types[0].type.name);

        const pokeImage = data.sprites.front_default;

        pokemonImage.src = pokeImage;
        pokemonImage.style.display = "block";
    }
    catch (error) {
        console.error(error);
    }

}