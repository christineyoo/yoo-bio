import styles from '../styles/Home.module.css';
import UserList from '../components/UserList'

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <h1>Acme Technologies</h1>
      <UserList users={users} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  return {
    props: {
      users
    }
  };
};

//user
  //address
  //company
  //email
  //id
  //name
  //phone
  //username
  //website