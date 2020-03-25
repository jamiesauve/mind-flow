import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import _ from 'lodash'

import TableOfContentsMenu from '../Components/TableOfContentsMenu'
import TableOfContentsList from '../Components/TableOfContentsList'

const This = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;

  border-right: 1px solid #0df;
`

const ListNote = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #df0;
  padding: 10px 0;
  
`


const getAllNotes = () => {
  return axios(
    {
      url: `http://127.0.0.1:4201/allNotes`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }).then((allNotes) => {
    return allNotes.data;
  })
}


const TableOfContents = props => {
  const [isExpanded, setExpanded] = useState(true);
  const [allNotes, setAllNotes] = useState([])
  
  useEffect(() => {
    const loadNotes = async () => {
      setAllNotes(await getAllNotes())
    }
    loadNotes()
  }, [])

  return (
    <This className = "TableOfContents">
        <TableOfContentsMenu>
          Table Of Contents Menu
        </TableOfContentsMenu>

        <TableOfContentsList>
          {
            _.map(allNotes, note => {
              return (
                <ListNote
                  key={note.title}
                >
                  {note.title}
                </ListNote>
              )
            })
          }
          <button onClick={() => console.log('allNotes', allNotes)}>See the notes</button>
        </TableOfContentsList>
    </This>
  )
};

export default TableOfContents;