module.exports = {
  apps: [
    {
      name: 'postcss',
      script: './node_modules/.bin/postcss ./styles/*.css --base styles --dir ./app/styles',
      autorestart: false,
      watch: ['./tailwind.config.js', './app/**/*.ts', './app/**/*.tsx', './styles/*.css'],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development'
      }
    },
    {
      name: 'remix',
      script: 'node -r ./node_modules/dotenv/config ./node_modules/.bin/remix dev',
      ignore_watch: ['.'],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        PORT: '4234'
      }
    }
  ]
};
