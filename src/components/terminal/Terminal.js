import React, { Component } from 'react';
import './Terminal.css'

class Terminal extends Component {
    render() {
        const { input } = this.props;
        return (
            <div className="terminal">
                <span className="terminal-prompt">
                    <span className="terminal-username">
                        {`@calbri`}
                    </span>
                    <span className="terminal-username-end">
                        <span className="terminal-arrow">{` `}</span>
                    </span>
                    <span className="terminal-directory">
                        {`/home/portfolio`}
                    </span>
                    <span className="terminal-directory-end">
                        <span className="terminal-arrow">{` `}</span>
                    </span>
                </span>
                <span className="terminal-input">
                    {input}
                </span>
            </div>
        );
    }
}

export default Terminal;
