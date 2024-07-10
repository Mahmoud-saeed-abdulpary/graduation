
'use client'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import Form from "./FormContent";
import Link from "next/link";

const Register = () => {
  return (
    <div className="form-inner">
      <h3>تسجيل حساب علي منصتنا</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-6 col-6">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> عامل
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-6 col-6">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> شركة
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <Form />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <Form />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          لديك حساب؟{" "}
          <Link
            href="#"
            className="call-modal login"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            data-bs-target="#loginPopupModal"
          >
            تسجيل دخول
          </Link>
        </div>
        {/* <div className="divider">
          <span></span>
        </div> */}
        {/* <LoginWithSocial /> */}
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register;
