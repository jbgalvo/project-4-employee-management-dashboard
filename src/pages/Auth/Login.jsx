// import { auth } from '../../firebase/config.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/auth.css';

function Login() {


  return (
    <section className="h-100 gradient-form bg-login">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src="https://static.thenounproject.com/png/3627272-200.png"
                        className="img-fluid" alt="logo" />
                      <h4 className="mt-3 mb-5 pb-1">Employee Management Dashboard</h4>
                    </div>

                    <form>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example11" className="form-control"
                          placeholder="Phone number or email address" />
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example22" className="form-control"
                        placeholder="Password"  />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-secondary w-100 fa-lg gradient-custom-2 mb-3" type="button">
                          Login
                        </button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger">Create new</button>
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Employee Management Dashboard</h4>
                    <p className="small mb-0">
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;