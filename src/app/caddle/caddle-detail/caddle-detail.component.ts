import { Component, OnInit, OnDestroy } from '@angular/core';
import { Caddle } from '../caddle.model';
import { CaddleService } from '../caddle.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilkProductions } from '../../milk-production/milk-productions.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-caddle-detail',
  templateUrl: './caddle-detail.component.html',
  styleUrls: ['./caddle-detail.component.css']
})
export class CaddleDetailComponent implements OnInit, OnDestroy {

  caddle: Caddle;
  id: number;
  subscription: Subscription;

  constructor(private caddleService: CaddleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.caddle = this.caddleService.getCaddle(this.id);
        if(!this.caddle) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      }
    );
    this.subscription = this.caddleService.caddleChanged.subscribe(
      (caddleList: Caddle[]) => {
        this.caddle = this.caddleService.getCaddle(this.id);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditCaddle() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCaddle() {
    this.caddleService.deleteCaddle(this.caddle.id);
    this.router.navigate(['/caddle']);
  }

  onAddMilkProduction() {
    this.router.navigate(['milkProduction'], {relativeTo: this.route});
  }
  

}
