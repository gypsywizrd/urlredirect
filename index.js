export default {
  async fetch(request) {
    const targetM3U = "https://node-5d763f4c.4587.website/6aa61dbc.59af03bci178c3152.e779.59d39725/free.live.espn/960x540.2419k/media.m3u8";
    const headers = new Headers();
    headers.set('location', targetM3U);
    headers.set('access-control-allow-origin', '*');
    return new Response(null, {
      status: 302,
      headers: headers
    });
  }
};
