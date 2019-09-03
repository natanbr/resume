import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/models/resume';

@Component({
  selector: 'cv-detail-row',
  templateUrl: './detail-row.component.html',
  styleUrls: ['./detail-row.component.scss']
})
export class DetailRowComponent implements OnInit {

  @Input() experience: Experience;

  open: boolean;

  constructor() { }

  ngOnInit() {
  }

  expand() {
    this.open = true;
  }

  collapsed() {
    this.open = false;
  }

  get yearsString(): string {
    const from = this.experience.title.year_from;
    const to = this.experience.title.year_to;
    // tslint:disable-next-line: curly
    if (from !== to)
      return `${from} - ${to}`;

    else return from;
  }
}
