import { Query, gql } from 'apollo-angular';

import { BusinessQuery } from '../models/business';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessGQL extends Query<BusinessQuery> {
  document = gql`
    query businessQuery {
      business_features(limit: 10) {
        business_id
        name
        categories
        stars
        address
        attributes
        city
        hours
        id
        is_open
        latitude
        longitude
        postal_code
        review_count
        state
        restrareview {
          business_id
          cool
          date
          funny
          id
          review_id
          stars
          text
          useful
          user_id
        }
      }
    }`
}
