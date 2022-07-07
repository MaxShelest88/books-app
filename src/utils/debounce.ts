export function debounce(fn: { (str: string): void; apply?: any; }, ms: number) {
  let timout: NodeJS.Timeout | undefined;
  return () => {
    function fnCall() {
		 fn.apply(this, arguments);
    };
    clearTimeout(timout);
    timout = setTimeout(fnCall, ms);
  };
}