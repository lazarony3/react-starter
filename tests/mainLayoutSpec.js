import React from 'react'
import {MainLayout} from '../src/components/MainLayout.js';
import { assert } from 'chai'

//var Hello = require('../src/Hello.es6');

describe('MainLayout', () => {

  it('should work', () => {
    var mainLayout = <MainLayout />;
    //TestUtils.renderIntoDocument(hello);
    //expect(hello).toBeTruthy();
     assert.isOk(mainLayout);
  });

});
