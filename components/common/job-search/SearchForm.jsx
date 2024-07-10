'use client'

import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit} className="rounded-full" >
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="اسم عامل , حرفة,وظيفة, شركة"
          />
        </div>
        {/* <!-- Form Group --> */}

        <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
          <input type="text" name="field_name" placeholder="مدينة او منطقة" />
          <span className="icon flaticon-map-locator"></span>
        </div>
        {/* <!-- Form Group --> */}
        
        <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
          <button
            type="submit"
            className="theme-btn btn-style-four rounded-5"
            onClick={() => router.push("/job-list")}
          >
            <span className="btn-title">بحث</span>
          </button>
        </div>
      </div> 
      {/* End .row */}
    </form>
  );
};

export default SearchForm;
