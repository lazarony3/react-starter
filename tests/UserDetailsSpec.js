import React from 'react'
import {UserDetails} from '../src/components/UserDetails.js';
import { assert } from 'chai'

describe('UserDetails', () => {

  it('should work', () => {
    var userDetails = <UserDetails />;
     assert.isOk(userDetails);
  });

});
