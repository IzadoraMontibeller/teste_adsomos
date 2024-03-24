import MenuSuperior from "@/components/MenuSuperior";
import Rodape from "@/components/Rodape";
import SectionPriceImage from "@/components/SectionPriceImage";
import SectionShopNow from "@/components/SectionShopNow";
import Newslatter from "@/components/SectionNewslatter";
import FeaturedProducts from "@/components/SectionFeaturedProducts";
import SectionAbout from "@/components/SectionAbout";

function Home() {
  return (
    <>
      <MenuSuperior />
      <SectionShopNow />
      <FeaturedProducts />
      <Newslatter />
      <SectionPriceImage />
      <SectionAbout/>
      <Rodape />
    </>
  )
}

export default Home;
