import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
    let [formInfo, setFormInfo] = useState({})
    let [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", formInfo)
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


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} name='name' type="text" />
                    {errors.errors?.name.message}

                
                <br />
                <label htmlFor="type">Type</label>
                <input onChange={handleChange} name='type' type="text" />
                {errors.errors?.type.message}
                <br />
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} name='description' type="text" />
                {errors.errors?.description.message}
                <br />
                <h2>Skills are Optional</h2>
                <label htmlFor="Skill 1">Skill 1</label>
                <input onChange={handleChange} name='skill_1' type="text" />
                <br />
                <label htmlFor="description">Skill 2</label>
                <input onChange={handleChange} name='skill_2' type="text" />
                <br />
                <label htmlFor="description">Skill 3</label>
                <input onChange={handleChange} name='skill_3' type="text" />
                <br />
                <input type="submit" value="Add Pet" />
            </form>
        </div>
    );
};

AddPet.propTypes = {};

export default AddPet;