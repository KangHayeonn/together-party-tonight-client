/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
      domains: ['k.kakaocdn.net', 'topato-github-actions-s3-bucket.s3.ap-northeast-2.amazonaws.com'],
    },
};

module.exports = nextConfig;
