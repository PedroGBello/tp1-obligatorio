import "./Form.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

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
		<article className="signup-card">
			<header>
				<h1>Hello there!</h1>
				<p>Please sign up to continue</p>
			</header>
			<form className="signup-card__form" action="/">
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
			<footer className="signup-card__footer">
				<div className="footer__grid-item">
					<p>or Sign up with</p>
				</div>
				<div className="footer__grid-item">
					<a className="footer__social-media" href="#">
						<button>
							<FaFacebookF className="facebook-icon" />
						</button>
					</a>
					<a className="footer__social-media" href="#">
						<button>
							<FaGoogle className="google-icon" />
						</button>
					</a>
				</div>
				<div className="footer__grid-item">
					<p className="footer__signin">
						I'm already a member! <span>Sign In</span>
					</p>
				</div>
			</footer>
		</article>
	);
}

export default Form;
