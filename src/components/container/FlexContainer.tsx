import styled from 'styled-components'

export const SReset = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin:0;
`

export const SFlexCol = styled(SReset)`
    display: flex;
    flex-direction: column;


`

export const SFlexRow = styled(SReset)`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    
    
`

export const SFlexRowWrap = styled(SReset)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    
`