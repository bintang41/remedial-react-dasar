import React from 'react';

function CredentialsList({credential}) {
    return (
        <div>
            <table>
                <thead>
                    <th>Number</th> <br />
                    <th>Name</th> <br />
                    <th>URL</th> <br />
                    <th>Username</th><br />
                    <th>Password</th>
                </thead>
                <tbody>
                    <tr key={index}>
                        <td>{credential.id + 1}</td>
                        <td>{credential.name}</td>
                        <td>{credential.url}</td>
                        <td>{credential.username}</td>
                        <td>{credential.password}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CredentialsList;