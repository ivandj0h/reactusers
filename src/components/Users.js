import React, { Component } from 'react'
import TampilUser from './TampilUser'


export class Users extends Component {

    state = {
        users : [
            { id: 1, nama: 'Arjuna Djoh', umur: 4, hobby: 'Nonton Yutube', alamat: 'jln.sudirman no.1, jakarta' },
            { id: 2, nama: 'Dave Djoh', umur: 10, hobby: 'Bermain Game', alamat: 'jln.sudirman no.1, jakarta' },
            { id: 3, nama: 'John Doe', umur: 12, hobby: 'Bermain Gitar', alamat: 'jln.sudirman no.2, jakarta' },
            { id: 4, nama: 'Jane Doe', umur: 10, hobby: 'Bernyanyi', alamat: 'jln.sudirman no.3, jakarta' }
        ]
    }

    render() {
        return (
            <div className="container">
                <TampilUser kumpulanUsers={ this.state.users } />
            </div>
        )
    }
}

export default Users

