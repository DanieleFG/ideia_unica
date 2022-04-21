import Link from 'next/link';

import { useState } from 'react';
function Sobre() { 
    return (<div>
                <h3>Sobre</h3>
                <Link href='/'>
                    <a>Acessar a página Home</a>
                </Link>
                <Contador/>
            </div>)
}

function Contador() {
    const [contador, setContador] =useState(1);

    function adcionarContador() {
        setContador(contador + 1);
    }
    return(
        <div>
            <div>
                {contador}
            </div>
            <button onClick={adcionarContador}>Adicionar</button>
        </div>
    )
}
export default Sobre;