"use client";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import Loading from "@/components/common/loading"; // Import the Loading component

export default function CustomerReview() {
  const [loading, setLoading] = useState(true); // Create loading state

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;

    // Set loading to false when the script is loaded
    script.onload = () => {
      setLoading(false);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative  w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] 2xl:w-[85%] rounded-2xl mx-auto">
      <MaxWidthWrapper>
        <div className="flex flex-wrap -mx-5">
          <div className="w-full">
            {loading ? ( // Conditional rendering based on loading state
              <Loading />
            ) : (
              <div
                className="elfsight-app-8f896f1a-8865-48f3-baba-2e3cc5f5a338"
                data-elfsight-app-lazy
              ></div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
