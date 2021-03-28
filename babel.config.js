module.exports = {
  env: {
    test: {
      presets: ["next/babel"],
    },
    development: {
      presets: ["next/babel"],
      plugins: [
        [
          "styled-components",
          {
            ssr: true,
            displayName: true,
          },
        ],
      ],
    },
    production: {
      presets: ["next/babel"],
      plugins: [
        [
          "styled-components",
          {
            ssr: true,
            displayName: false,
          },
        ],
      ],
    },
  },
};
