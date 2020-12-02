import { Apollo, gql } from 'apollo-angular';
import { Business, BusinessQuery } from '../../models/business';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { BusinessGQL } from '../../services/business.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = true;
  business: Observable<Business[]>


  constructor(private apollo: Apollo, private businessGQL: BusinessGQL) { }

  ngOnInit(): void {
    this.business = this.businessGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.business_features)
      );
    this.business.subscribe(business =>console.log(business))
  }

  ngOnDestroy(): void {
    // this.querySubscription.unsubscribe();
  }

}
