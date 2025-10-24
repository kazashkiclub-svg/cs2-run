/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // включаем статическую сборку
  images: {
    unoptimized: true, // отключаем оптимизацию картинок (иначе export упадет)
  },
};

export default nextConfig;
