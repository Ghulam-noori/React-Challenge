const UserInfo = ({ resultInfo, userOnclick, searchUser, warning}) => {
  return (
    <div className='userInp'>
     <form className='search'>
        <input type="text" placeholder="Search for GitHub user" className="form-control" name='input'  onChange={searchUser}/>
        <button onClick={userOnclick} type="submit" className="btn btn-outline-secondary">search</button>        
    </form>

    <p className='warning'>{warning}</p>

    <div className='user-info'>
        <div className="image">
        <img src= {resultInfo.avatar_url} alt={resultInfo.login}/>
        </div>
        <div className="info">
            <p>Name: <span>{resultInfo.login}</span></p>
            <p>Email Address: <span>{resultInfo.email}</span></p>
            <p>Location: <span>{resultInfo.location}</span></p>                 
        </div>              
    </div>
</div>
  )
}

export default UserInfo