const Notification = () => {
  return (
    <ul className="notification-list">
    <li>
      <span className="icon flaticon-briefcase"></span>
      <strong>محمود السعيد</strong> قدم علي الوظيفة
      <span className="colored"> نقاش</span>
    </li>
    {/* End li */}

    <li className="success">
      <span className="icon flaticon-briefcase"></span>
      <strong>اسامه شرارة</strong> قدم علي الوظيفة
      <span className="colored"> فلاح</span>
    </li>
    {/* End li */}

    <li>
      <span className="icon flaticon-briefcase"></span>
      <strong>احمد هاني</strong> قدم علي الوظيفة
      <span className="colored"> فلاح </span>
    </li>
    {/* End li */}
    {/* End li */}
  </ul>
  );
};

export default Notification;
