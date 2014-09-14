/**@file
 * script.js
 * Copyright (C)2012 ISHIKAWA Takahiro
 *
 * @license  New BSD License.
 * @author   ISHIKAWA Takahiro <t.ishikawa@itlabj.com>
 */

/// Javascript loader.
function loadscript(src, async, cb) {
	var a=document.createElement('script');
	a.type='text/javascript'; a.async=async; a.src=src;
	a.onload = a.onreadystatechange = function(){
		if ((a.readyState && a.readyState !== "complete" && a.readyState !== "loaded")) return false;
		a.onload = a.onreadystatechange = null;
		if (cb) cb();
	};
	var b=document.getElementsByTagName('script')[0];
	b.parentNode.insertBefore(a,b);
}

