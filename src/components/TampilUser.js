import React from 'react'

/* ini adalah UI COMPONENT
   untuk child component seperti ini kita membuat UI Component
   tanpa menggunakan Class tapi menggunakan Functional Component
*/

const TampilUser = ({kumpulanUsers}) => {

    // Selanjutnya kita akan coba menggunakan kondisional
    
        const listUsers = kumpulanUsers.map(users => {
            let listStyle = users.umur >= 11 ? ('card text-white bg-success mb-3') : ( null )

            return (
                <div className={listStyle || "card text-white bg-danger mb-3"} key={users.id}>
                    <div className="card-body">
                        <h4 className="card-title"><b>{users.nama}</b></h4>
                        <p className="card-text">Umur : <b>{users.umur}</b> Tahun</p>
                        <p className="card-text">Hobby : <b>{users.hobby}</b></p>
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

export default TampilUser
