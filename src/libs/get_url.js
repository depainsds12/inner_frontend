function getUrl() {
  // Check if in Vercel environment
  if (process.env.VERCEL) {
    process.env.VERCEL_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_PRODUCTION_URL}` // get production url
      : `https://${process.env.VERCEL_URL}`; // get preview url
  }

  // Fallback for local development
  return process.env.NEXTAUTH_URL;
}

export default getUrl;
