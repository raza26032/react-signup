function Login() {

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            {/* <img src="https://thekababjeesbakers.com/wp-content/uploads/2020/03/Mix-Mithai-Box.jpg" alt="IMG" /> */}
                        </div>

                        <form action="#" className="login100-form validate-form" onsubmit="return signup()" >
                            <span className="login100-form-title">
                                Login
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" id="email" type="email" name="email" placeholder="Enter Your Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" id="password" type="password" name="pass"
                                    placeholder="Enter Your Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Log In
						</button>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" href="login.html">
                                    Already have an Account?
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;