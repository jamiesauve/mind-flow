import React, { useState} from 'react';
import styled from 'styled-components'

const This = styled.div`
  flex-grow: 1;

  display: flex;
`

const Textarea = styled.textarea`
padding: 10px;
background-color: #222;
height: 100%;
width: 100%;
outline: none;
color: #eee;
font-size: 20px;
`

const WritingArea = props => {
  const [currentText, setCurrentText] = useState('')
  const [currentTitle, setCurrentTitle] = useState('hello')
  
  const save = () => {
    const fileOperation = 'create'
    const fileName = 'attempt.txt'
    const noteTitle = currentTitle
    const noteBody = currentText
  
    props.saveNote(
      fileOperation,
      fileName,
      noteTitle,
      noteBody,
    )
  }

  return (
    <This>
      <Textarea
        autoFocus
        onBlur={save}
        onChange={e => setCurrentText(e.target.value)}
        value={currentText}
      />
    </This>
  )
};

export default WritingArea;