import HorizontalScroll from "@/components/HorizontalScroll";
import Navbar from "@/components/Navbar";
import ThemeController from "@/components/ThemeController";
import HeroPanel from "@/components/panels/HeroPanel";
import AboutPanel from "@/components/panels/AboutPanel";
import WorkPanel from "@/components/panels/WorkPanel";
import ExperiencePanel from "@/components/panels/ExperiencePanel";
import YouTubePanel from "@/components/panels/YouTubePanel";
import ContactPanel from "@/components/panels/ContactPanel";

export default function Home() {
  return (
    <HorizontalScroll
      panelCount={6}
      overlay={
        <>
          <Navbar />
          <ThemeController />
        </>
      }
    >
      <HeroPanel />
      <AboutPanel />
      <WorkPanel />
      <ExperiencePanel />
      <YouTubePanel />
      <ContactPanel />
    </HorizontalScroll>
  );
}
