import React from "react";
import classNames from 'classnames'
import propTyps from 'prop-types'

const Descrip = ({isPrimary, isSecondary, className, children, ...attrs}) => {

    const classes = classNames('ui-text', className,{
            isPrimary,
            isSecondary,
        })

    return <p 
                className = {classes}
                {...attrs}
                contentEditable
                suppressContentEditableWarning
                spellCheck={false}
            >
            {children}
            </p>
};

Descrip.propTyps = {
    isPrimaty: propTyps.func,
    isSecondary: propTyps.bool,
    ClassName: propTyps.string,
    children: propTyps.node.isRequired,
}

Descrip.defaultProps = {
    isPrimaty: false,
    isSecondary: false,
    ClassName: "",
}

export default Descrip;