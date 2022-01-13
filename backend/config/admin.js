module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '56e4767bec5616fc1983896ac9905b17'),
  },
});
