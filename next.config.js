/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    target: 'serverless',
};

module.exports = nextConfig;
