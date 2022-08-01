import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import s from './ContactForm.module.css'

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = e => {
        
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    };

    nameInputId = nanoid();
    numberInputId = nanoid()

    render() {
        const {name, number}= this.state
        return (
            
            <form onSubmit={this.handleSubmit} className={s.form}>
                <label htmlFor={this.nameInputId} className={s.formLabel}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleChange}
                    id={this.nameInputId}
                    className={s.input}
                />
                
                <label htmlFor={this.numberInputId} className={s.formLabel}>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleChange}
                    id={this.numberInputId}
                    className={s.input}
                />
                
                <button type="submit" className={s.btn}>Add contact</button>
            </form>
          
        )

    }
   
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};