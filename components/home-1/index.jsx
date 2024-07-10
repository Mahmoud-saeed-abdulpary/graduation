import Link from "next/link";
// import About from "../about/About";
// import AppSection from "../app-section/AppSection";
// import Blog from "../blog/Blog";
// import Partner from "../common/partner/Partner";
// import Funfact from "../fun-fact-counter/Funfact";
// import JobCategorie1 from "../job-categories/JobCategorie1";
// import Testimonial from "../testimonial/Testimonial";
// import FeaturedBlock3 from "../block/FeaturedBlock3";
// import Block7 from "../block/Block7";
// import Block6 from "../block/Block6";
// import AppSection3 from "../app-section/AppSection3";
// import Partner2 from "../common/partner/Partner2";
// import JobFilterTab2 from "../job-featured/JobFilterTab2";
// import TopCompany3 from "../top-company/TopCompany3";
// import AddBlock from "../block/AddBlock";
// import Testimonial2 from "../testimonial/Testimonial2";
// import RegBanner from "../block/RegBanner";
import CallToAction from "../call-to-action/CallToAction";
import DefaulHeader2 from "../header/DefaulHeader2";
import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import Hero1 from "../hero/hero-1";
import JobFeatured1 from "../job-featured/JobFeatured1";
import TopCompany from "../top-company/TopCompany";
import Candidates from "../candidates/Candidates";
import Pricing3 from "../pricing/Pricing3";
import JobCategorie7 from "../job-categories/JobCategorie7";
import Image from "next/image";
import JobCategorie5 from "../job-categories/JobCategorie5";
import RegBanner2 from "../block/RegBanner2";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero1 />
      {/* End Hero Section */}
      
      <section className="layout-pt-120 layout-pb-60 border-bottom-none">
        <div className="bg-shape -bottom -right js-rellax">
          <Image
            width={213}
            height={289}
            src="/images/index-11/shapes/1.png"
            alt="image"
          />
        </div>
        {/* End bg-shape */}

        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>تصفح خدماتنا </h2>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie5 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}


      <section className="layout-pt-120 pb-20">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="sect-title">
                <h2 className="fw-700">تصفح الوظائف وفرص العمل حسب الاقسام</h2>
                <div className="text mt-9">
                  2000 متاحة - 253 وظيفة تم نشرها اليومء
                </div>
              </div>
            </div>
            {/* End sectitle */}
            <div className="col-auto">
              <a href="#" className="button-icon -arrow text-dark-blue">
                عرض الكل
                <span className="fa fa-angle-left ms-1"></span>
              </a>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-flex pt-50 overflow-x-scroll overflow-hidden" data-aos="fade-up">
            <JobCategorie7 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Job Categories --> */}

      <section className="job-section">
        <div className="auto-container">
          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>
          <div className="btn-box">
            <Link
              href="/job-list-v1"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">عرض جميع الوظائف</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Job Featured Section */}
      
      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <RegBanner2 />
          </div>
        </div>
      </section>
      {/* <!-- End Registeration Banners --> */}

      <section className="top-companies">
        <div className="auto-container">
          <div className="sec-title">
            <h2>اكبر الشركات المسجلة لدينا</h2>
            <div className="text">
              بعض من الشركات التي نشرت العديد من الوظائف خلال السنين الماضية
            </div>
          </div> 

          <div className="carousel-outer" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}





      <section className="layout-pt-120 layout-pb-120 section-bg-color">
        <div className="section-bg-color__item -full -very-light-blue"></div>

        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>العمال المميزين</h2>
            <div className="text">
              بعض من عمالنا الاعلي تقيما علي المنصة 
              <br />
              نتطلع دائما لأضافة المزيد من العمال الي هذه القائمة
            </div>
          </div>
          {/* End sec-title */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="candidates-carousel default-dots">
              <Candidates />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Candidates Section --> */}

      {/* <AppSection3 /> */}
      {/* <!-- End App Section --> */}

      <section className="layout-pt-60 layout-pb-120">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="sec-title -type-2 text-center">
                <h2>اختر الباقة المناسبة لك وابدأ بتوظيف امهر العمال</h2>
                <div className="text">
                   بالاشتراك في باقاتنا المدفوعة تساهم في تحسين الخدمة لدينا وتتيح لك مميزات اخري كثيرة حسب كل باقة 
                  هدفنا هو الاستمرار في ايصالكم بعمال مهرة
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row grid-base pricing3_hover" data-aos="fade-up">
            <Pricing3 />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Pricing Section --> */}
      

      <div className="py-5">
      <CallToAction />
      </div>
      {/* <!-- End Call To Action --> */}
      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
