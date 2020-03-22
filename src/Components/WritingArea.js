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
  const [currentText, setCurrentText] = useState('');
  
  return (
    <This>
      <Textarea
        autoFocus
        onBlur={props.saveText}
        onChange={e => setCurrentText(e.target.value)}
        value={currentText}
      />
    </This>
  )
};

export default WritingArea;