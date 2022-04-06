import React, { FC } from 'react'

import Head from 'next/head'
import { Navbar } from '../ui';

interface Props {
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location
export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>

            <Head>
                <title>{title || 'Pokemon app'}</title>
                <meta name='author' content='Gustavo Fajardo' />
                <meta name='description' content={`Informacion sobre el pokemon: ${title}`} />
                <meta name='keywords' content={`${title},pokemon,pokedex`} />
                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es una pagina para ver a ${title} junto con su forma shiny`} />
                <meta property="og:image" content={`${origin}imgs/banner.png`} />
            </Head>

            <Navbar />



            <main style={{
                padding: '20px'
            }}>
                {children}
            </main>
        </>
    )
}
