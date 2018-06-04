import { Component, OnInit, OnDestroy } from '@angular/core';
import { CaddleService } from '../caddle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Caddle } from '../caddle.interface';

@Component({
  selector: 'app-caddle-list',
  templateUrl: './caddle-list.component.html',
  styleUrls: ['./caddle-list.component.css']
})
export class CaddleListComponent implements OnInit, OnDestroy {
  caddleList: Caddle[];
  subscription: Subscription;
  constructor(private caddleService: CaddleService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.caddleService.caddleChanged.subscribe(
      (caddleList: Caddle[]) => {
        this.caddleList = caddleList;
      }
    );
    this.caddleService.fetchCaddleList();
  }

  onNewCaddle() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
