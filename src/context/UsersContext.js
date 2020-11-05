import React, { createContext, useReducer } from 'react'
import users from '../data/users'

const initialState = { 
    users: users 
}
const UsersContext = createContext({})

const actions = {
    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state, //precisa dessa linha pros casos em que o estado tiver outros atributos (ex: posts, cotações, produtos etc)
            users: state.users.filter(u => u.id !== user.id)
        }
    },
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user]
        }
    },
    updateUser(state, action) {
        const updatedUser = action.payload
        return {
            ...state,
            users: state.users.map(u => u.id === updatedUser.id ? updatedUser : u)
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
        // if(action.type === 'deleteUser') {
        //     const user = action.payload
        //     return {
        //         //...state, precisa dessa linha pros casos em que o estado tiver outros atributos (ex: posts, cotações, produtos etc)
        //         users: state.users.filter(u => u.id !== user.id)
        //     }
        // }
        // return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{
            state,
            dispatch
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext