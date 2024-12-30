/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["cdn.dummyjson.com"]
    // }

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
            port: '',
            pathname: '**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
