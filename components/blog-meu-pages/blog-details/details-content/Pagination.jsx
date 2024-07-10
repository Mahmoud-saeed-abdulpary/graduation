const Pagination = () => {
  return (
    <>
      <div className="prev-post">
        <span className="icon flaticon-back"></span>
        <span className="title">السابق</span>
        <h5>
          <a href="#">كيفية التقديم علي الوظائف في المنصة</a>
        </h5>
      </div>
      <div className="next-post">
        <span className="title">التالي</span>
        <span className="icon flaticon-next"></span>
        <h5>
          <a href="#">شرح كامل للمنصة و كيفية استخدام لوحة التحكم</a>
        </h5>
      </div>
    </>
  );
};

export default Pagination;
