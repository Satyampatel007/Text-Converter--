import React from 'react'

export default function About(props) {
    //  const [myStyle,setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    //  })

    let myStyle= {
        color: props.mode == 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 76 104)':'white' 

    }
     

  return (
    <div className='container' >
        <h1 className='my-2' style={{ color: props.mode == 'dark'?'white':'#042743'}}> About us</h1>
                        <div className="accordion" id="accordionExample"  style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong>Analyze Your Text</strong> 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This is aap use the your text wrok for free and access the remove the data and text to transform to the capital and many more use this app...
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free To Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                      This is app free to use the work for the student and data analitics and student . it can use the free of cost and many more servies are provided and very efficent less and how to can to use the data nd show and below...
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <strong>Brower Compatible</strong>  
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Brower are very compatible of the data and the efficent very below of the data and these can the are teaan to sem less of propsing the data and the the give to task perfrom the dat and lot of works and the data...
                    </div>
                    </div>
                </div>
        </div>
            {/* <div className='container my-3'>
            <button type="button" onClick={togglebtn} className="btn btn-primary">Enable Dark Mode</button>
            </div> */}
        
    </div>
  )
}
