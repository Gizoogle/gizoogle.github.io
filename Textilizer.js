function Textilize() {
var d = document.getElementById('TextilizerIframe').contentWindow.document;
var tex = d.getElementById('transtext');
var hid = d.getElementById('hiddentextilizer');
var appendtarget = d.getElementById('appendtarget');
hid.innerHTML = tex.value.replace(/\r?\n/g, '<br />');
//
if (d.getElementById('gizoogleembed') != null) d.getElementById('gizoogleembed').parentNode.removeChild(d.getElementById('gizoogleembed'));
	var embedscript = d.createElement("script");
		embedscript.id = 'gizoogleembed';
		embedscript.src = "https://gizoogle.github.io/NOCOMMENTSgizoogle_bookmarklet-textilizer.js";
		embedscript.onload = function() {
			embedscript.onload = null;
			var texnew = d.createElement("textarea");
				texnew.rows = 10;
				texnew.cols = 70;
				texnew.id = "transtext";
				texnew.setAttribute("style", "resize: none; font-size: 10pt; font-family: verdana;");
				texnew.setAttribute("autofocus","");
			texnew.innerHTML = hid.innerHTML.replace(/<br>/g, '\n');
			tex.parentNode.removeChild(tex);
			appendtarget.appendChild(texnew);
			texnew.focus();
			};
	hid.parentNode.insertBefore(embedscript, hid);
}

function TextilizeClassic() {
var d = document.getElementById('TextilizerIframe').contentWindow.document;
var tex = d.getElementById('transtext');
var hid = d.getElementById('hiddentextilizer');
var appendtarget = d.getElementById('appendtarget');
hid.innerHTML = tex.value.replace(/\r?\n/g, '<br />');
//
if (d.getElementById('gizoogleembed') != null) d.getElementById('gizoogleembed').parentNode.removeChild(d.getElementById('gizoogleembed'));
	var embedscript = d.createElement("script");
		embedscript.id = 'gizoogleembed';
		embedscript.src = "https://gizoogle.github.io/NOCOMMENTSgizoogle_bookmarklet-textilizer_classic.js";
		embedscript.onload = function() {
			embedscript.onload = null;
			var texnew = d.createElement("textarea");
				texnew.rows = 10;
				texnew.cols = 70;
				texnew.id = "transtext";
				texnew.setAttribute("style", "resize: none; font-size: 10pt; font-family: verdana;");
				texnew.setAttribute("autofocus","");
			texnew.innerHTML = hid.innerHTML.replace(/<br>/g, '\n');
			tex.parentNode.removeChild(tex);
			appendtarget.appendChild(texnew);
			texnew.focus();
			};
	hid.parentNode.insertBefore(embedscript, hid);
}

document.querySelector('#TransTextButton').addEventListener('click', Textilize);
document.querySelector('#TransTextButtonClassic').addEventListener('click', TextilizeClassic);