import Hero from "./components/Hero";
import UseCases from "./components/UseCases";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Security from "./components/Security";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <UseCases />
      <Features />
      <HowItWorks />
      <Security />
      <TechStack />
    </>
  );
}
