import React, { Component } from 'react';
import '../css/overview.css';
class Overview extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid content">
                <div className="container overviewbox">
                    <h1 className="titleoverview">Prinicipal</h1>
                    <div className="textoverview">
                        {/* Yb's mission is to use our expertise in business and human behavior to help CEOs, boards, and investors build valuable organizations. We regularly serve those who share our belief that leadership is the ultimate lever for positive change in the world, including the largest private equity firms, leading investment management firms, and highly respected non-profits. */}
                        Expertise in various sectors to assist CEO's....leading industrial firms and highly respected non-profits.
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Overview;