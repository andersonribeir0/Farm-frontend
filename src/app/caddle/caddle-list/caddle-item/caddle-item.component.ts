import { Component, OnInit, Input } from '@angular/core';
import { Caddle } from '../../caddle.interface';

@Component({
  selector: 'app-caddle-item',
  templateUrl: './caddle-item.component.html',
  styleUrls: ['./caddle-item.component.css']
})
export class CaddleItemComponent implements OnInit {

  @Input() caddle: Caddle;
  @Input() index: number;
  transformedDate: string;
  constructor() { }

  ngOnInit() {
    this.transformedDate = this.caddle.birthDate.toLocaleString();
  }

}
