import React from "react";
import "./aboutpage.scss"
class Aboutcomp extends React.Component {

    render() {
        return <div className="aboutpage">
            <div className="container">
                <h2 className="aboutpage__heading">
                    About this Application
                </h2>
                <div className="aboutpage__content-wrapper">
                    <p className="aboutpage__content">
                        I have created this project mainly to understand react component creation and data passing
                    </p>
                    <h5 className="aboutpage__sub-heading">
                        Technologies used are:
                    </h5>
                    <ul className="aboutpage__techlist">
                        <li className="aboutpage__techitem">
                            React
                        </li>
                        <li className="aboutpage__techitem">
                            Firebase Realtime database
                        </li>
                    </ul>
                    <span className="aboutpage__note">
                        <span className="-bold">Note: </span> 
                        since i have used <i>Firebase Realtime database api</i>, it won't have any authentication, so <i>don't enter any sensitive info</i>
                    </span>
                </div>
            </div>
        </div>
    }
}

export default Aboutcomp;