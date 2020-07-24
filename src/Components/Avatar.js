import React from "react";
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

/*
export default function ContactItem({login}) {
    let imgUrl = "";
    if(login.includes("@")) {
        imgUrl = generator.generateRandomAvatar();
    } else {
    imgUrl=`https://api.adorable.io/avatars/55/${login}.png`;
    }
    return (
        <img src={imgUrl} 
            className="ui mini rounded image" 
            alt="avatar"
            style={{
                marginRight: "1.5em",
            }}/>
    );
  }
*/
export default class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const login = this.props.login;
        console.log(login);
        let imgUrl = "";
        if(login.includes("@")) {
            imgUrl = generator.generateRandomAvatar();
        }
        else {
        imgUrl=`https://api.adorable.io/avatars/55/${login}.png`;
        }
        return (
            <img src={imgUrl} 
                className="ui mini rounded image" 
                alt="avatar"
                style={{
                    marginRight: "1.5em",
                }}/>
        );
    }
}
