import Link from "next/link";

const Categories = () => {
  const catContent = [
    "التعليم",
    "معلومات عامة",
    "المقابلات الشخصية",
    "استخدام المنصة",
    "الوظائف",
    "التعلم",
    "المهارات",
    "احداث مهمة",
  ];
  return (
    <>
      {catContent.map((item, i) => (
        <p key={i}>
          <Link href="#">{item}</Link>
        </p>
      ))}
    </>
  );
};

export default Categories;
