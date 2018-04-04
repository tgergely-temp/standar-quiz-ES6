/* ---------------------------------------------------
* Scroll animation from GitHub user Andjosh
* https://gist.github.com/andjosh/6764939
* --------------------------------------------------- */
const scrollTo = (element, to, duration) => {
<<<<<<< HEAD
  const start = element.scrollTop,
    change = to - start,
    increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
=======
    const start = element.scrollTop,
        change = to - start,
        increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
>>>>>>> 67bf404da60365343d9b798ed6ce6d3d99a530dd
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
<<<<<<< HEAD
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
=======
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
>>>>>>> 67bf404da60365343d9b798ed6ce6d3d99a530dd
};

export default scrollTo;
