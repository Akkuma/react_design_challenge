import React from 'react';

import style from './Button.module.css';

interface ButtonProps {
    type?: 'default',
    children: (string | JSX.Element)[] | string | JSX.Element,
    disabled?: boolean,
}

export default function Agree({ children, type = 'default', disabled = false }: ButtonProps) {
    return (
    <button className={style[type]} disabled={disabled}>
        {children}
    </button>
    );
}