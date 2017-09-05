function TodoService($resource){
  /*
  default methods:
  {
    'get': {method: 'GET'},
    'save': {method: 'POST'},
    'query': {method: 'GET', isArray: true},
    'remove': {method: 'DELETE'},
    'delete': {method: 'DELETE'}
  }
  */

  return $resource('http://jsonplaceholder.typicode.com/todos/:id',
    {
      id: '@id'
    },
    {
      update: {
        method: 'put'
      }
    }
  );

}


angular
  .module('crudmodule')
  .service('TodoService', TodoService);
