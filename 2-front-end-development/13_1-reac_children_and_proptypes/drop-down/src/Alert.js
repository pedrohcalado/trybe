import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent } = props;
  const { title, content, timeSeconds } = props.children;
  setTimeout(() => hideComponent(), timeSeconds);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

Alert.propTypes = {
  hideComponent: PropTypes.func,
  contentTitle: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.object,
}

export default Alert;
