import React from "react";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  return (
    <div className="lg:mt-[200px] mt-[50px] sm:mt-[100px] gap-y-4 flex flex-col w-[92%] mm:w-[88%] mx-auto ">
      <div className="flex gap-3 mb-6 items-center">
        <div className="w-[8px] h-[43px] bg-mainColor " />
        <p className="text-[#313131] text-[24px] md:text-[32px] uppercase lg:text-[40px] font-semibold">
          отзывы
        </p>
      </div>

      <ReviewItem />
    </div>
  );
};

export default Reviews;
