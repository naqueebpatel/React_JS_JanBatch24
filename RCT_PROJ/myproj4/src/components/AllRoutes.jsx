import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import AllUsers from './AllUsers'
import LoginPage from './LoginPage'
import PageNotFound from './PageNotFound'
import SingleUser from './SingleUser'

const AllRoutes = () => {
  return (
        <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/allUsers" element={<AllUsers/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/userDetail/:id" element={<SingleUser/>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </>
  )
}

export default AllRoutes