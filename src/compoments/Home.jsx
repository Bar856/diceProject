import Container from 'react-bootstrap/Container';
import React from 'react'
import First from './First'
import MyNavabr from './MyNavabr'
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <MyNavabr/>
      <Container>
          <First/>
          <Contact/>
      </Container>
    </>
  )
}
