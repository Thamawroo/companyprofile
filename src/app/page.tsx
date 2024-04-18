import { Features } from "../components/ui/Features";
import { Hero } from "../components/ui/Hero";
import { OurStory } from "../components/ui/OurStory";
import Testimonial from "../components/ui/Testimonial";
import { TeamsPage } from "../components/ui/TeamsPage";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <TeamsPage numberOfMembers={10} />
      <Features />
      <Testimonial />
    </>
 );
}
