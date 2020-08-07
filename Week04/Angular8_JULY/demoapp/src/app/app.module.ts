import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponentComponent } from "./test-component/test-component.component";
import { ClassBindingComponent } from "./class-binding/class-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ClassBindingComponent,
    EventBindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
