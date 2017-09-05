describe('TodoController', function(){
    var $controller, TodoController;

    beforeEach(module('crudmodule'));

    beforeEach(inject(function($injector){
        $controller = $injector.get('$controller');
        var $scope = {};
        //mock the todo service
        var TodoService = function(){};
        TodoService.prototype.$save = function(){};
        TodoService.query = function(){
            return {
                $promise: {
                    then: function(callback){
                        callback([
                            {
                                id: 1,
                                title: 'Example Todo',
                                userId: 1
                            }
                        ]);
                    }
                }
            };
        };

        TodoService.get = function(item){
            item = {
                id: 1,
                title: 'Example Todo',
                userId: 1
            };
            return item;
        };

        TodoService.delete = function(){
            return true;
        };

        // Instantiate the controller
        TodoController = $controller('TodoController as todo', {
            $scope: $scope,
            TodoService: TodoService
        });

    }));

    it('should have get items from the service', function(){
        TodoController.getTodos();
        expect(TodoController.list[0]).toEqual(
            {
                id: 1,
                title: 'Example Todo',
                userId: 1
            }
        );
    });

    it('should create a new item', function(){
        TodoController.title = 'Example Title';
        TodoController.newTodo();
        expect(TodoController.singleTodo.id).toEqual(1);
    })

});