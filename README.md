# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

######-----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Created project

    > ng new angular
    Would you like to add Angular routing (Y/N)? N
    Which stylesheet format would you like to use? CSS
    
## To Run the project

    > cd project_name
    > npm install
    > ng serve
    
## Create Component

    > ng generate component component_name
    > ng generate component /folder/component_name      // Create under folder
    > ng g c component_name         // short commond
    
## Way to install Bootstap in project (localy not globly)

     # npm install --save bootstrap@3
     # Go to angular.json file and change the blow written code:
        -> "styles" : [
                "src/stylex.css";,
                "node_modules/bootstrap/dist/css/bootstrap.css"  // add filepath from created file in node_module folder.
            ]
