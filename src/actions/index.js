
let id = 1;
function uuid() {
    return id++;
}

import { push } from 'connected-react-router';

export function addTodoItem(value){
    return {
        type: "ADD_TODO_ITEM",
        payload: {
            name: value,
            id: uuid(),
            completed: false,
            editable: false
        }
        
    }
 }


 export function modifyCompleted(){
     return {
         type:"MODIFY_COMPLETED",
         
     }
 }

 export function COMPLETE_TODO(id) {
     return {
        type: "COMPLETE_TODO",
        id
     }
 }

 export function registerToServer(userName, passWord){
    dispatch(changeRegisterState('register...'));
    fetch('./api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: userName,
        password: passWord
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.text())
      .then(text => {
        dispatch(changeRegisterState(text));
      });
 }

 export function changeRegisterState(state){
     return{
        type: 'CHANGE_REGISTER_STATE',
        state
     }
}
