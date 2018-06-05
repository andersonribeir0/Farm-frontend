import { Component, OnInit } from '@angular/core';
import { Caddle } from '../caddle.interface';
import { CaddleService } from '../caddle.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MilkProductions } from '../../milk-production/milk-productions.interface';

@Component({
  selector: 'app-caddle-detail',
  templateUrl: './caddle-detail.component.html',
  styleUrls: ['./caddle-detail.component.css']
})
export class CaddleDetailComponent implements OnInit {
  caddle: Caddle;
  id: number;
  milkProduction: MilkProductions;
  constructor(private caddleService: CaddleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.caddle = this.caddleService.getCaddle(this.id);
        //this.caddleService.getMilkProductions(this.caddle.id);
      }
    );
  }

  onAddMilkProduction() {
    this.caddleService.addMilkProduction(this.caddle.id, this.milkProduction);
  }

  onEditCaddle() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCaddle() {
    this.caddleService.deleteCaddle(this.caddle.id);
    this.router.navigate(['/caddle']);
  }

  

}
