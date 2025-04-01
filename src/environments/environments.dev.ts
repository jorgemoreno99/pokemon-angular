

export const urlApi : string = 'https://pokeapi.co/api/v2'

export const imageBaseUrl : string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


// The second alternative would be to use an API call to every pokemon of the list from the homeComponent

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
