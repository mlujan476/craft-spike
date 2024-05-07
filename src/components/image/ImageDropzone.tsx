import { useNode } from '@craftjs/core'
import { NumberInput, Select, FileInput } from '@mantine/core'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SFlexCol, SFlexRow } from '../container/FlexContainer'

const SContainer = styled(SFlexCol)`

    
    position: relative;
    align-items: center;
    justify-content: center;
    max-height: 700px;
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
interface IPreview {
    objectFit: string
    width: string
    height: number

    marginTop: number
    marginRight: number
    marginLeft: number
    marginBottom: number

    uploadFile?: any
}
const SImagePreview = styled.img<IPreview>`
    object-fit: ${p => p.objectFit};
    width: ${p => p.width === "max" ? "100%" : p.width + "px"};
    height: ${p => p.height};

    margin-top: ${p => p.marginTop};
    margin-right: ${p => p.marginRight};
    margin-left: ${p => p.marginLeft};
    margin-bottom: ${p => p.marginBottom};
`

const SSettingsContainer = styled(SFlexCol)`
    
`


const SRowContainer = styled(SFlexRow)`
    width: 100%;
    padding: 0px;
    gap: 10px;
    align-items: flex-start;
`

const ImageDropzone = ({ height, width, marginTop, marginRight, marginBottom, marginLeft, objectFit, uploadFile }: IPreview) => {

    const { connectors: { connect, drag }, actions: { setProp } } = useNode((node: any) => ({
        isActive: node.events.selected
    }))
    const [image, setImage] = useState<any>(null)

    //Boolean State
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const [editable, setEditable] = useState<boolean>(false)


    useEffect(() => {
        console.log("New upload file")
        uploadFile !== null && setImage(uploadFile)
    }, [uploadFile])

    const handlePreviewImage = (e: any) => {
        console.log(e.target.files)
        const files = e.target.files
        if(e.target.files){
            const fileReader = new FileReader()
            fileReader.onload = (e: any) => {
                
                setImage(e.target.result)
            }
            fileReader.readAsDataURL(files[0])
            setProp((props: any) => props.uploadFile = files[0])
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
                ) : (<SImagePreview 
                    height={height}
                    width={width}

                    marginTop={marginTop}
                    marginRight={marginRight}
                    marginBottom={marginBottom}
                    marginLeft={marginLeft}

                    objectFit={objectFit}

                    src={image}
                    contentEditable={editable}
                    onClick={() => setEditable(true)}
                    />)
            }

        </SContainer>
    )
}



const ImageDropzoneSettings = () => {
    const { actions: { setProp }, height, width, marginTop, marginRight, marginBottom, marginLeft, objectFit, uploadFile } = useNode((node) => ({

        height: node.data.props.height,
        width: node.data.props.width,
        objectFit: node.data.props.objectFit,

        marginTop: node.data.props.marginTop,
        marginRight: node.data.props.marginRight,
        marginBottom: node.data.props.marginBottom,
        marginLeft: node.data.props.marginLeft,

        uploadFile: node.data.props.uploadFile

    }))

    const [fit, setFit] = useState<string>(objectFit)

    const editObjectFit= (value: any, option: any) => {
        setProp((props: any) => props.objectFit = value)
        //setFit(option)

    }

    const editWidth = (value: number) => {
        setProp((props: any) => props.width = value)
    }

    const editHeight = (value: number) => {
        setProp((props: any) => props.height = value)
    }

    const editMarginTop = (value: number) => {
        setProp((props: any) => props.marginTop = value)
    }
    const editMarginRight = (value: number) => {
        setProp((props: any) => props.marginRight = value)
    }
    const editMarginBottom = (value: number) => {
        setProp((props: any) => props.marginBottom = value)
    }
    const editMarginLeft = (value: number) => {
        setProp((props: any) => props.marginLeft = value)
    }

    const editUploadFile = (file: any) => {
        setProp((props: any) => props.uploadFile = file)
    }

    return(
        <SSettingsContainer>
            <SRowContainer>

            

            <FileInput 
                label="Banner Image"
                placeholder="Upload Image"
                value={uploadFile}
                onChange={editUploadFile}
            />


                <Select
                    label="Object Fit"
                    style={{ textAlign: "left" }}
                    data={["fill", "contain", "cover", "scale-down", "none"]}
                    value={objectFit}
                    defaultValue={objectFit}
                    onChange={(value: any, option: any) => editObjectFit(value, option)}
                />
            </SRowContainer>

            <SRowContainer>

                <NumberInput
                    label="Height"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={height}
                    min={20}
                    max={1000}
                    value={height}
                    onChange={(value: any) => editHeight(value)}

                />

                <NumberInput
                    label="Width"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={width}
                    min={20}
                    max={1630}
                    value={width}
                    onChange={(value: any) => editWidth(value)}

                />
            </SRowContainer>

            <SRowContainer>

                <NumberInput
                    label="Margin Top"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={marginTop}
                    min={0}
                    max={700}
                    value={marginTop}
                    onChange={(value: any) => editMarginTop(value)}

                />

                <NumberInput
                    label="Margin Bottom"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={marginBottom}
                    min={0}
                    max={700}
                    value={marginBottom}
                    onChange={(value: any) => editMarginBottom(value)}

                />
            </SRowContainer>

            <SRowContainer>

                <NumberInput
                    label="Margin Left"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={marginLeft}
                    min={0}
                    max={700}
                    value={marginLeft}
                    onChange={(value: any) => editMarginLeft(value)}

                />

                <NumberInput
                    label="Margin Right"
                    style={{ textAlign: "left" }}
                    suffix="px"
                    defaultValue={marginRight}
                    min={0}
                    max={700}
                    value={marginRight}
                    onChange={(value: any) => editMarginRight(value)}

                />
            </SRowContainer>
        </SSettingsContainer>
    )
}

ImageDropzone.craft = {
    props: {
        objectFit: "cover",
        height: 300,
        width: "max",

        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,

        uploadFile: null,

    },
    rules: {
        canDrag: (node: any) => node.data.props.text != "Drag"
    },
    related: {
        settings: ImageDropzoneSettings
    }
}


export default ImageDropzone