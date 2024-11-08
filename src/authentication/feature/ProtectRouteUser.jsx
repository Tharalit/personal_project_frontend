import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function ProtectRouteUser({children}) {
  const {authUser}=useAuth()
const navigate = useNavigate()


if(authUser?.isAdmin || authUser === null){
  navigate("/")
}

  return (
    <>{children}</>
  )
}
