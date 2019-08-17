import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/user" role="button">Tampilkan Users</Link>
                </p>
        </div>
            )
        }
        
export default Home;