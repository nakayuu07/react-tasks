import React from 'react';

const List = ({ items }) => {
  return (
    items.map((item, i) => {
      return <p key={i}>{item}</p>
    })
  )
}

export default List