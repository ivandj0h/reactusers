import React, { Component } from 'react'
import Users from './components/Users';

export class App extends Component {

    state = {
        users : [
            { id: 1, nama: 'Ivandi Djoh Gah', umur: 39, },
            { id: 2, nama: 'Sintha Erika Djoh', umur: 32, },
            { id: 3, nama: 'Dave Djoh', umur: 11, },
            { id: 4, nama: 'Arjuna Djoh', umur: 5, }
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

