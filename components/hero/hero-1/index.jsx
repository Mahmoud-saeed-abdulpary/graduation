import SearchForm from "../../common/job-search/SearchForm";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";

const index = () => {
  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column jus col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box">
                <h3>
                  تصفح اكثر من <span className="colored">20,178</span> وظيفة و فرصة عمل 
                  <br /> فقط من اجلك 
                </h3>
                <div className="text">
                  ابحث عن وظائف, شركات , فرص عمل و عمال ماهرين
                </div>
              </div>

              {/* <!-- Job Search Form --> */}
              <div className="job-search-form  ms-5 rounded-5">
                <SearchForm />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}
            </div>
          </div>
          {/* End .col */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
