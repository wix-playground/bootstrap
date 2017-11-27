angular.module('ui.bootstrap.booking.demo').controller('PopoverDemoCtrl', function ($scope) {
  $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };
});
