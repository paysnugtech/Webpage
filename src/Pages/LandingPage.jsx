import React from "react";
import HeroSection from "../Components//HeroSection";
import FinancialSolutionsHeader from "../Components/FinancialSolutionsHeader";
import ReusableComponent from "../Components/ReusableComponent";
import CardCarousel from "../Components/CardCarousel";
import GetStarted from "../Components/GetStarted";
import OurPartners from "../Components/OurPartners";
import ReadyToGetStarted from "../Components/ReadyToGetStarted";
import Image2 from "../assets/images/image2.svg";
import Image3 from "../assets/images/image3.svg";
import Image4 from "../assets/images/image4.svg";
import Image5 from "../assets/images/image5.svg";
import Image6 from "../assets/images/image6.svg";

function LandingPage() {
  const items = [
    {
      text: "This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made Paysnag my main payment and I’m gonna refer all my friends!",
      author: "ADEKOLA ADEBOKUN",
    },
    {
      text: "This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made Paysnag my main payment and I’m gonna refer all my friends!",
      author: "ADEKOLA ADEBOKUN",
    },
    {
      text: "This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made Paysnag my main payment and I’m gonna refer all my friends!",
      author: "ADEKOLA ADEBOKUN",
    },
    {
      text: "This is the best banking app! I’m enjoying seamless banking plus the free transfers to other banks is a thing of joy. This is what I call freedom. I’ve made Paysnag my main payment and I’m gonna refer all my friends!",
      author: "JELEEL AJETUNMOBI",
    },
  ];
  return (
    <>
      <div className="background-container">
        <HeroSection />
      </div>
      <FinancialSolutionsHeader />
      <ReusableComponent
        title="Reliable Money Transfer Solution"
        description="Our streamlined process ensures that your money reaches its destination swiftly and securely. Whether you're at home or on the go, initiating transfers is as easy as a few clicks. Experience the freedom of managing your finances on your terms with Paysnug."
        imageSrc={Image2}
      />
      <ReusableComponent
        title="Simplify Bill Payments"
        description="Paysnug enables you to effortlessly control your finances and seamlessly manage bill payments from anywhere, at any time. Experience the convenience and beauty of Paysnug as it becomes your reliable ally in shaping a harmonious financial landscape."
        imageSrc={Image3}
        reverse={true}
      />
      <ReusableComponent
        title="Confidently Secure Your Finances"
        description="Rest easy knowing that your financial security is our top priority. Our app employs robust security measures to protect your sensitive information and transactions. With advanced encryption technology, your data is safeguarded at every step. Download our app today and enjoy the peace of mind that comes with secure financial management."
        imageSrc={Image4}
      />
      <ReusableComponent
        title="Your money, managed with care "
        description="When you use any of Paysnug's services, enjoy peace of mind with our expert financial management, designed to help you maximize your savings and investments effortlessly."
        imageSrc={Image5}
        reverse={true}
      />
      <div className="container mt-5 text-center">
        <h4 className="mb-4">Don't just take our word for it</h4>
        <CardCarousel items={items} />
        <GetStarted />
      </div>
      <ReusableComponent
        title="Take Charge of Your Finances"
        description="Experience the ultimate financial freedom with our intuitive app. Effortlessly manage your finances, pay bills, and stay in control wherever you are. 
 Download now and embrace the ease of taking charge of your financial journey."
        imageSrc={Image6}
        reverse={true}
      />
      <OurPartners />
      <ReadyToGetStarted />
    </>
  );
}

export default LandingPage;
