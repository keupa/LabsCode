import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { AuthContext } from '../../Auth/Auth'
import { auth } from '../Firebase/firebase'

function Logout() {

    const { currentUser } = useContext(AuthContext)

    if (!currentUser){
        return <Redirect to='/user-registration' />
      }

    const signOut = () => { auth.signOut() } 

    return(
        <button onClick={signOut} > Cerrar Sesión </button> 
    )

}

export default Logout