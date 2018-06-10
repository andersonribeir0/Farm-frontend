import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CaddleService } from '../caddle.service';
import { MilkProductions } from '../../milk-production/milk-productions.model';
import { Caddle } from '../caddle.model';

@Component({
  selector: 'app-caddle-edit',
  templateUrl: './caddle-edit.component.html',
  styleUrls: ['./caddle-edit.component.css']
})
export class CaddleEditComponent implements OnInit {
  caddleForm: FormGroup;
  editMode = false;
  id: number;
  indexDb: string;

  constructor(private route: ActivatedRoute,
              private caddleService: CaddleService,
              private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        this.indexDb = this.caddleService.getCaddle(this.id).id;
        if(!this.indexDb) {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      }
    )
  }

  onSubmit() {
    if (this.editMode) {
      let caddle = <Caddle>this.caddleForm.value;
      caddle.id = this.indexDb;
      console.log(caddle);
      this.caddleService.updateCaddle(caddle);
    } else {
      this.caddleService.insertCaddle(<Caddle>this.caddleForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let caddleName = '';
    let caddleNumber: number;
    let caddleWeight: number;
    let caddleBirthDate: Date;
    let caddleGender = '';
    let milkProductions = new FormArray([]);

    if(this.editMode) {
      const caddle = this.caddleService.getCaddle(this.id);
      caddleName = caddle.name;
      caddleNumber = caddle.number;
      caddleWeight = caddle.weight;
      caddleBirthDate = caddle.birthDate;
      caddleGender = caddle.gender;

      this.caddleForm = new FormGroup({
        'name': new FormControl(caddleName, Validators.required),
        'number': new FormControl(caddleNumber, Validators.required),
        'weight': new FormControl(caddleWeight, Validators.required),
        'birthDate': new FormControl(caddleBirthDate, Validators.required),
        'gender': new FormControl(caddleGender, Validators.required)
      });
    }

  }

}
