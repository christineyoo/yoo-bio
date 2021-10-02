import userStyles from '../styles/User.module.css'

const UserItem = ({user}) => {
    return (
    <section className={userStyles.card}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
    </section>
    )
}

export default UserItem