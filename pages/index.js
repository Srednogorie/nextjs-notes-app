/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import Link from 'next/link'
import '../styles/Home.module.css'


const Page = ({content}) => (
    <div sx={{ height: `calc(100vh - 60px)`}}>
        <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
            <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
        </div>
    </div>
)

export async function getStaticProps() {
    return {
        props: {
            content: {
                title: 'Look at my note app tho'
            }
        }
    }
}

export default Page
