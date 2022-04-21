'use strict';

var role = prompt('Введите роль:');
let result = role === 'admin' ? 'Приветсвую, босс' :
 role === 'moder' ? 'Приветсвую, смотритель порядка' :
  role === 'user' ? 'Здравствуй, пользователь' :
   role === 'guest' ? 'Здравствуй, гость' :
    'Привет, некто';
alert(result);