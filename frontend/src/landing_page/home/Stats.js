import React from 'react';

function Stats() {
    return ( 
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col-5 p-3'>

                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted mb-4'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
                    worth of equity investments.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted mb-4'>No gimmicks, spam, "gamification", or annoying push notifications.
                    High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+
                    fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted mb-4'>With initiatives like Nudge and Kill Switch, we don't just
                    facilitate transactions, but actively help you do better with your
                    money.</p>

                </div>

                <div className='col-7 p-5'>
                    <img src='media/images/ecosystem.png' style={{ width: "100%" }} />
                    
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{ textDecoration: "none" }} >Explore our products 
                            <i class="fa fa-long-arrow-right" aria-hidden="true">
                            </i></a>
                        <a href='' style={{ textDecoration: "none" }} >Try Kite demo</a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Stats;