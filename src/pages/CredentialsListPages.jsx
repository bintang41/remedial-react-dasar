import  { useEffect, useState } from 'react';
import CredentialsList from '../components/CredentialsList';

function CredentialsListPages() {
    const [credentials, setcredentials] = useState([]);

    const fetchData = async() => {
        try {
            const response = await fetch("http://localhost:3000/credentials")
            const data = await response.json()

            setcredentials(data)
        } catch (error) {
            
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        <div>
            <h1>Credentials</h1>
            <button>Add</button>
        </div>
        <div>
        {
            credentials.map((_credential, index) => {
                return  <CredentialsList key={index} credential = {credentials} />

            })
        }
        </div>
        </> 
    );
}

export default CredentialsListPages;