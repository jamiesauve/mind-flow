import React from 'react';
import styled from 'styled-components'

const This = styled.div`
flex-grow: 1;

padding: 10px;

background-color: #333;
font-size: 20px;
`

const TableOfContentsList = props => {
  return (
    <This>
      {props.children}
    </This>
  )
};

export default TableOfContentsList;