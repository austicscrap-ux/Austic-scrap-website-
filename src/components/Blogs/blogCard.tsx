"use client";

import { Card } from "@/components/common/UI/card";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { Blog } from "@/types/blog";
import { Calendar, Clock, Share2 } from "lucide-react";

interface BlogCardProps {
  post: Blog;
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <div className="w-full">
      <Link href={`/blog/${post?.slug}`}>
        <Card
          key={post?.slug}
          className="flex flex-col sm:flex-row p-4 sm:p-0 mb-6 sm:mb-8 border border-gray-100 sm:border-none rounded-lg sm:rounded-none shadow-sm sm:shadow-none transition-shadow duration-200"
        >
          <div className="w-full sm:w-auto sm:flex-shrink-0">
            <div className="relative w-full h-48 sm:h-[106px] sm:w-[209px] overflow-hidden rounded-md">
              <Image
                className="object-cover w-full h-full"
                alt={`Blog thumbnail ${index + 1}`}
                src={post.image}
                fill
                sizes="(max-width: 640px) 100vw, 209px"
              />
            </div>
          </div>
          <div className="sm:mt-0 sm:ml-4 md:ml-6 lg:ml-8 flex flex-col">
            <div
              className="font-sans font-semibold text-gray-800 text-lg sm:text-xl leading-relaxed sm:leading-7 line-clamp-2 hover:text-[#127749] transition-colors duration-200"
              aria-label={post.title}
            >
              {post.title}
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-6 mt-3 sm:mt-4">
              <div className="flex items-center">
                <Calendar className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px] text-[#127749] flex-shrink-0" />
                <span className="ml-1.5 sm:ml-2 font-sans font-semibold text-gray-500 text-sm sm:text-base">
                  {moment(post.createdAt).format("DD MMM YYYY")}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px] text-[#127749] flex-shrink-0" />
                <span className="ml-1.5 sm:ml-2 font-sans font-semibold text-gray-500 text-sm sm:text-base">
                  {post.readTime}
                </span>
              </div>
              <div className="flex items-center cursor-pointer group">
                <Share2 className="w-3.5 h-3.5 sm:w-[15px] sm:h-[15px] text-[#127749] flex-shrink-0 group-hover:opacity-80 transition-opacity" />
                <span className="ml-1.5 sm:ml-2 font-sans font-semibold text-gray-500 text-sm sm:text-base group-hover:text-[#127749] transition-colors">
                  Share
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};
