import React, { useState } from 'react';
import { Carousel } from 'antd';
import { ColorExtractor } from 'react-color-extractor'
import Video from "./Video";
import './style.css';
import 'antd/dist/antd.css';

const Task2 = ({ active, setActive }) => {

    const [colors, setColors] = useState([]);

    const getColors = (colors) => {
        setColors(colors)
    }

    const contentStyle = {
        height: '160px',
        lineHeight: '160px',
        textAlign: 'center',
    };

    // Get brightness value of the background image
    const getBrightness = (hexcolor) => {
        if (hexcolor === undefined)
            hexcolor = "#f4f4f4"
        hexcolor = hexcolor.replace("#", "");
        var r = parseInt(hexcolor.substr(0, 2), 16);
        var g = parseInt(hexcolor.substr(2, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var val = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return val;
    }

    return (
        <div className={`home_content ${active ? 'active' : ''}`}>
            <div className="main">
                <div className="carousal">
                    <Carousel autoplay autoplaySpeed="10">
                        <div className="container">
                            <ColorExtractor getColors={getColors} >
                                <img
                                    src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                                    style={{ width: "100%", height: 300, alignSelf: 'center' }}
                                />
                            </ColorExtractor>
                            <h1 className="centered" style={{
                                ...contentStyle,
                                fontWeight: 'bold',
                                color: getBrightness(colors[2]) > 125 ? "black" : 'white'
                            }}>This text changes color dynamically</h1>
                        </div>
                        <div className="container">
                            <ColorExtractor getColors={getColors} >
                                <img
                                    src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                    style={{ width: "100%", height: 300, alignSelf: 'center' }}
                                />
                            </ColorExtractor>
                            <h1 className="centered" style={{
                                ...contentStyle,
                                fontWeight: 'bold',
                                color: getBrightness(colors[2]) > 100 ? "#fff" : '#000'
                            }}>This text changes color dynamically</h1>
                        </div>
                        <div className="container">
                            <ColorExtractor getColors={getColors} >
                                <img
                                    src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=827&q=80"
                                    style={{ width: "100%", height: 300, alignSelf: 'center' }}
                                />
                            </ColorExtractor>
                            <h1 className="centered" style={{
                                ...contentStyle,
                                fontWeight: 'bold',
                                color: getBrightness(colors[2]) > 100 ? "#fff" : '#000'
                            }}>This text changes color dynamically</h1>
                        </div>
                        <div className="container">
                            <ColorExtractor getColors={getColors} >
                                <img
                                    src="https://images.unsplash.com/photo-1526991902737-3cd476541629?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                                    style={{ width: "100%", height: 300, alignSelf: 'center' }}
                                />
                            </ColorExtractor>
                            <h1 className="centered" style={{
                                ...contentStyle,
                                fontWeight: 'bold',
                                color: getBrightness(colors[2]) > 100 ? "#fff" : '#000'
                            }}>This text changes color dynamically</h1>
                        </div>
                        <div className="container">
                            <ColorExtractor getColors={getColors} >
                                <img
                                    src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                                    style={{ width: "100%", height: 300, alignSelf: 'center' }}
                                />
                            </ColorExtractor>
                            <h1 className="centered" style={{
                                ...contentStyle,
                                fontWeight: 'bold',
                                color: getBrightness(colors[1]) > 100 ? "#fff" : '#000'
                            }}>This text changes color dynamically</h1>
                        </div>
                    </Carousel>
                </div>
                <div className="task2Main">
                    Main content goes here
                </div>

            </div>
            <div className="video">
                <Video embedId="hQAHSlTtcmY" />
            </div>
        </div>
    )
}

export default Task2
