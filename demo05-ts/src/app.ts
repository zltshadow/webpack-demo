import { User } from './User';

const user1: User = {
  name: 'bill',
  age: '24',
  hobby: 'play LOL',
  sex:'man',//sex为可选参数,不写也不会报错
};

// 这里参数不够，tsc编译器会报错，webpack编译不通过
// const user2: User = {
//   name: 'bill',
//   age: '21'
// };

console.log(user1);

