import React from 'react'
import { AiFillHome, AiFillFire,  } from 'react-icons/ai'

const Sidebar = function navbar(){
    return (
        <div className="d-flex flex-column align-items-center">
            <button className="d-flex flex-column align-items-center btn">
                <AiFillHome/>
                <p >Home</p>
            </button>
            <button className="d-flex flex-column align-items-center btn">
                <AiFillFire/>
                <p>Trending</p>
            </button>
        </div>
    )
}

export default Sidebar;