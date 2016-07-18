import React from 'react'
import {Home} from '../src/components/Home.js';
import { assert } from 'chai'

describe('Home', () => {

  it('should work', () => {
    var home = <Home />;
    //TestUtils.renderIntoDocument(hello);
    //expect(hello).toBeTruthy();
     assert.isOk(home);
  });

});
