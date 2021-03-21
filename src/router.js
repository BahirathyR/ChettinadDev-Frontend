import React, { createContext, useReducer } from 'react'
import Dummy from './pages/Dummy'
import Login from './pages/Login'

export const routes = [
    {
        COMPONENT: <Dummy />,
        PATH: '/dummy'
    },
    {
        COMPONENT: <Login />,
        PATH: '/login'
    },
    {
        COMPONENT: <Dummy />,
        PATH: '/'
    }

]