

'use client'

import Link from "next/link";
import jobs from "../../../data/job-featured";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addDatePosted,
  addDestination,
  addKeyword,
  addLocation,
  addPerPage,
  addSalary,
  addSort,
  addTag,
  clearExperience,
  clearJobType,
} from "../../../features/filter/filterSlice";
import {
  clearDatePostToggle,
  clearExperienceToggle,
  clearJobTypeToggle,
} from "../../../features/job/jobSlice";
import Image from "next/image";

const FilterJobsBox = () => {
  const { jobList, jobSort } = useSelector((state) => state.filter);
  const {
    keyword,
    location,
    destination,
    category,
    jobType,
    datePosted,
    experience,
    salary,
    tag,
  } = jobList || {};

  const { sort, perPage } = jobSort;

  const dispatch = useDispatch();

  // keyword filter on title
  const keywordFilter = (item) =>
    keyword !== ""
      ? item.jobTitle.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      : item;

  // location filter
  const locationFilter = (item) =>
    location !== ""
      ? item?.location
          ?.toLocaleLowerCase()
          .includes(location?.toLocaleLowerCase())
      : item;

  // location filter
  const destinationFilter = (item) =>
    item?.destination?.min >= destination?.min &&
    item?.destination?.max <= destination?.max;

  // category filter
  const categoryFilter = (item) =>
    category !== ""
      ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      : item;

  // job-type filter
  const jobTypeFilter = (item) =>
    jobType?.length !== 0 && item?.jobType !== undefined
      ? jobType?.includes(
          item?.jobType[0]?.type.toLocaleLowerCase().split(" ").join("-")
        )
      : item;

  // date-posted filter
  const datePostedFilter = (item) =>
    datePosted !== "all" && datePosted !== ""
      ? item?.created_at
          ?.toLocaleLowerCase()
          .split(" ")
          .join("-")
          .includes(datePosted)
      : item;

  // experience level filter
  const experienceFilter = (item) =>
    experience?.length !== 0
      ? experience?.includes(
          item?.experience?.split(" ").join("-").toLocaleLowerCase()
        )
      : item;

  // salary filter
  const salaryFilter = (item) =>
    item?.totalSalary?.min >= salary?.min &&
    item?.totalSalary?.max <= salary?.max;

  // tag filter
  const tagFilter = (item) => (tag !== "" ? item?.tag === tag : item);

  // sort filter
  const sortFilter = (a, b) =>
    sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

  let content = jobs
    ?.filter(keywordFilter)
    ?.filter(locationFilter)
    ?.filter(destinationFilter)
    ?.filter(categoryFilter)
    ?.filter(jobTypeFilter)
    ?.filter(datePostedFilter)
    ?.filter(experienceFilter)
    ?.filter(salaryFilter)
    ?.filter(tagFilter)
    ?.sort(sortFilter)
    .slice(perPage.start, perPage.end !== 0 ? perPage.end : 11)
    ?.map((item) => (
      <div className="job-block" key={item.id}>
        <div className="inner-box">
          <div className="content">
            <span className="company-logo">
              <Image width={50} height={49} src={item.logo} alt="item brand" />
            </span>
            <h4>
              <Link href={`/job-single/${item.id}`}>{item.jobTitle}</Link>
            </h4>

            <ul className="job-info">
              <li>
                <span className="icon flaticon-briefcase"></span>
                {item.company}
              </li>
              {/* compnay info */}
              <li>
                <span className="icon flaticon-map-locator"></span>
                {item.location}
              </li>
              {/* location info */}
              <li>
                <span className="icon flaticon-clock-3"></span> {item.time}
              </li>
              {/* time info */}
              <li>
                <span className="icon flaticon-money"></span> {item.salary}
              </li>
              {/* salary info */}
            </ul>
            {/* End .job-info */}

            <ul className="job-other-info">
              {item?.jobType?.map((val, i) => (
                <li key={i} className={`${val.styleClass}`}>
                  {val.type}
                </li>
              ))}
            </ul>
            {/* End .job-other-info */}
          </div>
        </div>
      </div>
      // End all jobs
    ));

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  // clear all filters
  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addDestination({ min: 0, max: 100 }));
    dispatch(addCategory(""));
    dispatch(clearJobType());
    dispatch(clearJobTypeToggle());
    dispatch(addDatePosted(""));
    dispatch(clearDatePostToggle());
    dispatch(clearExperience());
    dispatch(clearExperienceToggle());
    dispatch(addSalary({ min: 0, max: 20000 }));
    dispatch(addTag(""));
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };

  return (
    <>
      <div className="ls-switcher align-items-center">
        <div className="show-result w-100 d-flex align-items-center  justify-content-between">
          <div className="show-1023">
            <button
              type="button"
              className="theme-btn toggle-filters "
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> فلترة
            </button>
          </div>
          {/* Collapsible sidebar button */}

          <div className="text">
            <strong>{content?.length}</strong> وظائف
          </div>
        </div>
        {/* End show-result */}

        <div className="sort-by">
          {keyword !== "" ||
          location !== "" ||
          destination?.min !== 0 ||
          destination?.max !== 100 ||
          category !== "" ||
          jobType?.length !== 0 ||
          datePosted !== "" ||
          experience?.length !== 0 ||
          salary?.min !== 0 ||
          salary?.max !== 20000 ||
          tag !== "" ||
          sort !== "" ||
          perPage.start !== 0 ||
          perPage.end !== 0 ? (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{ minHeight: "45px", marginBottom: "15px" }}
            >
              ازالة الفلاتر
            </button>
          ) : undefined}

          <select
            value={sort}
            className="chosen-single form-select pe-5"
            onChange={sortHandler}
          >
            <option value="">فرز حسب</option>
            <option value="asc">الاحدث</option>
            <option value="des">الاقدم</option>
          </select>
          {/* End select */}

          <select
            onChange={perPageHandler}
            className="chosen-single form-select ms-3 pe-5"
            value={JSON.stringify(perPage)}
          >
            <option
              value={JSON.stringify({
                start: 0,
                end: 0,
              })}
            >
              الجميع
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 15,
              })}
            >
              15 في الصفحة
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 20,
              })}
            >
              20 في الصفحة
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 30,
              })}
            >
              30 في الصفحة
            </option>
          </select>
          {/* End select */}
        </div>
      </div>
      {/* End top filter bar box */}
      {content}
      {/* <!-- List Show More --> */}
      <div className="ls-show-more">
        <p>عرض 5 وظائف من 485 وظيفة</p>
        <div className="bar">
          <span className="bar-inner" style={{ width: "40%" }}></span>
        </div>
        <button className="show-more">عرض المزيد</button>
      </div>
    </>
  );
};

export default FilterJobsBox;
