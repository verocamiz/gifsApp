import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  
  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}
}
