import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AttributeDirective } from './directives/attribute.directive';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BetterAttributeDirective } from './directives/better-attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AttributeDirective,
    BetterAttributeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
