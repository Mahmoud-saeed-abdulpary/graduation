import CallToActions from "../components/CallToActions";
import DatePosted from "../components/DatePosted";
import ExperienceLevel from "../components/ExperienceLevel";
import JobType from "../components/JobType";
import SalaryRangeSlider from "../components/SalaryRangeSlider";
import Tag from "../components/Tag";

const FilterSidebar = () => {
    return (
        <div className="inner-column">
            <div className="filters-outer">
                <button
                    type="button"
                    className="btn-close text-reset close-filters show-1023"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
                {/* End .close filter */}

                {/* <div className="switchbox-outer">
                    <h4>نوع الوظيفة</h4>
                    <JobType />
                </div> */}
                {/* <!-- Switchbox Outer --> */}

                <div className="checkbox-outer">
                    <h4>تاريخ النشر</h4>
                    <DatePosted />
                </div>
                {/* <!-- Checkboxes Ouer --> */}

                {/* <div className="checkbox-outer">
                    <h4>الخبرة</h4>
                    <ExperienceLevel />
                </div> */}
                {/* <!-- Checkboxes Ouer --> */}

                {/* <div className="filter-block">
                    <h4>المرتب</h4>

                    <SalaryRangeSlider />
                </div> */}
                {/* <!-- Filter Block --> */}

                {/* <div className="filter-block">
                    <h4>الكلمات المفتاحية</h4>
                    <Tag />
                </div> */}
                {/* <!-- Filter Block --> */}
            </div>
            {/* Filter Outer */}

            <CallToActions />
            {/* <!-- End Call To Action --> */}
        </div>
    );
};

export default FilterSidebar;
