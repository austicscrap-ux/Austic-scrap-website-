module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/blog/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const POST = async (req)=>{
    // await ConnectDB();
    try {
        // const body = await req.json();
        // const isVerified = await verifyUser(req, body);
        // if (!isVerified) {
        //   return NextResponse.json({ message: "User not authorized" }, { status: 401 });
        // }
        // let _id = body?._id || new Types.ObjectId();
        // const existingBlog = await Blog.findOne({
        //   $and: [
        //     {
        //       $or: [
        //         { title: body?.title },
        //         { slug: body?.title?.split(" ").join("-").toLowerCase() },
        //       ],
        //     },
        //     { _id: { $ne: _id } },
        //   ],
        // });
        // if (existingBlog) {
        //   return NextResponse.json({ message: "Blog details already exist" }, { status: 400 });
        // }
        // let blogData: any = {};
        // const generatedSlug = body?.title
        //   ?.toLowerCase()
        //   .replace(/[^a-zA-Z0-9 .]/g, "")
        //   .replace(/[^a-zA-Z0-9]+/g, "-");
        // blogData = {
        //   ...body,
        //   slug: body?.slug || generatedSlug,
        //   _id,
        // };
        // const newBlog = await Blog.findOneAndUpdate({ _id }, blogData, {
        //   upsert: true,
        //   new: true,
        // });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Blog creation disabled (Frontend Only)"
        }, {
            status: 200
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Error occurred!",
            error: err.message
        }, {
            status: 500
        });
    }
};
const GET = async (req)=>{
    // await ConnectDB();
    try {
        /*
    const { searchParams } = new URL(req.url);
    const pageLimit = searchParams.get("pageLimit");
    const page = searchParams.get("page");
    const visibility = searchParams.get("visibility");
    const term = searchParams.get("term");

    const limit = pageLimit ? Number(pageLimit) : 9;
    const skip = page ? (Math.max(Number(page), 1) - 1) * limit : 0;

    const query: any = { isDeleted: false };
    if (visibility) query.visibility = visibility;
    if (term) {
      query.$or = [
        { title: { $regex: term, $options: "i" } },
        { description: { $regex: term, $options: "i" } },
      ];
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 }).limit(limit).skip(skip);
    const count = await Blog.countDocuments(query);
    */ return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: [],
            count: 0,
            totalPages: 0,
            message: "API fetching disabled (Frontend Only)"
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Error occurred!",
            error: err.message
        }, {
            status: 500
        });
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__710abe6b._.js.map