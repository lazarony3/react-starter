import React from 'react'
import {UserCreate} from '../src/components/UserCreate.js';
import { assert } from 'chai'

describe('UserCreate', () => {

  it('should work', () => {
    var userCreate = <UserCreate />;
    //TestUtils.renderIntoDocument(hello);
    //expect(hello).toBeTruthy();
     assert.isOk(userCreate);
  });

});
