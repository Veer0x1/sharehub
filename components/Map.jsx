import React from "react";
import Head from "next/head";

const Map = () => {
  return (
    <div className=" 2xl:container p-16 dark:bg-black bg-green-50">
      <div className="flex h-[60vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
        {/* <span className="dark:text-white">Content</span> */}
        <div className="w-full h-full">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            className="rounded-xl p-2"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Varansi%20India+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
