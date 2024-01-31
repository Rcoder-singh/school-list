import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] py-2">
          <h1 className="text-6xl font-bold text-gray-700">
            Welcome to{" "}
            <span className="font-black text-black">Next School</span>
          </h1>

          <span className="mt-2 text-[#1e1e1e]">
            A school management system built with Next.js and MySQL.
          </span>

          <div className="mt-4">
            <Button asLink href="/showSchool">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
