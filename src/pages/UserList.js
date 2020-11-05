import React, { useContext } from 'react'
import UsersContext from '../context/UsersContext'
import './UserList.css'
export default props => {

    const { state, dispatch } = useContext(UsersContext)

    return (
        <div>
            <ul className="list-group list-group-flush">
                {state.users.map(user => (
                    <li className="list-group-item d-flex align-items-center justify-content-between" key={user.id}>
                        <div className="userInfo d-flex align-items-center">
                            <img src={user.avatarUrl} className="avatar mr-3" />
                            <div>
                                <h6>{user.name}</h6>
                                <p>{user.email}</p>
                            </div> 
                        </div>
                        <div className="user-buttons">
                            <button className="btn btn-warning" onClick={() => props.history.push('/userform', user)}>
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button className="btn btn-danger ml-1" onClick={() => dispatch({type: 'deleteUser', payload: user})}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-center">
                <i className="fa fa-plus-circle fa-3x add-icon" aria-hidden="true" onClick={() => props.history.push('/userform')}></i>
            </div>
            
        </div>
    )
}
