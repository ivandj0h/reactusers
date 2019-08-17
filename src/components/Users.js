import React from 'react'

// untuk child component seperti ini kita membuat UI Component
// tanpa menggunakan Class tapi menggunakan Functional Component
const Users = ({kumpulanUsers}) => {

        const listUsers = kumpulanUsers.map(users => {
            return (
                <div className="card bg-light mb-3">
                    <div className="card-body" key={users.id}>
                        <h4 className="card-title"><b>{users.nama}</b></h4>
                    </div>
                </div>
            )
        })

        return (
            <div>
                { listUsers }
            </div>
        )
    }

export default Users
