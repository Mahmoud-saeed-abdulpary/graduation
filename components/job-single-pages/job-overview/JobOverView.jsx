const JobOverView = () => {
  return (
    <div className="widget-content mb-4">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>تاريخ النشر:</h5>
          <span>منذ ساعة</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>تاريخ الاغلاق:</h5>
          <span>12/4/2024</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5>العنوان:</h5>
          <span>القاهرة, مصر</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>عنوان الوظيفة:</h5>
          <span>مصمم</span>
        </li>
        <li>
          <i className="icon icon-clock"></i>
          <h5>ايام العمل:</h5>
          <span>28 / الشهر</span>
        </li>
        {/* <li>
          <i className="icon icon-rate"></i>
          <h5>Rate:</h5>
          <span>$15 - $25 / hour</span>
        </li> */}
        <li>
          <i className="icon icon-salary"></i>
          <h5>الراتب:</h5>
          <span>6000 جنيه</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
