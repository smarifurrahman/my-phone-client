import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <p>All Phones Here: {phones.length}</p>
            <div>
                {
                    phones.map(phone => <li key={phone.id}>
                        <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                    </li>)
                }
            </div>
        </div>
    );
};

export default Phones;