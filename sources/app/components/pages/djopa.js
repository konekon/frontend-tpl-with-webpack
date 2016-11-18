angular.module("app").config(($stateProvider, $locationProvider) => {
    $stateProvider.state({
        name: 'djopa',
        url: "/ttt",
    });
    $locationProvider.html5Mode(true).hashPrefix("!");
}).component('djopa', {
    template: require("./djopa500.html"),
    controller: function(socketService) {
        this.socketService = socketService;
    }
});

