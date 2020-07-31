import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const [error, setError] = useState(null);

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please, select an image file (jpeg or png)');
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div> }
                { file && <div className="file">{ file.name }</div> }
                { file && <ProgressBar file={ file } setFile={ setFile } /> }
                {/* Se a esquerda for verdadeira, exiba a da direita. */}
            </div>
        </form>
    );
}

export default UploadForm;