import AboutVideo from "@/components/candidates-single-pages/shared-components/AboutVideo";
import Contact from "@/components/candidates-single-pages/shared-components/Contact";
import GalleryBox from "@/components/candidates-single-pages/shared-components/GalleryBox";
import JobSkills from "@/components/candidates-single-pages/shared-components/JobSkills";
import Social from "@/components/candidates-single-pages/social/Social";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import FooterDefault from "@/components/footer/common-footer";
import DefaulHeader2 from "@/components/header/DefaulHeader2";
import MobileMenu from "@/components/header/MobileMenu";
import candidateResume from "@/data/candidateResume";
import candidates from "@/data/candidates";
import dynamic from "next/dynamic";
import Image from "next/image";

export const metadata = {
	title: "Candidate Single Dynamic V2 || Superio - Job Borad React NextJS Template",
	description: "Superio - Job Borad React NextJS Template",
};

const CandidateSingleDynamicV2 = ({ params }) => {
	const id = params.id;
	const candidate = candidates.find((item) => item.id == id) || candidate[0];

	return (
		<>
			{/* <!-- Header Span --> */}
			<span className="header-span"></span>

			<LoginPopup />
			{/* End Login Popup Modal */}

			<DefaulHeader2 />
			{/* <!--End Main Header --> */}

			<MobileMenu />
			{/* End MobileMenu */}

			{/* <!-- Job Detail Section --> */}
			<section className="candidate-detail-section">
				<div className="candidate-detail-outer">
					<div className="auto-container">
						<div className="row">
							<div className="content-column col-lg-8 col-md-12 col-sm-12">
								<div className="candidate-block-five">
									<div className="inner-box">
										<div className="content">
											<figure className="image">
												<Image width={100} height={100} src={candidate?.avatar} alt="avatar" />
											</figure>
											<h4 className="name">{candidate?.name}</h4>

											<ul className="candidate-info">
												<li className="designation">{candidate?.designation}</li>
												<li>
													<span className="icon flaticon-map-locator"></span>
													{candidate?.location}
												</li>
												<li>
													<span className="icon flaticon-money"></span>
													{candidate?.hourlyRate} جنيه / الشهر
												</li>
												{/* <li>
                          <span className="icon flaticon-clock"></span> Member
                          Since,Aug 19, 2020
                        </li> */}
											</ul>

											<ul className="post-tags">
												{candidate?.tags?.map((val, i) => (
													<li key={i}>{val}</li>
												))}
											</ul>
										</div>
									</div>
								</div>
								{/*  <!-- Candidate block Five --> */}

								<div className="job-detail">
									<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق</p>
									<p>لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق</p>

									{/* <div className="video-outer">
										<h4>معلومات عني</h4>
										<AboutVideo />
									</div> */}
									{/* <!-- About Video Box --> */}

									{/* <!-- Candidate Resume Start --> */}
									{candidateResume.map((resume) => (
										<div className={`resume-outer ${resume.themeColor}`} key={resume.id}>
											<div className="upper-title">
												<h4>{resume?.title}</h4>
											</div>

											{/* <!-- Start Resume BLock --> */}
											{resume?.blockList?.map((item) => (
												<div className="resume-block" key={item.id}>
													<div className="inner">
														<span className="name">{item.meta}</span>
														<div className="title-box">
															<div className="edit-box">
																<span className="year">{item.year}</span>
															</div>
															<div className="info-box">
																<h3>{item.name}</h3>
																<span>{item.industry}</span>
															</div>
														</div>
														<div className="text">{item.text}</div>
													</div>
												</div>
											))}

											{/* <!-- End Resume BLock --> */}
										</div>
									))}
									{/* <!-- Candidate Resume End --> */}

									<div className="portfolio-outer">
										<div className="row">
											<GalleryBox />
										</div>
									</div>
									{/* <!-- Portfolio --> */}
								</div>
								{/* End job-details */}
							</div>
							{/* End .content-column */}

							<div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
								<aside className="sidebar">
									<div className="btn-box">
										<a className="theme-btn btn-style-one" href="/images/sample.pdf" download>
											تحميل السيرة الذاتية
										</a>
										<button className="bookmark-btn">
											<i className="flaticon-bookmark"></i>
										</button>
									</div>

									<div className="sidebar-widget">
										<div className="widget-content">
											<ul className="job-overview">
												<li>
													<i className="icon icon-calendar"></i>
													<h5>الخبرة:</h5>
													<span>0-2 سنة</span>
												</li>

												<li>
													<i className="icon icon-expiry"></i>
													<h5>العمر:</h5>
													<span>28-33 سنة</span>
												</li>
{/* 
												<li>
													<i className="icon icon-rate"></i>
													<h5>الراتب الحالي:</h5>
													<span>11K - 15K</span>
												</li>

												<li>
													<i className="icon icon-salary"></i>
													<h5>الراتب المتوقع:</h5>
													<span>26K - 30K</span>
												</li> */}

												<li>
													<i className="icon icon-user-2"></i>
													<h5>الجنس:</h5>
													<span>ذكر</span>
												</li>

												<li>
													<i className="icon icon-language"></i>
													<h5>اللغة:</h5>
													<span>الانجليزية, الالمانية, الفرنسية</span>
												</li>

												{/* <li>
													<i className="icon icon-degree"></i>
													<h5>المؤهل الدراسي:</h5>
													<span>دكتوراة</span>
												</li> */}
											</ul>
										</div>
									</div>
									{/* End .sidebar-widget conadidate overview */}

									{/* <div className="sidebar-widget social-media-widget">
										<h4 className="widget-title">وسائل التواصل الاجتماعي</h4>
										<div className="widget-content">
											<div className="social-links">
												<Social />
											</div>
										</div>
									</div> */}

									{/* End .sidebar-widget social-media-widget */}

									<div className="sidebar-widget">
										<h4 className="widget-title">المهارات</h4>
										<div className="widget-content">
											<ul className="job-skills">
												<JobSkills />
											</ul>
										</div>
									</div>
									{/* End .sidebar-widget skill widget */}

									<div className="sidebar-widget contact-widget">
										<h4 className="widget-title">تواصل معي</h4>
										<div className="widget-content">
											<div className="default-form">
												<Contact />
											</div>
										</div>
									</div>
									{/* End .sidebar-widget contact-widget */}
								</aside>
								{/* End .sidebar */}
							</div>
							{/* End .sidebar-column */}
						</div>
					</div>
				</div>
				{/* <!-- job-detail-outer--> */}
			</section>
			{/* <!-- End Job Detail Section --> */}

			<FooterDefault footerStyle="alternate5" />
			{/* <!-- End Main Footer --> */}
		</>
	);
};

export default dynamic(() => Promise.resolve(CandidateSingleDynamicV2), {
	ssr: false,
});
