import React, { createContext, useState } from 'react'
export const TokenContexts = createContext(null)
const Token = (props) => {
    const [token, setToken] = useState('')
    const [navColor, setNavColor] = useState("#02071f")
    return (
        <TokenContexts.Provider value={[token, setToken, navColor, setNavColor]}>
            {props.children}
        </TokenContexts.Provider>
    )
}

export default Token