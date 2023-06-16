import  { useEffect, useState } from 'react';
import CredentialsList from '../components/CredentialsList';
import {useNavigate} from 'react-router-dom';

function CredentialsListPages() {
    const navigate = useNavigate()
    
    const [credentials, setcredentials] = useState([]);

    const fetchData = async() => {
        try {
            const response = await fetch("http://localhost:3366/credentials")
            const data = await response.json()

            setcredentials(data)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    const handleClickButton =(e) => {
        e.preventDefault();

        navigate("/credentials/add")
    }

    return (
        <>
        <div>
            <h1>Credentials</h1>
            <button onClick={handleClickButton}>Add</button>
        </div>
        {credentials.length > 0 && credentials.map((credential, index) =>{
            return <CredentialsList key={index} credential={credential}/>
        })}
        
        </> 
    );
}

export default CredentialsListPages;