const PrivateMessageBox = () => {
  return (
    <form className="default-form ">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <input type="text" name="username" placeholder="اسمك" required />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="رسالتك..."
            required
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one w-100"
            type="submit"
            name="submit-form"
          >
            ارسال رسالة
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default PrivateMessageBox;
