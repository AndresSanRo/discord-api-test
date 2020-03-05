import React from 'react';

export interface PrincipalProps {
    value: string
}

function Principal(props: PrincipalProps) {
    return (
        <>
            <p>logged in</p>
            <p>{props.value}</p>
        </>
    );
  }
  
  export default Principal;