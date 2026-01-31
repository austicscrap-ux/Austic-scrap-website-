"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/common/UI/card";
import { Blog } from "@/types/blog";
import moment from "moment";
import styles from "@/styles/blog-content.module.css";
import { Calendar, Clock, Share2 } from "lucide-react";

interface BlogDetailsProps {
  blog: Blog | null;
}

export const Details = ({ blog }: BlogDetailsProps) => {
  if (!blog) {
    return (
      <div className="w-full min-h-screen bg-white">
        <div className="px-4 sm:px-8 md:px-12 lg:px-[86px] py-[40px] sm:py-[50px] lg:py-[60px] div-2">
          <div className="flex flex-col items-center">
            <h2 className="font-sans font-normal text-[#313131] text-[30px] leading-normal">
              Blog not found
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-[86px] py-[40px] sm:py-[50px] lg:py-[60px] div-2">
        <div className="flex flex-col items-center">
          <h2 className="font-sans font-bold text-[#313131] text-[30px] lg:text-[40px] leading-tight text-center max-w-[800px]">
            {blog.title}
          </h2>

          <div className="flex mt-[30px] space-x-8">
            <div className="flex items-center">
              <Calendar className="w-[15px] h-[15px] text-[#127749]" />
              <span className="ml-2 font-sans font-semibold text-[#7b868f] text-base">
                {moment(blog.createdAt).format("DD MMM YYYY")}
              </span>
            </div>

            <div className="flex items-center">
              <Clock className="w-[15px] h-[15px] text-[#127749]" />
              <span className="ml-2 font-sans font-semibold text-[#7b868f] text-base">
                {blog.readTime}
              </span>
            </div>

            <div className="flex items-center cursor-pointer group">
              <Share2 className="w-[15px] h-[15px] text-[#127749] group-hover:opacity-80 transition-opacity" />
              <span className="ml-2 font-sans font-semibold text-[#7b868f] text-base group-hover:text-[#127749] transition-colors">
                Share
              </span>
            </div>
          </div>

          <div className="mt-[40px] lg:max-w-[800px] w-full aspect-video relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-[60px] max-w-[800px] mx-auto">
          <div
            className={`${styles.blogContent} prose lg:prose-xl max-w-none text-gray-700 leading-relaxed`}
            dangerouslySetInnerHTML={{ __html: blog.description || "" }}
          />
        </div>
      </div>
    </div>
  );
};
