import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, a11yDark, coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ScrollArea } from './ui/scroll-area';

const CodeSnippets = ({ code }: { code: string }) => {
    return (
        <ScrollArea className="h-[400px] md:max-w-3xl w-full overflow-auto mt-10 selection:bg-primary/30">
            <SyntaxHighlighter language="typescript" style={a11yDark} customStyle={{ minWidth: "100%", borderRadius: '12px' }}>
                {code}
            </SyntaxHighlighter>
        </ScrollArea>
    )
}

export default CodeSnippets
