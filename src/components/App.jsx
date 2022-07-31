import { Component } from "react";
import { nanoid } from "nanoid";
import { Container } from "./Container/Container";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }

  nameId = nanoid();
  
  render() {
    return (
      <Container>
        <Form
           />
        {/* <ContactsList
          title={'Contacts'}
          id={this.nameId} /> */}
        
      </Container>

    );
  }

};
