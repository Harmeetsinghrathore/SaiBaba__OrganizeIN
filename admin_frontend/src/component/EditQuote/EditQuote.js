import React, {useState, useEffect} from 'react'
import axios from 'axios';


export const EditQuote = ({_id}) => {

    console.log(_id, 'great man');
    
    const [quote_id, setQuoteId] = useState("");
    const [quote_by, setQuoteBy] = useState("");
    const [quote, setQuote] = useState("");

  // ________ EDIT QUOTE API _________

  const editQuote = async (_id) => {
    const url = `http://127.0.0.1:8000/api/edit-a-quote/${_id}`;
    await axios
    .patch(url, {
        quote_id : quote_id,
        quote_by : quote_by,
        quote : quote
    })
    .then( (response) => {
      console.log('Successfull response', response);
    })
    .catch( (error) => {
      console.log('Line 21 editQuote()', error);
    })
  }

  useEffect( () => {
    EditQuote(_id);
  }, []);


  return (
    <div>
      <section className="vh- gradient-custom">
        <div className="container py-3 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-secondary text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Edit the quote</h2>
                    <p className="text-white-50 mb-5">
                      
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="Quote ID"
                        value={quote_id}
                        onChange={ (e) => {setQuoteId(e.target.value)}}
                        
                        
                      />
                      {/* <label className="form-label" htmlFor="typeEmailX">Email</label> */}
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="By"
                        value={quote_by}
                        onChange={ (e) => {setQuoteBy(e.target.value)}}
                        
                        
                      />
                      {/* <label className="form-label" htmlFor="typeEmailX">Email</label> */}
                    </div>

                    <div className="form-outline form-white mb-4">
                      <textarea
                        type="text"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="Quote"
                        value={quote}
                        onChange={ (e) => {setQuote(e.target.value)}}
                        
                        
                        
                      />
                      {/* <label className="form-label" htmlFor="typePasswordX">Password</label> */}
                    </div>

                    {/* <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p> */}

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={editQuote(_id)}
                      
                    >
                        Done
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    {/* <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
