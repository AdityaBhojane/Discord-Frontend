import React from "react";

interface FormWrapperProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const FormWrapper = ({ title, children }:FormWrapperProps) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;