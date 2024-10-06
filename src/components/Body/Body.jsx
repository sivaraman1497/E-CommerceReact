import SideBar from "./SideBar/SideBar";
import BannerSlider from "../Banner/BannerSlider";
import FlashSale from "./FlashSale/FlashSale";

export default function Body() {
  return (
    <>
        <div className="body-container p-7">
            <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-1">
                <div className="row-span-0 col-span-1 w-52">
                    <SideBar />
                </div>
                <div className="row-span-0 col-span-2 w-100">
                    <BannerSlider />
                </div>
            </div>
        </div>

        <div>
            <FlashSale/>
        </div>
    </>
  );
}
