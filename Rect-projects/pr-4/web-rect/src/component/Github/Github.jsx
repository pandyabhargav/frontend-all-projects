import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState({ followers: 0, avatar_url: '' });

    useEffect(() => {
        fetch('https://api.github.com/users/pandyabhargav')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    );
}

export default Github;
