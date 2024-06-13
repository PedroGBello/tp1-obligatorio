import "./Form.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import UTNBA from "../assets/UTNBA-transparent.png";

function Form() {
	function isMatching() {
		const password = document.getElementById("password");
		const passwordConfirm = document.getElementById("passwordConfirmed");
		const message = document.getElementById("passwordConfirmed__message");
		const submitButton = document.getElementById("submit");

		if (password.value === passwordConfirm.value) {
			message.textContent = "Passwords match!";
			message.classList.remove("submit__false");
			submitButton.disabled = false;
		} else {
			message.textContent = "Passwords do not match!";
			message.classList.add("submit__false");
			submitButton.disabled = true;
		}
	}
	return (
		<section className="signup-card">
			<article className="signup-card__left">
				<header className="signup-card__left-header">
					<h1>Hello there!</h1>
					<p>Please sign up to continue</p>
				</header>
				<form className="signup-card__left-form" action="/">
					<div className="form-pair">
						<label for="firstName">First Name</label>
						<input id="firstName" type="text" placeholder="John" />
					</div>
					<div className="form-pair">
						<label for="lastName">Last Name</label>
						<input id="lastName" type="text" placeholder="Doe" />
					</div>
					<div className="form-pair">
						<label for="email">E-mail</label>
						<input
							id="email"
							type="email"
							placeholder="johndoe@example.com"
						/>
					</div>
					<div className="form-pair">
						<label for="telephone">Telephone</label>
						<input
							id="telephone"
							type="tel"
							placeholder="+54 9 11 1234 5678"
						/>
					</div>
					<div className="form-pair">
						<label for="password">Password</label>
						<input
							id="password"
							type="password"
							placeholder="Insert password"
							onKeyUp={() =>
								passwordConfirm.value.length && isMatching
							}
						/>
					</div>
					<div className="form-pair">
						<label for="passwordConfirmed">Confirm Password</label>
						<input
							id="passwordConfirmed"
							type="password"
							placeholder="Confirm password"
							onKeyUp={isMatching}
						/>
						<p id="passwordConfirmed__message"> </p>
					</div>
					<div className="form-pair">
						<input
							disabled
							id="submit"
							className="form-submit"
							type="submit"
							value="Sign up"
						/>
					</div>
				</form>
				<footer className="signup-card__left-footer">
					<div className="left-footer__grid-item">
						<p>or Sign up with</p>
					</div>
					<div className="left-footer__grid-item">
						<a className="left-footer__social-media" href="#">
							<button>
								<FaFacebookF className="facebook-icon" />
							</button>
						</a>
						<a className="left-footer__social-media" href="#">
							<button>
								<FaGoogle className="google-icon" />
							</button>
						</a>
					</div>
					<div className="left-footer__grid-item">
						<p className="left-footer__signin">
							I'm already a member!{" "}
							<span className="left-footer__signin-span">
								Sign In
							</span>
						</p>
					</div>
				</footer>
			</article>
			<article className="signup-card__right">
				<div className="right__grid-item">
					<img src={UTNBA} alt="" className="utnba-logo" />
				</div>
				<div className="right__grid-item">
					{/* <strong className="strong-utn">UTN &#183; BA</strong> */}
				</div>
				<div className="right__grid-item">
					<strong className="strong-subtitle-1">
						MÓDULO 1 &#183; REACT
					</strong>
					<strong className="strong-subtitle-2">
						TP Obligatorio No. 1
					</strong>
					<p>Pedro G. Bello</p>
				</div>
			</article>
		</section>
	);
}

export default Form;
