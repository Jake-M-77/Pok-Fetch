# PokéFetch

![PokéFetch Logo](PokeFetchImg.png)

## Description

**PokéFetch** is a web-based application that allows users to search for any Pokémon by name and instantly retrieve its information from the [PokéAPI](https://pokeapi.co/). The app displays the Pokémon’s sprite, ID, type, abilities, and stats. Sprites are animated with a smooth 3D spin to enhance the visual experience.

This project demonstrates interaction with APIs, DOM manipulation, and dynamic error handling in JavaScript.

---

## Features

* ✅ Search for Pokémon by name (case-insensitive).
* ✅ Displays Pokémon sprite, ID, type, abilities, and stats.
* ✅ Animates the Pokémon sprite with a continuous spin.
* ✅ Dynamic error box for invalid Pokémon names or failed API requests.
* ✅ Clear all previously loaded content when a new search is made.

---

## Usage

1. Open `index.html` in a web browser.
2. Enter the name of a Pokémon in the input field.
3. Click **Load Pokemon**.
4. The Pokémon information and animated sprite will display below.
5. If the Pokémon name is invalid, an error box will appear with the message:

   ```
   Pokemon not found!
   ```

---

## Files

* `index.html` – Main HTML layout.
* `style.css` – Styling for the page, Pokémon info sections, and error box.
* `index.js` – JavaScript logic for fetching Pokémon data, rendering content, sprite animations, and error handling.
* `PokeFetchImg.png` – Application logo and favicon.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* [PokéAPI](https://pokeapi.co/)

---

## Project Structure

```
PokéFetch/
│
├─ index.html
├─ style.css
├─ index.js
└─ PokeFetchImg.png
```

---

## Error Handling

* Any invalid Pokémon name or failed API request triggers a dynamic error box.
* The error box automatically clears previous content and displays the error message.

---

## Credits

* [PokéAPI](https://pokeapi.co/) for providing Pokémon data.
* Pokémon assets and icons are used for demonstration purposes only.

---

## License

This project is open-source and available for educational and demonstration purposes.

---
