import React, { useEffect, useRef, useState } from 'react';
import { SChatMessage } from './styles';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Message = ({ text }: { text: string }) => {
    const [expanded, setExpanded] = useState(false);
    const showChar = 250;
    const ellipsestext = '...';
    const moretext = 'Mostrar Mais >';
    const lesstext = 'Mostrar Menos';

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const truncateText = (text: string) => {

        const truncatedText = text.slice(0, showChar);
        const codeStyles = {
            whiteSpace: "pre-wrap", // Permite quebras de linha
            overflowWrap: "break-word" // Quebra palavras longas
        };

        if (text.length <= showChar) {
            return (
                text.slice(0, 5) == '<JSX>' ?
                    <SyntaxHighlighter
                        language="javascript"
                        style={darcula}
                        customStyle={codeStyles as SyntaxHighlighterProps["customStyle"]}>
                        {expanded ? text : truncatedText}
                    </SyntaxHighlighter>
                    : <span>
                        {expanded ? text : truncatedText}
                    </span>
            );
        }

        return (
            <span>
                {text.slice(0, 5) == '<JSX>' ?
                    <SyntaxHighlighter
                        language="javascript"
                        style={darcula}
                        customStyle={codeStyles as SyntaxHighlighterProps["customStyle"]}>
                        {expanded ? text : truncatedText}
                    </SyntaxHighlighter>
                    : <span>
                        {expanded ? text : truncatedText}
                    </span>
                }

                <span className="moreellipses">{ellipsestext}&nbsp;</span>
                <span className="morecontent">
                    <span>{text.slice(showChar)}</span>&nbsp;&nbsp;
                    <button className="morelink" onClick={toggleExpanded}>
                        {expanded ? lesstext : moretext}
                    </button>
                </span>
            </span>
        );
    };

    return <SChatMessage className={expanded ? "expanded" : ''}>{truncateText(text)}</SChatMessage>;
};

export default Message;