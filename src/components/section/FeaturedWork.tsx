import { Link } from "react-router-dom";
import featuredWorkData from "../../constant/featuredData";
import Button from "../Button";
import H2 from "../H2";
import Paragraph from "../Paragraph";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  id: number;
  title: string;
  year: string;
  video: string;
  description: string;
  category: string;
}

export default function FeaturedWork() {
  return (
    <div className="bg-gray-100">
      <div className="h-full mb-2 pb-2 max-w-7xl mx-auto p-2 md:p-4">
        <div className="flex justify-between pt-4 mb-3 ">
          <h1 className="text-center md:text-start text-3xl">Featured Work</h1>
        </div>
        <div className="flex flex-col gap-4">
          {featuredWorkData.map(
            ({ title, year, video, description, category, id }) => (
              <Featured
                id={id}
                key={title}
                title={title}
                year={year}
                video={video}
                description={description}
                category={category}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

function Featured({ title, year, video, description, category, id }: Props) {
  return (
    <div className="grid grid-cols-1 md:flex  w-full gap-4 border-b-2 py-4 ">
      <video
        className=" w-[450px]  h-[300px] object-cover rounded-md shadow-xl border-slate-300"
        src={video}
        autoPlay
        muted
      />
      <div className="flex flex-col">
        <div className="flex flex-col">
          <H2 className=" font-bold p-2">{title}</H2>
          <div className="flex gap-4 items-center p-2">
            <p className="text-white text-sm bg-black px-2 rounded-full">
              {year}
            </p>{" "}
            | <p className="text-slate-500">{category}</p>
          </div>
        </div>
        <div className="p-2">
          <Paragraph className="font-normal">{description}</Paragraph>
        </div>
        <div className="p-2">
          <Link to={`/work/${id}`}>
            <Button className="text-md shadow-xl hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
              <span className="inline-flex items-center gap-3 group">
                Read More...{" "}
                <FaArrowRight className="w-6 h-6 items-center hidden group-hover:block group-hover:transition-transform  cursor-pointer" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
