var toDoComponent = {
  templateUrl: './toDoComponent.html'
};


function TodoController(TodoService){

  var ctrl = this;

  ctrl.title = '';

  ctrl.list = TodoService.query();

  ctrl.singleTodo = TodoService.get({
    id: 1
  });

  ctrl.addTodo = function(){
    var newTodo = new TodoService;
    newTodo.title = ctrl.title;
    newTodo.completed = false;
    newTodo.userId = 9;
    newTodo.$save(function(){
      ctrl.list.unshift(newTodo);
    });
  };

  ctrl.deleteTodo = function(todo){
    todo.$delete(function(){
      ctrl.list = ctrl.list.filter(function(item){
        return item.id !== todo.id;
      });
    });
  };

  ctrl.updateTodo = function(todo){
    todo.$update(function(){
      console.log('Updated!', todo);
    });
  };

  ctrl.newTodo = function(){
    var newTodo = new TodoService();

    newTodo.completed = false;
    newTodo.title = this.title;
    newTodo.userId = 1;
    newTodo.$save();
    if(ctrl.list.isArray){
      ctrl.list.unshift(newTodo);
    }

  };

  ctrl.getTodos = function(){
    TodoService.query()
    .$promise.then(function(res){
      ctrl.list = res;
    });
  }
}



angular
  .module('crudmodule', [

  ])
  .controller('TodoController', TodoController)
  .component('toDoComponent', toDoComponent);
