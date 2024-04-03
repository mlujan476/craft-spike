import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { SFlexCol } from '../container/FlexContainer'
import { Editor, Element, Frame, useNode } from '@craftjs/core'
import Container from '../container/Container'
import ImageContainer from './ImageContainer'
import ContentEditable from 'react-contenteditable'

const SContainer = styled(SFlexCol)`

    
    position: relative;
    align-items: center;
    justify-content: center;
    max-height: 300px;
    overflow: hidden;

`



const SDropZone = styled.input`
    height: 100%;
    width:100%;
    justify-content: center;
    align-items: center;

    
`

const SDzHeading = styled.p`
    font-size: 1rem;

`

const SImagePreview = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const ImageDropzone = () => {

    const { connectors: { connect, drag }, actions: { setProp } } = useNode();
    const [image, setImage] = useState<any>(null)

    //Boolean State
    const [isDragOver, setIsDragOver] = useState<boolean>(false)


    useEffect(() => {
        console.log("Is Over: ", isDragOver)
    }, [isDragOver])

    const handlePreviewImage = (e: any) => {
        console.log(e.target.files)
        const files = e.target.files
        if(e.target.files){
            const fileReader = new FileReader()
            fileReader.onload = (e: any) => {
                setImage(e.target.result)
            }
            fileReader.readAsDataURL(files[0])
        }
        
    }


    const handleDragOver = () => {
        if (isDragOver === false) {
            setIsDragOver(true)
        }
    }

    const handleDragOff = () => {
        if (isDragOver === true) {
            setIsDragOver(false)
        }
    }

    return (

        <SContainer onDragOver={handleDragOver} onDragLeave={handleDragOff} ref={ref => connect(drag(ref))}>
            {
                image === null ? (
                    <SDropZone id="file-upload" type="file" onChange={handlePreviewImage} />
                ) : (<SImagePreview src={image} />)
            }

        </SContainer>
    )
}

export default ImageDropzone