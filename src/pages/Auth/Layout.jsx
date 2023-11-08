// import { auth } from '../../firebase/config.js';
import Login from './Login.jsx';
import Register from './Register.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/auth.css';

function Layout() {
  return (
    <section className="vh-100 gradient-form bg-login">
      <div className="container active py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <Login />
              <Register />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout;