/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'xjjgfrumxwkrggavbrbc.supabase.co',
                port: '',
            },
        ],
    },
};

export default nextConfig;
