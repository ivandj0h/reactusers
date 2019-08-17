import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'

export class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Route path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/user' component={Users} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App

