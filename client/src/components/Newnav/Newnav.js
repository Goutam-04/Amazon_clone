import React from 'react'
import "./newnav.css"

const Newnav = () => {
    return (
        <div>
            <div className='new_nav'>
                <div className='nav_data'>
                    <div className='left_data'>
                        <p>All</p>
                        <p>Mobile</p>
                        <p>Beatseller</p>
                        <p>Fashion</p>
                        <p>Customer Service</p>
                        <p>AElectronics</p>
                        <p>Prime</p>
                        <p>Today's deal</p>
                        <p>Amazon Pay</p>
                    </div>
                    <div className='right_data'>
                        <img src='./nav.jpg' alt='nav data' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newnav