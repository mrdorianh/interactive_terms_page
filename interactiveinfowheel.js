<script>
var $j = $.noConflict(true);
var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// true for mobile device
	isMobile = true;
}

//Only on desktop
if (!isMobile) {
	

	var fadeVal = 0.18;
	var maxOpacity = 1;
	var picWidth = $j("#terms-photo-section").outerWidth();



	var termpics = ["term-pic-00", "term-pic-01", "term-pic-02", "term-pic-03", "term-pic-04", "term-pic-05", "term-pic-06", "term-pic-07", "term-pic-08", "term-pic-09", "term-pic-10", "term-pic-11", "term-pic-12"];
	//resize photos
	termpics.forEach(function (item, index) {
		var pic = document.getElementById(item);
		pic.style.width = picWidth.toString() + "px";
		pic.style.opacity = maxOpacity;
	})

	var ts1 = document.getElementById("ts1");
	ts1.addEventListener("mouseover", handleHoverS1);
	ts1.addEventListener("mouseout", handleHoverOut);
	var ts2 = document.getElementById("ts2");
	ts2.addEventListener("mouseover", handleHoverS2);
	ts2.addEventListener("mouseout", handleHoverOut);
	var ts3 = document.getElementById("ts3");
	ts3.addEventListener("mouseover", handleHoverS3);
	ts3.addEventListener("mouseout", handleHoverOut);


	var tsections = [ts1, ts2, ts3];
	// 	Terms 1-3
	function handleHoverS1() {
		fadeAllExcept(ts1);
		termpics.forEach(function (item, index) {
			if (index > 0) {
				var pic = document.getElementById(item);
				if (index >= 9 && index <= 12) {
					pic.style.opacity = 1;
				}
				else {
					pic.style.opacity = fadeVal;
				}
			}
		})
	}

	function handleHoverS2() {
		fadeAllExcept(ts2);
		termpics.forEach(function (item, index) {
			if (index > 0) {
				var pic = document.getElementById(item);
				if (index >= 1 && index <= 4) {
					pic.style.opacity = 1;
				}
				else {
					pic.style.opacity = fadeVal;
				}
			}
		})
	}

	function handleHoverS3() {
		fadeAllExcept(ts3);
		termpics.forEach(function (item, index) {
			if (index > 0) {
				var pic = document.getElementById(item);
				if (index >= 5 && index <= 8) {
					pic.style.opacity = 1;
				}
				else {
					pic.style.opacity = fadeVal;
				}
			}
		})
	}


	function handleHoverOut() {
		termpics.forEach(function (item, index) {
			if (index > 0) {
				var pic = document.getElementById(item);
				pic.style.transform = "rotate(0deg)";
				pic.style.opacity = maxOpacity;
			}
		})
		tsections.forEach(function (item, index) {
			item.style.opacity = 1;

		})

	}

	function fadeAllExcept(tsect) {
		tsections.forEach(function (item, index) {
			if (Object.is(tsect, item)) {
				//show current
				item.style.opacity = 1;
			}
			else {
				//fade the rest
				item.style.opacity = fadeVal;

			}
		})

	}

}

</script>
