function Subject(){
    this.observers = [];
}

Subject.prototype = {
    add: function(observer){
        this.observers.push(observer);
    },
    remove:function(observer){
        var observers = this.observers;
        for(var i = 0; i < observers.length; i++){
            if(observer === observers[i]){
                observers.splice(i,1);
            }
        }
    },
    notify:function(){
        var observers = this.observers;
        for(var i = 0 ; i < observers.length; i++){
            observers[i].update();
        }
    }
}

function Observer(name){
    this.name = name;
}

Observer.prototype = {
    update: function(){
        console.log(`my name is ` + this.name);
    }
}

var sub = new Subject();

var obs1 = new Observer('libo');
var obs2 = new Observer('zhangsan');

sub.add(obs1);
sub.add(obs2);
sub.remove(obs1);

sub.notify();

