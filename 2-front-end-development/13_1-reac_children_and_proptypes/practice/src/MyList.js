import React from 'react';

const MyList = (props) => {
  return (
    <div className='list'>
      <ul>
        <li>Item Lista</li>
        {props.children.map(child => {
            if (child.type && child.type === 'li') return child
              return <li>{child}</li>
            }
          )}

        {console.log(props.children)}
      </ul>
    </div>
  )
}
export default MyList;