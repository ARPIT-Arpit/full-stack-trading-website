import React from 'react';

function Education() {
    return ( 
        
        <div className='container mt-5 mb-5'>
            <div className='row'>
                
                <div className='col-6 '>

                    <img src='media/images/education.svg' style={{width: "80%"}} />

                </div> 
                
                <div className='col-6 mt-5'>

                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p className='mt-4 mb-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <a href='' className='mr-5' style={{ textDecoration: "none" }} >Varsity &nbsp;
                        <i class="fa fa-long-arrow-right" aria-hidden="true">
                        </i></a>
                    

                    <p className='mt-4 mb-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                    <p><a href='' className='mr-5' style={{ textDecoration: "none" }} >TradingQ&amp;A &nbsp;
                        <i class="fa fa-long-arrow-right" aria-hidden="true">
                        </i></a>
                    </p>

                </div>
                

            </div>
        </div>

     );
}

export default Education;