import React from 'react';

function CredentialsList({credential}) {
    return (
        <>
        <div>
            <ul>
                <li>{credential.id}</li>
                <li>{credential.name}</li>
                <li>{credential.url}</li>
                <li>Username:{credential.username}</li>
                <li>Password:{credential.password}</li>
            </ul>
        </div>
        </>
    );
}

export default CredentialsList;