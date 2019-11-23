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

### -----------------------------------------------------------------------------------------------------------------------------------

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

## Property Binding

    // ts file code
    addServerBtn: boolean = false;
    
    // html file code
    <button class="btn btn-primary" [disabled]="!addServerBtn">Add Server</button>
    <p [innerHtml]="!addServerBtn" [innerHtml]="!addServerBtn?'Dissable':'Enable'"></p>

## Event Binding

    // ts file code
    createServerStaus = 'Server is not created';
    onCreateServer() {
        this.createServerStaus = 'Server is created';
    }
    
    // html file code
    <button class="btn btn-primary" (click)="onCreateServer()">Add Server</button>
    <p [innerHtml]="addServerBtn"></p>	<br><br>
    <p>{{createServerStaus}}</p>
    
## Two way binding

    // Import FormModule and put it into imports array in 'app.module.ts' file like given below:
    > import { FormsModule } from '@angular/forms';
    > imports: [
           BrowserModule,
           FormsModule
       ],
       
    // ts file code
    newServerName: string = 'testServer';
    
    // Html code
    <input type="text" class="form-control" [(ngModel)]="newServerName"/>
    <p>{{newServerName}}</p> 
    
**Note :** Combine Property Binding and Event Binding are Two Way Binding  

## Directives
Directives are instructions in the DOM. There may be many condition to print or show the statement on any event like 
Suppose we want to show the value on button clicked whatever types by the user in input fields. Let see:

    // ts file code
    newServerName: string = '';
    isServerCreated: boolean = false;
    
    onCreateServer(){
        this.isServerCreated = true;
    }
    
    // html code
    <label>Server Name</label>
    <input type="text" class="form-control" [(ngModel)]="newServerName"/>
    <br>
    
    <button class="btn btn-primary" (click)="onCreateServer()" >Add Server</button>
    
    <p *ngIf="isServerCreated">Server name is : {{createServerStaus}}</p> 

**Note :** Some example of the directives are like *ngIf, *ngFor, ngStyle etc. We can create custom directives as well.

## Way to use if else case in angular.

    <p *ngIf="isServerCreated; else noServer">Server name is : {{newServerName}}</p>
    <ng-template #noServer>
      <p>No Server is created.</p>
    </ng-template>

## Add Css on runtime

    // Html Code
    <h3 [ngStyle]="{color:getServerColor()}"> The serverId : {{ serverId }} is {{ serverStatus }}</h3>

## Add Class on runtime

    // Css file
    .online {
      background-color: gainsboro;
    }
    
    // Html file
    <h3 [ngClass]="{online: serverStatus === 'Online'}"> The serverId : {{ serverId }} is {{ serverStatus }}</h3>

## Presenting the list or Array using *ngFor

    <div *ngFor="let server of createdServers">
      <app-server></app-server>
    </div>

## Binding to custom properties.
The variables or objects are only available for the same component by default. So By using the custom properties we are 
able to access these variables on another component which is given below:
    
    createdServers: string[] = ['Apache', 'Grassfish'];
    // The value of the createdServers are accessable in another component by using this   
    
    <div *ngFor="let server of createdServers">
      <app-server [serverName]="server"></app-server>
    </div>
    // Now all server are access one by one in serverName propertis which is mentioned in annother component.
    
    @Input() serverName: string;
    // Make sure the binded custom properties are mention by @Input().
    
    Note :- To avoid from this complexity, we generally use Service.
    
## Local references in templates.
Many of the time We have to submit the form or can say like get all the values from form or templates at the time of click
or submit the button. 
I am going with the simple example suppose there are a input type and we have to get the value of input type and send it
to backend on button click. So how can we do that let see:

    // Create local reference in template like
    <input type="text" class="form-control" #serverName/>
    <button class="btn btn-primary" (click)="createServer(serverName)">Add Server</button>
    
    createdServers: string[] = ['Apache', 'Grassfish'];
    
    createServer(newServer: HTMLInputElement) {
        this.createdServers.push(newServer.value);
    }

## Create our own Directive

    // Create your own directive by using this command
    > ng generate directive directive_name
    > ng g d directive_name
    
    import {Directive, ElementRef, OnInit} from "@angular/core";
    
**1st Way :** (The basic way) 
   
    @Directive({
      selector: '[basicAttributeDirective]'
    })
    export class AttributeDirective implements OnInit{
    
      constructor(private elementRef: ElementRef) { }
    
      ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      }
    }
    
    // after created a directive you can use it like below:
    <h1 basicAttributeDirective> {{ title }} </h1>

**2nd Way :** (the better way)

    selector: '[appBetterAttribute]'
    
    ngOnInit() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

**HostListener event on Directives**

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    
    // mouseenter event
    @HostListener('mouseenter') mouseOver(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    }
    
    // mouseleave event
    @HostListener('mouseleave') mouseLeave() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
    }

**HostBinding**

    //HostBinding
    @HostBinding('style.backgroundColor') background = 'pink';
    
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    
    @HostListener('mouseenter') mouseOver(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
        this.background = 'green';
    }
    
    @HostListener('mouseleave') mouseLeave() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
        this.background = 'pink'
    }

**Note :** You can use either HostListener or HostBinding. Both are recomonded.
