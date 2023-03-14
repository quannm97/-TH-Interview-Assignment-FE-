import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useBeforeUnload } from 'react-router-dom';
import { setUser } from '../../redux/actions/actions';

const User = () => {
  const userResults= useSelector((state)=>state.users.users.results[0]);

  const {gender,email,phone,cell}= userResults;

  const dispatch = useDispatch();
    const fetchUser = async () => {
        const response = await axios.get('https://randomuser.me/api/').catch((err)=>{
            console.log(err);
        });
        dispatch(setUser(response.data));
    };
    useEffect(() => {
      fetchUser();
    }, []);
    
    const handlleBtn=()=>{
      fetchUser();
    }
  return (
    <div>
      <button onClick={handlleBtn}>
        user
      </button>
      <div>
        gender:{gender}
      </div>
      <div>
        email:{email}
      </div>
      <div>
        phone:{phone}
      </div>
    </div>
  )
}

export default User