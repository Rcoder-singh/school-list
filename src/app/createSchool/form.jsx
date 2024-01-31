"use client";

import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";

const CreateSchoolForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/school", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("School created successfully");
      return;
    }
  };

  return (
    <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-1">
        <label htmlFor="name" className="block font-semibold font-sm">
          School <span className="text-red-600">&#42;</span>
        </label>
        <input
          type="text"
          id="name"
          required
          className="bg-zinc-100 w-full outline-none border p-2 rounded-md hover:bg-zinc-200"
          placeholder="Enter school name"
          {...register("name")}
        />
      </div>

      <div className="flex gap-4">
        <div className="space-y-1 flex-1">
          <label htmlFor="city" className="block font-semibold font-sm">
            City <span className="text-red-600">&#42;</span>
          </label>
          <input
            type="text"
            placeholder="Enter city"
            id="city"
            className="bg-zinc-100 w-full outline-none border p-2 rounded-md hover:bg-zinc-200"
            {...register("city")}
          />
        </div>

        <div className="space-y-1 flex-1">
          <label htmlFor="state" className="block font-semibold font-sm">
            State <span className="text-red-600">&#42;</span>
          </label>
          <input
            type="text"
            id="state"
            placeholder="Enter state"
            className="bg-zinc-100 w-full outline-none border p-2 rounded-md hover:bg-zinc-200"
            {...register("state")}
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="contact" className="block font-semibold font-sm">
          Contact <span className="text-red-600">&#42;</span>
        </label>
        <input
          type="text"
          id="contact"
          required
          placeholder="Enter contact number"
          className="bg-zinc-100 w-full outline-none border p-2 rounded-md hover:bg-zinc-200"
          {...register("contact")}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="image" className="block font-semibold font-sm">
          Image <span className="text-red-600">&#42;</span>
        </label>
        <input
          type="url"
          id="image"
          required
          placeholder="Enter image url"
          className="bg-zinc-100 w-full outline-none border p-2 rounded-md hover:bg-zinc-200"
          {...register("image")}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block font-semibold font-sm">
          Email <span className="text-red-600">&#42;</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          required
          className="bg-zinc-100 w-full outline-none border p-2 rounded-md hover:bg-zinc-200"
        />
      </div>

      <div>
        <Button type="submit" full>
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateSchoolForm;
