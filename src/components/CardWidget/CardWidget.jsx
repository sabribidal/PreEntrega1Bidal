import React from 'react'
import {Item} from '../Item/Item'

export const CardWidget = ({children}) => {
    return(
        <>
            <div>{children}</div>
            <img src='data:image/png;base64,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' alt='icono de carrito' width={30} height={30}/><Item/>
        </>
    )
}
