import React, { Component } from 'react'
import Users from './components/Users';

export class App extends Component {

    state = {
        users : [
            { id: 1, nama: 'Arjuna Tirta Ramadhan Djoh', umur: 4, hobby: 'bermain game' }
        ]
    }

    render() {
        return (
            <div className="container">
                <Users kumpulanUsers={ this.state.users } />
            </div>
        )
    }
}

export default App

