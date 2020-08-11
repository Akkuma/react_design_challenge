import React from 'react';

import style from './PasswordStrength.module.css';

interface PasswordStrengthProps {
    password: string,
    max: number,
}

export default function PasswordStrength({ password, max }: PasswordStrengthProps) {
    const pct = (password.length / max) * 100
    const clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0% 100%)`;
    return (
        <div className={style.PasswordStrength}>
            <span className={style.Checkpoint}></span>
            <span className={style.Bar} style={{ clipPath }}></span>
        </div>
    );
}