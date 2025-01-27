import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome to Excel2Report
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-2xl">
        Transform your Excel data into beautifully formatted reports with ease.
      </p>
    </div>
  );
}
