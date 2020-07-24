import React from "react";

/*
export default function AppHeader() {
    return (
      <div>
        <header className="ui fixed menu">
            <nav className="ui container">
                <a href="#" className="header item">
                User list
                </a>
            <div className="header item">
                <button className="ui button">Add</button>
            </div>
            </nav>
        </header>
      </div>
    );
  }
*/

export default class AppHeader extends React.Component {
  render() {
    return (
      <div>
        <header className="ui fixed menu">
            <nav className="ui container">
                <a href="#" className="header item">
                User list
                </a>
            <div className="header item">
                <button className="ui button">Add</button>
            </div>
            </nav>
        </header>
      </div>
    );
  }
}