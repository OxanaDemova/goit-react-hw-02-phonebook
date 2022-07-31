
export const ContactListElement = ({ name, number, onDeleteBtn}) => {
    return (
        <li>
            {name}: {number}
            <button type="button" onClick={onDeleteBtn}>Delete</button>
        </li >
    )
}