"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      const templateParams = {
        name: formData.name + " " + formData.lastName,
        email: formData.email,
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(templateParams),
      });

      if (!response.ok) {
        console.log(response);
        toast.error("Something went wrong!", {
          description: "Please try again later.",
        });
        setLoading(false);
        return;
      }

      toast.success("Thanks for reaching out!", {
        description: "Check your inbox to continue the conversation.",
      });
      setFormData({ name: "", lastName: "", email: "" });
      setLoading(false);
    }
  };

  const validateForm = (data: typeof formData) => {
    const errors: typeof data = { name: "", lastName: "", email: "" };

    if (!data.name) {
      errors.name = "Name is required.";
    }
    if (!data.lastName) {
      errors.lastName = "Last Name is required.";
    }

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format.";
    }

    return errors;
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section id="contact" className="py-4 my-20">
      <h1 className="mb-20 text-center text-[56px] lg:text-8xl text-transparent text-stroke-white font-extrabold font-poppins">
        Let&apos;s get in <span className="text-white">touch</span>
        <span className="text-cblue">.</span>
      </h1>
      <div className="mb-8 flex flex-wrap justify-center lg:justify-start">
        <div className="w-full lg:w-1/2 lg:pr-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-end gap-12"
          >
            <div>
              <Input
                id="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
            </div>
            <div>
              <Input
                id="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
            </div>
            <div>
              <Input
                id="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <button
              className={cn(
                "h-9 bg-white text-background transition-all duration-200 hover:scale-105 hover:shadow-md hover:text-white hover:bg-cblue cursor-pointer w-full lg:w-1/2 lg:self-end rounded-none font-mono",
                loading &&
                  "opacity-50 cursor-not-allowed hover:scale-100 hover:bg-white"
              )}
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <LoadingSpinner className="text-background" />
                </div>
              ) : (
                "Let's Connect"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
