const Repo = ({ resultRepos }) => {
  return (
    <div className='repo-List'>      
        {resultRepos && resultRepos.map(repo=>(
            <ul className="repos">                
                
                    <li className="repo-name" key={repo.id}><a href={repo.html_url}target='_blank'>{repo.name} </a></li>  

            </ul>   
        ))}
</div>
  )
}

export default Repo