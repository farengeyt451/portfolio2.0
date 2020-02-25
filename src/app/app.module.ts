import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Modules
import { CoreModule } from '@modules/core/core.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
