import React from 'react'
import styled from 'styled-components'
import { SFlexCol } from './container/FlexContainer'
import { Toolbox } from './Toolbox'
import { SettingsPanel } from './SettingsPanel'

const SRightPanel = styled(SFlexCol)`
    grid-area: right;
    height: 100%;
    border-left: 1px solid #dedede;
    gap: 30px;
    background-color: white;
    overflow-y: scroll;


`

const RightPanel = () => {
    return (
        <SRightPanel>
            <Toolbox />
            <SettingsPanel />
        </SRightPanel>
    )
}

export default RightPanel