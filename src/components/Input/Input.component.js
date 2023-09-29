import { useState } from 'react';

const styles = './Input.styles.scss';

const Input = () => {

    return (

        <div>
            <label>{label}</label>
            <input type={inputType} />
        </div>
    )

}




export default