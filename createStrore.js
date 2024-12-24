import { createStore,bindActionCreators, combineReducers } from "redux";

const ADD_TODO = 'add_todo';
const DEL_TODO = 'delete_todo';
const UPD_TODO = 'edit_todo';
const ADD_USER ='add_user'

function todoReducer (state = [],action){
    if(action.type === ADD_TODO){
        const todoText = action.payload.todoText;
        return [
            ...state, {text:todoText,isFinished:false, id : (state.length == 0) ? 1 : state[state.length-1].id+1 }
        ]
    }
    else if (action.type === DEL_TODO){
        const todoId = action.payload.id;
        return state.filter(t => t.id !== todoId);
    }
    else if (action.type === UPD_TODO){
        const todoText = action.payload.todoText;
        const todo = action.payload.todo;

        return state.map(t => {
            if (t.id === todo.id){
                t.text = todoText;
            }
        })
    }
    else {
        return state;
    }

}

function userReducer(state = [],action){
    if (action.type === ADD_USER){
        const userName = action.payload.userName;
        return [
            ...state,
            {name:userName, id : ((state.length == 0) ? 1 : state[state.length-1].id+1 )}
        ];
        
    }
    return state;
}


//action objects -- > action methods (action creators)
const addTodo = (todoText) => ({type:ADD_TODO,payload:{todoText}});
const deleteTodo = (id) => ({type:DEL_TODO,payload:{id}});
const addUser = (userName) =>  ({type : ADD_USER,payload:{userName}});

const reducer = combineReducers({todo:todoReducer,users:userReducer});

const {dispatch,subscribe,getState,replaceReducer} = createStore(reducer);
subscribe(()=>console.log(getState()));

// dispatch({type:ADD_TODO,payload:{todoText:'todo1'}});

// dispatch({type:ADD_TODO,payload:{todoText:'todo2'}});

// dispatch(addTodo('todo1'));
// dispatch(addTodo('todo2'));

// dispatch(deleteTodo(1));

//console.log(getState());
// dispatch({type:DEL_TODO,payload:{id:1}});

//console.log(getState());

//combing all the functions all the functions ointo one function

const actions = bindActionCreators({addTodo,deleteTodo,addUser},dispatch);

actions.addTodo('todo 1');
actions.addTodo('todo 2');

actions.deleteTodo(1);
actions.addUser('srikrishna');

