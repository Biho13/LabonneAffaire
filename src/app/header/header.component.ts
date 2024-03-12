import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  temps$!: Observable<number>;

  ngOnInit(): void {
    this.temps$ = interval(1000);
  }
}
