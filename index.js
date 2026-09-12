export default {
  async fetch(request) {
    const targetM3U = "https://example.com/your-long-m3u-link.m3u8";
    const headers = new Headers();
    headers.set('location', targetM3U);
    headers.set('access-control-allow-origin', '*');
    return new Response(null, {
      status: 302,
      headers: headers
    });
  }
};
