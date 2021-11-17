import React, { Component } from 'react'
import './columncontent.css';

export default class Columncontent extends Component {
    render() {
        return (
            <div className="four-column-boxes">
        <div className="under-four-column-boxes-second-border">
            <div className="under-four-column-box">
                <div className="box-heading">More Topics</div>
                <hr/>
                <div className="box-content">
                    <ul>
                        <li> <a href="">Innovation</a></li>
                        <li><a href="">Design</a></li>
                        <li><a href="">Exhibitions</a></li>
                        <li><a href="">Museum & History</a></li>
                        <li><a href="">Sports</a></li>
                        <li><a href="">Driving Events</a></li>
                        <li><a href="">Mercedes me portal</a></li>
                    </ul>
                </div>
            </div>
            <div className="under-four-column-box">
                <div className="box-heading">Shopping</div>
                <hr/>
                <div className="box-content">
                    <ul>
                        <li> <a href="">Dealer Search</a></li>
                        <li><a href="">Mercedes-Benz Accessories</a></li>
                        <li><a href="">Mercedes-Benz Collection</a></li>
                        <li><a href="">Mercedes me connect Store</a></li>
                        <li><a href="">Service & Parts</a></li>
                        <li><a href="">Formula 1 store</a></li>
                        <li><a href="">Mercedes-Benz Classic Center</a></li>
                    </ul>
                </div>
            </div>
            <div className="under-four-column-box">
                <div className="box-heading">All about cars</div>
                <hr/>
                <div className="box-content">
                    <ul>
                        <li><a href="">Model Overview</a> </li>
                        <li><a href="">Configurator</a> </li>
                        <li><a href="">Test Drive</a> </li>
                        <li><a href="">Mercedes-Mybach</a> </li>
                        <li><a href="">Mercedes me connect</a> </li>
                        <li><a href="">Mercedes-Benz Ex-Factory Driving Aids</a> </li>
                        <li><a href="">WLTP</a> </li>
                        <li><a href="">RDE</a> </li>
                        <li><a href="">Semiconductors supply situation</a> </li>
                        <li><a href="">Li-Ion U38.3</a> </li>
                    </ul>
                </div>
            </div>
            <div className="under-four-column-box">
                <div className="box-heading">Discover more</div>
                <hr/>
                <div className="box-content">
                    <ul>
                        <li><a href="">Daimler AG</a> </li>
                        <li><a href="">Mercedes-Benz AG</a> </li>
                        <li><a href="">Newsroom</a> </li>
                        <li><a href="">Press</a> </li>
                        <li><a href="">Career</a> </li>
                        <li><a href="">heycar</a> </li>
                        <li><a href="">SHARE NOW</a> </li>
                        <li><a href="">Vulnerability Reporting Policy</a> </li>
                        <li><a href="">Mercedes-Benz Energy</a> </li>
                        <li><a href="">Mercedes-Benz Bank</a> </li>
                        <li><a href="">Fleet Sales</a> </li>
                        <li><a href="">Mercedes-Benz Global Training</a> </li>
                        <li><a href="">Customer Center Sindelfingen</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
