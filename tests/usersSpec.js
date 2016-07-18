import React from 'react'
import {Users} from '../src/components/Users.js';
import { assert } from 'chai'

describe('Users', () => {

  it('should work', () => {
    var users = <Users />;
     assert.isOk(users);
  });

});
