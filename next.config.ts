import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["import"],
    quietDeps: true,
  },
  reactCompiler: true,
};

export default nextConfig;
