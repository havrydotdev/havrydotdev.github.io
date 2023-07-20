/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
