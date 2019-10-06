module.exports = {
  apps : [
    {
      name: 'Discovery Services',
      script: 'server.js',
      instances: 1,
      autorestart: true,
      watch: false,
    },
    {
      name: 'Database Service',
      script: 'services/databaseService.js',
      instances: 1,
      autorestart: true,
      watch: false,
    },
    {
      name: 'Any Service',
      script: 'services/anyService.js',
      instances: 1,
      autorestart: true,
      watch: false,
    }
  ],
};
