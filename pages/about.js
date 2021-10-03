import aboutStyles from '../styles/About.module.css'
import {useState} from 'react'

const About = ({depts}) => {
    const [departmentName, setDepartmentName] = useState('')
    const [departmentDescription, setDepartmentDescription] = useState('')

    const submitDepartment = async () => {
        const response = await fetch(`http://localhost:8000/api/departments`, {
            method: 'POST',
            body: JSON.stringify({ name: departmentName, description: departmentDescription }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    return (
    <>
    <h1>This is About Departments</h1>
    <form>
        <label>Department Name</label>
        <input type='text' value={departmentName} onChange={e => setDepartmentName(e.target.value)} />
        <br />
        <label>Department Description</label>
        <input type='text' value={departmentDescription} onChange={e => setDepartmentDescription(e.target.value)} />
        <br />
        <button onClick={submitDepartment}>Submit</button>
    </form>
    
    {depts.map(dept => {
        return (
            <article key={dept.id}>
                <section>
                    <h2>{dept.name}</h2>
                    <p>{dept.description}</p>
                </section>
            </article>
        )
    })}
    </>)
}

export default About

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:8000/api/departments`);
    const depts = await res.json();
  
    return {
      props: {
        depts
      }
    };
  };