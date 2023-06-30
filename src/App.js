import React,{ useState } from 'react';
import axios from 'axios'
import Header from './components/Header';
import Users from './components/Users';
import Repo from './components/Repo';
import '../src/components/App.css'

const App =() => {
  const [input, setInput] = useState('');
  const [warning, setWarning] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [resultInfo, setResultInfo] = useState([]);
  const [resultRepos, setResultRepos] = useState([]);
  const clientId = 'Iv1.33ce585df4a2bb1f';
  const clientSecret = 'cb7b506f261616b72afca890ec1e79976e59c80f';

  const userOnclick = (e) => {
    e.preventDefault();
    input === '' ? setWarning(`Please write a GitHub username`)
      : axios.get(`https://api.github.com/users/${input}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
          .then(res => {
            setResultInfo(res.data);
            setUserName('');
            setEmail('');
            setLocation('');
          })
          .catch((err) => {
            console.log('err', err);
          });

        axios.get(`https://api.github.com/users/${input}/repos?client_id=${clientId}&client_secret=${clientSecret}&sort=created&sort=created`)
            .then(result => {
              setResultRepos(result.data);
              })
            .catch((err) => console.log(err));
  }
    
  

  const searchUser = (event) => {
    setInput(event.target.value);
    setWarning('');
  };

  return (
    <div className="App">
      <Header />
      <Users  userOnclick={userOnclick}  warning={warning} input={input} email={email}  resultInfo={resultInfo} locate={location} Name={userName}  searchUser={searchUser}/>
      <Repo resultRepos={resultRepos}/>
    </div>
  );
}

export default App;
