import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate(); 

  return (
    <div className="container paddingtop60">
        <div className="col-md-12">
            <div className="card">
                <div className="card panelborder">
                <div className="card-header">
                <h3>Welcome to Med-Pro Healthcare Services!!!</h3>
                </div>
                <div className="card-body">
                    <p>Medpro is founded in 2008, with a vision to grow and serve well, and now it has become a leading business process outsourcing Company. Medpro is tied up with US based companies.</p>
                    <p>We are giving End to End Billing Solution.</p>
                    <p>Medpro is the leader of high added value for client care. Medpro strives to provide the highest quality services to its client's to all times and exceed expectations.</p>
                    <p>The basis of our operations and the key to our success is our level of client satisfaction. Medpro is committed to and makes significant efforts to continually improve its services. Our aim is to ensure that our client's realistic expectations are met in a timely manner.</p>	  
                </div>
                </div>
            </div> 
        </div>
        <div className="col-md-12 text-center paddingtop10">
        <button className="btn btn-success" onClick={() => {navigate("/Biodata")}}>NEXT</button>
        </div> 
    </div>
  )
}

export default Home