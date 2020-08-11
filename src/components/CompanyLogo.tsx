import React from 'react';

import style from './CompanyLogo.module.css';

export default function CompanyLogo() {
    return (
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={style.logo} d="M21.4729 16.8056C21.4729 23.1574 16.7931 27.5 10.7365 27.5C4.67979 27.5 0 23.1574 0 16.8056C0 9.04297 5.53393 0 10.7365 0C15.939 0 21.4729 9.04297 21.4729 16.8056Z" fill="white"/>
    </svg>
    );
}