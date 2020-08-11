import React from 'react';

import Header from './Header';
import Page from './Page';
import SignUpForm from './SignUpForm';

import style from './SignUp.module.css'

const PageLogo = () => <svg width="49" height="43" viewBox="0 0 49 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 26.5L1 10.5L15.5 9.5L39.5 0L41 10C43.6667 10.5 49 13 49 19C49 25 43.3333 26.5 40.5 26.5V36L16 28L19.5 43H9.5L5.5 28L0 26.5Z" fill="#F52A79"/>
</svg>;

export default function SignUp() {
    return (
        <div className={style.SignUp}>
            <Header />
            <Page logo={<PageLogo />} name='Sign up' description='The best subscription of all time!' content={<SignUpForm />} />
        </div>
    )
}