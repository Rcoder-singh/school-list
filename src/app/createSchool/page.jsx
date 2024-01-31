import CreateSchoolForm from "./form";

const Page = () => {
  return (
    <div className="max-w-lg mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">Create School</h1>
        <span className="text-gray-500 mt-2">
          Fill out the form below to create a new school.
        </span>
      </div>
      <CreateSchoolForm />
    </div>
  );
};

export default Page;
