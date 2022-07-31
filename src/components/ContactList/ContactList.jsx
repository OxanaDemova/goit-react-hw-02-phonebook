import { ContactListElement } from "components/ContactListElement/ContactListElement"

export const ContactList = ({contacts, onDeleteContact}) => {
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
}