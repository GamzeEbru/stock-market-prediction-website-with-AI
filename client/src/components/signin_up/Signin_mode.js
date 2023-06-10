import React from "react";
import logo from "../../img/logo.png";
import image1 from "../../img/image1.png";
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import { useEffect, useState } from "react";
import './style.css';
import axios from "axios";
import { Formik, Form, Field } from "formik"
import { useNavigate } from "react-router-dom";

function Signin_mode() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const toggle_btn = document.querySelectorAll(".toggle");
    const main = document.querySelector("main");

    toggle_btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
      });
    });
  }, [count]);

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-field");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
      });
    });


    function moveSlider() {
      let index = this.dataset.value;

      let currentImage = document.querySelector(`.img-${index}`);
      images.forEach((img) => img.classList.remove("show"));
      currentImage.classList.add("show");

      const textSlider = document.querySelector(".text-group");
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bull) => bull.classList.remove("active"));
      this.classList.add("active");
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });
  }, []);

  //kayıt işemleri
  const initialValues = {
    name: "",
    surname: "",
    mail: "",
    password: "",
  }
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then((response) => {
      console.log(response);
      console.log("kayıt başarılı");
    }
    );
  }
  //Login işlemleri
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const data = { mail: mail, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {

      if (response.data.error) {
        alert(response.data.error);
      } else {

        localStorage.setItem("accessToken", response.data);
        alert("Giriş Başarılı");
        navigate("/account");

      }
    }
    );
  };

  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">

            <form className="sign-in-form">
              <div className="logo">
                <img src={logo} alt="easyclassName" />
                <h4>Vortex Exchange</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a href="#" onClick={() => setCount(count + 1)} className="toggle">Sign up</a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input onChange={(event) => {
                    setMail(event.target.value);
                  }}
                    type="email"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Mail</label>
                </div>

                <div className="input-wrap">
                  <input onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"

                  />
                  <label>Password</label>
                </div>
                <div>
                  <button onClick={login} className="sign-btn" type="submit" >Sign In</button>
                </div>
                <p className="text">
                  Forgotten your password or you login datails?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>

            {/*  //Kayıt formu */}
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form autoComplete="off" className="sign-up-form">
                <div className="logo">
                  <img src={logo} alt="easyclassName" />
                  <h4>Vortex Exchange</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a href="#" onClick={() => setCount(count + 1)} className="toggle">Sign in</a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <Field
                      type="text"
                      name="name"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <Field
                      type="text"
                      name="surname"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Surname</label>
                  </div>

                  <div className="input-wrap">
                    <Field
                      type="email"
                      name="mail"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <Field
                      type="password"
                      name="password"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Password</label>
                  </div>




                  <input type="submit" value="Sign Up" className="sign-btn" />

                  <p className="text">
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </Form>

            </Formik>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src={image1} className="image img-1 show" alt="" />
              <img src={image2} className="image img-2" alt="" />
              <img src={image3} className="image img-3" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create your own account</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your className</h2>
                </div>
              </div>

              <div className="bullets">
                <span className="active" data-value="1"></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )


}
export default Signin_mode