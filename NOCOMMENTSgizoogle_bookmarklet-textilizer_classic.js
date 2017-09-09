//         Gizoogle 2.0's translator script
//               Created 2012-2013
//
//   HOMEPAGE/TUMBLR: http://gizoogle2.tumblr.com/
//          FACEBOOK: http://www.facebook.com/Gizoogle2
//           TWITTER: @Gizoogle2
//            GITHUB: https://github.com/gizoogle
//
// These are the only official pages for Gizoogle 2.0
// Other Gizoogle sites are made by different fans of the original site and use their own code.
// This is *by far* the most accurate recreation, though, in my opinion (as the coder).
//
// *****************************************************
// ***   HOW TO EMBED THIS SCRIPT ON YOUR OWN SITE:  ***
// *** I support the use of this code on other sites ***
// *** Embedding instructions are available on the   ***
// *** "Your Blog" page of the official tumblr:      ***
// ***         gizoogle2.tumblr.com/yourblog         ***
// *****************************************************
//
// Disclaimer: This script is a work of parody (and frankly, free advertising).
//             It is meant for entertainment purposes, and contains profanity.

var replacements, regex, key, textnodes, node, s, replacements2, longreplacements, ernouns, ingverbs, endings, endexceptions, specialwords, vowels;
var new_endings, new_replacements, new_replacements2, new_longreplacements, new_ernouns, new_ingverbs;

var periodcheck = new Array();		for (var i = 0; i < 30 ; i++) {periodcheck[i] = i;}
var izzlecheck = new Array();		for (var i = 0; i < 25 ; i++) {izzlecheck[i] = i;}
var onesyllcheck = new Array();		for (var i = 0; i < 35 ; i++) {onesyllcheck[i] = i;}
var tothacheck = new Array();		for (var i = 0; i < 7 ; i++) {tothacheck[i] = i;}
var replacementcheck = new Array();	for (var i = 0; i < 90 ; i++) {replacementcheck[i] = i;}
var nounverbcheck = new Array();	for (var i = 0; i < 30 ; i++) {nounverbcheck[i] = i;}

replacements = {

	"\\babout\\b": "'bout",
	"\\bam\\b": "be",
	"\\band\\b": "n",
	"\\bare\\b": "is",
	"\\bawesome\\b": "off tha hook",
	"\\bbecause\\b": "coz",
	"\\bbeing\\b": "bein",
	"\\bboy\\b": "boi",
	"\\bcar\\b": "ride",
	"\\bcars\\b": "ridez",
	"\\bchurch\\b": "chuch",
	"\\bcities\\b": "hoodz",
	"\\bcomrades\\b": "posse",
	"\\bcute\\b": "skanky",
	"\\bdog\\b": "dogg",
	"\\bdriving\\b": "rollin'",
	"\\eed\\b": "ee'",
	"\\bfor\\b": "fo`",
	"\\bfriend\\b": "nigga",
	"\\bfriends\\b": "niggaz",
	"\\ged\\b": "ge'",
	"\\bget\\b": "git",
	"\\bgot\\b": "gots",
	"\\bgreat\\b": "bootylicious",
	"\\bgun\\b": "gat",
	"\\bguns\\b": "gats",
	"\\bguy\\b": "homey",
	"\\bhappy\\b": "stoked",
	"\\head": "heezee",
	"\\bhouse\\b": "hizouse",
	"\\ied\\b": "y",
	"\\bin\\b": "'n",
	"\\binformation\\b": "411",
	"\\bis\\b": "be",
	"\\bkilled\\b": "iced",
	"\\bkilling\\b": "cappin'",
	"\\blil\\b": "shawty",
	"\\blil'\\b": "shawty",
	"\\blittle\\b": "shawty",
	"\\bmad\\b": "buggin'",
	"\\bman\\b": "dawg",
	"\\bmy\\b": "mah",
	"\\bnice\\b": "funky ass",
	"\\bnothing\\b": "nuttin",
	"\\ool\\b": "oo'",
	"\\bpeculiar\\b": "perculiar",
	"\\bpeople\\b": "thugz",
	"\\bplayers\\b": "playas",
	"\\bplease\\b": "pleaze",
	"\\bpolice\\b": "po-po",
	"\\bsays\\b": "sez",
	"se\\b": "ze",
	"sed\\b": "zed",
	"ses\\b": "zes",
	"\\bsomething\\b": "sum-m sum-m",
	"\\bsuper\\b": "snoopa",
	"\\btake\\b": "takes",
	"\\btalk\\b": "rap",
	"\\btelevision": "televizzle",
	"\\bthe\\b": "tha",
	"\\btheir\\b": "they",
	"\\bthis\\b": "dis",
	"\\bto\\b": "ta",
	"\\btown\\b": "ghetto",
	"\\bwith": "wit",
	"\\bwomen\\b": "bitchez",
	"\\byour\\b": "yo'",
	"\\byourself\\b": "yoself",
	"\\byou're\\b": "yoe",
	"\\byou've\\b": "you",
	"\\zed\\b": "ze'",
};

replacements2 = {
	"\\'s\\b": "",
	"\\ers\\b": "a",
	"\\er\\b": "a",
	"\\ings\\b": "'n",
	"\\ing\\b": "'n",
};

longreplacements = {
	"\\bdo you\\b": "d-ya",
	"\\bor anything\\b": "or nothin' trippin'",
	"\\bwith a\\b": "witta",
	"\\byou all\\b": "y-aw",
	"\\byou're all\\b": "y-aw",
};

ernouns = [ 'brotha', 'cracka', 'crazy ass nigga', 'nigga', 'playa', 'killa', 'pimp', 'rappa', 'pusha', 'shot calla', 'gangsta', 'drug deala',
			'hustla', 'wanna be gangsta', 'bitch', 'motherfucka', 'baller', 'poser'
];

ingverbs = ['cruisin\'', 'bustin\'', 'saggin\'', 'frontin\'', 'hatin\'', 'ho-slappin\'', 'blunt-rollin\'', 'weed-smokin\'', 'straight trippin\'',
			'clockin\'', 'spendin\'', 'messin\'', 'blingin\'', 'ridin\'', 'doggy stylin\'', 'pimpin\'', 'gang bangin\'', 'rhymin\'', 
			'chillin\'', 'ballin\'', 'perpetratin\'', 'steppin\'', 'sippin\'', 'dippin\'', 'mackin\'', 'mobbin\'', 'crack-a-lackin`', 'trippin\''
];

endings = [
	' and cant no hood fuck with death rizzow.' ,
	' and my money on my mind.' ,
	' and yo momma.' ,
	' aww nah.' ,
	' bitch ass nigga.' ,
	' but real niggaz don\'t give a fuck.' ,
	' cuz I put gangsta rap on tha map.' ,
	' cuz Im tha Double O G.' ,
	' cuz I\'m fresh out the pen.' ,
	' cuz its a doggy dog world.' ,
	' cuz its a G thang.' ,
	' cuz its a pimp thang.' ,
	' cuz this is how we do it.' ,
	' dogg.' ,
	' doggystyle.' ,
	' droppin hits.' ,
	' fo all my homies in the pen.' ,
	' fo gettin yo pimp on.' ,
	' fo my bling bling.' ,
	' fo\' real.' ,
	' fo\' sheezy.' ,
	' fo\' sho\'.' ,
	' fo yo bitch ass.' ,
	' from tha streets of tha L-B-C.' ,
	' gangsta style.' ,
	' hittin that booty.' ,
	' in all flavas.' ,
	' if you gots a paper stack.' ,
	' in tha dogg pound.' ,
	' in tha hood.' ,
	' in tha mutha fuckin club.' ,
	' keep\'n it real yo.' ,
	' like a motha fucka.' ,
	' like a tru playa\'.' ,
	' like old skool shit.' ,
	' like this and like that and like this and uh.' ,
	' mah nizzle.' ,
	' n shit.' ,
	' n we out!' ,
	' now motherfuckers lemme here ya say hoe.' ,
	' now pass the glock.' ,
	' paper\'d up.',
	' puttin tha smack down.' ,
	' ridin\' in mah double R.' ,
	' sho nuff.' ,
	' so bow down to the bow wow!' ,
	' so i can get mah pimp on.' ,
	' so jus\' chill.' ,
	' so show some love, niggaz!',
	' so sit back relax new jacks get smacked.' ,
	' so you betta run and grab yo glock.' ,
	' spittin\' that real shit.' ,
	' straight from long beach nigga.' ,
	' ta help you tap dat ass.' ,
	' to increase tha peace.' ,
	' thats off tha hook yo.' ,
	' upside yo head.' ,
	' where the sun be shinin and I be rhymin\'.' ,
	' wit da big Bo\$\$\$ Dogg.' ,
	' with my forty-fo\' mag.' ,
	' with my hoes on my side, and my strap on my back',
	' with the gangsta shit that keeps ya hangin.' ,
	' with the S-N-double-O-P.' ,
	' ya dig?' ,
	' ya feelin\' me?' ,
	' yaba daba dizzle.' ,
	' yeah yeah baby.' ,
	
	', betta check yo self.' ,
	', chill yo.' ,
	', know what im sayin?' ,
	', niggaz, better recognize.' ,
	', ya feel me?' ,
	
	'. Aint no killin\' everybodys chillin\'.' ,
	'. Aint no L-I-M-I-to-tha-T.' ,
	'. Aint no stoppin\' this shit nigga.' ,
	'. Anotha dogg house production.' ,
	'. Boo-Yaa!' ,
	'. Boom bam as I step in the jam, God damn.' ,
	'. Bounce wit me.' ,
	'. Bow wow wow yippee yo yipee yay.' ,
	'. Chill as I take you on a trip.' ,
	'. Death row 187 4 life.' ,
	'. Dogg House Records in the motha fuckin house.' ,
	'. Drop it like its hot.' ,
	'. Fo\'-fo\' desert eagle to your motherfuckin\' dome.' ,
	'. Freak y\'all, into the beat y\'all.' ,
	'. Holla!' ,
	'. Hollaz to the East Side.' ,
	'. I started yo shit and i\'ll end yo\' shit.' ,
	'. I thought i told ya, nigga I\'m a soldier.' ,
	'. Ill slap tha taste out yo mouf.' ,
	'. Im a bad boy wit a lotta hos.' ,
	'. Im crazy, you can\'t phase me.' ,
	'. I\'m a mutha fuckin 2-time felon.' ,
	'. It dont stop till the wheels fall off.' ,
	'. Its just anotha homocide.' ,
	'. It\'s your homie snoop dogg from the dpg.' ,
	'. Keep the party crackin while I\'m steady rappin.' ,
	'. Keep\'n it gangsta dogg.',
	'. Listen to how a motherfucker flow shit.' ,
	'. Nigga get shut up or get wet up.' ,
	'. One, two three and to tha four.' ,
	'. Put ya mutha fuckin choppers up if ya feel this.' ,
	'. Real niggas recognize the realness.' ,
	'. Relax, cus I\'m bout to take my respect.' ,
	'. Slap your mutha fuckin self.' ,
	'. Snoop dogg is in this bitch.' ,
	'. Snoop heffner mixed with a little bit of doggy flint.' ,
	'. Subscribe nigga, get yo issue.' ,
	'. They call me tha black folks president.' ,
	'. Throw yo guns in the motherfuckin air.' ,
	'. Tru niggaz do niggaz.' ,
	'. Wussup to all my niggaz in the house.' ,
	'. Ya fuck with us, we gots to fuck you up.' ,
	'. Yippie yo, you can\'t see my flow.' ,
	'. You gotta check dis shit out yo.' ,
	'. You\'se a flea and I\'m the big dogg.'
];

var useclassic = 1;
new_endings = [
	' because doggs make tha world a better place!' ,
	' let me holla at u.' ,
	' #YaDigg !' ,
	
	'. Holler at tha boss dogg.' ,,
	'. Living young n wild n free !' ,
	'. Put your feet up n take a breath !' ,
	'. Smells like tha good shit.' ,
	'. Snoop du jour !' ,
	'. wat it do ??'
];

new_replacements = {
	"\\blinguistics\\b": "Snoopguistics",
	"\\btv\\b": "t-vizzle",
	"\\bTV\\b": "T-Vizzle"
};

new_replacements2 = {
};

new_longreplacements = {
};

new_ernouns = [ 'homie', 'homey', 'homeboy', 'homeboi'
];

new_ingverbs = [ 'slackin\'', 'playa hatin\''
];

if (useclassic != 1)
	{
	if (Object.keys(new_replacements).length > 0) for (key in new_replacements) { replacements[key] = new_replacements[key]; }
	if (new_replacements2.length > 0) for (key in new_replacements2) { replacements2[key] = new_replacements2[key]; }
	if (new_longreplacements.length > 0) for (key in new_longreplacements) { longreplacements[key] = new_longreplacements[key]; }

	if (new_endings.length > 0) endings = endings.concat(new_endings);
	if (new_ernouns.length > 0) ernouns = ernouns.concat(new_ernouns);
	if (new_ingverbs.length > 0) ingverbs = ingverbs.concat(new_ingverbs);
	}

endexceptions = [
	'www.', '.com', '.net', '.org', '.gov', 'http:', 'https:', '.co', '.htm', '.html',
	'.jpg', '.gif', '.png', '.bmp', '.swf', 
	'Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Sr.', 'Jr.', 'Rev.', 'Lt.', 'Sgt.',
	'St.', 'Ave.', 'Rt.', 'Rd.',
	'A.M.', 'P.M.', 'a.m.', 'p.m.',
	'U.S.', 'U.K.', 'L.B.C.',
	'Corp.', 'Ltd.', 'Inc.', 'Co.',
	'ft.', 'yds.',
	'i.e.', 'e.g.',
	'.0', '.1', '.2', '.3', '.4', '.5', '.6', '.7', '.8', '.9',
	':0', ':1', ':2', ':3', ':4', ':5', ':6', ':7', ':8', ':9',
	'0.', '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.',
	'0:', '1:', '2:', '3:', '4:', '5:', '6:', '7:', '8:', '9:',
	'A.','B.','C.','D.','E.','F.','G.','H.','I.','J.','K.','L.','M.',
	'N.','O.','P.','Q.','R.','S.','T.','U.','V.','W.','X.','Y.','Z.'
];

specialwords = [ 'Snoop', 'snoop', 'Dogg', 'dogg', 'Google', 'google', 'Gizoogle', 'gizoogle', 'Textilizer' ]

vowels = {'a':'','e':'','i':'','o':'','u':'','A':'','E':'','I':'','O':'','U':''};
letters = {'a':'','b':'','c':'','d':'','e':'','f':'','g':'','h':'','i':'','j':'','k':'','l':'','m':'',
'n':'','o':'','p':'','q':'','r':'','s':'','t':'','u':'','v':'','w':'','x':'','y':'','z':'',
'A':'','B':'','C':'','D':'','E':'','F':'','G':'','H':'','I':'','J':'','K':'','L':'','M':'',
'N':'','O':'','P':'','Q':'','R':'','S':'','T':'','U':'','V':'','W':'','X':'','Y':'','Z':''};


if (window.location.href.indexOf("google.com") != -1)
{
    document.title = document.title.replace("Google","Gizoogle");
	var GoogleLogo = document.getElementById("hplogo");
if (GoogleLogo != null){
	var logo1 = document.createElement("img");
		logo1.src = "https://raw.githubusercontent.com/Gizoogle/gizoogle.github.io/master/gizoogle_a.gif";
		logo1.align = "absmiddle";
		if (window.location.href.indexOf("images") == -1) logo1.setAttribute("style", "padding-top:109px");
	var logo2 = document.createElement("img");
		logo2.src = "https://raw.githubusercontent.com/Gizoogle/gizoogle.github.io/master/spinners2.gif";
		logo2.align = "absmiddle";
		if (window.location.href.indexOf("images") == -1) logo2.setAttribute("style", "padding-top:109px");
	var logo3 = document.createElement("img");
		logo3.src = "https://raw.githubusercontent.com/Gizoogle/gizoogle.github.io/master/spinners2.gif";
		logo3.align = "absmiddle";
		if (window.location.href.indexOf("images") == -1) logo3.setAttribute("style", "padding-top:109px");
	var logo4 = document.createElement("img");
		logo4.src = "https://raw.githubusercontent.com/Gizoogle/gizoogle.github.io/master/gizoogle_b.gif";
		logo4.align = "absmiddle";
		if (window.location.href.indexOf("images") == -1) logo4.setAttribute("style", "padding-top:109px");
	if (useclassic != 1)
	{
	var logo5 = document.createElement("img");
		logo5.src = "https://raw.githubusercontent.com/Gizoogle/gizoogle.github.io/master/gizoogle_c.gif";
		logo5.align = "absmiddle";
		if (window.location.href.indexOf("images") == -1) logo5.setAttribute("style", "padding-top:109px");
	}

	/*
	searchbar = document.getElementsByName("q");
	searchbar[0].oninput = function()
		{
		if (window.location.href.indexOf("images") == -1 && window.location.href.indexOf("imghp") == -1)
			{
			logo1.setAttribute("style", "visibility:hidden");
			logo2.setAttribute("style", "visibility:hidden");
			logo3.setAttribute("style", "visibility:hidden");
			logo4.setAttribute("style", "visibility:hidden");
			if (useclassic != 1) logo5.setAttribute("style", "visibility:hidden");
			}
		}
	*/
	
	GoogleLogo.parentNode.appendChild(logo1);
	logo1.parentNode.appendChild(logo2);
	logo2.parentNode.appendChild(logo3);
	logo3.parentNode.appendChild(logo4);
	logo4.parentNode.appendChild(logo5);
	GoogleLogo.parentNode.removeChild(GoogleLogo);
}
}

function Transizlate() {

var x=".";
var newword="";
var testlongword="";
var newlongword="";
var endingchosen="";
var pmark="";
var splitexpr = /\s{1,}/;
var splitexprg = /\s{1,}/g;
var ssplit = new Array();
var ssplitchar = new Array();
var changed = new Array();
var endingchanged = new Array();
var numofvowels = new Array();
var vowelfoundat = new Array();
var doublefoundat = new Array();
var prevvowel = new Array();
var firstletter = new Array();
	var firstletterchecked = new Array();
var lastletter = new Array();
var foundexception = new Array();



regex = {};
for (key in replacements) {
    regex[key] = new RegExp(key, 'g');
}
for (key in replacements2) {
    regex[key] = new RegExp(key, 'g');
}

var longreplacementssplit = new Array();
var currentlongreplacement = -1;
for (key in longreplacements) {
regex[key] = new RegExp(key, 'g');
	currentlongreplacement++;
	longreplacementssplit[currentlongreplacement] = new Array();
	longreplacementssplit[currentlongreplacement][0] = key;
	longreplacementssplit[currentlongreplacement][1] = key.split(/ /).length;
	longreplacementssplit[currentlongreplacement][2] = key.split(/ /);
	longreplacementssplit[currentlongreplacement][3] = new RegExp(longreplacementssplit[currentlongreplacement][2][0]+'\\b', 'g');
	}


textnodes = document.evaluate(
    "//*[not(self::script or self::style or self::code)]/text()",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);

for (var i = 0; i < textnodes.snapshotLength; i++) {
	
	node = textnodes.snapshotItem(i);
	s = node.data;

	changed[i]=new Array();
	endingchanged[i]=new Array();
	vowelfoundat[i]=new Array();
	doublefoundat[i]=new Array();
	numofvowels[i]=new Array();
	prevvowel[i]=new Array();
	firstletter[i]=new Array();
		firstletterchecked[i]=new Array();
	lastletter[i]=new Array();
	foundexception[i]=new Array();

	ssplitchar[i]= new Array();
	ssplit[i]= new Array();
	ssplitchar[i]= s.match(splitexprg);
	ssplit[i]= s.split(splitexpr);

for (var j = 0; j < ssplit[i].length ; j++){

var randomnumreplacement=Math.floor(Math.random()*100);
if ( randomnumreplacement in replacementcheck && foundexception[i][j] != 1 && changed[i][j]!=1 )
	{
	for (var p = 0; p < longreplacementssplit.length; p++)
		{
		testlongword = ssplit[i][j].toLowerCase().replace(longreplacementssplit[p][3], "");
		if (testlongword.toLowerCase() != ssplit[i][j].toLowerCase())
			{
			newlongword = ssplit[i][j].toLowerCase();
			for (var q = 1; q < longreplacementssplit[p][1]; q++)
			{
			if (!ssplit[i][j+q]) break;
			if (ssplitchar[i][j] != " ") break;
			newlongword = newlongword + ' ' + ssplit[i][j+q].toLowerCase();
			}
			if (newlongword != newlongword.replace(regex[longreplacementssplit[p][0]], longreplacements[longreplacementssplit[p][0]]))
				{
				ssplit[i].splice(j,longreplacementssplit[p][1], ssplit[i].slice(j,j+longreplacementssplit[p][1]).join(" "));
				ssplitchar[i].splice(j, longreplacementssplit[currentlongreplacement][1]-1);
				newword = ssplit[i][j].toLowerCase().replace(regex[longreplacementssplit[p][0]], longreplacements[longreplacementssplit[p][0]]);
				if (newword.toLowerCase() != ssplit[i][j].toLowerCase())
					{
					if (ssplit[i][j].toUpperCase() == ssplit[i][j])
						ssplit[i][j] = newword.toUpperCase();
					else {
					for (var c = 0; c < ssplit[i][j].toString().length ; c++) 
							{
							if (ssplit[i][j].charAt(c) in letters && ssplit[i][j].charAt(c).toUpperCase() == ssplit[i][j].charAt(c) && c == 0)
								{ssplit[i][j] = newword.charAt(c).toUpperCase() + newword.substr(c+1);
								break;}
							else if (ssplit[i][j].charAt(c) in letters && ssplit[i][j].charAt(c).toUpperCase() == ssplit[i][j].charAt(c))
								{ssplit[i][j] = newword.substr(0,c) + newword.charAt(c).toUpperCase() + newword.substr(c+1);
								break;}
							else if (ssplit[i][j].charAt(c) in letters)
								{
								ssplit[i][j] = newword;
								break;
								}
							}		
						 }
					changed[i][j] = 1;
					}
				}
			}
		}
	}

var randomnumreplacement=Math.floor(Math.random()*100);
if ( randomnumreplacement in replacementcheck && foundexception[i][j] != 1 && changed[i][j]!=1 )
{
	for (key in replacements) {
		newword = ssplit[i][j].toLowerCase().replace(regex[key], replacements[key]);
		if (newword.toLowerCase() != ssplit[i][j].toLowerCase())
		{
			if (ssplit[i][j].toUpperCase() == ssplit[i][j])
				ssplit[i][j] = newword.toUpperCase();
			else {
			for (var c = 0; c < ssplit[i][j].toString().length ; c++) 
					{
					if (ssplit[i][j].charAt(c) in letters && ssplit[i][j].charAt(c).toUpperCase() == ssplit[i][j].charAt(c) && c == 0)
						{ssplit[i][j] = newword.charAt(c).toUpperCase() + newword.substr(c+1);
						break;}
					else if (ssplit[i][j].charAt(c) in letters && ssplit[i][j].charAt(c).toUpperCase() == ssplit[i][j].charAt(c))
						{ssplit[i][j] = newword.substr(0,c) + newword.charAt(c).toUpperCase() + newword.substr(c+1);
						break;}
					else if (ssplit[i][j].charAt(c) in letters)
						{
						ssplit[i][j] = newword;
						break;
						}
					}		
				 }
			changed[i][j] = 1;
		}
	}
}

vowelfoundat[i][j]= new Array;
	vowelfoundat[i][j][0]=0;
doublefoundat[i][j]= new Array;
	doublefoundat[i][j][0]=0;
numofvowels[i][j]=0;
foundexception[i][j]=0;
firstletter[i][j]=0;
	firstletterchecked[i][j]=0;

for (var v = 0; v < ssplit[i][j].toString().length ; v++)
	{
	prevvowel[i][v]=0;
	if (ssplit[i][j].toString().charAt(v) in letters)
		{
			lastletter[i][j]=v;
			if (firstletterchecked[i][j] == 0) {firstletter[i][j] = v; firstletterchecked[i][j]=1;}
		}
	}
for (var v = 0; v < ssplit[i][j].toString().length ; v++)
	{
		if (ssplit[i][j].toString().charAt(v) in vowels && v != lastletter[i][j])
		{
			if (prevvowel[i][v] == 0)
			{
			numofvowels[i][j]++;
			vowelfoundat[i][j][vowelfoundat[i][j].length] = v;
			prevvowel[i][v+1] = 1;
			}
			else
			{
			doublefoundat[i][j][doublefoundat[i][j].length] = v - 1;
			}
		}
	}
if (ssplit[i][j].toString().charAt(lastletter[i][j]).toLowerCase() == "y" && !(ssplit[i][j].toString().charAt(lastletter[i][j]-1) in vowels))
	{
	numofvowels[i][j]++;
	vowelfoundat[i][j][vowelfoundat[i][j].length] = lastletter[i][j];
	}

if (numofvowels[i][j]==0 && ssplit[i][j].toString().charAt(lastletter[i][j]) in vowels)
	{
	numofvowels[i][j]++;
	vowelfoundat[i][j][vowelfoundat[i][j].length] = lastletter[i][j];
	}

for (var k = 0; k < endexceptions.length; k++){
if (ssplit[i][j].indexOf(endexceptions[k]) != -1)
	{
	foundexception[i][j]=1;
	}
}
for (var k = 0; k < specialwords.length; k++){
if (ssplit[i][j].indexOf(specialwords[k]) != -1)
	{
	foundexception[i][j]=1;
	}
}

var randomnumnounverb=Math.floor(Math.random()*100);
if (randomnumnounverb in nounverbcheck && foundexception[i][j] != 1 && changed[i][j]!=1)
{
	if (ssplit[i][j].substr(lastletter[i][j]-1, 2).toLowerCase() == 'er' || ssplit[i][j].substr(lastletter[i][j]-2, 3).toLowerCase() == 'ers')
	{
		var chosenernoun = Math.floor(Math.random()*ernouns.length);
		var ers = false;
		if (ssplit[i][j].substr(lastletter[i][j]-2, 3).toLowerCase() == 'ers')
		{
			var ers = true;
			var sorz = Math.floor(Math.random()*2);
			if (sorz == 0) var sorzvalue = 's';
			else if (sorz == 1) var sorzvalue = 'z';
			if (ernouns[chosenernoun] == 'bitch') sorzvalue = 'e' + sorzvalue;
		}
		if (firstletter[i][j] == 0)
			{
			newword = ernouns[chosenernoun];
			if (ers && useclassic != 1) {newword = newword + sorzvalue; ers=false;}
			}
		else
			{
			newword = ssplit[i][j].substr(0,firstletter[i][j]) + ernouns[chosenernoun];
			if (ers && useclassic != 1) {newword = newword + sorzvalue; ers=false;}
			}
		if (ssplit[i][j].toUpperCase().charAt(firstletter[i][j]) == ssplit[i][j].charAt(firstletter[i][j]))
			{
			if (ssplit[i][j].toUpperCase() == ssplit[i][j])
			newword = newword.toUpperCase();
			if (ers && useclassic != 1) {newword = newword + sorzvalue.toUpperCase(); ers=false;}
			else 
			newword = newword.substr(0,firstletter[i][j]) + newword.toUpperCase().charAt(firstletter[i][j]) + newword.substr(firstletter[i][j]+1);
			if (ers && useclassic != 1) {newword = newword + sorzvalue; ers=false;}
			}
		if (lastletter[i][j] != ssplit[i][j].toString().length-1)
			{
			newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
			}
		ssplit[i][j] = newword;
		changed[i][j] = 1;
	}
}

var randomnumnounverb=Math.floor(Math.random()*100);
if (randomnumnounverb in nounverbcheck && foundexception[i][j] != 1 && changed[i][j]!=1)
{
	if (ssplit[i][j].substr(lastletter[i][j]-2, 3).toLowerCase() == 'ing' || ssplit[i][j].substr(lastletter[i][j]-3, 4).toLowerCase() == 'ings')
	{
		if (firstletter[i][j] == 0)
			{
			newword = ingverbs[Math.floor(Math.random()*ingverbs.length)];
			}
		else
			{
			newword = ssplit[i][j].substr(0,firstletter[i][j]) + ingverbs[Math.floor(Math.random()*ingverbs.length)];
			}
		if (ssplit[i][j].toUpperCase().charAt(firstletter[i][j]) == ssplit[i][j].charAt(firstletter[i][j]))
			{
			if (ssplit[i][j].toUpperCase() == ssplit[i][j])
			newword = newword.toUpperCase();
			else 
			newword = newword.substr(0,firstletter[i][j]) + newword.toUpperCase().charAt(firstletter[i][j]) + newword.substr(firstletter[i][j]+1);
			}
		if (lastletter[i][j] != ssplit[i][j].toString().length-1)
			{
			newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
			}
		ssplit[i][j] = newword;
		changed[i][j] = 1;
	}
}

var randomnumreplacement=Math.floor(Math.random()*100);
if ( randomnumreplacement in replacementcheck && foundexception[i][j] != 1 && changed[i][j]!=1 )
{
	for (key in replacements2) {
		newword = ssplit[i][j].toLowerCase().replace(regex[key], replacements2[key]);
		if (newword.toLowerCase() != ssplit[i][j].toLowerCase())
		{
			if (ssplit[i][j].toUpperCase() == ssplit[i][j])
				ssplit[i][j] = newword.toUpperCase();
			else {
			for (var c = 0; c < ssplit[i][j].toString().length ; c++) 
					{
					if (ssplit[i][j].charAt(c) in letters && ssplit[i][j].charAt(c).toUpperCase() == ssplit[i][j].charAt(c) && c == 0)
						{ssplit[i][j] = newword.charAt(c).toUpperCase() + newword.substr(c+1);
						break;}
					else if (ssplit[i][j].charAt(c) in letters && ssplit[i][j].charAt(c).toUpperCase() == ssplit[i][j].charAt(c))
						{ssplit[i][j] = newword.substr(0,c) + newword.charAt(c).toUpperCase() + newword.substr(c+1);
						break;}
					else if (ssplit[i][j].charAt(c) in letters)
						{
						ssplit[i][j] = newword;
						break;
						}
					}		
				 }
			changed[i][j] = 1;
		}
	}
}

var randomnumtotha=Math.floor(Math.random()*100);
if (randomnumtotha in tothacheck && foundexception[i][j] != 1 && changed[i][j]!=1)
{
if (numofvowels[i][j]==1 && lastletter[i][j]-firstletter[i][j] >= 3 && vowelfoundat[i][j][numofvowels[i][j]] != 0)
{
	if (firstletter[i][j] == 0)
		{
		newword = ssplit[i][j].toUpperCase().substr(0,vowelfoundat[i][j][numofvowels[i][j]]).split("").join("-") + "-to-tha-izz" + ssplit[i][j].substr(vowelfoundat[i][j][numofvowels[i][j]]);
		}
	else
		{
		newword = ssplit[i][j].substr(0,firstletter[i][j]) + ssplit[i][j].toUpperCase().substr(firstletter[i][j],vowelfoundat[i][j][numofvowels[i][j]]).split("").join("-") + "-to-tha-izz" + ssplit[i][j].substr(vowelfoundat[i][j][numofvowels[i][j]]);
		}
	if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
	changed[i][j] = 1;
}

if (numofvowels[i][j]==2 && lastletter[i][j]-firstletter[i][j] >= 3 && vowelfoundat[i][j][numofvowels[i][j]] != 0 && ssplit[i][j].toLowerCase().charAt(lastletter[i][j]) == "y")
	{
	if (ssplit[i][j].toUpperCase().charAt(vowelfoundat[i][j][numofvowels[i][j]]-1) == ssplit[i][j].toUpperCase().charAt(vowelfoundat[i][j][numofvowels[i][j]]-2))
		{
		newword = ssplit[i][j].toUpperCase().substr(0,vowelfoundat[i][j][numofvowels[i][j]]-2).split("").join("-") + "-Double-" + ssplit[i][j].toUpperCase().charAt(vowelfoundat[i][j][numofvowels[i][j]]-2) + "izz" + ssplit[i][j].substr(vowelfoundat[i][j][numofvowels[i][j]]);
		}
	if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
	changed[i][j] = 1;
	}
}


var randomnumonesyll=Math.floor(Math.random()*100);
if ( randomnumonesyll in onesyllcheck && foundexception[i][j] != 1 && changed[i][j]!=1)
{
	if (numofvowels[i][j]==1 && lastletter[i][j]-firstletter[i][j] >= 2)
	{
	var iziznizzy = Math.floor(Math.random()*5);
	switch (iziznizzy)
	{
	case 0:
			if (!(ssplit[i][j].charAt(firstletter[i][j]) in vowels))
			{
			newword = ssplit[i][j].toString().substr(0,firstletter[i][j]+1) + "izzy";
				if (lastletter[i][j] != ssplit[i][j].toString().length-1)
				{
				newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
				}
			if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
			changed[i][j] = 1;
			}
			break;
	case 1:
			if (!(ssplit[i][j].charAt(firstletter[i][j]) in vowels))
			{
			newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][1]) + "izn" + ssplit[i][j].toString().substr(vowelfoundat[i][j][1]);
			if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
			changed[i][j] = 1;
			}
			break;
	case 2:
			if (!(ssplit[i][j].charAt(firstletter[i][j]) in vowels))
			{
			newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][1]) + "izzle";
				if (lastletter[i][j] != ssplit[i][j].toString().length-1)
				{
				newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
				}
			if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
			changed[i][j] = 1;
			}
			break;
	case 3:
			if (!(ssplit[i][j].charAt(firstletter[i][j]) in vowels))
			{
			newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][1]) + "izzay";
				if (lastletter[i][j] != ssplit[i][j].toString().length-1)
				{
				newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
				}
			if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
			changed[i][j] = 1;
			}
			break;
	case 4:
			if (!(ssplit[i][j].charAt(firstletter[i][j]) in vowels))
			{
			newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][1]) + "izz" + ssplit[i][j].toString().substr(vowelfoundat[i][j][1]);
			if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
			changed[i][j] = 1;
			}
			break;
	}
	}
}
var randomnumizzle=Math.floor(Math.random()*100);
if ( randomnumizzle in izzlecheck && foundexception[i][j] != 1 && changed[i][j]!=1)
{
if (useclassic == 1)
	{
		if (numofvowels[i][j]==2)
		{
		newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][2]) + "izzle";
			if (ssplit[i][j].charAt(lastletter[i][j]) == "s")
			{
			newword = newword + "s";
			}
			if (lastletter[i][j] != ssplit[i][j].toString().length-1)
			{
			newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
			}
		if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
		changed[i][j] = 1;
		}

		if (numofvowels[i][j]==3)
		{
		newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][2]) + "izzle";
			if (ssplit[i][j].charAt(lastletter[i][j]) == "s")
			{
			newword = newword + "s";
			}
			if (lastletter[i][j] != ssplit[i][j].toString().length-1)
			{
			newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
			}
		if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
		changed[i][j] = 1;
		}

		if (numofvowels[i][j]==4)
		{
		newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][3]) + "izzle";
			if (ssplit[i][j].charAt(lastletter[i][j]) == "s")
			{
			newword = newword + "s";
			}
			if (lastletter[i][j] != ssplit[i][j].toString().length-1)
			{
			newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
			}
		if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
		changed[i][j] = 1;
		}

		if (numofvowels[i][j]==5)
		{
		newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][4]) + "izzle";
			if (ssplit[i][j].charAt(lastletter[i][j]) == "s")
			{
			newword = newword + "s";
			}
			if (lastletter[i][j] != ssplit[i][j].toString().length-1)
			{
			newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
			}
		if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
		changed[i][j] = 1;
		}

		if (numofvowels[i][j]==6)
		{
		newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][5]) + "izzle";
			if (ssplit[i][j].charAt(lastletter[i][j]) == "s")
			{
			newword = newword + "s";
			}
			if (lastletter[i][j] != ssplit[i][j].toString().length-1)
			{
			newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
			}
		if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
		changed[i][j] = 1;
		}

		if (numofvowels[i][j]>=7)
		{
		newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][5]) + "izzle";
			if (ssplit[i][j].charAt(lastletter[i][j]) == "s")
			{
			newword = newword + "s";
			}
			if (lastletter[i][j] != ssplit[i][j].toString().length-1)
			{
			newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
			}
		if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
		changed[i][j] = 1;
		}

	 }
else
	{
		if (numofvowels[i][j]>=2)
		{
			if (numofvowels[i][j]==2 && ssplit[i][j].charAt(firstletter[i][j]) in vowels) var numsyllables=2;
			else var numsyllables=Math.floor(Math.random() * (numofvowels[i][j] - Math.round(numofvowels[i][j]/2) + 1)) + Math.round(numofvowels[i][j]/2);
			newword = ssplit[i][j].toString().substr(0, vowelfoundat[i][j][numsyllables]) + "izzle";
				if (ssplit[i][j].charAt(lastletter[i][j]) == "s")
				{
				newword = newword + "s";
				}
				if (lastletter[i][j] != ssplit[i][j].toString().length-1)
				{
				newword = newword + ssplit[i][j].toString().substr(lastletter[i][j]+1);
				}
			if (ssplit[i][j].toUpperCase() == ssplit[i][j]) ssplit[i][j] = newword.toUpperCase();	else	ssplit[i][j] = newword;
			changed[i][j] = 1;
		}
	}
}

if (ssplit[i][j].search(/\.|\!|\?|\:|\;/) != -1 && foundexception[i][j]!=1 && endingchanged[i][j] !=1) {
	var randomnumperiod=Math.floor(Math.random()*100)
	if ( randomnumperiod in periodcheck )
		{
		if (ssplit[i][j].search(/\./) != -1 && ssplit[i][j].search(/\.\.\./) == -1) { pmark = '.'; }
		if (ssplit[i][j].search(/\!/) != -1) { pmark = '!'; }
		if (ssplit[i][j].search(/\?/) != -1) { pmark = '?'; }
		if (ssplit[i][j].search(/\:/) != -1) { pmark = ':'; }
		if (ssplit[i][j].search(/\;/) != -1) { pmark = ';'; }
		if (ssplit[i][j].search(/\.\.\./) != -1) { pmark = '...'; }
		
		endingchosen = endings[Math.floor(Math.random()*endings.length)];
		if (endingchosen.charAt(0) == ".") { endingchosen = pmark + endingchosen.substr(1); }
		else { endingchosen = endingchosen.replace(/\./,pmark); }
		
		ssplit[i][j] = ssplit[i][j].replace(pmark,endingchosen);
		changed[i][j] = 1;
		endingchanged[i][j] = 1;
		}
	}

	}
	
	s = ssplit[i][0];
	if (ssplitchar[i])
		{
		if (ssplitchar[i][0]) s = s + ssplitchar[i][0];
		}
	for (var r=1; r<ssplit[i].length; r++)
		{
		s = s + ssplit[i][r];
		if (ssplitchar[i][r])
		s = s + ssplitchar[i][r];
		}
	node.data = s;

}

}
Transizlate();