import React from 'react';
import { useSelector } from 'react-redux'

// import { Container } from './styles';

function Home() {
   const selector = useSelector(state => state.listState);

  return (
    <p>
      Nome: {selector.name}
    </p>
  )
}

export default Home;