import React , { useState } from 'react'
import Login from '../components/Login.js'
import Signup from '../components/Signup.js'
import NavItems from '../data/NavItems.js'
import AdminNavItems from '../data/AdminNavItems'

const Auth = (props) => {
const [oldUser,setOldUser] =  useState(false)

const handleOldUser = (bool) => {
    setOldUser(bool)
}
const handleLoginNavItem = (loginDetails) => {
    if(loginDetails === 'admin'){
        props.updateNavItems(AdminNavItems)
    }else{
        props.updateNavItems(NavItems)
    }
}
if(oldUser){
    return <Login handleOldUser={handleOldUser} handleLoginNavItem={handleLoginNavItem} />
}else{
    return <Signup handleOldUser={handleOldUser} handleLoginNavItem={handleLoginNavItem}/>
}
}

export default Auth