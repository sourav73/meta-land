import React from 'react'
import "./Heroarea.scss"

const Heroarea = () => (
    <div id="heroarea">
        <div className="max-width">
            <div className="container-lg">
                <div className="row align-items-center">
                    {/* <div className="col-12 text-center">
                        <h1 className='heading'>Initiation Phase II: The Great Migration</h1>
                        <h3 className='sub_heading'>Land Owners, Get Ready!</h3>
                    </div> */}
                    <div className="col-md-6">
                        <img src="/images/intro.gif" className="w-100 border-r-3" alt="intro"/>
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 className='heading mb-3 mt-md-4 mt-sm-4'>Mint 2 Tomorrow Land to Get 1 Free</h1>
                        <button className="btn btn-danger btn-hero">Connect Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Heroarea