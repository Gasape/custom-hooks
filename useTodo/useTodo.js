import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [] ;
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init);


    useEffect( () => {
        localStorage.setItem('todos'  , JSON.stringify( todos ) );

    }, [todos]);


    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        // No debes de mandar el mismo tipo del reducer en este caso TODOS:
        // El action se encuentra en otro atchivo el todoReducer es dicho archivo dentro de este esta la información de la acción a realizar que se manda
        // Durante le dispatch de a continuación, el action cuenta con el type que es la acción a realizar y el payload que es el contenido
        // En este caso el tipo es agregar un TODO y el payload es el TODO ques se actualizará
        dispatch(action);
    } 

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }
    
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done ).length,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  }
}
