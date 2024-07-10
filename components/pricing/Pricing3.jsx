import Image from "next/image";
import Link from "next/link";

const Pricing3 = () => {
  const pricingCotent = [
    {
      id: 1,
      img: "/images/index-13/pricing/1.svg",
      type: "الباقة المجانية",
      price: "مجانا",
      duration: "0 جنيه في الشهر",
      features: [
        "نشر وظيفة واحدة فقط",
        "لا يوجد وظائف مميزة",
        "نشر الوظيفة لمدة 20 يوم فقط",
        "لا يوجد خدمة عملاء",
      ],
    },
    {
      id: 2,
      img: "/images/index-13/pricing/2.svg",
      type: "الشركات",
      price: "100 جنيه",
      duration: "في الشهر",
      features: [
        "15 وظيفة يمكن نشرها",
        "3 وظائف مميزة",
        "نشر الوظيفة لمدة 20 يوم",
        "دعم فني 24/7",
      ],
    },
    {
      id: 3,
      img: "/images/index-13/pricing/3.svg",
      type: "مميزة",
      price: "599 جنيه",
      duration: "في الشهر",
      features: [
        "100 وظيفة",
        "10 وظائف مميزة",
        "عرض الوظائف لمدة 30 يوم",
        "دعم متميز 24/7",
      ],
    },
  ];

  return (
    <>
      {pricingCotent.map((item) => (
        <div className="col-lg-4 col-md-6" key={item.id}>
          <div className="pricingCard -type-2">
            <h4 className="pricingCard__title">{item.type}</h4>
            <div className="pricingCard__price">{item.price}</div>
            <div className="pricingCard__subtitle">{item.duration}</div>

            <div className="pricingCard__img">
              <Image width={90} height={91} src={item.img} alt="images" />
            </div>


            <ul className="pricingCard__list" style={{textAlign:"right"}}>
              {item.features.map((val, i) => (
                <li key={i}>{val}</li>
              ))}
            </ul>

            <div className="pricingCard__btn">
              <Link href="/shop/cart" className="theme-btn btn-style-modern">
                اشترك الان
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing3;
