import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'kanae-clock';

  date$: Date;

  ngOnInit() {
    interval(1000).subscribe(x => this.date$ = new Date());
  }
}
