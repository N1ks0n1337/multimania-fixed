import React from 'react'
import styled from 'styled-components'
import { Container, Wrapper, Text } from './Title.elements'


const Title = (props) => {
  return (
    <Container>
      <Wrapper>
        <Text>{props.children}</Text>
     </Wrapper>
    </Container>
  )
}

export default Title