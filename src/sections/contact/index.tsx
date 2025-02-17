import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { cn } from "@/lib/utils";

import { toast } from "sonner";

import { serviceID, publicKey, templateID } from "@/env";
import emailjs from "emailjs-com";

function Contact() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      const templateParams = {
        name: formData.name + " " + formData.lastName,
        email: formData.email,
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey).then(
        () => {
          toast.success("Thanks for reaching out!", {
            description: "I'll get back to you soon.",
            position: "top-center",
          });
          setFormData({ name: "", lastName: "", email: "" });
        },
        () => {
          toast.error("Failed to send message. Please try again later.", {
            position: "top-center",
          });
        }
      );
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
      <h1 className="mb-20 text-center text-6xl lg:text-8xl text-transparent font-outline-2 font-extrabold">
        Let's get in <span className="text-white">touch</span>
        <span className="text-[#49DEFF]">.</span>
      </h1>
      <div className="mb-8 flex flex-wrap justify-center lg:justify-start">
        <div className="w-full lg:w-1/2 lg:pr-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-end gap-12"
          >
            <div>
              <FloatingLabelInput
                id="name"
                label="Name"
                className={cn("w-full", errors.name && "animate-shake")}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1 animate-in duration-400 slide-in-from-top-2">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <FloatingLabelInput
                id="lastName"
                label="Last Name"
                className={cn("w-full", errors.lastName && "animate-shake")}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1 animate-in duration-400 slide-in-from-top-2">
                  {errors.lastName}
                </p>
              )}
            </div>
            <div>
              <FloatingLabelInput
                id="email"
                label="Email"
                className={cn("w-full", errors.email && "animate-shake")}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 animate-in duration-400 slide-in-from-top-2">
                  {errors.email}
                </p>
              )}
            </div>
            <Button className="bg-white text-background transition-all duration-200 hover:scale-105 hover:shadow-md hover:text-white hover:bg-[#49DEFF] cursor-pointer w-full lg:w-1/2 lg:self-end rounded-none">
              Let's Connect
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
