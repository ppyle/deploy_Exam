import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AllPets = () => {
    let[pets, setPets] = useState([])
    let [change, setChange] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
        .then(response=>{
            console.log(response)
            setPets(response.data)
        })
        .catch(err =>{console.log(err)})
    },[])



    return (
        <div>
            <h1>list of pets</h1>
            <h2><Link to={'/pets/new'}>Add a Pet</Link></h2>
            {
                pets.map((pet, i)=>{
                    return(
                        <>
                            <h2>{pet.name}</h2>
                            <h2>{pet.type}</h2>
                            <Link to={`/pets/${pet._id}`}>details</Link>
                            <Link to={`/pets/edit/${pet._id}`}>Edit {pet.name}</Link>

                        </>

                    )
                })
            }
        </div>
    );
};
AllPets.propTypes = {};

export default AllPets;