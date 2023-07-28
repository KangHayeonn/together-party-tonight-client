/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
      domains: ['k.kakaocdn.net'],
    },
};

module.exports = nextConfig;
