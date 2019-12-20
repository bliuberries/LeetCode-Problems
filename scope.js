var Foo = function(a) {
  function bar() {
    return a;
  };

  this.baz = function() {
    return a;
  };
}

Foo.prototype = {
  biz: function() {
    return a;
  } 
}

var f = new Foo (8);
// What do these return?
console.log(f.bar()); //
console.log(f.baz()); //
console.log(f.biz()); //