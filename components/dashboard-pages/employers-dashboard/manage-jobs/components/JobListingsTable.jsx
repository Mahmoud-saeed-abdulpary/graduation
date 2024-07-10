import Link from "next/link";
import jobs from "../../../../../data/job-featured.js";
import Image from "next/image.js";

const JobListingsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>الوظائف</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>اخر 6 اشهر</option>
            <option>اخر 12 شهر</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>العنوان</th>
                <th>طلبات التوظيف</th>
                <th>تاريخ الانشاء - الانتهاء</th>
                <th>الحالة</th>
                <th>خيارات</th>
              </tr>
            </thead>

            <tbody>
              {jobs.slice(0, 4).map((item) => (
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
                              الشرقية للبط
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              الشرقية,مصر
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="applied">
                    <a href="#">50 طلب تم تقديمة</a>
                  </td>
                  <td>
                    27/12/2023 <br />
                    27/12/2024
                  </td>
                  <td className="status">نشط</td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
                        <li>
                          <button data-text="عرض">
                            <span className="la la-eye"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="رفض">
                            <span className="la la-pencil"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="حذف">
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
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;
