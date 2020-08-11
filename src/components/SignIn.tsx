import React from 'react';

import style from './SignIn.module.css';


export default function SignIn() {
    return <>
        <span className={style.text}>Sign in</span>
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={style.rightTriangle} fillRule="evenodd" clipRule="evenodd" d="M0 8.825L3.81667 5L0 1.175L1.175 0L6.175 5L1.175 10L0 8.825Z" fill="white"/>
        </svg>
    </>;
}
