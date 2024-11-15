import React from 'react'

const CodeTag = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className='bg-[#363636] rounded-[4px] px-[6px]'>
            {children}
        </span>
    )
}

export default CodeTag
