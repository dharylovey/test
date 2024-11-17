import { CiMail } from "react-icons/ci";
import { RiMapPin2Fill } from "react-icons/ri";
import H1 from "../components/H1";
import { useWorkData } from "../hook/useWorkData";

export default function About() {
  const workData = useWorkData();
  const { skills } = workData;
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <header className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">
          About Me
        </h1>
      </header>

      <main className="mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-52 w-full object-cover md:w-52"
              src={workData.profileImg}
              alt="Profile picture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-[#00A8CC] font-semibold">
              {workData.work}
            </div>
            <H1>{workData.name}</H1>
            <p className="mt-4 text-lg text-gray-500">{workData.description}</p>
          </div>
        </div>

        <div className="px-8 py-6 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">Details</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-gray-600">
              <RiMapPin2Fill className="h-5 w-5 mr-2" />
              {workData.address}
            </div>
            <div className="flex items-center text-gray-600">
              <CiMail className="h-5 w-5 mr-2" />
              {workData.email}
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          <h3 className="text-lg font-medium text-gray-900">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-white bg-black rounded-full text-sm hover:translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
