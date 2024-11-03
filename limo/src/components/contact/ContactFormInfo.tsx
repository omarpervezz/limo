"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import plain from "/public/contact/contact3.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  agreeToPolicy: boolean;
}

const ContactFormInfo: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToPolicy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div>
      <form ref={form}>
        <div className="flex gap-4">
          <div className="w-full">
            <label className="font-medium text-xs">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-xs">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <div className="w-full">
            <label className="font-medium text-xs">Email</label>
            <input
              type="email"
              name="email"
              placeholder="test@gmail.com"
              className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-xs">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+0215864545"
              className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Write your Subject"
            className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs">Message</label>
          <textarea
            name="message"
            placeholder="Write your Message"
            className="w-full border-b border-gray-400 pt-2 mt-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8 flex gap-3">
          <input
            type="checkbox"
            name="agreeToPolicy"
            checked={formData.agreeToPolicy}
            onChange={handleChange}
          />
          <label className="text-base font-normal">
            I agree to your{" "}
            <Link href="#" className="text-[#60D66A] underline">
              privacy policy
            </Link>
          </label>
        </div>

        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-t from-[#20B038] to-[#60D66A] rounded-md text-gray-100 shadow-sm text-base font-medium"
          >
            Send Message
          </button>
        </div>

        <div className="flex justify-end">
          <Image
            src={plain}
            alt="img"
            width={100}
            height={100}
            className="me-16"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactFormInfo;
