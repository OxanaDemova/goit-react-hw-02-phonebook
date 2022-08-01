import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
    
    return (
        <label>
            Find contacts by name
            <input type="text" value={value} onChange={onChange} className={s.input}></input>
        </label>
            
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};