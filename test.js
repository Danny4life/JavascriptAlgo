// function setTheme() {
//     const root = document.documentElement;
//     const newTheme = root.className === 'dark' ? 'light' : 'dark';
//     root.className = newTheme;
    
//     document.querySelector('.theme-name').textContent = newTheme;
//   }
  
//   document.querySelector('.theme-toggle').addEventListener('click', setTheme)

import { v4 as uuidv4 } from 'uuid';


const idOne = uuidv4();
const idTwo = uuidv4();


let users = {
  [idOne]: {
    id: idOne,
    firstName: 'Robin',
    lastName: 'Wieruch',
    isDeveloper: true,
  },
  [idTwo]: {
    id: idTwo,
    firstName: 'Dave',
    lastName: 'Davddis',
    isDeveloper: false,
  },
};


const getUsers = () => Object.values(users);

const result = getUsers;

console.log(result);