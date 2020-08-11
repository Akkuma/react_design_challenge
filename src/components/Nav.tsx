import React from 'react';

import style from './Nav.module.css';

interface NavProps {
    children: JSX.Element[] | JSX.Element,
    ariaLabel?: string,
    align?: 'center' | 'left',
    className?: string,
}

export default function Nav({ children, ariaLabel = 'Site navigation', align = 'center', className }: NavProps) {
    return (
        <nav className={style.Nav + ` ${style[`${align}Align`]} ${className}`} role="navigation" aria-label={ariaLabel}>
            {children}
        </nav>
    );
}