import React, { Component } from 'react'
import './wellcome.css';

export default class Wellcome extends Component {
    render() {
        return (
            <div className="content-part">
                <div className="under-content-part">
                    <h2>Welcome to the Mercedes-Benz international<br /> website.</h2>
                    <p>Exclusive reports and current films: experience a broad range of topics from the <br />fascinating world of Mercedes-Benz. To find out about offers in your location, please<br /> go to the local Mercedes-Benz website.
                    </p>
                    <p>This is the International website of Mercedes-Benz AG.<br /> Visitors from the U.S., please visit our U.S. website <a href="www.mbusa.com">www.mbusa.com.</a></p>
                    <button>Bring me to my local website</button>
                </div>

            </div>
        )
    }
}
