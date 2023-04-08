import React from "react";
import Image from "next/image";
import Result from "../../../public/results.png";
import Trust from "../../../public/trust.png";
import Speed from "../../../public/speed.png";
import Customer from "../../../public/customer.png";
import Security from "../../../public/security.png";
import Access from "../../../public/access.png";

const Feature = () => {
  return (
    <section className=" md:p-8 dark:bg-black dark:text-gray-100 bg-green-50">
      <div className="p-4 space-y-2 text-center">
        <h2 className="text-5xl font-bold py-20">We Provide ...</h2>
      </div>
      <div className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4 px-20">
          <Image src={Customer} className="h-10 w-12" alt="" />
          <h3 className="my-3 text-xl md:text-3xl font-semibold">Customers First</h3>
          <div className="space-y-1 leading-tight text-center text-[14px] md:text-lg">
            <p>
              Every decision we make is centered around our customer&apos;s need and
              convinience.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 px-20">
          <Image src={Security} className="h-10 w-12" alt="" />
          <h3 className="my-3 text-xl md:text-3xl font-semibold">Security & Safety</h3>
          <div className="space-y-1 leading-tight text-center text-[14px] md:text-lg">
            <p>
              We follow best practices and implements robust security measures
              to protect our customer&apos;s assets.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 px-20">
          <Image src={Trust} className="h-10 w-12 " alt="" />
          <h3 className="my-3 text-xl md:text-3xl font-semibold">Trust</h3>
          <div className="space-y-1 leading-tight text-center text-[14px] md:text-lg">
            <p>
              We are known to provide transparent information & honest advice to
              build trust with our customers.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 px-20">
          <Image src={Access} className="h-10 w-10" alt="" />
          <h3 className="my-3 text-xl md:text-3xl font-semibold">Accessibility</h3>
          <div className="space-y-1 leading-tight text-center text-[14px] md:text-lg">
            <p>
              We offer flexible trading options and accessibility to make it
              easier for customers to trade.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 px-20">
          <Image src={Speed} className="h-10 w-12" alt="" />
          <h3 className="my-3 text-xl md:text-3xl font-semibold">Speed & Efficiency</h3>
          <div className="space-y-1 leading-tight text-center text-[14px] md:text-lg">
            <p>
              Our fast and efficient trading services, help customers take
              advantage of market opportunities.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 px-20">
          <Image src={Result} className="h-10 w-10" alt="" />
          <h3 className="my-3 text-xl md:text-3xl font-semibold">Results</h3>
          <div className="space-y-1 leading-tight text-center text-[14px] md:text-lg">
            <p>We have better track records and provide best results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
