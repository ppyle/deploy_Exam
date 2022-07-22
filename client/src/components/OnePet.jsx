import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const OnePet = () => {
    const [pet, setPet] = useState({});
    const [count, setCount] = useState(Number)
    const navigate = useNavigate()
    const {id} = useParams()
        useEffect(() => {
                axios.get(`http://localhost:8000/api/pets/${id}`)
                .then(response=>{
                console.log(response)
                setPet(response.data)
    
                })
                .catch(err=>{console.log(err)})
    
        }, []);
    
        const deletePet = () =>{
            axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(response=>{console.log(response)})
            .catch(err=>{console.log(err)})
            navigate("/")
        }
        
        const likePet = (props) =>{
            if(count == 1){
                return console.log("only 1 like per person dude")
            }
            setCount(count =>{
                return count += 1
            })
        }
    
    
        return (
            <div>
                <h2>Name: {pet.name}</h2>
                <h2>Type: {pet.type}</h2>
                <h2>Description: {pet.description}</h2>
                <h2>Skills:</h2>
                <h2>{pet.skill_1}</h2>
                <h2>{pet.skill_2}</h2>
                <h2>{pet.skill_3}</h2>
                <Link to={`/pets/edit/${pet._id}`}>Edit {pet.name}</Link>
                <button onClick={deletePet}>Adopt {pet.name}</button>
                <button onClick={likePet}>Like {pet.name} {count}</button>
            </div>
        );
    };

OnePet.propTypes = {};

export default OnePet;