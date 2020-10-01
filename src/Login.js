import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from './redux/actions'
import { useHistory } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');

  const handle = () => {
    dispatch(Actions.addName(name))
    history.push("/Home")
  }

  return (
    <>
      <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={handle} >Enviar</button>
    </>
  );
}

export default Login;