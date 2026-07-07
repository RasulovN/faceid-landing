/** Barcha sahifalar uchun xavfsizlik headerlari (Lighthouse Best Practices) */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // @splinetool paketlari ESM-only ("import" export sharti) — webpack CJS kontekstda
  // resolve qila olishi uchun transpile qilamiz (Hero'dagi 3D robot sahnasi).
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // 3D sahna fayli o'zgarmas — bir yil kesh (takroriy tashriflar tez ochiladi)
        source: "/nexbot.splinecode",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
