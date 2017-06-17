var FILTER_DEPTH = false;
var COMPACT_DEPTH = 1;

function getparentnodeinfo(parent, iscompactview) {
	var res = '';
	var link = '?';
	if(iscompactview) link = '?'+(((parent.name == '') || (parent.name == undefined)) ? '' : parent.name);
	res += '<a class="node" href="'+link+'" onClick="window.location = \''+link+'\'; location.reload();">';
	res += '<h3>'+parent.name+'</h3>';
	res += '</a>';
	return res;
}

function getsubtree(parent, iscompactview, level) {
	if((FILTER_DEPTH) && (iscompactview) && (level > COMPACT_DEPTH)) return '';
	var res = '';
	res += '<li>';
	res += getparentnodeinfo(parent, iscompactview);
	if(parent.sons.length > 0) {
		res +=   '<ul>';
		for(var i=0; i<parent.sons.length; i++) {
			var son = parent.sons[i];
			res += getsubtree(son, iscompactview, level+1);
		}
		res +=   '</ul>';
	}
	res += '</li>';
	return res;
}

function getfilteredtree(parent, shortcut) {
	if((shortcut == '') || (parent.id == shortcut)) return parent;
	for(var i=0; i<parent.sons.length; i++) {
		var son = parent.sons[i];
		var s = getfilteredtree(son, shortcut);
		if(s != '') return s;
	}
	return '';
}

function gettree(parent) {
	// applying filters
	var shortcut = '';
	var i = window.location.href.indexOf('?');
	if(i >= 0) {
		shortcut = window.location.href.substring(i+1);
	}
	//parent = getfilteredtree(parent, shortcut);
	// returning result
	var res = '';
	res += '<div class="tree">';
	res +=   '<ul>';
	res +=      getsubtree(parent, shortcut == '', 0);
	res +=   '</ul>';
	res += '</div>';
	return res;
}

function loadtree(data) {
	var title = "Directory "+data.title;
	document.title = title;
	var treehtml = gettree(data.parent);
	$('#tree').html(treehtml);
}

function loaddata() {
	loadtree(data);
/*
	$.ajax({
		dataType: "json",
		url: "data.json",
		success: loadtree
	});
*/
}

$(document).ready(loaddata);
