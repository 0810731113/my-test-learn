function testable(target){
    target.isTestable = true;
    target.name = 'mtTest';
}

@testable
class MyTestableClass{

}

console.log(MyTestableClass.name);

