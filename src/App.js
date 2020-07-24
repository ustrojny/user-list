import React from "react";
import AppHeader from './Components/AppHeader';
import ContactList from './Components/ContactList'

// stateless functional component
/*
export default function App() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container" 
        style={{
            marginTop: "5em",
        }}>
          <ContactsList />
        </main>
      </div>
    );
  }
*/

//class component
export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container" 
        style={{
            marginTop: "5em",
        }}>
          <ContactList />
        </main>
      </div>
    );
  }
}