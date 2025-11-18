// component/PersonalInfo

function PersonalInfo(){
    const name = "Sharayu Yeole";
    const role = "FullStack Developer";
    const location = "Pune,Maharashtra";
    const email = "sharayuyeole38@gmai.com";

    return(
        <div className="personal-info">
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
            <p className="location">{location}</p>
            <p className="email">{email}</p>
        </div>
    )
}

export default PersonalInfo;