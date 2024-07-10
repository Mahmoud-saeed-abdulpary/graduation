import dynamic from "next/dynamic";
import DashboardHome from "@/components/dashboard-pages/candidates-dashboard/dashboard";

export const metadata = {
  title: "Candidates Dashboard || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <DashboardHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
