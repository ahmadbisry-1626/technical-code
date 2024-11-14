import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, a11yDark, coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ScrollArea } from './ui/scroll-area';

const CodeSnippets = ({ code, className }: { code: string, className?: string }) => {
    return (
        <ScrollArea className={`${className} min-h-[200px] w-full overflow-auto mt-10 selection:bg-primary/30`}>
            <SyntaxHighlighter language="typescript" style={vscDarkPlus} customStyle={{ minWidth: "100%", borderRadius: '12px' }}>
                {code}
            </SyntaxHighlighter>
        </ScrollArea>
    )
}

export default CodeSnippets
