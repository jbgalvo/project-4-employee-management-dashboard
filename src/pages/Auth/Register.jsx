function Register() {
  return (
    <div className="row g-0 d-none">
      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
          <h4 className="mb-4">Employee Management Dashboard</h4>
          <p className="small mb-0">
            
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card-body p-md-5 mx-md-4">
          <div className="text-center">
            <img src="https://static.thenounproject.com/png/3627272-200.png"
              className="img-fluid float-img " alt="logo" />
            <h4 className="mt-3 mb-5 pb-1">Employee Management Dashboard</h4>
          </div>

          <form>
            <p>Please login to your account</p>
            <div className="mb-3">
              <input type="email" 
                      className="form-control" 
                      id="email" 
                      aria-describedby="emailHelp"
                      placeholder="Email Address" />
            </div>

            <div className="mb-3">
              <input type="password" 
                      className="form-control" 
                      id="password"
                      placeholder="Password" />
            </div>

            <div className="text-center pt-1 mb-3">
              <button className="btn btn-secondary w-100 fa-lg gradient-custom-2" type="button">
                Sign In
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-center pb-4">
              <p className="mb-0 me-2">Don't have an account?</p>
              <button type="button" className="btn btn-outline-dark">Register</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Register;