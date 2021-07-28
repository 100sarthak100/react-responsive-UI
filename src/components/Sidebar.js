import React from 'react';

const Sidebar = ({active, setActive}) => {

    // Handle Collapsable Sidebar
    const handleDashboard = () => {
        setActive(!active);
    }

    return (
        <div className={`sidebar ${active ? 'active' : ''}`}>
            <div className="logo_content">
                <div className="logo">
                    <i className='bx bxl-visual-studio' onClick={handleDashboard}></i>
                    <div className="logo_name">Assignment</div>
                </div>
                <i className='bx bx-menu' id="btn" onClick={handleDashboard}></i>
            </div>
            <ul className="nav_list">
                <li>
                    <i className='bx bx-search' onClick={handleDashboard}></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li>
                <li>
                    <a href="/">
                        <i className='bx bx-home' onClick={handleDashboard}></i>
                        <span className="links_name">Task 1</span>
                    </a>
                    <span className="tooltip">Task 1</span>
                </li>
                <li>
                    <a href="/task2">
                        <i className='bx bx-notification' onClick={handleDashboard}></i>
                        <span className="links_name">Task 2</span>
                    </a>
                    <span className="tooltip">Task 2</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-message-square-dots' onClick={handleDashboard}></i>
                        <span className="links_name">Messages</span>
                    </a>
                    <span className="tooltip">Messages</span>
                </li>
                <hr />
                <li>
                    <a href="#">
                        <i className='bx bx-bookmark' onClick={handleDashboard}></i>
                        <span className="links_name">Bookmarks</span>
                    </a>
                    <span className="tooltip">Bookmarks</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-list-ul' onClick={handleDashboard}></i>
                        <span className="links_name">Lists</span>
                    </a>
                    <span className="tooltip">Lists</span>
                </li>
                <li>
                    <a href="/task2">
                        <i className='bx bx-user' onClick={handleDashboard}></i>
                        <span className="links_name">Profile</span>
                    </a>
                    <span className="tooltip">Profile</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
