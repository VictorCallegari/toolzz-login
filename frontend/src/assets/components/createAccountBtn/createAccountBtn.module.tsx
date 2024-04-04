import React from 'react';
import Link from 'next/link';

export default function CreateAccount() {
    
    return (
        <>
            <button className='
                flex
                w-36
                h-12
                rounded-lg
                py-5
                px-6
                gap-3
                items-center
            '>
                <Link href="/criarconta" className='
                    
                '><h5 className='
                    w-24
                    h-6
                    font-medium
                    text-lg
                    leading-6
                    text-neutral-900
                '>Criar conta</h5></Link>
            </button>
        </>
    );
}

