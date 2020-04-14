import React from 'react';


export default ({history}) => {
    const gotoAbout = () => {
        history.push('/about');
    }
    return(
    <div>
        <h1>Home Page with button</h1>
        <button className="btn btn-primary" onClick={gotoAbout}>Navigate to about page</button>
    </div>
    )
}