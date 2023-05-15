import Header from "./pages/Header";
import './index.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPageData } from "./redux/pageInfoSlice";
import WelcomeImg from "./pages/welcomePage/WelcomeImg";
import WelcomeText from "./pages/welcomePage/WelcomeText";
import PrivGallery from "./pages/welcomePage/PrivGallery";
import PodcastPage from "./pages/podcast/PodcastText";
import PodcastText from "./pages/podcast/PodcastText";
import PodcastBottomImg from "./pages/podcast/PodcastBottomImg";
import PodcastRightImg from "./pages/podcast/PodcastRightImg";
import LinkPageLeft from "./pages/links/LinkPageLeft";
import LinkPageRight from "./pages/links/LinkPageRight";
import Footer from "./pages/footer/Footer";

export default function App() {
  const dispatch = useDispatch()
  const pageData = useSelector((state) => state.pageInfo.pageData)

  console.log("pageData", pageData)

  useEffect(() => {
    dispatch(getPageData())
  }, [dispatch])

  return (
    <>
      <Header />
      <WelcomeImg />
      <WelcomeText />
      <PrivGallery />
      <div
        className="w-11/12 p-[20px] md:p-[40px] xl:p-[110px] mx-auto mt-12 rounded-lg h-auto grid grid-cols-2 gap-4"
        style={{ background: 'linear-gradient(295.39deg, #D2D2D2 0%, #EFEFEF 94.8%)' }}
      >
        <PodcastText />
        <PodcastRightImg />
        <PodcastBottomImg />
      </div>

      <div className="grid grid-cols-1  xl:grid-cols-2  gap-5 px-5 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 mx-2 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 h-auto">
        <LinkPageLeft />
        <LinkPageRight />
      </div>

      <Footer />
    </>
  )
}