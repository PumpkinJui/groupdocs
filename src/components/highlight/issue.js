import React from 'react';
import Highlight from './standard';

export default function Issue({
    text = ""
}) {

    let color = "#1d76db";
    let fontColor = "#ffffff";
    let border = "0px";

    switch (text) {

        // Issue 类型
        case "漏洞": color = "#b60205"; break;
        case "建议": color = "#1d76db"; break;
        case "预定计划": color = "#3e5aba"; break;

        // Issue 等级
        case "细节": color = "#1d76db"; break;
        case "一般": color = "#0e8a16"; break;
        case "重要": color = "#fbca04"; fontColor = "#000000"; break;
        case "严重": color = "#d93f0b"; break;

        // Issue 确认情况
        case "已确认": color = "#d93f0b"; break;
        case "未确认": color = "#72ecf5"; break;
        case "与其他问题重复": color = "#fbca04"; break;
        case "不予修复": color = "#ffffff"; fontColor = "#000000"; border = "1px solid"; break;

        // Issue 解决情况
        case "已解决": break;
        case "未解决": color = "#d93f0b"; break;
        case "即将修复": color = "#fbca04"; break;

    }

    return (
        <Highlight
            text={text}
            backgroundColor={color}
            fontColor={fontColor}
            padding='0px 8px 0px'
            borderRadius='20px'
            margin='0'
            border={border}
            whiteSpace='nowrap'
        />
    )
}
