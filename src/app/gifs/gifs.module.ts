import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component'; 

@NgModule({
  declarations: [MainComponent, SearchComponent, ResultsComponent],
  exports: [MainComponent],
  imports: [CommonModule],
})
export class GifsModule {}
