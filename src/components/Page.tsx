import React from 'react';

import style from './Page.module.css';

interface PageProps {
    logo: JSX.Element,
    name: string,
    description: string,
    content: JSX.Element
}

export default function Page({ logo, name, description, content }: PageProps) {
    return (
        <main className={style.Page}>
            <header className={style.Header}>
                <div className={style.Logo}>{ logo }</div>
                <h1 className={style.Name}>{name}</h1>
                <p className={style.Description}>{description}</p>
            </header>
            {content}
        </main>
    );
}