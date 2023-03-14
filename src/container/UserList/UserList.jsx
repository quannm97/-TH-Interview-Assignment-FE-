import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setUserList } from '../../redux/actions/actions';

const UserList = () => {
    const dispatch = useDispatch();
    const fetchUser = async () => {
        const response = await axios.get('https://randomuser.me/api/').catch((err)=>{
            console.log(err);
        });
        dispatch(setUserList(response));
    };
    useEffect(() => {
      fetchUser();
    }, []);
    
  return (
    <div>UserList</div>
  )
}

export default UserList