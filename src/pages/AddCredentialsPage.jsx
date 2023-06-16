import React from 'react';

function AddCredentialsPage() {
    return (
        <div>
            <form>
                <label htmlFor="name">Nama</label>
                <input type="text" placeholder='Masukan Nama' />
                <br />
                <label htmlFor="url">URL</label>
                <input type="text" placeholder='Masukan URL' />
                <br />
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Masukan Username' />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" placeholder='Masukan Password' />
            </form>
        </div>
    );
}

export default AddCredentialsPage;