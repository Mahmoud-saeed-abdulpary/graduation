import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const FormContent = () => {
  return (
    <div className="form-inner">
      <h3>تسجيل الدخول</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>الرقم القومي</label>
          <input type="text" name="username" placeholder="الرقم القومي" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>كلمة السر</label>
          <input
            type="password"
            name="password"
            placeholder="كلمة السر"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
              تزكرني <span className="custom-checkbox"></span>
              </label>
            </div>
            <a href="#" className="pwd">
              هل نسيت كلمة السر؟
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            تسجيل الدخول
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          ليس لديك حساب؟{" "}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            تسجيل الحساب
          </Link>
        </div>

        {/* <div className="divider">
          <span>او</span>
        </div> */}

        {/* <LoginWithSocial /> */}
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
