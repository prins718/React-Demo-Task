import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Css/Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginError, setLoginError] = React.useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setLoginError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

   
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card">
       
        <div className="login-left">
          <h2>Welcome Back </h2>
          <p>
            Login to manage your orders, track deliveries, and explore
            exclusive electronics deals.
          </p>
          <ul>
            <li> Fast & secure checkout</li>
            <li> Save your favourite items</li>
            <li> Track your orders easily</li>
          </ul>
        </div>

       
        <div className="login-right">
          <h1>Login</h1>

          {loginError && <div className="login-error">{loginError}</div>}

          <form onSubmit={handleLogin} noValidate>
            <div className="form-group">
              <label htmlFor="username">Username / Email</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username or email"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </div>

            <div className="form-footer">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <button
                type="button"
                className="forgot-password"
                onClick={() => alert("Password reset flow can be added here.")}
              >
                Forgot password?
              </button>
            </div>

            <button type="submit" className="btn-login">
              Login
            </button>

            <p className="signup-text">
              Don&apos;t have an account?{" "}
              <span
                className="signup-link"
                onClick={() => alert("Redirect to Sign Up page")}
              
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
