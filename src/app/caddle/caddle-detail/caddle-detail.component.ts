import { Component, OnInit, OnDestroy } from '@angular/core';
import { Caddle } from '../caddle.model';
import { CaddleService } from '../caddle.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilkProductions } from '../../milk-production/milk-productions.model';

@Component({
  selector: 'app-caddle-detail',
  templateUrl: './caddle-detail.component.html',
  styleUrls: ['./caddle-detail.component.css']
})
export class CaddleDetailComponent implements OnInit {
  caddle: Caddle;
  id: number;
  constructor(private caddleService: CaddleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.caddle = this.caddleService.getCaddle(this.id);
        if(!this.caddle){
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      }
    );
  }

  onEditCaddle() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCaddle() {
    this.caddleService.deleteCaddle(this.caddle.id);
    this.router.navigate(['/caddle']);
  }

  

}
