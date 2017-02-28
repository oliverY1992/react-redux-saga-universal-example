import React,{PropTypes} from 'react';

const Profile = props => {
    const {avatar, login} = props;
    return (
        <div>
            <div>
                <img src={avatar} alt={login}/>
            </div>
            <h3>{login}</h3>
            <div>
                <button>Edit profile</button>
            </div>
        </div>
    )
};

Profile.propTypes = {
    avatar:PropTypes.string,
    login:PropTypes.string.isRequired
};

export default Profile;
