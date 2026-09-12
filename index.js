export default {
  async fetch(request) {
    const targetM3U = "https://node-9b5feb01.4587.website/6aa52efb.3be55244i178c3152.e6b1.46add6e2/free.live.espn/960x540.2419k/media.m3u8";
    const headers = new Headers();
    headers.set('location', targetM3U);
    headers.set('access-control-allow-origin', '*');
    return new Response(null, {
      status: 302,
      headers: headers
    });
  }
};
