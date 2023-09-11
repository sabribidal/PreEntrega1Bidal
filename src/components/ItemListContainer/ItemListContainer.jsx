import React from 'react';
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2 className='ItemList'>
            {greeting}
        </h2>
    </div>
  )
}
