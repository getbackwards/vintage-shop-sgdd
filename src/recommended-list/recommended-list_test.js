import QUnit from 'steal-qunit';
import { ViewModel } from './recommended-list';

// ViewModel unit tests
QUnit.module('vintage-shop/recommended-list');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the recommended-list component');
});
