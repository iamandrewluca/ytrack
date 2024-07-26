(async () => {
	console.log('__ytrack_is_running__');

	setInterval(() => {
		var video = document.querySelector("video");

		if (!video) return;
		if (video.paused) return;

		const url = new URL(location.href)
		const seekTime = parseInt(video.currentTime);
		url.searchParams.set("t", `${seekTime}s`);

		history.replaceState(undefined, "", url);
	}, 5000);
})();
