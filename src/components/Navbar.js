import React, { useState } from 'react'

const Navbar = ({ active, setActive }) => {

    // Handle Navbar
    const [clicked, setClicked] = useState(false);
    const handleDrawer = () => {
        setClicked(!clicked);
    }

    return (
        <div className={`navbar ${active ? 'active' : ''}`}>
            <nav className="logo">
                <h1>Ionio Assignment</h1>
                <i className={!clicked ? 'bx bx-menu customDrawer' : 'bx bx-x customDrawer'} id="btn" onClick={handleDrawer}></i>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu-inactive'}>
                    <li>
                        <i className='bx bx-search' onClick={() => {}}></i>
                        <input type="text" placeholder="Search..." />
                    </li>
                    <li>
                        <a href="/">
                            <i className='bx bx-home' onClick={() => {}}></i>
                            <span className="links_name">Task 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="/task2">
                            <i className='bx bx-notification' onClick={() => {}}></i>
                            <span className="links_name">Task 2</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-message-square-dots' onClick={() => {}}></i>
                            <span className="links_name">Messages</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
