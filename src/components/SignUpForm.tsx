import React, { useState, ChangeEvent } from 'react';

import CompanyLogo from './CompanyLogo';
import FormField from './FormField';
import PasswordStrength from './PasswordStrength';
import Link from './Link';
import Agree from './Agree';
import Button from './Button';

import style from './SignUpForm.module.css'

export default function SignUpForm() {
    const [isEmailValid, setEmailValidity] = useState(false)
    const [isPasswordValid, setPasswordValidity] = useState(false)
    const [password, setPassword] = useState('');
    const [gaveConsent, setConsent] = useState(false);

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleConsent = (e: ChangeEvent<HTMLInputElement>) => {
        setConsent(e.target.checked)
    }

    return (<>
    <form className={style.SignUpForm}>
        <div className={style.Logo}><CompanyLogo /></div>
        <h2 className={style.Name}>Create an account</h2>
        <h3 className={style.Description}>to continue to <b>Egg</b></h3>

        <div className={style.Fields}>
            <FormField label="Email" type='email' onValidity={setEmailValidity} />
            <div className={style.Password}>
                <FormField label="Password" type="password" onChange={handlePassword} onValidity={setPasswordValidity} validation={{ minLength: 8 }}/>
            </div>
            <PasswordStrength password={password} max={100} />
        </div>
        <hr className={style.Bar} />

        <div className={style.Agree}>
            <Agree id='tospp' onChange={handleConsent}>
                I agree to the <Link href='#' type='standout'>Terms of Service</Link> and <Link href='#' type='standout'>Privacy Policy</Link>
            </Agree>
        </div>

        <div className={style.Submit}>
            <Button disabled={!(isEmailValid && isPasswordValid && gaveConsent)}>
                Next
            </Button>
        </div>
    </form>
    <p className={style.SignIn}>Already have an account? <Link href='#'>Sign in</Link></p>
    </>);
}