import PropTypes from 'prop-types';
import { ContactListElement } from "components/ContactListElement/ContactListElement"

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
            
        <ul>
            {contacts.map(({ name, id, number }) => {

                return (
                    <ContactListElement
                        key={id}
                        name={name}
                        number={number}
                        onDeleteBtn={() => onDeleteContact(id)}
                    />
                )
            })}
        </ul>
        
    )
};

ContactList.propTypes = {

    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func.isRequired
};