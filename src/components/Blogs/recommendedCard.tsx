"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/common/UI/card";
import { Blog } from "@/types/blog";
import moment from "moment";
import { Calendar, Clock } from "lucide-react";

export const RecommendedCard = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Card key={blog.id} className="border-none shadow-none p-0">
        <CardContent className="p-0 space-y-2">
          <Link
            href={`/blog/${blog.slug}`}
            className="font-semibold text-base text-[#313131] font-['Open_Sans',Helvetica] leading-7"
          >
            {blog.title}
          </Link>
          <div className="flex items-center space-x-5">
            <div className="flex items-center">
              <Calendar className="w-[15px] h-[15px] text-[#127749]" />
              <span className="ml-2 font-semibold text-sm text-[#7b868f] font-['Open_Sans',Helvetica] leading-6">
                {moment(blog.createdAt).format("DD MMM YYYY")}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-[15px] h-[15px] text-[#127749]" />
              <span className="ml-2 font-semibold text-sm text-[#7b868f] font-['Open_Sans',Helvetica] leading-6">
                {blog.readTime}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
