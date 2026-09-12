export default {
  async fetch(request) {
    const targetM3U = "https://node-8bba18be.4587.website/6aa62a5e.40b27e8bi178c3152.e7bd.f1c21336/free.live.espn/960x540.2419k/media.m3u8";
    const headers = new Headers();
    headers.set('location', targetM3U);
    headers.set('access-control-allow-origin', '*');
    return new Response(null, {
      status: 302,
      headers: headers
    });
  }
};
