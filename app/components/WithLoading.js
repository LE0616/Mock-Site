import React from 'react'

const WithLoading = (component) => {
  return withLoadingComponent = ({ isLoading, ...props }) => {
    if (!isLoading) {
      return (<Component {...props} />);
    } else {
    return (
    <div>
      <img src='https://i.gifer.com/AGNB.gif'></img>
    </div>);
    }
  }
}

export default WithLoading;
