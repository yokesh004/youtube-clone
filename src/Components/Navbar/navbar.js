import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiVideoAddFill } from 'react-icons/ri';

const Navbar = function navbar(){
    return (
        <div className="d-flex align-items-center justify-content-around" style={{height: "100%"}}>
            <GiHamburgerMenu style={{width: "5vw", "font-size": "1.5em"}}/>
            <img src="https://secureservercdn.net/45.40.144.200/8j4.0ea.myftpupload.com/wp-content/uploads/2020/07/youtube-banner.jpg" alt="Youtube Logo" style={{width: "8vw", height: "5vh"}} />
            <div className="search-container" style={{width: "79vw", "text-align": "center"}}>
                <form style={{display: "inline"}}>
                    <input type="text" placeholder="Search" name="search" style={{width: "60%"}}/>
                    <button type="submit" style={{width: "7%"}}>
                        <AiOutlineSearch />
                    </button>
                </form>
            </div>
            <RiVideoAddFill style={{width: "5vw", "font-size": "1.5em"}} onClick={event => window.open('/studio.html', '_blank')}/>
        </div>
    )
}

export default Navbar;