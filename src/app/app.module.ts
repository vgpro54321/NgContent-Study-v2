import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutInstanceComponent } from './layout-instance/layout-instance.component';
import { EnvelopeDirective } from './envelope.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LayoutComponent,
    LayoutInstanceComponent,
    EnvelopeDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
