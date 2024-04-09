// components/SettingsPanel.js
import React from 'react';
import { SFlexCol } from './container/FlexContainer';
import styled from 'styled-components';
import { SHeadingRightPanel } from './styled/SHeading';
import { useEditor } from '@craftjs/core';

const SSettingsPanel = styled(SFlexCol)`
    
    height: 500px;
    width: 100%;

    padding: 20px;
`

const SButton = styled.button`
    height: 50px;
    width: 100%;
    font-size: 1rem;
    margin-top: 10px;

    background-color: #fafafa;
    border: 1px solid #dedede;
    border-radius: 4px;

    color: #00a89c;

    &:hover{
        background-color: #f5f5f5;
        border-color: #00a89c;
    }

    &:active{
        background-color: #ededed;
        border-color: #00e1d2;
    }

    &.wide {
        width: 200px;
    }

    &.right {
        margin-left: auto;
    }
`




export const SettingsPanel = () => {

  const { actions, selected } =  useEditor((state, query) => {
    const [currentNodeId] = state.events.selected
    let selected

    if(currentNodeId){
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable()
      }
    }

    return {
      selected
    }
  })


  return selected ? (
    <SSettingsPanel>
      <SHeadingRightPanel>
        {
          selected.settings && React.createElement(selected.settings)
        }
        {
          selected.isDeletable ? (
            <SButton className={"wide"} onClick={() => {actions.delete(selected.id)}}>Delete</SButton>
          ): null
        }
        
      </SHeadingRightPanel>
    </SSettingsPanel>
  ) : null
}