import React from 'react'
import styled from 'styled-components'

import PageMenu from '../Components/PageMenu'
import WritingArea from '../Components/WritingArea'

const This = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  flex-grow: 1;
`

const Page = props => {
  const saveText = (fileId = null, title = null, body = null) => {
  };

  return (
    <This>
      <PageMenu />
      <WritingArea 
        saveText={saveText}
      />
    </This>
  )
};

export default Page