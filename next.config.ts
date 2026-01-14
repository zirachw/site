import withLinaria from "next-with-linaria";

const config = {
  experimental: {
    cssChunking: false,
  },
  linaria: {
    // Disable performance optimization if needed
    fastCheck: false,
  },
};

export default withLinaria(config);
