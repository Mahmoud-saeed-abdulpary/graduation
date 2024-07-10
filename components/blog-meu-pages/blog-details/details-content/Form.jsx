const Form = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="response"></div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>اسمك</label>
          <input
            type="text"
            name="username"
            className="username"
            placeholder="اسمك*"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>البريد الالكتروني</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="بريدك الالكتروني*"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>الموضوع</label>
          <input
            type="text"
            name="subject"
            className="subject"
            placeholder="الموضوع *"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>رسالتك</label>
          <textarea
            name="message"
            placeholder="قم بكتابة رسالتك..."
            required=""
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            id="submit"
            name="submit-form"
          >
            ارسال
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default Form;
