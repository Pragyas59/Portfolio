import React from 'react';
import './style.css';

const PageHeaderContent = (props) => {
    const { headertext, icon } = props;
    return (
        <div className="wrapper">
            <h2 className='h2'>
                {headertext}
            </h2>
            <span className='sp'>{icon}</span>
        </div>
    );
};

export default PageHeaderContent;
