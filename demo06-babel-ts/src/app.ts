import "@babel/polyfill";
import './new-features';//js需用到polyfill新特性
import { User } from './User';

const user1: User = {
  name: 'bill',
  age: '24',
  hobby: 'play LOL',
  sex:'man',//可选属性
};

// 这里参数不够，tsc编译器会报错，webpack编译不通过
// const user2: User = {
//   name: 'bill',
//   age: '24'
// };

console.log(user1);

