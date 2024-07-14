/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"mobisoftinfotech.com"
            }
        ]
    }
};

export default nextConfig;
