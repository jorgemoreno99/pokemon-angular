# PokemonAngular

This project has been created by Jorge Moreno Peralta for a technical selection proccess.

This is an Angular application that allows users to explore Pokémon data through a user-friendly interface. The app retrieves Pokémon details from an external API and displays them with filtering and pagination features.

## Instalation

The structure was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.
### Prerequisites
Ensure you have the following installed on your system:

Node.js (LTS version recommended)
Angular CLI

### Clone the Repository
```sh
git clone https://github.com/yourusername/pokemon-angular.git
cd pokemon-angular
```

### Install Dependencies
```sh
npm install
```

### Run the Application
```sh
ng serve
```

### 🧪 Running Tests
Run unit tests:
```sh
ng test
```
**Some tests have been omitted to speed up development as they were considered unnecessary or repetitive.**
Main Components and services have been tested


## Observations

Due to the unusual design of the REST API, we have opted to generalize the endpoint used to load images from the HOME component. The alternative option would be very unefficient since it would require making an HTTP call to the specific endpoint for each Pokémon shown in the list in order to retrieve the images. Therefore, this more efficient option was chosen.
