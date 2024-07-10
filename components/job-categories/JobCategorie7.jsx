import Link from "next/link";
import jobCatContent from "../../data/job-catergories";

const JobCategorie7 = () => {
  return (
    <>
      {jobCatContent.slice(0, 7).map((item) => (
        <div className="col-xl-auto col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <Link href="/job-list-v8" className="icon-item -type-3 px-1 ps-4 py-1 gap-3 ">
            <div className="icon-wrap">
              <div className={`icon ${item.icon}`}></div>
            </div>

            <div className="content">
              <h4>{item.catTitle}</h4>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default JobCategorie7;
