import React from 'react';

function Headbar() {
  return (
    <div>
        <nav className='navbar navbar-expand-md navbackground'>
            <div className='container-fluid'>
                <div className='col-md-8'>
                    <img src="../images/logo.png" alt="Medpro Healthcare Services Pvt ltd" />
                </div>
                <div className='col-md-2'>
                <h6 className='text-white'>{new Intl.DateTimeFormat("en-GB", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "2-digit"
                }).format(new Date())}</h6>
                </div>
            </div>            
        </nav>
    </div>
  )
}

export default Headbar