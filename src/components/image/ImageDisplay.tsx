import React from 'react'
import { Image } from '@mantine/core';
import { useNode } from '@craftjs/core';

const ImageDisplay = ({ image, height, width, objectFit }: any) => {
    const { connectors: { connect } } = useNode()
  return (
    <Image 
        ref={connect}

        h={height}
        width={width}
        fit={objectFit}

        src={image}
    />
  )
}

export default ImageDisplay