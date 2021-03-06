import { mockFindAll, mockDelete } from 'ember-data-factory-guy';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Users Delete');
// NOTE
// FactoryGuy before and after setup is in moduleForAcceptance helper

test("Deleting a user", function () {
  mockFindAll('user', 2);
  visit('/users');

  andThen(()=> {
    ok(find('li.user').length === 2);
    mockDelete('user', '1');
    click('li.user:first button');
  });

  andThen(()=>{
    ok(find('li.user').length === 1);
  });
});
