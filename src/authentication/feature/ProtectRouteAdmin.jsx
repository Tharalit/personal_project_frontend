import React from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function ProtectRouteAdmin({children}) {
const {authUser}=useAuth()
const navigate = useNavigate()


if(!authUser?.isAdmin){
  navigate("/")
}

  return (
    <>{children}</>
  )
}
