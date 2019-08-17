import React from 'react'

/* ini adalah UI COMPONENT
   untuk child component seperti ini kita membuat UI Component
   tanpa menggunakan Class tapi menggunakan Functional Component
*/

const TampilUser = ({kumpulanUsers}) => {
    
        const listUsers = kumpulanUsers.map(users => {
            let listStyle = users.umur >= 11 ? ('card border-secondary mb-3') : ( null )

            return (
                <div className={listStyle || "card border-danger mb-3"} key={users.id}>
                    <div className="card-header"><h3>{users.nama}</h3></div>
                    <div className="card-body">
                        <p className="card-text">Umur : <b>{users.umur}</b> Tahun</p>
                        <p className="card-text">Hobby : <b>{users.hobby}</b></p>
                        <p className="card-text">Alamat : <b>{users.alamat}</b></p>
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
