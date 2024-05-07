// components/Topbar.js
import React from "react";
import styled from 'styled-components'
import { SFlexRow } from "./container/FlexContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faTabletAlt, faDesktopAlt } from "@fortawesome/free-solid-svg-icons";
import { useEditor } from "@craftjs/core";

const STopbar = styled(SFlexRow)`
    height: 80px;
    align-items: center;
    grid-area: header;
    padding: 10px;
    border: 1px solid #dedede;
    border-left: none;
    gap: 10px;
    background-color: white;
`
const SButton = styled.button`
    height: 50px;
    width: 40px;

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

const SIcon = styled(FontAwesomeIcon)`
    font-size: 1.1rem;
    color: #00a89c;
`

export const Topbar = ({ setDeviceType }: any) => {

    const { actions, query, enabled } = useEditor((state: any) => ({
        enabled: state.options.enabled
    }))

    const handleExport = () => {
        console.log("Export: " , query.serialize())
    }

    return (
        <STopbar>
            <SButton onClick={() => setDeviceType("DESKTOP")}><SIcon icon={faDesktopAlt} /></SButton>
            
            <SButton onClick={() => setDeviceType("TABLET")}><SIcon icon={faTabletAlt} /></SButton>

            <SButton onClick={() => setDeviceType("MOBILE")}><SIcon icon={faMobileAlt} /></SButton>
            
            <SButton className="wide right" onClick={handleExport}>Export</SButton>

        </STopbar>
    )
};