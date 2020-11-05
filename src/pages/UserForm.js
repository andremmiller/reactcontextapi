import React, { useContext, useState } from 'react'
import UsersContext from '../context/UsersContext'

export default props => {
    const { dispatch } = useContext(UsersContext) // se for acessar os dados, usa o state. se for mexer nos dados, usa o dispatch
    const [user, setUser]= useState(props.location.state ? props.location.state : {name: '', email: '', avatarUrl: ''})

    const saveUser = () => {
        dispatch({
            type: user.id? 'updateUser' : 'createUser', 
            payload: user
        })
        props.history.push('/')
    }

    const handleInputChange = e => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    return (
        <div>
            <form className="px-2 py-4">
                <div className="form-group">
                    <label>Nome</label>
                    <input name="name" id="name" className="form-control" value={user.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" id="email" className="form-control" value={user.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>URL da Imagem</label>
                    <input name="avatarUrl" id="avatarUrl" className="form-control" value={user.avatarUrl} onChange={handleInputChange} />
                </div>
                <button type="button" className="btn btn-success btn-block mt-4" onClick={saveUser}>
                    Salvar
                </button>
            </form>
        </div>
    )
}
