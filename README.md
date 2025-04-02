# PokemonAngular

This project has been created by Jorge Moreno Peralta for a technical selection proccess.

This is an Angular application that allows users to explore Pokémon data through a user-friendly interface. The app retrieves Pokémon details from an external API and displays them with filtering and pagination features.

## Instalation

The structure was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

Ensure you have the following installed on your system:

Node.js (LTS version recommended)

Angular CLI

Clone the Repository
git clone https://github.com/your-username/pokemon-angular-app.git
cd pokemon-angular-app

Install Dependencies
npm install

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Observations

Due to the unusual design of the REST API, we have opted to generalize the endpoint used to load images from the HOME component. The alternative option would be very unefficient since it would require making an HTTP call to the specific endpoint for each Pokémon shown in the list in order to retrieve the images. Therefore, this more efficient option was chosen.
