const toastDuration = 4000;

export default function({ $axios, redirect, app }) {
  $axios.onRequest(config => {
    if (process.browser) {
      config.baseURL = __BASE_URL;
    }
  });

  $axios.onError(err => {
    console.log('ERR', JSON.stringify(err))
    const code = parseInt(err.response && err.response.status);
    if (code === 401 || code === 403) return redirect("/login");

    if (err.response && err.response.data) {
      app.$toast.error(err.response.data.message).goAway(toastDuration);
      return;
    }
    app.$toast.error("There is an unknown server error").goAway(toastDuration);
  });
}