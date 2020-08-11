import React from 'react';

import Link from './Link';
import SignIn from './SignIn';
import Nav from './Nav';
import Logo from './HeaderLogo';

import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.Header}>
            <Logo />
            <Nav>
                <span className={style.SiteLink}><Link key={1}href='#' type='nav'>Products</Link></span>
                <span className={style.SiteLink}><Link key={2} href='#' type='nav'>Developers</Link></span>
                <Link key={3} href='#' type='nav'>Pricing</Link>
            </Nav>
            <Nav ariaLabel='Sign in' align='left' className={style.SignIn}>
                <Link key={4} href='#' type='button'>
                    <SignIn />
                </Link>
            </Nav>
        </header>
    )
}