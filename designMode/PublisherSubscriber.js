let pubSub = {
    list:{},
    subscribe:function(key,fn){
        if(!this.list[key]){
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    unSubscribe(key){
        delete this.list[key];
    },
    publish: function(){
        let args = arguments;
        let key = [].shift.call(args);
        let fns = this.list[key];
        if(!fns || fns.length <= 0){
            console.log(`该订阅不存在`);
            return false;
        }
        for(var i = 0; i< fns.length; i++){
            fns[i].apply(this,args);
            // console.log(args);
            // fns[i](args[0]);
        }
    }
}

pubSub.subscribe('name', (name) => {
    console.log(`your name is ` + name);
});
pubSub.subscribe('name', (name) => {
    console.log(`你的名字是: ` + name);
});

pubSub.subscribe('sex', (name) => {
    console.log(`your sex is ` + name);
});

//pubSub.unSubscribe('sex');

pubSub.publish('name','libo');
pubSub.publish('sex','难');
