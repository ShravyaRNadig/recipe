import React , { useState } from 'react'
import Login from '../components/Login.js'
import Signup from '../components/Signup.js'

const Auth = () => {
const [oldUser,setOldUser] =  useState(false)

const handleOldUser = (bool) => {
    setOldUser(bool)
}
if(oldUser){
    return <Login handleOldUser={handleOldUser}/>
}else{
    return <Signup handleOldUser={handleOldUser}/>
}
}

export default Auth