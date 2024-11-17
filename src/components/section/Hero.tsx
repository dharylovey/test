import Button from "../Button";
import H1 from "../H1";
import H2 from "../H2";
import Paragraph from "../Paragraph";
import { MdOutlineArrowDownward } from "react-icons/md";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-10  max-w-7xl mx-auto md:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="order-2 md:order-1 flex flex-col items-center">
          <div className="space-y-2 pt-8 p-2 md:p-0">
            <H1 className="text-center md:text-start">Hi I'm Dharyl</H1>
            <H2 className="text-center md:text-start">
              {" "}
              A Full Stack Web Developer
            </H2>
            <Paragraph className="text-center md:text-start ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              consequatur magni ab sint! Aut quisquam ex, molestiae maiores ut
              quae! Sed alias quo a ipsa iure porro facere ipsam ad!
            </Paragraph>
            <div className="pt-6 flex justify-center md:justify-normal ">
              <Button className="shadow-xl hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                <span className="inline-flex items-center gap-3 group">
                  Download Resume{" "}
                  <MdOutlineArrowDownward className="w-6 h-6 items-center hidden group-hover:block" />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dah8qhqok/image/upload/v1722095997/my_portfolio_asset/my_photo_ctgmjd.webp"
            alt="Dharyl Almora"
            className="h-48 w-48 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-80 lg:w-80 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
