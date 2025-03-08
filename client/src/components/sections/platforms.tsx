import { SiDoordash, SiUbereats, SiGrubhub } from "react-icons/si";

export default function Platforms() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Supported Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          <div className="flex flex-col items-center space-y-4">
            <SiDoordash className="h-16 w-16 text-[#FF3008]" />
            <span className="text-lg font-semibold">DoorDash</span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <SiUbereats className="h-16 w-16 text-[#06C167]" />
            <span className="text-lg font-semibold">Uber Eats</span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <SiGrubhub className="h-16 w-16 text-[#F63440]" />
            <span className="text-lg font-semibold">Grubhub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
