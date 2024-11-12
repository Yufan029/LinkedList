import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("xxx");

console.log(`Size is ${list.size()}`);
console.log(`Last node: ${list.tail().toString()}`);
console.log(list.at(2));
console.log(list.toString());
console.log(`Pop node: ${list.pop().toString()}`);
console.log(list.toString());