import React from 'react'
import Nav from '../layout/Nav';
import { Route } from 'react-router-dom';
import Header from '../layout/Header';
import Worked from '../layout/Worked';
import Projects from '../layout/Projects';
const Home = () => {
    return (
        <div>
            <Nav />
            <Header />
            <Worked />
            <Projects />
        </div>
    )
}

export default Home
