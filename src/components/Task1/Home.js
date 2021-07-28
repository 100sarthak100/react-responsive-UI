import React, { useState } from 'react';

const Home = ({ active, setActive }) => {

    const [data, setData] = useState("");
    const [bgColor, setBgColor] = useState("steelblue");

    return (
        <div className={`home_content ${active ? 'active' : ''}`}>
            <div className="main">
                <div className="mainTextInput">
                    <input
                        type="text"
                        placeholder="type here"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
                <div className="mainContent">
                    {
                        data.length > 0 ? (
                            data.split('').map((c, index) => (
                                <div key={index} className="card" style={{backgroundColor: (index+1)%3 === 0 ? bgColor : '#fff'}}>
                                    {c === ' ' ? '-' : c}
                                </div>
                            ))
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
