import React, { createContext, useState } from 'react'
export const TokenContexts = createContext(null)
const Token = (props) => {
    const [token, setToken] = useState('')
    return (
        <TokenContexts.Provider value={[token, setToken]}>
            {props.children}
        </TokenContexts.Provider>
    )
}

export default Token