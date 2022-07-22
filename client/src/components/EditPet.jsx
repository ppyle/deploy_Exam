import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

const EditPet = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [pet, setPet] = useState({})
    const [errors, setErrors] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(response=>{
            console.log(response)
            setPet(response.data)
        })
        .catch(err=>{console.log(err)})

    }, []);

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, pet)
        .then(response=>{
            console.log(response)
            if(response.data.error){
                setErrors(response.data.error)
            }
            else{
                navigate('/')
            }
        })

        .catch(err =>{console.log(err)})

    }

    const handleChange = (e) =>{
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} name='name' type="text" value={pet.name} />
                {errors.errors?.name?.message}
                <br />
                <label htmlFor="type">Type</label>
                <input onChange={handleChange} name='type' type="text" value={pet.type} />
                {errors.errors?.type?.message}
                <br />
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} name='description' type="text" value={pet.description} />
                {errors.errors?.description?.message}
                <br />
                <h2>Skills are Optional</h2>
                <label htmlFor="Skill 1">Skill 1</label>
                <input onChange={handleChange} name='skill_1' type="text" value={pet.skill_1} />
                <br />
                <label htmlFor="description">Skill 2</label>
                <input onChange={handleChange} name='skill_2' type="text" value={pet.skill_2} />
                <br />
                <label htmlFor="description">Skill 3</label>
                <input onChange={handleChange} name='skill_3' type="text" value={pet.skill_3} />
                <br />
                <input type="submit" value="Edit Pet" />
            </form>
        </div>
    );
};

EditPet.propTypes = {};

export default EditPet;