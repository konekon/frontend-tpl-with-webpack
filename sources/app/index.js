angular.module("app", [
    "ui.bootstrap", "ui.router"
]).config(($locationProvider, $compileProvider, $urlRouterProvider) => {    
    $locationProvider.html5Mode(true).hashPrefix("!");
    $urlRouterProvider.otherwise("/auth");
    
    if (process.env.NODE_ENV == "production") {
        $compileProvider.debugInfoEnabled(false);
    }
});

class Djopa {
    constructor() {
        this._djopaSize = 10;
    }

    get djopaSize() {
        return this._djopaSize
    }

    set djopaSize(size) {
        this._djopaSize = size * 500;
    }
}


/*let djopa = new Djopa();
djopa.djopaSize = 20;
console.log(djopa.djopaSize);

let {a, b} = {a: 10, b:20};

console.log({a, b, c: 30});

(function (hui) {
    hui('Ваш хуй сер');
})(alert);


(()=>()=>()=>()=>()=>()=>()=>()=>()=>()=>()=>()=>()=>()=>{})(alert);
*/
var DjopaES5 = function() {
    console.log('djopaES5');
};

var djopaES5 = new DjopaES5();
var hfjdhfjd = function () {
    djopaES5.call(this);
};

hfjdhfjd.prototype = DjopaES5;

hfjdhfjd.prototype.constructor = DjopaES5;

const requireAll = requireContext => requireContext.keys().map(requireContext);

//require("./components/common/nk-search-form.component");

if (process.env.NODE_ENV == "development") console.log("development");
if (process.env.NODE_ENV == "production") console.log("production");

/*angular.module("app").config(($stateProvider, $locationProvider) => {
    $stateProvider.state("jopa", {
        url: "/ttt",
        template: require("./jopa500.html")
    });
    $locationProvider.html5Mode(true).hashPrefix("!");
    console.log("hui");
});*/

angular.bootstrap(document, ["app"]);