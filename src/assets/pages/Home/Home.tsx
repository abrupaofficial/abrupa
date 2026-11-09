import AnnouncementBar from "../../components/layout/AnnouncementBar";
import Header from "../../components/layout/Header";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import NewArrivals from "../../components/home/NewArrivals";
import FeaturedBanner from "../../components/home/FeaturedBanner";
import FeaturedCollection from "../../components/home/FeaturedCollection";
import BrandStory from "../../components/home/BrandStory";
import WhyAbrupa from "../../components/home/WhyAbrupa";
import Newsletter from "../../components/home/Newsletter";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <Categories />
        <NewArrivals />
        <FeaturedBanner />
        <FeaturedCollection />
        <BrandStory />
        <WhyAbrupa />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default Home;