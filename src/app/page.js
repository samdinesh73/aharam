import LayoutOne from "@/components/Layout/LayoutOne";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import AboutOne from "@/components/Sections/About/AboutOne";
import BenefitOne from "@/components/Sections/Benefit/BenefitOne";
import benefitData from "@/data/benefit/data.json"
import SolutionOne from "@/components/Sections/Solution/SolutionOne";
import serviceData from "@/data/service/data.json"
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import CaseStudyOne from "@/components/Sections/CaseStudy/CaseStudyOne";
import caseStudyData from "@/data/case-study/data.json"
import BannerOne from "@/components/Sections/Banner/BannerOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import testimonialData from "@/data/testimonial/data.json";
import ContactOne from "@/components/Sections/Contact/ContactOne";

export default function Home() {

  function pickServicesById(ids, allServices) {
  return allServices.filter(s => ids.includes(Number(s.id)));
}

// Usage


  return (
    <>
      <LayoutOne className="-style-1">
        <SliderOne className="-style-1 lg:py-[60px] py-10" />
        <AboutOne />
        <BenefitOne classname="lg:mt-20 sm:mt-14 mt-10" data={benefitData} start={17} limit={20} />
        <SolutionOne data={serviceData} start={0} limit={6} />
        <SolutionOne data={pickServicesById([31, 42, 45], serviceData)} />
        <ServiceOne data={serviceData} start={6} limit={16} />
        <CaseStudyOne classname={'bg-linear lg:mt-20 sm:mt-14 mt-10 lg:py-20 sm:py-14 py-10'} data={caseStudyData} start={0} limit={5} />
        <BannerOne />
        <BrandOne classname={'bg-white lg:py-20 md:py-14 py-10'} />
        <TestimonialOne data={testimonialData} />
        <ContactOne classname={'bg-linear-blue'} />
      </LayoutOne>
    </>
  );
}
