import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import PageMenu from '../Components/PageMenu'
import WritingArea from '../Components/WritingArea'

const This = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  flex-grow: 1;
`

const saveNote = async (fileOperation, fileName, noteTitle, noteBody) => {
  const res = await fetch(
    `http://127.0.0.1:4201/${fileOperation}`,
    {
    method: 'POST',
    body: JSON.stringify({
      fileName,
      noteTitle,
      noteBody,
    }),
    headers: {
      'content-type': 'application/json',
    }
  });
}

const Page = props => {
  const saveText = (fileId = null, title = null, body = null) => {
  };

  return (
    <This>
      <PageMenu />
      <WritingArea 
        saveNote={saveNote}
      />
    </This>
  )
};

export default Page