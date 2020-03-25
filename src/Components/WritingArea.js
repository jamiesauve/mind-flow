import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import _ from 'lodash'

const This = styled.div`
  flex-grow: 1;

  display: flex;
`

const HiddenInput = styled.textarea`
padding: 10px;
background-color: #222;
height: 100%;
width: 100%;
position: absolute;
z-index: -1000;
opacity: 0;
outline: none;
color: #eee;
font-size: 20px;
`

const TextDisplay = styled.div`
padding: 10px;
background-color: #222;
height: 100%;
width: 100%;
color: #eee;
font-size: 20px;
`

const Span = styled.span`
color: ${props => props.color}
`

const Cursor = styled.span`

`

const WritingArea = props => {
  const hiddenInputRef = useRef(null);  
  const [currentText, setCurrentText] = useState('')
  const [currentTitle, setCurrentTitle] = useState('Title here :)')
  // const [isHiddenInputFocused, setIsHiddenInputFocused] = useState(true)


  useEffect(() => {
    if (currentText.endsWith(';;1')) {
      console.log('label 1')
    }
  }, [currentText])

  const focusHiddenInput = () => {
    hiddenInputRef.current.focus()
  }
 
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

  const labelColors = [
    '#d66',
    '#66d',
    '#6d6',
  ]

  const segments = [
    {
      text: "This is a",
      labelId: 1,
    },
    {
      text: "multicolored",
      labelId: 2,
    },
    {
      text: "sentence.",
      labelId: 3,
    },
  ]

  const getSegments = _.map(segments, segment => {
    return <Span
      color={labelColors[segment.labelId - 1]}
      key={segment.text}
    >
      {`${segment.text} `}
    </Span>
  })

  return (
    <This>
      <TextDisplay
        onClick={focusHiddenInput}
      >
        {getSegments}
        {currentText}
        <Cursor>
          :
        </Cursor>
      </TextDisplay>

      <HiddenInput
        autoFocus
        onBlur={save}
        onChange={e => setCurrentText(e.target.value)}
        ref={hiddenInputRef}
        value={currentText}
      />
    </This>
  )
};

export default WritingArea;