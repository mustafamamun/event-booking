export const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["PUT", "POST", "GET", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Content-Length",
    "Authorization",
    "Accept",
    "X-Requested-With",
    "x-access-token"
  ]
};
