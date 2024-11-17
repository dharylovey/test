import { useNavigate, Navigate, useParams } from "react-router-dom";
import { useFeatured } from "../hook/useFeatured";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

export default function Work() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return <Navigate to="/not-found" />;

  const featuredWork = useFeatured();

  const work = featuredWork.find((work) => work.id === Number(id));

  if (!work) return <Navigate to="/not-found" />;
  const { originalVideo, title, year, description, category } = work;
  return (
    <div className="flex flex-col min-h-[80vh] max-w-7xl mx-auto p-2 md:p-4">
      <div>
        <Button
          className="text-xs shadow-xl bg-black hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
      <div className="w-full py-4">
        <video
          className=" w-[450px]  h-[300px] md:w-full md:h-full object-cover rounded-md shadow-xl border-slate-300"
          src={originalVideo}
          autoPlay
          controls
          muted
        />
      </div>
      <H1>{title}</H1>
      <div className="flex gap-4 items-center p-2">
        <p className="text-white text-sm bg-black px-2 rounded-full">{year}</p>{" "}
        | <p className="text-slate-500">{category}</p>
      </div>
      <div className="p-2">
        <Paragraph className="font-normal">{description}</Paragraph>
      </div>
    </div>
  );
}
