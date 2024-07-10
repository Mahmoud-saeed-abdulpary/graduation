import Image from "next/image";

const ImageBox = () => {
  return (
    <div className="image-box">
      <figure className="main-image " data-aos="fade-in" data-aos-delay="500">
        <Image
          width={486}
          height={589}
          layout="responsive"
          src="/images/home/hero.png"
          alt="hero image"
        />
      </figure>
      {/* hero image */}
      {/* <!-- Info BLock One --> */}
      <div className="info_block" data-aos="fade-in" data-aos-delay="1000">
        <span className="icon flaticon-email-3"></span>
        <p>
          احصل علي فرصة عمل<br />
          بكل سهولة
        </p>
      </div>
      {/* <!-- Info BLock Two --> */}
      <div className="info_block_two" data-aos="fade-in" data-aos-delay="2000">
        <p>اكثر من 10 الاف عامل علي منصتنا</p>
        <div className="image">
          <Image
            width={206}
            height={53}
            src="/images/resource/multi-peoples.png"
            alt="mulit people"
          />
        </div>
      </div>
      {/* <!-- Info BLock Three --> */}
      <div
        className="info_block_three"
        data-aos="fade-in"
        data-aos-delay="1500"
      >
        <span className="icon flaticon-briefcase"></span>
        <p>افضل الادوات المساعدة</p>
        <span className="sub-text">للشركات</span>
        <span className="right_icon fa fa-check"></span>
      </div>
      {/* <!-- Info BLock Four --> */}
      <div className="info_block_four" data-aos="fade-in" data-aos-delay="2500">
        <span className="icon flaticon-file"></span>
        <div className="inner">
          <p>سجل كعامل الان</p>
          <span className="sub-text">لن يستغرق الامر اكثر من دقيقة</span>
        </div>
      </div>{" "}
    </div>
  );
};

export default ImageBox;
