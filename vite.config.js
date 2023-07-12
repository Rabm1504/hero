import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  build: {
    esbuild: {
      jsxFactory: 'React.createElement',
      jsxInject: `import React from 'react'`,
    },
  },
};
