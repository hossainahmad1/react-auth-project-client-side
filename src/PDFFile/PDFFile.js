import React from 'react';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const PDFFile = () => {
    return (
        <div className="App">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) =>
                    <button className='btn btn-primary' onClick={toPdf}>Download PDF</button>}
            </Pdf>

            <div ref={ref}>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </div>
        </div>
    );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<PDFFile />, rootElement);


export default PDFFile;