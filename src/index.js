export default {
  async fetch(request, env, ctx) {
    // The new assets configuration automatically serves files from the public directory
    // We just need to handle the request and let Workers serve the assets
    return env.ASSETS.fetch(request);
  },
};
