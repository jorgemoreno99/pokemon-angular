

export const urlApi : string = 'https://pokeapi.co/api/v2'

export const imageBaseUrl : string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


// Due to the unusual design of the REST API, we have opted to generalize the endpoint used to load images from the HOME component. The alternative option would
//  be very unefficient since it would require making an HTTP call to the specific endpoint for each Pokémon shown in the list in order to retrieve the images.
// Therefore, this more efficient option was chosen.

// Alternative Option would require something like this:
// async componentDidMount() {
//   const pokeName = await axios.get('https://pokeapi.co/api/v2/pokemon/')
//   const pokeArray = [];
//   for (let i = 0; i < pokeName.data.results.length; i++) {
//     const poke = pokeName.data.results[i];
//     const pokeImage = await axios.get(poke.url);
//     const pokeObj = {
//       name: poke.name,
//       image: pokeImage.data.sprites.front_default
//     }
//     pokeArray.push(pokeObj);
//   }
//   this.setState({
//     pokemon: pokeArray,
//     apiDataLoaded: true
//   })
// }
