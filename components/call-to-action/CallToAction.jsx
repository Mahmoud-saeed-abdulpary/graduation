import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h2>تبحث عن عمال مهرة؟</h2>
              <div className="text">
                قم بنشر وظيفتك الان وقم بعرضها علي الاف العمال الماهرين علي منصتنا <br />
                احصل علي العامل المناسب الان
              </div>
              <a href="#" className="theme-btn btn-style-one bg-blue">
                <span className="btn-title">قم بنشر وظيفة الان</span>
              </a>
            </div>
          </div>
          {/* End .content-column */}

          <div
            className="image-column"
            style={{ backgroundImage: " url(images/resource/image-1.png)" }}
          >
            <figure className="image">
              <Image
                width={417}
                height={328}
                src="/images/resource/image-1.png"
                alt="resource"
              />
            </figure>
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
