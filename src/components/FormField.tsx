import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import style from './FormField.module.css';

type onValidityFn = ((isValid: boolean) => void) | Dispatch<SetStateAction<boolean>>
interface FormFieldProps {
    label: string,
    type?: 'text' | 'password' | 'email',
    validation?: {
        minLength?: number
    },
    required?: boolean,
    onChange?(e: ChangeEvent<HTMLInputElement>): void,
    onValidity: onValidityFn
}

const nope = () => false;

export default function FormField({ label, type = 'text', onChange = nope, onValidity = nope, required = true, validation = {}}: FormFieldProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        onValidity(e.target.checkValidity())
    }

    const id = label.replace(' ', '');
    return (
    <div className={style.FormField}>
        <input id={id} name={id} className={style.Input} type={type} onChange={handleChange} placeholder={label} required={required} {...validation} />
        <label htmlFor={id} className={style.Label}>
            {label}
        </label>
    </div>
    );
}