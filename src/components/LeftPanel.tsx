import React from 'react'
import styled from 'styled-components'
import { SFlexCol } from './container/FlexContainer'

const SLeftPanel = styled(SFlexCol)`
    grid-area: left;
    border: 1px solid #dedede;
    height: 100vh;
    align-items: center;
    padding: 0px 25px;
    font-family: Helvetica, sans-serif;
    background-color: white;
`

const SHeading = styled.p`
    font-size: 23px;
    font-weight: 100;

    margin-top: 54px;
    color: #00a89c;
    width: 100%;
    text-align: center;

`

const SList = styled.ul`
    list-style: none;

    width: 100%;
    margin: 50px 0 0 20px;
`
const SListItem = styled.li`
    margin-top: 10px;
    color: #838383;
    font-weight: 200;
    font-size: 0.9rem;
`


const LeftPanel = () => {
  return (
    <SLeftPanel>
        <SHeading>Control Panel</SHeading>
        <SList>
            <SListItem>Option 1</SListItem>
            <SListItem>Option 2</SListItem>
            <SListItem>Option 3</SListItem>
        </SList>
    </SLeftPanel>
  )
}

export default LeftPanel