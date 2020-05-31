var SingletonTester = (function(){
    function Singleton(options){
        options = options || {};
        this.name = "SingletonTester";
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }

    var instance;
    var _static = {
        name:'SingletonTester',
        getInstance: function(options){
            if(instance === undefined){
                instance = new Singleton(options);
            }
            return instance;
        }

    }

    return _static;

})();

var singleTest = SingletonTester.getInstance({pointX: 10000});

console.log(singleTest.pointX);
