import * as React from 'react';
import Return from '../returnBtn/returnBtn.module';
import CreateAccount from '../createAccountBtn/createAccountBtn.module'

export default function NavBar() {
    return (
        <>
            <div className="             
             w-414 
             h-24
             border 
             border-b-1
             border-solid 
             p-6 
             flex 
             justify-between
             ">

                <Return textColor='black'/>
                <CreateAccount />
            </div>
            
        </>
    );
}