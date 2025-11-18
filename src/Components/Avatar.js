// component/Avatar.js
import profilePic from "../assets/Sharayu Portfolio.png";

function Avatar(){
    return(
        <div className="avatar-container">
            <img src={profilePic} alt="Profile" className="avatar-Image"/>
            <div className="avatar-border"></div>

        </div>
    )
}

export default Avatar;
