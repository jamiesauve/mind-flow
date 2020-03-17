import React from 'react'

import './app.css';

import { Grommet } from 'grommet';
import styled from 'styled-components'

import TableOfContents from './Containers/TableOfContents'
import Page from './Containers/Page'

const Body = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #888;
`

const theme = {
  global: {

  }
}

function App() {
  return (
    <div className="App">
      <Body>
        <Grommet theme={theme}>
          <TableOfContents />

          <Page>
            {/* <PageMenu>
              
            </PageMenu>
            
            <WritingArea>
              
            </WritingArea> */}
          </Page>
        </Grommet>
      </Body>
    </div>
  )
}

export default App
