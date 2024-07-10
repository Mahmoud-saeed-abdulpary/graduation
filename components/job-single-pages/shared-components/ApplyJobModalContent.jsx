import Link from "next/link";

const ApplyJobModalContent = () => {
  return (
    <form className="default-form job-apply-form">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="uploading-outer apply-cv-outer">
            <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                name="attachments[]"
                accept="image/*, application/pdf"
                id="upload"
                multiple=""
                required
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload"
              >
                ارفع ال CV (doc, docx, pdf)
              </label>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="رسالتك"
            required
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="input-group checkboxes square">
            <input type="checkbox" name="remember-me" id="rememberMe" />
            <label htmlFor="rememberMe" className="remember">
              انت موافق علي{" "}
              <span data-bs-dismiss="modal">
                <Link href="/terms">
                  سياسة الاستخدام والخصوصية و الشروط والاحكام
                </Link>
              </span>
              <span className="custom-checkbox"></span>
            </label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one w-100"
            type="submit"
            name="submit-form"
          >
            التقديم علي الوظيفة
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;
