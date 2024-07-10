import Link from "next/link.js";
import jobs from "../../../../../data/job-featured.js";
import Image from "next/image.js";

const JobAlertsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>الوظائف من الشركات المفضلة</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>اخر 6 اشهر</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>العنوان</th>
                  <th>التفاصيل</th>
                  <th>تاريخ الانشاء</th>
                  <th>الخيارات</th>
                </tr>
              </thead>

              <tbody>
                {jobs.slice(4, 8).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <Image
                                width={50}
                                height={49}
                                src={item.logo}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link href={`/job-single/${item.id}`}>
                                {item.jobTitle}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                النصر للسيارات
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                المنصورة , مصر
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>الموارد البشرية,مبتدئ</td>
                    <td>12/12/2023 </td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobAlertsTable;
