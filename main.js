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
console.log(list.tail());
console.log(list.at(12));
console.log(list.toString());