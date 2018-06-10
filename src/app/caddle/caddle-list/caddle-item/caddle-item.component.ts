import { Component, OnInit, Input } from '@angular/core';
import { Caddle } from '../../caddle.model';

@Component({
  selector: 'app-caddle-item',
  templateUrl: './caddle-item.component.html',
  styleUrls: ['./caddle-item.component.css']
})
export class CaddleItemComponent implements OnInit {

  @Input() caddle: Caddle;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
