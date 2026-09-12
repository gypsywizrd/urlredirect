export default {
  async fetch(request) {
    const targetM3U = "https://node-8bba18be.4587.website/6aa51d39.4cd32240i178c3152.e5aa.550c5658/free.live.espn/960x540.2419k/media.m3u8";
    const headers = new Headers();
    headers.set('location', targetM3U);
    headers.set('access-control-allow-origin', '*');
    return new Response(null, {
      status: 302,
      headers: headers
    });
  }
};
