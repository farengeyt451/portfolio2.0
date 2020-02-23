import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { HomeRoutingModule } from './home-routing.module';

// Pages
import { HomeIndexComponent } from './pages/home-index';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  exports: [],
  declarations: [HomeIndexComponent],
  providers: []
})
export class HomeModule {}
