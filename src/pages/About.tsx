import { CiMail } from "react-icons/ci";
import { RiMapPin2Fill } from "react-icons/ri";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <header className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">
          About Me
        </h1>
      </header>

      <main className="mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="/placeholder.svg?height=192&width=192"
              alt="Profile picture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Software Developer
            </div>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Jane Doe
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Passionate about creating elegant solutions to complex problems.
              With over 5 years of experience in full-stack development, I
              specialize in building scalable web applications using modern
              technologies.
            </p>
          </div>
        </div>

        <div className="px-8 py-6 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900">Details</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-gray-600">
              <RiMapPin2Fill className="h-5 w-5 mr-2" />
              San Francisco, CA
            </div>
            <div className="flex items-center text-gray-600">
              <CiMail className="h-5 w-5 mr-2" />
              jane.doe@example.com
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          <h3 className="text-lg font-medium text-gray-900">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["JavaScript", "React", "Node.js", "Python", "Docker", "AWS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
