import React from 'react'

const AddItem = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>count: { count }</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default AddItem
