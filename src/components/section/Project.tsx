import { useState } from "react";
import projectData from "../../constant/data";
import Card from "../Card";

interface Props {
  title: string;
  date: string;
  platform: string;
  description: React.ReactNode;
}

export default function ProjectSection() {
  const [viewAll, setViewAll] = useState(false);

  const viewProject = viewAll ? projectData : projectData.slice(0, 3);

  return (
    <div className="bg-[#EDF7FA]">
      <div className="h-full  py-2 max-w-7xl mx-auto px-2 pb-6 md:p-4">
        <div className="flex justify-between pt-4 mb-3">
          <h1 className="text-center md:text-start text-3xl">Projects</h1>
          <p
            className="text-center md:text-end text-[#00A8CC] hover:underline underline-offset-4 cursor-pointer"
            onClick={() => setViewAll(!viewAll)}
          >
            {viewAll ? "View Less" : "View All"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {viewProject.map(({ title, date, platform, description }) => (
            <Project
              key={title}
              title={title}
              date={date}
              platform={platform}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Project({ title, date, platform, description }: Props) {
  return (
    <Card title={title} date={date} platform={platform}>
      {description}
    </Card>
  );
}
