module.exports = {
  apps: [
    {
      name: "JCWD-2000-01", // Format JCWD-{batchcode}-{groupnumber}
      script: "./index.js",
      env: {
        NODE_ENV: "production",
        PORT: 8000,
      },
      time: true,
    },
  ],
};
