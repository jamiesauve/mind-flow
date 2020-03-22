import React from 'react'

import './app.css';

import { Grommet } from 'grommet';
import styled from 'styled-components'

import TableOfContents from './Containers/TableOfContents'
import Page from './Containers/Page'

const This = styled.section`
  display: flex;
  flex-direction: row;  

  width: 100vw;
  height: 100vh;

  background-color: #222;
  color: #eee;
  font-family: sans-serif;
`

const theme = {
  global: {
  },
}

function App() {
  return (
    <div className="App">
      <Grommet theme={theme}>
        <This>
            <TableOfContents />
            <Page />
        </This>
      </Grommet>
    </div>
  )
}

export default App
