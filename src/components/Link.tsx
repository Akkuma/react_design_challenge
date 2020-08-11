import React from 'react';

import style from './Link.module.css';

interface LinkProps {
    href: string,
    children: string | JSX.Element,
    type?: 'default' | 'nav' | 'button' | 'standout',
}

export default function Link({ href, children, type = 'default'}: LinkProps) {
    return (
        <a className={style[type]} href={href}>{children}</a>
    );
}