import React from 'react';

const Pictures = (props) => {
  const { height, src, alt, legenda, style } = props;
  return (
    <img height={height} src={src} alt={alt} legenda={legenda} style={style}></img>
  )
}

export default Pictures;
