import { createContext } from 'react'

export const ColorContext = createContext({
    didNavigate: false, 
    playerDidNavigate: () => {}, 
    playerDidNotRedirect: () => {}
})