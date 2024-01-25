/* eslint import/no-webpack-loader-syntax: off */

import React, { useEffect, useState } from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import ProgressBar from "@ramonak/react-progress-bar";
import { LineChart } from '@mui/x-charts/LineChart';

const DashBoardContent = () => {
    const [plt, setPlt] = useState(null);
    const [plt1, setPlt1] = useState(null);
    const [plt2, setPlt2] = useState(null);
    const [plt3, setPlt3] = useState(null);
    const [plt4, setPlt4] = useState(null);
    const [plt5, setPlt5] = useState(null);
    const [plt6, setPlt6] = useState(null);
    const [plt7, setPlt7] = useState(null);
    const [plt8, setPlt8] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const importHtml = async () => {

            try {
                setLoading(true);
                const htmlModule = await import('!raw-loader!../../../Common/images/tweet_length_variation.html');
                const htmlModule1 = await import('!raw-loader!../../../Common/images/20_most_frequent_negative_hashtags.html');
                const htmlModule2 = await import('!raw-loader!../../../Common/images/wordCloud_vocabulary_from_reviews.html');
                const htmlModule3 = await import('!raw-loader!../../../Common/images/tweets_distribution.html');
                const htmlModule4 = await import('!raw-loader!../../../Common/images/positive_vs_negative_plot.html');
                const htmlModule5 = await import('!raw-loader!../../../Common/images/20_most_frequent_neutral_hashtags.html');
                const htmlModule6 = await import('!raw-loader!../../../Common/images/negative_words.html');
                const htmlModule7 = await import('!raw-loader!../../../Common/images/most_frequently_occurring_words.html');
                const htmlModule8 = await import('!raw-loader!../../../Common/images/tweet_length_variation.html');

                setPlt(htmlModule.default);
                setPlt1(htmlModule1.default);
                setPlt2(htmlModule2.default);
                setPlt3(htmlModule3.default);
                setPlt4(htmlModule4.default);
                setPlt5(htmlModule5.default);
                setPlt6(htmlModule6.default);
                setPlt7(htmlModule7.default);
                setPlt8(htmlModule8.default);
                setLoading(false);
            } catch (e) {
                console.error("Error loading plots:", error);
                setLoading(false);
            }

        };

        importHtml();
    }, []);
    return (
        <>
            <p>Welcome to X-Mentor</p>
            <div className="plots">
                <div className="line-plot">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        plt2 && (
                            <iframe
                                className="iframe"
                                srcDoc={plt2}
                                sandbox="allow-scripts allow-same-origin"
                                width="480"
                                height="468">
                            </iframe>
                        )
                    )}
                </div>
                {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div className="summary" style={{ backgroundColor: 'white', width: '480px', marginLeft: '-2em', marginTop: '.5em', height: "448px" }}>
                        <h3>Summary</h3>
                        <div className="progress-circles">
                            <div className="progress-circle">
                                <h3>Positive</h3>
                                <ProgressBar
                                    completed={80}
                                    className="wrapper-1"
                                />
                            </div>
                            <div className="progress-circle">
                                <h3>Negative</h3>
                                <ProgressBar
                                    completed={60}
                                    className="wrapper-1"
                                />
                            </div>
                            <div className="progress-circle">
                                <h3>Neutral</h3>
                                <ProgressBar
                                    completed={30}
                                    className="wrapper-1"
                                />
                            </div>
    
                            <div className="legend">
                                <><div className="positive"></div><p>Positive</p></>
                                <><div className="negative"></div><p>Negative</p></>
                                <><div className="neutral"></div><p>Neutral</p></>
                            </div>                     </div>
                        <div className="wordy-summary"></div>
    
                    </div>
                    )}

            </div>
            <div className="plots" style={{ marginTop: '-.5em' }}>
                <div className="line-plot">
                {loading ? (
                        <div>Loading...</div>
                    ) : (plt6 && (
                        <iframe
                            className="iframe"
                            srcDoc={plt6}
                            sandbox="allow-scripts allow-same-origin"
                            width="480"
                            height="468">
                        </iframe>
                    ))}
                </div>
                <div className="summary">
                    <div className="progress-circles">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (plt3 && (
                            <iframe
                                className="iframe"
                                srcDoc={plt3}
                                sandbox="allow-scripts allow-same-origin"
                                width="480"
                                height="468">
                            </iframe>
                        ))}
                    </div>
                    <div className="wordy-summary"></div>

                </div>
            </div>
            <div className="plots" style={{ marginTop: '-.5em' }}>
                <div className="line-plot">
                {loading ? (
                        <div>Loading...</div>
                    ) : (plt && (
                        <iframe
                            className="iframe"
                            srcDoc={plt}
                            sandbox="allow-scripts allow-same-origin"
                            width="480"
                            height="468">
                        </iframe>
                    ))}
                </div>
                <div className="summary">
                    <div className="progress-circles">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (plt3 && (
                            <iframe
                                className="iframe"
                                srcDoc={plt3}
                                sandbox="allow-scripts allow-same-origin"
                                width="480"
                                height="468">
                            </iframe>
                        ))}
                    </div>
                    <div className="wordy-summary"></div>

                </div>
            </div>
            <div className="plots" style={{ marginTop: '8em' }}>
                <div className="line-plot-1">
                {loading ? (
                        <div>Loading...</div>
                    ) : (plt1 && (
                        <iframe
                            className="iframe"
                            srcDoc={plt1}
                            sandbox="allow-scripts allow-same-origin"
                            width="480"
                            height="468">
                        </iframe>
                    ))}
                </div>
                <div className="plots">
                    <div className="line-plot" style={{ width: '400px', marginTop: '-11em', marginLeft: '-2em' }}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (plt5 && (
                            <iframe
                                className="iframe"
                                srcDoc={plt5}
                                sandbox="allow-scripts allow-same-origin"
                                width="480"
                                height="468">
                            </iframe>
                        ))}
                    </div>
                </div>
            </div>
            <span></span>
            <span></span>
            <div className="plots" style={{ marginTop: '8em' }}>
                <div className="line-plot-1">
                {loading ? (
                        <div>Loading...</div>
                    ) : (plt4 && (
                        <iframe
                            className="iframe"
                            srcDoc={plt4}
                            sandbox="allow-scripts allow-same-origin"
                            width="480"
                            height="468">
                        </iframe>
                    ))}
                </div>
                <div className="plots">
                    <div className="line-plot" style={{ width: '400px', marginTop: '-11em', marginLeft: '-2em' }}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (plt7 && (
                            <iframe
                                className="iframe"
                                srcDoc={plt7}
                                sandbox="allow-scripts allow-same-origin"
                                width="480"
                                height="468">
                            </iframe>
                        )
                    )}
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2024 X-Mentor. All rights reserved.</p>
            </footer>
        </>
    )
}

export default DashBoardContent