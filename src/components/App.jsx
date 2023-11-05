import { Component } from "react";
import { ContactList } from "./contactlist";
import { Filter } from "./filter";
import { ContactForm } from "./contactform";
import { nanoid } from 'nanoid';
import { Container, Head, Head2 } from "./styles/app.styles";


export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',

  }
  
  onSubmitButton = (formValue) => {
    const surchName = this.state.contacts.map(contactName => contactName.name)
    if (surchName.includes(formValue.name)) {
      alert(`${formValue.name} is already in contacts`);
      return
    }
    if (formValue.name === '' || formValue.number === '') {
      alert(`There are empty fields`);
      return
    }
    return this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, {
          ...formValue,
          id: nanoid()
        }]
      }
    }
    )
  };

  changeFilter = (newArrey) => { 
    this.setState({
      filter: newArrey
    })
  };

  deliteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== id)
      }
    })
  };

  
  
  render() {
    const { filter, contacts } = this.state;

    const visibleArreyFilter = contacts.filter(item => {
      const visibleArrey = item.name.toLowerCase().includes(filter.toLowerCase())
      return visibleArrey
    });
    

    return (
      <Container>
     <Head>Phonebook</Head>
     <ContactForm submitButton={this.onSubmitButton} />

     <Head2>Contacts</Head2>
        <Filter filter={filter} change={this.changeFilter} />
        <ContactList items={visibleArreyFilter} onDelite={ this.deliteContact} />
    </Container>
    )
  }
};
