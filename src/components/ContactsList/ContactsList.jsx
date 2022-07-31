

export const ContactsList = ({title, contacts}) => {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {contacts.map((name, id) => {
                    return (
                        <li
                            key={id}>
                            {name}
                        </li>)
                })}
            </ul>
        </>
    )
}