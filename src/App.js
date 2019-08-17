import React, { Component } from 'react'
import Users from './components/Users';

/* ini adalah CLASS COMPONENT
   untuk Parent component seperti ini kita membuatnya menggunakan Class Component
   karena kita akan menyimpan State didalamnya
   dan untuk mengakses Statenya nanti akan kita alihkan ke Child Component menggunakan PROPS
*/

export class App extends Component {

    state = {
        users : [
            { id: 1, nama: 'Arjuna Djoh', umur: 4, hobby: 'Nonton Yutube' },
            { id: 2, nama: 'Dave Djoh', umur: 10, hobby: 'Bermain Game' },
            { id: 3, nama: 'John Doe', umur: 12, hobby: 'Bermain Gitar' },
            { id: 4, nama: 'Jane Doe', umur: 10, hobby: 'Bernyanyi' }
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

