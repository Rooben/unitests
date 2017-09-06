var root = {
  templateUrl: './root.html'
};

function RootController(){
  this.initialCount = 3;
}

angular
  .module('root')
  .controller('RootController', RootController)
  .component('root', root);
