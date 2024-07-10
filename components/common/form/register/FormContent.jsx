const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>الرقم القومي</label>
        <input type="text" name="username" placeholder="الرقم القومي" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>كلمة السر</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="كلمة السر"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          تسجيل حساب
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
