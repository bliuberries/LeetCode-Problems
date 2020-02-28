class Node {
  constructor(value){
    this.installed = value;
    this.dependencies = [];
  }

  install() {
    for(let i of this.dependencies) {
      if(!i.installed) i.install();
    }
  }
}

let game = new Node(false);
let java = new Node(false);
let flash = new Node(false);
let d = new Node(true);
game.dependencies.push(java, flash);
java.dependencies.push(d);
console.log(game);