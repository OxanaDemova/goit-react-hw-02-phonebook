import PropTypes from 'prop-types';
import s from './ContactListElement.module.css'

export const ContactListElement = ({ name, number, onDeleteBtn }) => {
    return (
        <li className={s.item}>
            {name}: {number}
            <button type="button" onClick={onDeleteBtn} className={s.btn}>Delete</button>
        </li >
    )
};

ContactListElement.propTypes = {

    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteBtn: PropTypes.func.isRequired
};