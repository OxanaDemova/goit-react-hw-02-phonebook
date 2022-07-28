import { Component } from "react";
import { Container } from "./Container/Container";
import { Phonebook } from "./Phonebook/Phonebook";


export class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  render() {
    return (
      <Container>
        <Phonebook
        title={'Phonebook'}/>
      </Container>

    );
  }

};
