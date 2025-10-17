import React from "react";
import HeroSolutions from "../components/solutions/Hero.solutions";
import Pillars from "../components/solutions/Pillars";
import ProcessFlow from "../components/solutions/ProcessFlow";
import KPIs from "../components/solutions/KPIs";
import UseCases from "../components/solutions/UseCases";
import FAQs from "../components/solutions/FAQs";
import CTAContact from "../components/solutions/CTAContact";

export default function Solutions() {
  return (
    <>
      <HeroSolutions />
      <Pillars />
      <ProcessFlow />
      <KPIs />
      <UseCases />
      <FAQs />
      <CTAContact />
    </>
  );
}

