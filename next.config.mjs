/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
            },
            {
                protocol: "https",
                hostname: "img.logo.dev",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "d112y698adiu2z.cloudfront.net",
            },
            {
                protocol: "https",
                hostname: "play-lh.googleusercontent.com",
            },
        ],
    },
};

export default nextConfig;
