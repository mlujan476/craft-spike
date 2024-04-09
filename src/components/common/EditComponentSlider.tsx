import { useState } from 'react';
import { Slider } from '@mantine/core';

interface IEditComponentSlider {
    min: number
    max: number
    step: number
    value: number
    defaultValue: number
    editProp: (cb: any, throttleRate?: number | undefined) => void
}


const EditComponentSlider = ({min, max, step, value, defaultValue, editProp}: IEditComponentSlider) => {

    

    /* const handleChange = (value: any) => {
        console.log("value: ", value)
        editProp((props: any) => props.fontSize = value)
        setValue(value)
    } */

    return <Slider onChange={(value: any) => editProp(value)} min={min} max={max} step={step} value={value} defaultValue={defaultValue} />;
}

export default EditComponentSlider