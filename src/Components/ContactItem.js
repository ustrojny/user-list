import React from "react";
import Avatar from "./Avatar";


//Stateless functional component 
/*
export default function ContactItem({ login, name, department }) {
    return (
      <div className="item" style={{listStyleType: "none"}}>
        <Avatar login={login} />
        <div className="content">
          <h4 className="header">{name}</h4>
          <div className="description">{department}</div>
        </div>
      </div>
    );
  }
*/

//Class component
export default class ContactItem extends React.Component {
  render() {
    const {login, name, department} = this.props;
    return (
      <div className="item" style={{listStyleType: "none"}}>
        <Avatar login={login} />
        <div className="content">
          <h4 className="header">{name}</h4>
          <div className="description">{department}</div>
        </div>
      </div>
    )
    }

}