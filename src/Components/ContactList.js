import React from "react";
import ContactItem from "./ContactItem"

/*
export default function ContactList() {
    return (
      <div className="ui relaxed divided list selection">
        <ContactItem
          login="typeofweb1@gmail.com"
          name="Lena"
          department="JavaScript Developer"
        />
        <ContactItem
          login="t@ypeofweb2"
          name="Brian"
          department="Human Resources"
        />
        <ContactItem
          login="typeofweb3@"
          name="Rick"
          department="QA"
        />
      </div>
    );
  }
  */

  export default class ContactList extends React.Component {
    render() {
      return (
        <div className="ui relaxed divided list selection">
          <ContactItem
            login="typeofweb1@gmail.com"
            name="Lena"
            department="JavaScript Developer"
          />
          <ContactItem
            login="t@ypeofweb2"
            name="Brian"
            department="Human Resources"
          />
          <ContactItem
            login="typeofweb3@"
            name="Rick"
            department="QA"
          />
        </div>
      );
    }
  }