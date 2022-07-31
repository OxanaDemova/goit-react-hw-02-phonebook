import { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "./Container/Container";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''

  }

  formSubmitHandler = data => {
    console.log(data);
  }
  
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
        />
        <h2>Contacts</h2>
        {/* <ContactsList
          title={'Contacts'}
          id={this.nameId} /> */}
        
      </Container>

    )
  }

}
