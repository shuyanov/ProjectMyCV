import React from 'react';
import propTyps from 'prop-types';
import classNames from 'classnames'

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  button {
    display: inline-block;
    transition: 0.1s all ease;
    opacity: 0 !important;
  }
  &:hover button {
    opacity: 1 !important;
  }
  p {
    display: inline-block;
    margin-bottom: 0;
  }
`

const Title = ({size, isUppercase,isShowButton, onClick, className, children, ...attrs}) => {
    const classes = classNames(`ui-title-${size}`, className, {isUppercase})

    return(
        <Wrapper>
        <p 
            className={classes}
            {...attrs}
            contentEditable
            suppressContentEditableWarning
            spellCheck={false}
        >
            {children}
        </p>
        {isShowButton && (
        <button className='ui-button Link' onClick={onClick}>+</button>
        )}
        </Wrapper>
    )
};


Title.propTyps = {
    size: propTyps.oneOf(['1','2','3']),
    isShowButton: propTyps.bool,
    ClassName: propTyps.string,
    isUppercase: propTyps.bool,
    children: propTyps.node.isRequired,
    onClick: propTyps.func,
}

Title.defaultProps = {
    isUppercase: false,
    isShowButton: false,
    onClick: ()=>{},
    size: '1',
    ClassName: "",
}

export default Title;