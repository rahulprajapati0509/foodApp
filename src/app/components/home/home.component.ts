import {Apollo, gql} from 'apollo-angular';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: any[];
  loading = true;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query<any>({
      query: gql`{
        business_features(limit: 10) {
          business_id
          name
          categories
        }
      }`
    }).subscribe(({data, loading})=>{
      console.log(data.business_features)
    })
  }

}
