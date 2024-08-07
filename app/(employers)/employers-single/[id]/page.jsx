import LoginPopup from "@/components/common/form/login/LoginPopup";
import RelatedJobs from "@/components/employer-single-pages/related-jobs/RelatedJobs";
import JobDetailsDescriptions from "@/components/employer-single-pages/shared-components/JobDetailsDescriptions";
import PrivateMessageBox from "@/components/employer-single-pages/shared-components/PrivateMessageBox";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import MobileMenu from "@/components/header/MobileMenu";
import employersInfo from "@/data/topCompany";
import dynamic from "next/dynamic";
import Image from "next/image";

export const metadata = {
  title:
    "Employers Single Dyanmic V1 || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const EmployersSingleV1 = ({ params }) => {
  const id = params.id;

  const employer =
    employersInfo.find((item) => item.id == id) || employersInfo[0];

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <section className="job-detail-section">
        {/* <!-- Upper Box --> */}
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <Image
                      width={100}
                      height={100}
                      src={employer?.img}
                      alt="logo"
                    />
                  </span>
                  <h4>{employer?.name}</h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {employer?.location}
                    </li>
                    {/* compnay info */}
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {employer?.jobType}
                    </li>
                    {/* location info */}
                    <li>
                      <span className="icon flaticon-telephone-1"></span>
                      {employer?.phone}
                    </li>
                    {/* time info */}
                    <li>
                      <span className="icon flaticon-mail"></span>
                      {employer?.email}
                    </li>
                    {/* salary info */}
                  </ul>
                  {/* End .job-info */}

                  <ul className="job-other-info">
                    <li className="time">الوظائف المفتوحة – {employer.jobNumber}</li>
                  </ul>
                  {/* End .job-other-info */}
                </div>
                {/* End .content */}

                <div className="btn-box">
                  <button
                    className="theme-btn btn-style-one"
                    data-bs-toggle="modal"
                    data-bs-target="#privateMessage"
                  >
                    ارسال رسالة
                  </button>
                  <button className="bookmark-btn m-0 me-2">
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>
                {/* End btn-box */}

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="privateMessage"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="apply-modal-content modal-content">
                      <div className="text-center">
                        <h3 className="title">
                          ارسال رسالة الي {employer.name}
                        </h3>
                        <button
                          type="button"
                          className="closed-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* End modal-header */}

                      <PrivateMessageBox />
                      {/* End PrivateMessageBox */}
                    </div>
                    {/* End .send-private-message-wrapper */}
                  </div>
                </div>
                {/* End .modal */}
              </div>
            </div>
            {/* <!-- Job Block --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        {/* <!-- job-detail-outer--> */}
        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                {/*  job-detail */}
                <JobDetailsDescriptions />
                {/* End job-detail */}

                {/* <!-- Related Jobs --> */}
                <div className="related-jobs">
                  <div className="title-box">
                    <h3>وظائف اخري متاحة في الشركة</h3>
                    <div className="text">
                      15 وظيفة
                    </div>
                  </div>
                  {/* End .title-box */}

                  <RelatedJobs />
                  {/* End RelatedJobs */}
                </div>
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      {/*  compnay-info */}
                      <ul className="company-info mt-0">
                        <li>
                          القسم: <span>هندسة البرمجيات</span>
                        </li>
                        {/* <li>
                          حجم الشركة: <span>501-1,000</span>
                        </li> */}
                        <li>
                          تاريخ الانشاء: <span>2011</span>
                        </li>
                        <li>
                          {/* Phone: <span>{employer?.phone}</span> */}
                        </li>
                        <li>
                          البريد الالكتروني: <span>{employer?.email}</span>
                        </li>
                        <li>
                          العنوان: <span>{employer?.location}</span>
                        </li>
                        {/* <li>
                          وسائل التواصل الاجتماعي:
                          <Social />
                        </li> */}
                      </ul>
                      {/* End compnay-info */}

                      {/* <div className="btn-box">
                        <a
                          href="#"
                          className="theme-btn btn-style-three"
                          style={{ textTransform: "lowercase" }}
                        >
                          الموقع الالكتروني
                          {employer?.name}
                        </a>
                      </div> */}
                      {/* btn-box */}
                    </div>
                  </div>
                  {/* End company-widget */}

                  {/* <div className="sidebar-widget">
                    
                    <h4 className="widget-title">Job Location</h4>
                    <div className="widget-content">
                      <div style={{ height: "300px", width: "100%" }}>
                        <MapJobFinder />
                      </div>
                    </div>
                    
                  </div> */}
                  {/* End sidebar-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(EmployersSingleV1), {
  ssr: false,
});
