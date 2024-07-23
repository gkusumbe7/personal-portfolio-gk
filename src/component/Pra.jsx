import About from "./About";
const Pra = ()=>{
    const dowloadCV = () => {
        // // URL to the CV file
        // const cvUrl = 'https://example.com/path/to/your-cv.pdf';
    
        // // Create an invisible link and programmatically click it
        // const link = document.createElement('a');
        // link.href = cvUrl;
        // link.download = 'YourCV.pdf'; // The name for the downloaded file
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        const cvUrl = 'src/assets/GaneshKusumbeCV.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'GaneshKusumbeCV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        };
    return(
        <div>
                <button onClick={dowloadCV}>Download</button>
        </div>
    )
}

export default Pra;