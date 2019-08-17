import React from 'react'

// untuk child component seperti ini kita membuat UI Component
// tanpa menggunakan Class tapi menggunakan Functional Component
const Users = ({kumpulanUsers}) => {

        const listUsers = kumpulanUsers.map(users => {
            return (
                <div className="kotak" key={users.id}>
                    Nama : <b>{users.nama}</b> <br />
                    Umur : <b>{users.umur} Tahun</b>
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
