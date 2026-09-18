export default {
  async fetch(request) {
    const targetM3U = "https://node-5d763f4c.4587.website/6aad218e.b4aa2c09i178c3152.f439.69c8b0fa/free.live.espn/960x540.2419k/media.m3u8";
    const headers = new Headers();
    headers.set('location', targetM3U);
    headers.set('access-control-allow-origin', '*');
    return new Response(null, {
      status: 302,
      headers: headers
    });
  }
};
