import React from 'react';
import Highlight from './standard';

export default function Bug({
    tier = "normal",
}) {
    let text = "一般"; let color = "#0E8A16"; let fontColor = "#FFFFFF"
    if ( tier === "detail" ) { text = "细节"; color = "#1D76DB"; }
    else if ( tier === "important" ) { text = "重要"; color = "#FBCA04"; fontColor = "#000000" }
    else if ( tier === "serious" ) { text = "严重"; color = "#D93F0B"; }
    return (
        <Highlight
            text={text}
            backgroundColor={color}
            fontColor={fontColor}
            padding='0px 8px 0px'
            borderRadius='20px'
        />
    )
}
