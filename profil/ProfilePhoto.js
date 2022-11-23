import './rofilePhoto.css';
import React from 'react';
import pro from './image/pro.png';

function ProfilePhoto() {

    return (

        <div>
            <img src={pro} alt='pro' className='pro' />
        </div>
    )

}
export default ProfilePhoto;
