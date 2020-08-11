import React, { ChangeEvent } from 'react';

import style from './Agree.module.css';

interface AgreeProps {
    id: string,
    children: (string | JSX.Element)[]
    onChange(e: ChangeEvent<HTMLInputElement>): void
}

export default function Agree({ id, onChange, children }: AgreeProps) {
    return (
    <div className={style.Agree}>
        <input className={style.Input} id={id} name={id} type='checkbox' onChange={onChange} />
        <label className={style.Label} htmlFor={id}>{children}</label>
    </div>
    );
}