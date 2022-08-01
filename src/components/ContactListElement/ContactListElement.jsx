import PropTypes from 'prop-types';

export const ContactListElement = ({ name, number, onDeleteBtn }) => {
    return (
        <li>
            {name}: {number}
            <button type="button" onClick={onDeleteBtn}>Delete</button>
        </li >
    )
};

ContactListElement.propTypes = {

    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteBtn: PropTypes.func.isRequired
};