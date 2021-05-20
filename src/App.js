import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import dataSource from './data/data.js';

const App = ()=> {
  
  const [data,setData]=useState(dataSource);
  const [user,setUser]=useState({});
  const [searchUser,searchUserSet]=useState('');
  const [clickedUser,setClickedUser]=useState('');
  const [preservedData, setPreservedData]=useState(dataSource);
  
  useEffect(()=>{
    const searchedData = dataSource.filter((x)=> x.name.indexOf(searchUser) !== -1)
    setData(searchedData)
  },[searchUser])

  const deleteUser = () =>{
     const currentData = preservedData.filter((x)=>x.name !== user.name)
     setPreservedData(currentData);
     setClickedUser('');
     searchUserSet('');
     setUser('');
     setData(currentData);
  }
 
  return (
    <div className="App">
      <div className="left">
        <div className="input-parent"> 
          <input type='text' onChange={(e)=>searchUserSet(e.target.value)} placeholder="Search user..."/>
        </div>
        <div className="user-parent">
        {
        data.length>0 ? data.map((item, index)=>
        <div className={searchUser.toLowerCase() === item.name.toLowerCase() || clickedUser.toLowerCase() === item.name.toLowerCase()? "selected": "not-selected"  } id={"leftText_"+index} onClick={()=> {
          setUser(item)
          setClickedUser(item.name)
          }}>       
          {item.name}
        </div>
          ) : 
          <div>no user found</div>
        }
        </div>
   
     </div>
     
     <div className="right">
       {user.name?
        <div className="commonRight">
          <div className="delete" onClick={deleteUser}>Delete User</div>
          <p>Name: {user.name}</p>
          <p>E-mail: {user.emailID}</p>
          <p>Mobile-No: {user.mobileno}</p>
          <p>Gender: {user.gender}</p>
          <p>Nationality: {user.nationality}</p>
        </div> : <div className='nothing-to-display'>Nothing to display</div>
        }
     </div>
    </div>
  );
 
}


export default App;
