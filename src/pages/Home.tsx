import H1 from "../components/H1";
import H2 from "../components/H2";
import Paragraph from "../components/Paragraph";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="order-2 md:order-1 flex flex-col items-center">
          <div className="space-y-2 ">
            <H1>Hi I'm Dharyl</H1>
            <H2> A Full Stack Web Developer</H2>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              consequatur magni ab sint! Aut quisquam ex, molestiae maiores ut
              quae! Sed alias quo a ipsa iure porro facere ipsam ad!
            </Paragraph>
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
