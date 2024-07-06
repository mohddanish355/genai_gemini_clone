import React, { useContext } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {

    const { onSent, setPrevPrompts, setRecentPrompt, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className="main">
            <div className="nav">
                <p>DialogGem</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div onClick={() => {
                                const para = "What are some must-see beautiful places for a road trip?";
                                setInput(para);
                                onSent(para);
                                setPrevPrompts(prev => [...prev, para])
                                setRecentPrompt(input)
                            }} className="card">

                                <p>What are some must-see beautiful places for a road trip?</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div onClick={() => {
                                const para = "Briefly summarize this concept: urban planning";
                                setInput(para);
                                onSent(para);
                                setPrevPrompts(prev => [...prev, para])
                                setRecentPrompt(input)
                            }} className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div onClick={() => {
                                const para = "Brainstorm team bonding activities for our work retreat";
                                setInput(para);
                                onSent(para);
                                setPrevPrompts(prev => [...prev, para])
                                setRecentPrompt(input)
                            }} className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div onClick={() => {
                                const para = "Improve the readability of the following code";
                                setInput(para);
                                onSent(para);
                                setPrevPrompts(prev => [...prev, para])
                                setRecentPrompt(input)
                            }} className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }



                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" onKeyDown={(e) => {
                            if (e.key === 'Enter' && input) {
                                onSent();
                            }
                        }} />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        DialogGem may display inaccurate info, including about people, so double check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main