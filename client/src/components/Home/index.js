import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


function Home() {


    return (
        <>
            <section className="homeContainer">
                <div className="homeText">
                    <h1 className="welcome">welcome to QRad.</h1>
                    <p className="description">Your connections are here to stay.
                    Create your digital business card today.
                    </p>
                    {Auth.loggedIn() ? (
                        <Link to='/profile'>
                            Click here to get started    
                        </Link>    
                    ) : (
                        <Link to='/signup'>
                        Click here to get started    
                        </Link>  
                    )}
                    
                    
                </div>
            </section>    
        </>

    )
};

export default Home;
