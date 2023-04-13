import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();

    return (
        <div>
            <p>{phone.name}</p>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;