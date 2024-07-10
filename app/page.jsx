import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home-1";

export const metadata = {
  title: "في الخدمة | الرئيسية",
  description: "description",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
