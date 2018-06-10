import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CaddleService } from '../caddle.service';
import { MilkProductions } from '../../milk-production/milk-productions.model';

@Component({
  selector: 'app-caddle-milk-production',
  templateUrl: './caddle-milk-production.component.html',
  styleUrls: ['./caddle-milk-production.component.css']
})
export class CaddleMilkProductionComponent implements OnInit {
  milkProductionForm: FormGroup;
  id: number;
  indexDb: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private caddleService: CaddleService) { }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.indexDb = this.caddleService.getCaddle(this.id).id;
        if(!this.indexDb) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      }
    )
  }

  onSubmit() {
    this.caddleService.addMilkProduction(this.indexDb ,<MilkProductions>this.milkProductionForm.value);
  }

  private initForm() {
    this.milkProductionForm = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required)
    });
  }

}
