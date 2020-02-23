import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SwiperModule } from 'ngx-swiper-wrapper';
import { WorksRoutingModule } from './works-routing.module';

// Pages
import { WorksIndexComponent } from './pages/works-index';

// Components
import { WorksSlideComponent } from './components/works-slide';

@NgModule({
  imports: [CommonModule, WorksRoutingModule, SwiperModule],
  declarations: [WorksIndexComponent, WorksSlideComponent]
})
export class WorksModule {}
