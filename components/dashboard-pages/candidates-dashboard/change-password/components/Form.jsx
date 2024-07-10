const Form = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>كلمة المرور القديمة</label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>لمة المرور الجديدة</label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>تأكيد كلمة المرور</label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            تحديث
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
