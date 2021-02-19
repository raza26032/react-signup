







var FontAwesome = require('react-fontawesome')

function Signup() {

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
                                Sign Up<p>It's quick and easy.</p>
                            </span>

                            <div class="wrap-input100 validate-input" data-validate="Name is required">
                                <input class="input100" id="name" type="text" name="name" placeholder="Enter Your Name" />
                                <span class="focus-input100"></span>
                                <span class="symbol-input100">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>

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

                            <div className="wrap-input100 validate-input" data-validate="Phone is required">
                                <input className="input100" id="phone" type="number" name="phone" placeholder="Enter Your Number" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Gender is required">
                                <input className="input100" id="gender" type="text" name="gender" placeholder="Enter Your Gender" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-venus-mars" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" type="submit">
                                    Sign Up
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
export default Signup;