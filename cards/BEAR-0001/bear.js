(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,142);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4640").s().p("AgYAoQgLgOgBgWQgBgVAKgRQAKgRAQgBQAOgCAMAPQAMAOAAAWQABAVgKARQgLARgPABIgCAAQgOAAgKgNg");
	this.shape.setTransform(3.7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0.1,7.5,10.6), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4640").s().p("AggAwQgPgRgBgaQgBgZAOgVQAOgUAUgCQATgCAPASQAPARABAaQABAagOATQgOAUgUACIgEABQgRAAgNgQg");
	this.shape.setTransform(4.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,9.8,12.8), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4640").s().p("AggAwQgPgRgBgaQgBgaAOgTQANgUAVgCQATgDAPASQAPARABAaQABAagOAUQgOAUgUACIgDAAQgSAAgNgQg");
	this.shape.setTransform(4.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0.1,9.8,12.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4640").s().p("AgJAgQgFgMgBgSQgBgRAEgOQAEgNAHgBQAGgBAFAMQAGANAAASQABARgEANQgEAOgHABIgBAAQgFAAgFgMg");
	this.shape.setTransform(1.6,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,3.3,8.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(7,0);

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(228.8,135.1,0.891,0.891,0,0,0,1.7,4.5);
	this.instance_1.alpha = 0.238;

	this.instance_2 = new lib.Path_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(208.4,141.1,0.891,0.891,0,0,0,4.9,6.5);
	this.instance_2.alpha = 0.238;

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(230,150.3,0.891,0.891,0,0,0,4.9,6.4);
	this.instance_3.alpha = 0.238;

	this.instance_4 = new lib.Path_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(215.5,121.9,0.891,0.891,0,0,0,3.7,5.4);
	this.instance_4.alpha = 0.238;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AB8059").s().p("AiND+QgngxACjHQABjIAsgrQAogpBIgFQA9gEAnATQAWALAaA2QAdA7gEApQgCAeAbBtQANBqg/AyQhSBDhHATQgZAHgVAAQgsAAgZgfg");
	this.shape.setTransform(221.7,138.2,0.891,0.891);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#969696").s().p("AgGAAQAHgGAGAHQgDACgEAAQgDAAgDgDg");
	this.shape_1.setTransform(25.9,359,0.891,0.891);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#969696").s().p("AgJgBQgIABgDgGIAVgDQANgCAEAEQAEAFgBANQgPgOgPACg");
	this.shape_2.setTransform(29.4,359.7,0.891,0.891);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444235").s().p("AAAAAIAAAAIABAAg");
	this.shape_3.setTransform(125.1,230.9,0.891,0.891);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#817B74").s().p("AgFgBQgBgGAFgBQAFACACAIQACAHgGAAQgFAAgCgKg");
	this.shape_4.setTransform(128.3,231.6,0.891,0.891);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#969696").s().p("AgIAAQAAgFAEgBIAGAAQAIAAgBAGQgDAHgGAAQgIAAAAgHg");
	this.shape_5.setTransform(100.4,374,0.891,0.891);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#817B74").s().p("AAAgIQAIAIgIAJQgHgJAHgIg");
	this.shape_6.setTransform(110.1,230,0.891,0.891);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#817B74").s().p("AAAgLIAEALQABAHgGAFQgEgPAFgIg");
	this.shape_7.setTransform(110.1,234.3,0.891,0.891);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#817B74").s().p("AgJAPQAAgLAKgSQAIADAAAIIAAANQAAAEgHABIgLAAg");
	this.shape_8.setTransform(109.7,239.3,0.891,0.891);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#817B74").s().p("AgCAAQAEgEABAGg");
	this.shape_9.setTransform(42.9,370.2,0.891,0.891);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#817B74").s().p("AgDACQAEgIADAIg");
	this.shape_10.setTransform(34.6,368.5,0.891,0.891);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#817B74").s().p("AADgEIABAGIgHADQABgHAFgCg");
	this.shape_11.setTransform(92.3,380.9,0.891,0.891);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#969696").s().p("AgCACQgBgCAFgDIAAAAQABAGgEAAIAAABIgBgCg");
	this.shape_12.setTransform(55.7,371.7,0.891,0.891);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B0B0B2").s().p("AgIAQIgEgGIgBgEIgBAAIABgSIALgEIAMAHQAHAFgCAHQgCAJgHADQgDACgEAAIgHgBg");
	this.shape_13.setTransform(67.9,371.2,0.891,0.891);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#969696").s().p("AgJAFQACgJAJgEIAFACIAAABIADAEIAAAKIgFAAQgKAAgEgEg");
	this.shape_14.setTransform(42.5,370.9,0.891,0.891);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#625C54").s().p("AAAAFQgFgBgHgGQAFgEAHACQAKACADAAQgFAHgGAAIgCAAg");
	this.shape_15.setTransform(153.1,379.1,0.891,0.891);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#817B74").s().p("AADgEIgBAIQgJgEAKgEg");
	this.shape_16.setTransform(114.9,377.8,0.891,0.891);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#817B74").s().p("AgFgCQAIgCADAHQgIAAgDgFg");
	this.shape_17.setTransform(119.4,370.1,0.891,0.891);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#817B74").s().p("AAAAJQgHgCACgGIADgJIAJAEIgBAJQgBAEgEAAIgBAAg");
	this.shape_18.setTransform(140.2,383.6,0.891,0.891);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B0B0B2").s().p("AAAAJQgHAAgBgGQgCgEAFgCIAIgEQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAGALgBAGIgJAAIgBAAg");
	this.shape_19.setTransform(146.3,380.7,0.891,0.891);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#817B74").s().p("AgnACQANgBAQgEIAbgLQAHgCAKAFQALAEAGgBQAAAFgGACIgJACQgDABgKgCQgIgBgFACQgFAAgHAEQgJAFgFAAIgQADQgJACgHgBQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQABgMAKgBg");
	this.shape_20.setTransform(151,378.6,0.891,0.891);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#969696").s().p("AAHgSQACAWgQAPQADgaALgLg");
	this.shape_21.setTransform(26.9,328.3,0.891,0.891);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#969696").s().p("AAXgNIgWAQQgMAIgMAEQATggAbAEg");
	this.shape_22.setTransform(40.1,311.1,0.891,0.891);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#625C54").s().p("AgBAAIABgBIACABIgCACIgBgCg");
	this.shape_23.setTransform(110.8,181.3,0.891,0.891);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#625C54").s().p("AgBAIIgBgFIgFgGQgCgEAFgDQAEgDAFAFQAGAEgFAKQgCAGgDABQgCgBAAgEg");
	this.shape_24.setTransform(103.2,178.8,0.891,0.891);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#625C54").s().p("AgBABIABgCIACACIgCABg");
	this.shape_25.setTransform(126.3,198.2,0.891,0.891);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#625C54").s().p("AgGgEQAKgCADAMIgBAAQgIAAgEgKg");
	this.shape_26.setTransform(123.2,194.4,0.891,0.891);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#969696").s().p("AAFBeQgBgJAIgOQAJgPAAgJIABgXQAAgNgGgJQgEgHgEgSQgEgSgEgIQgQgdgQgMQgZgTAdgMQALgFgCgJIgBgFQAAgDAEgBQADgCAGAGQAMAMANAdQAMAZAOA8IAAASQgHAJAIAJIAAAbQgGAIAEAPIgBAdQgMAUABALIgCADQgHAAgLADIgTAHQARgWgEgdg");
	this.shape_27.setTransform(106.1,228.9,0.891,0.891);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#625C54").s().p("AgKApIgEgHIADgUQACgLAIgFQACgCgBgEQAAgDgDgDQgOgOASgPIACAJQANAMgCAQQAAAGgIAVIgEAKIgCAIQAAAEgEABIAAAAQgDAAgDgDg");
	this.shape_28.setTransform(104.7,237.8,0.891,0.891);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#625C54").s().p("AgBAEIgBgDQAAgDAFgBIAAAAIgDAHIAAAAIgBAAg");
	this.shape_29.setTransform(118,208.4,0.891,0.891);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5E5B38").s().p("AgEADQgCgDABgBQACgEADAAIAHABQgCAGgFAEIgEgDg");
	this.shape_30.setTransform(111.6,216.2,0.891,0.891);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E5B38").s().p("AgCAGQgEgBAAgEIAAgHIANAEQgEAJgEAAIgBgBg");
	this.shape_31.setTransform(123.6,233.8,0.891,0.891);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5E5B38").s().p("AgEAAQAAgEAEAAQAFAAAAAEIgEAEIgBABQgEAAAAgFg");
	this.shape_32.setTransform(119.9,233.7,0.891,0.891);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5E5B38").s().p("AABAGQgGgBAAgGQAAgDAFgBQAGAAAAAGQAAAFgDAAIgCAAg");
	this.shape_33.setTransform(119,230.5,0.891,0.891);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5E5B38").s().p("AgCgDIARgIQgCAKgKAFIgRAIQACgLAKgEg");
	this.shape_34.setTransform(114.5,213.7,0.891,0.891);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5E5B38").s().p("AgJABQgDgLAOgDQAGgBACAFIAAAIQgHgCgDABQgEAAAEAKQABAEgCABIgHABIgBgNg");
	this.shape_35.setTransform(122,233,0.891,0.891);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5E5B38").s().p("AACAKIgUgNQgGgDAAgFQgBgFAEgGQAFAKAPAIQAPAJAFAGIAFAFQACADgCAEQgJgDgNgKg");
	this.shape_36.setTransform(113.4,219.8,0.891,0.891);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#625C54").s().p("AAHAcQgHgLgDgEIgMgNQgHgFgIgDQgJgCACgHQABgDADgBIAGAAIANgCQACgBAFgHQAEgGAEACQAaAOAHAIQAEAGAAAFQgBAFgHAAQgNAAAAAFQgBACAFALIADAHQACAEgCAEIgBAAQgJAAgHgIg");
	this.shape_37.setTransform(120.8,218.7,0.891,0.891);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#625C54").s().p("AgDAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIADgBQADAAABAFQgFgBgCgCg");
	this.shape_38.setTransform(111.1,197.9,0.891,0.891);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#625C54").s().p("AgDAAIAAgIQANAIgKAJQgDgDAAgGg");
	this.shape_39.setTransform(105.1,210.8,0.891,0.891);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#625C54").s().p("AgEAAIAHgFQAIAIgLADQgHgFADgBg");
	this.shape_40.setTransform(113.9,206.1,0.891,0.891);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5E5B38").s().p("AgXADQALAEANgHQASgKAFgBQgIASgOAEIgGABQgKAAgJgJg");
	this.shape_41.setTransform(110.7,213,0.891,0.891);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#625C54").s().p("AgFADQgHgMAFgOQALAHACAPIAEAZQgNgRgCgEg");
	this.shape_42.setTransform(134.6,203.3,0.891,0.891);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#969696").s().p("AgCAAQACgEADACIgCAFIgBABQAAAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBg");
	this.shape_43.setTransform(101.7,177,0.891,0.891);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#969696").s().p("AAAAFIgOgCQAQgOANAMQgGAEgHAAIgCAAg");
	this.shape_44.setTransform(99,176.9,0.891,0.891);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#969696").s().p("AgTABQAOgEAGgBQALAAAIAIIgnABg");
	this.shape_45.setTransform(111.3,177.1,0.891,0.891);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#969696").s().p("AgGAAQgFgFgGABQAIgHAJACQAGABAMAFQAAAEgIACQgHADgCAEg");
	this.shape_46.setTransform(104.8,177.2,0.891,0.891);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#969696").s().p("AgCAAQACgDAEADQgBAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_47.setTransform(114.2,175.6,0.891,0.891);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#625C54").s().p("AgBABQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIgCABg");
	this.shape_48.setTransform(116.4,369,0.891,0.891);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#625C54").s().p("AgCAAIACgCQACAAABAEIgBABQgEgBAAgCg");
	this.shape_49.setTransform(181,339.5,0.891,0.891);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5E5B38").s().p("AgBgCIAEACIgDADQgDgDACgCg");
	this.shape_50.setTransform(129.4,230.3,0.891,0.891);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#625C54").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_51.setTransform(187.6,326.3,0.891,0.891);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#625C54").s().p("AAAACIAAgCIABgBIAAADg");
	this.shape_52.setTransform(187.3,325.2,0.891,0.891);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#625C54").s().p("AgBAAIABgBQABAAABADQgDgBAAgBg");
	this.shape_53.setTransform(164.9,232,0.891,0.891);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#817B74").s().p("AgGAAQAHgDAGAEIgGABQgDAAgEgCg");
	this.shape_54.setTransform(168,367.5,0.891,0.891);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#625C54").s().p("AgCgFQAGADgBACIgFAGg");
	this.shape_55.setTransform(52.4,259,0.891,0.891);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#817B74").s().p("AgGADIABgFIAHgBIAFADQgDAEgEAAIgGgBg");
	this.shape_56.setTransform(30.1,363.2,0.891,0.891);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#817B74").s().p("AgCgEIAFAEQAAADgEACQgCgEABgFg");
	this.shape_57.setTransform(165.8,367.3,0.891,0.891);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#625C54").s().p("AgBgFQAIAEgHAHQgDgEACgHg");
	this.shape_58.setTransform(130.7,224,0.891,0.891);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#625C54").s().p("AgGgFQAJAFAEAGQgLgBgCgKg");
	this.shape_59.setTransform(86.5,364.9,0.891,0.891);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#817B74").s().p("AgGAAIAIgDQAFAAgBAHQgIgBgEgDg");
	this.shape_60.setTransform(33.5,362.3,0.891,0.891);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#625C54").s().p("AAAgHQAIAHgIAIQgGgHAGgIg");
	this.shape_61.setTransform(26.3,338.8,0.891,0.891);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#625C54").s().p("AACgGQAJAKgPADQgCgJAIgEg");
	this.shape_62.setTransform(130.5,226.1,0.891,0.891);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5E5B38").s().p("AgCgDQACgCAIAAQABAGgIAAQgIAAAAAFQAAgHAFgCg");
	this.shape_63.setTransform(120,242.6,0.891,0.891);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#625C54").s().p("AgIAEQAFgKAMAEQgGAHgHAAIgEgBg");
	this.shape_64.setTransform(72.5,198,0.891,0.891);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#817B74").s().p("AABAGQgGgHgDAAQAHgKALAHQgCAMgEAAIgDgCg");
	this.shape_65.setTransform(32.5,366.5,0.891,0.891);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#625C54").s().p("AgDAFQgHgEAAgJQAQAJAFAIQgLgCgDgCg");
	this.shape_66.setTransform(84.6,363.2,0.891,0.891);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#625C54").s().p("AgMAGIgBgIQAAgGAFgCQADgCAEAEIAEAHIAKACIgEAKIgWABg");
	this.shape_67.setTransform(83.4,368,0.891,0.891);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5E5B38").s().p("AAFALIgKgCQgHgDgBgGQgBgJAPgBQAHAAACABQAEACAAAGQAAAMgHAAIgCAAg");
	this.shape_68.setTransform(101,249.1,0.891,0.891);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#969696").s().p("AgGAHIgKgEIgFgDIAMgMIAKAAIAIAGQAEAEAJABQgGAOgJAAQgGAAgHgGg");
	this.shape_69.setTransform(32.1,362.8,0.891,0.891);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#817B74").s().p("AAFAKQgEgBgKACIgIAAQgEgBAAgEQgBgGALAAQARgBAHgRQAAACAIAQQAFALgIAIQgFgHgIgCg");
	this.shape_70.setTransform(29.5,354.3,0.891,0.891);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#969696").s().p("AgIASQgHgEADgMIAGgKIAFgLQAIgBACAEIAFAWIgGAHQgEAHgFAAQgDAAgEgCg");
	this.shape_71.setTransform(84.8,369.8,0.891,0.891);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#625C54").s().p("AgkghQAMABAbAYQAbAWAHAOIAAAGg");
	this.shape_72.setTransform(80.3,359.2,0.891,0.891);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#625C54").s().p("AgBASIgKAAIgBgYQAAgOAMAAQALAAACAOIAAAbg");
	this.shape_73.setTransform(66.5,364.9,0.891,0.891);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#969696").s().p("AgMASQgJgCgDgEIgGgHQgBgEAJgBQAMgBAAgJQALgRARAJIANAHQgBAOgOgHQgFgCgEADQgEADACACQAGAHgEAFIgHAIQgCgDgKgBg");
	this.shape_74.setTransform(74.7,370.8,0.891,0.891);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#625C54").s().p("AgCAhQgMgJgFgNQAUgEgFgUQgGgRAKgCQAIgBAEAGQAEAFgBAJIgCAZQgCAKAJALg");
	this.shape_75.setTransform(71.6,366.8,0.891,0.891);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#625C54").s().p("AgUAXQALgFABgKQAAgFgDgMIgDgJQgBgFAEgDQAHgFAGAGQAJAIAEAAQAEAAABADQAAADgCAEQgCAEADAKQADAJgEAGQgIgBgRAIg");
	this.shape_76.setTransform(78.2,367.1,0.891,0.891);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#625C54").s().p("AgXBHQABgJgDgCQAEgEABgJQAAgJABgCQAIgHAAgNQAAgQABgDQAQgPgCgXIAIgWQAFgBACgGQACgHADgBQAGANgKARQgMAVgHAcQgDAQgFAkQgCAKgFAQQgJAAAAgIg");
	this.shape_77.setTransform(27.2,330.4,0.891,0.891);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#969696").s().p("AAcASQgPgPgNAKIgLAEIgZgIQgEgCAAgEIADgCIACgBQAPAEADgIQABgNABgFIAPADQAPAAAJAMQAFALAMAJQgCAIgBABIgCABQgDAAgFgFg");
	this.shape_78.setTransform(67.8,368.5,0.891,0.891);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#969696").s().p("AgZARIgSgIQgCgBAFgEQAFgEADABQAZAAgFgZIABgBQADAAAIAJQAFAEACgPIALAAQACAEANAIQALAFABAKIgTABQgDgJgFAJQgJABgDAHIgFALQgCAGgGABIgDACQgFgIgKgEg");
	this.shape_79.setTransform(32.7,368.6,0.891,0.891);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#625C54").s().p("AAeAWIgKgNQgGgIgIgBQgHAAgFAGQgIANgJgCQgEgBgLgKIgDgCIgFgWIAYAEQAOAAAIgMQAIAFAMAOQAMAPAGAEQAIAIABAGIgEABQgHAAgGgFg");
	this.shape_80.setTransform(89.8,370.1,0.891,0.891);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#625C54").s().p("AghBAQgGgEgEgKQgIgSAAgNIABgDIAHgBQADgBgCgEQgEgKAEAAQADAAAIABIABADIgBAIQAAAEAFABQAFABAFgKQgGgcAKgVQAHgMADgEQAHgGAKAHIAEAKQADAGAGgBQAHAAABgFIABgKQAAgLAKACIgCANQgBAIAEAGQAFAHgJADIgFgCQgCACADAEQgBAHAGAHQAGAJABACQgLABgEADQgIAEgCAKQgGAZgXgKQAJAPgJAHQgNAFgEADQgEACgDAAQgEAAgDgCgAAWgPQACALAGABQAHAAgCgHQgDgKgGgCQgFACABAFg");
	this.shape_81.setTransform(125.8,232.8,0.891,0.891);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5E5B38").s().p("AAJCCQgDgLAFgGQAGgJgHgLQgHgLgMgCQgFgKAIgCQAHgCAAgJIAAgPQgBgIgGgDQgFgBgNARIgDAHQgCACgGAAQgMAAABAIQAAAFAGAMIgOgCQgFAAADALQABAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgFAAgCgHQgJgYALghQAHgYgRgOIgNgPQgHgKgHgDQgCAAACgZQACgYACgCQADgEAFADQAKAGADgLIAFgKQADgGgFgFQgJgKAEgEQADgDAMgDQAAAPAHAfQADAbgMASQgEAHADAKIAHARQACAFAIAFQAFAHgFAIQgCAEALAAQAIAAgBgGIgCgGQgCgEACgEQATAQAPgPQAAAMAHATQADAJAHAEQAHAFAHgFQAEgDANgFQAJgGgJgQQAXALAHgaQACgJAHgEQAFgCALgBQAEAEAAACQACADgGABQgJACgCAEQgCAEACAJQABAKgJAPQgJAOgLADQgFACgCAFIAAAIQgBAKgKACQgFABgCgEIgBgIIgDgJQgHgJgIADQgEACAAAEIADAHQAJAYgCAWQgBANgHADIgCAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBg");
	this.shape_82.setTransform(121.5,234.3,0.891,0.891);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#817B74").s().p("AgMBRQgFgBgCgHIgCgNQgBgKgFgFQgFgGgKgBQgIgBgJgHIgOgNQgHgFgDACQgDACABADIACAFQgHgEgMgQQgLgNgKgFIgBgBIgDgCIAAgBQgCgGgGAAIgKgKIgGgGQgEgGgKgFIgEgEQgFgIgRgLIAAgBIAAgGQAMAEAPAMIAYAVIAMALQAHAHAFADIAdAJQASAGAIAKQACACAQgGQALgFAJAGQAJAEARgHQATgIAHgMQAJgQALAKQAXAVAgAIQAYAEAlgBIAGACQgBADgHACQgGABgDADIAmAMQgPALgUgEQgVgEgIgRQgHAJgDACQgGADgIgJQgFgFgFADQgFADAAAHQAAALgHAHQgEAEgMAEQgFABgQAKIgHADQgDABgCgCQgIgJgGADQgDABgIAJIgIAKQgFAFgEAAIgDgBgAgMA4QAAAHAJAAQAFAAAEgHQAAgGgHAAIgHAAQgEABAAAFg");
	this.shape_83.setTransform(100.7,369,0.891,0.891);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#625C54").s().p("AAQDPIgIgQQgFgKAGgGQAIgIgDgIIgHgOQgDgFgDACQgBACgCAFQgEAMgDADQgFAGgLAAQgHgBAAAGIACALQACANgIABQgHABgBgNQgCgUAOgGQAIgDgEgLQgDgIgGABQgEAAgCAEIgBAHQgEAPgKACQgGACgEgFIgGgJQABgHABgCQADgEAFACQANAHAAgFIgBgNIABgDIAMAAQAHgBAAgFIAAgNQAAgJgIgDIABgdQAIgFgCgHIgEgMIAAgaQAJgKgJgJIAAgSQALgKABgGQACgJgNgJQgFgEABgIIAAgPQgJggAHgTQAEgLgKgIQgIgFgGgMQgEABAAADIABAFQgBAIgFABQgEABgFgHQgLgPABgLQAGAAAMgEQALgCAGAJQANAMANgEQAOgFAJgSQAGgBACgHIAGgLQAFABAFAHQAFAGAFABIgBAMIgSAHQgJAFgCALIgLALIgHAAQgEAAgCADQgBADACACIAEADIAAALQgEAGABAFQAAAFAGADIAUAOQANAKAJADIAAAHQgMADgCADQgFAEAKAKQAEAFgCAGIgGAKQgDALgJgGQgFgDgDAEQgBACgCAXQgCAZABAAQAIADAGAKIANAPQARAPgIAYQgLAhAJAYQACAHAGAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQgEgLAGAAIANACQgGgMAAgFQAAgIALAAQAGAAACgCIAEgHQAMgRAGABQAGADABAIIAAAPQAAAJgHACQgIACAFAKIAAAHQgJAAgCACQgFACAAAIIgHAmIgHgMQgDABgBAFQgCAGgCACIgJgeIgHARQgDAJgBAGQAAAEgCADIgDABQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_84.setTransform(113.5,228.9,0.891,0.891);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#817B74").s().p("AgFABQAAgFAHgKQAFAFgBAJIgBAPQgKgFAAgJg");
	this.shape_85.setTransform(46.9,300,0.891,0.891);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#625C54").s().p("AgWBLQABgGAGgCQARgJAFgUIAEgkIABgOQABgKgFgGIgCgoQgCgNAMgEIAIBZQACAVgPAgQgEAIgKAIIgUANIABgLg");
	this.shape_86.setTransform(46.3,301.2,0.891,0.891);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#625C54").s().p("Ag9AcQAGgJAOgPQARgPAGgHQAPgNAQgDQAMgEANgJIAWgQIAFgFIASgGQgIAPgRALIgfARQhEAgggBBQgEAIgEABQAAgUAUgbg");
	this.shape_87.setTransform(36.8,315.5,0.891,0.891);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#817B74").s().p("AAGAHIgQgBIgFgCQADgEAHgBIAKgEQAJgCACAHQAAAHgIAAIgCAAg");
	this.shape_88.setTransform(112.4,378.8,0.891,0.891);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B0B0B2").s().p("AgBAAIABgBIACABIgCACg");
	this.shape_89.setTransform(72.1,384.5,0.891,0.891);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B0B0B2").s().p("AgGAAQAAgDAGgCQAGgCACAHQgBAGgGAAQgIgBABgFg");
	this.shape_90.setTransform(66.9,383.5,0.891,0.891);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#969696").s().p("AgCADIAFgFQABAFgEAAIgCAAg");
	this.shape_91.setTransform(91.5,384.5,0.891,0.891);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#969696").s().p("AgGAAQAGgIAIAJIgIADQgIgBACgDg");
	this.shape_92.setTransform(92,383.2,0.891,0.891);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#969696").s().p("AgDAAQAAgGAHgBIgBAIQgBAFgEACIgBgIg");
	this.shape_93.setTransform(97.3,383.2,0.891,0.891);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#969696").s().p("AgLAJIAAgTIAXABIgIAJQgEAFAAAGg");
	this.shape_94.setTransform(100.3,383.2,0.891,0.891);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B0B0B2").s().p("AgFAMQgGAAgBgFIABgBQAFgCABgEIAAgIIASgDIgBASIgLAFQgBgCgFACg");
	this.shape_95.setTransform(98.2,383.4,0.891,0.891);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#969696").s().p("AgOAHQgFAAAAgEQAAgFAFgBIAUgFQABAFAFAAQAGgCACACQgEALgLABIgTgCg");
	this.shape_96.setTransform(96.5,384.8,0.891,0.891);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#625C54").s().p("AgDALIgEgBIgHABIgBgHQADgCAAgCQAGgQAFgCQADgCAOALIgBAHQgKACAFAJIADAGQAAADgGABQgCgFgIgDg");
	this.shape_97.setTransform(94,380.1,0.891,0.891);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B0B0B2").s().p("AgdALQgBgHAFgEIAIgKIAPgDIAUAAQALABABAPIgYAHIgKABQgGAAgEADg");
	this.shape_98.setTransform(103,383.3,0.891,0.891);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B0B0B2").s().p("AgdAUQgFgUAGgHQAGgIAWgCIAIgCIAHgBIAEABQAJADACAFQADAIgBADQgCAEgIABIgDABIgLgBQgIgKgGAJQgCACAIACIgBAGIgGAHg");
	this.shape_99.setTransform(91.9,382.9,0.891,0.891);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#969696").s().p("AgIACQAIgJAJAHQgDADgGABIgIgCg");
	this.shape_100.setTransform(41.5,384.9,0.891,0.891);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#969696").s().p("AgEAAIABgQIAIAAQgBAEAAAMQAAAKgDAHQgHgHACgKg");
	this.shape_101.setTransform(42.3,374.4,0.891,0.891);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#969696").s().p("AgOAIQgBgJgBgDQAKgGAGAAQAKAAAHAIQgCACgJABQgGACgFAEQgEAEgCAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAg");
	this.shape_102.setTransform(46.2,373.4,0.891,0.891);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#969696").s().p("AgGAEQgGgHgLACQABgLAGAAQAFgBAEAHQAGAHAIACQAFACAMABQgIAHgIAAQgIAAgGgJg");
	this.shape_103.setTransform(85.8,384.5,0.891,0.891);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#817B74").s().p("AgIgDIgCgHQgBgFADgCQACgCADAAIAGACQAEABADAEQACAEgBAEIgKAYIgJgXg");
	this.shape_104.setTransform(23.2,378.5,0.891,0.891);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#625C54").s().p("AgCARIgVgBQgLgBAAgHQAAgEADgDQADgCAEAAQANAAAPgMQAQgKAAASQAAADAJAGQAIAFgDAIg");
	this.shape_105.setTransform(27.9,372,0.891,0.891);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#625C54").s().p("AADAdQgGgBAAgLQgBgHgGgBQgMgBgFgKIgHgTQgBgCACgFIAFAAQACAHAIABQAJABACACIABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABAAIAEAGQACAGAHACIAMAEQAJACADADQAFAEgCAIIgJACQgFAAgDADQgJACgEAAIgCAAg");
	this.shape_106.setTransform(67.3,373.4,0.891,0.891);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#625C54").s().p("AAKAcQgEgIgHgEIAAgKIgCgFIAAAAQgBgGgFAEQgJAEgCAKIgFAFQgDACgEgDQgDgCAAgCIACgFQADgRADgCQAEgDAVgBIAMAEQAJAAgBgOQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAFABIAHAGQABAAABABQAAABABAAQAAABAAAAQAAAAAAAAQgJAFAAALQgBANgEAEIgIAMg");
	this.shape_107.setTransform(43.5,370.3,0.891,0.891);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#625C54").s().p("AgQADQgJgJgMgBQADgHAJgBIAIAAIASgCQAGAEAGgDQAJgEADgBQAHAAABAJIAEAQQABAJgNADQgBABgBAEIgZABIgOgTg");
	this.shape_108.setTransform(36.6,370.1,0.891,0.891);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#969696").s().p("AgVAZQgKgEgCgEQgCgFADgIIAGgPQADADADAHQAEAEAHgEQAIgGgBgHIgIgNQAMADADACQAGAFgIAMQgCADACACQABABAEAAQAPgCAEABQADADAFAQIgbAIIgKABQgKAAgJgDg");
	this.shape_109.setTransform(75.7,375.3,0.891,0.891);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#969696").s().p("AAjARQgJgHgLAAIgTACQgKACgOgFQgRgGgHgBIAEgIQACgGgBgDIAFgCQAPAQADABQALAFANgOQAKgMAdAGQAPAEgCATQAAAHgHACIgFABQgBAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAg");
	this.shape_110.setTransform(38.6,382.4,0.891,0.891);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#969696").s().p("AgWAWQgFgVABgJIABgHQABgDADABQAUAFAGgNIAIgaQAGgBACADIABAIIABAXQAAAOAEAHQgGACgBAIQgWACgGAHQgFAIAFAUIgNACQADgLgEgTg");
	this.shape_111.setTransform(90.1,380.2,0.891,0.891);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#817B74").s().p("AgHAjIgCgEQACgIgFgEQgDgDgJgCIgMgEQgHgDgDgGQAJADAGgEQAHgCACgIQACgIgHgFIgNgIQAPgKAPAPQAHAGACgCQABgBABgIIAXAAIAEABQAAAKgMABQgJABABAEIAFAIQAEAEAJABQAJABAEACIAAABIAIAMQABAIgIAFQgHAFgEgFQgDgHgDgCQgLABgFACQgHAEgDAIQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBgBg");
	this.shape_112.setTransform(71.3,372.6,0.891,0.891);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#969696").s().p("AgyAgQAAgKADgEQAEgFALAGQABgFgEgJQgEgHADgCQARgMALgFQAHgDABAHIACAMQADgFAPgIQAMgHABgLQAFgDAFACIAIAFQABAGgDAEQgCADgGACQgOAGAIANQABACAHAEQAGADgDAGQgDAFgHgCQgIgDgDABIAAAAQgEgLgKgDQgIgCgIADQgJADgCAJQgCAJAHAKQgOADgGAAQgLAAgIgHg");
	this.shape_113.setTransform(53.6,369.9,0.891,0.891);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#969696").s().p("ABcAUQgEgOgKgDQgIgBgOAFQgNAEgWAAQgbgBgIABIgLgBQgGAAgEAFQgEAFgIgFQgOgKgOAHQgNAHgIgPIgJgVQALAKARgFQAUgHAHADIAKAAQAGAAAEAFQAEAHAIgGQAWgVAGAhQAGgHAPgFQAPgEAFgHQABgCADgBQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABQADAJAMAFIASAIQAJAHAEAGQADAHgHAEIgFABQgDAAgBgFg");
	this.shape_114.setTransform(40,378.2,0.891,0.891);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#817B74").s().p("ABRA5QgTgBgKgDQgPgEgGgJQgHgLgKgBIgRADQgEABgEgDIgHgFIgPgHQgJgEgHAKQgCADgIgGQgGgEgIAAQgKABgFgBQgHgKACgIQACgJAJgDQAJgDAIACQAKADAEALQgGABABAEIABABQAFgBgBgFQADgBAIACQAHACADgEQADgGgGgDQgHgEgBgCQgIgOAOgGQAGgCACgDQADgEgBgGQARAEAXgCIApgHIAKABQgCAFgBAMQgDAJgOgEIgDABIgCADQgBADAFACIAYAJIgBASQgCgCgJAAQgIgCgCgGIgFAAQgCAFABABIAHATQAFAKAMABQAGABABAHQAAAMAHABQAEABALgEQACAMgLAAIgEgBg");
	this.shape_115.setTransform(60.5,371.6,0.891,0.891);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#817B74").s().p("AAbAxQgIgIgKABQgHAAgJAGIABgDIAHgMQADgEABgNQABgMAIgEQABAAgBAAQAAAAAAAAQAAgBgBgBQAAAAgBgBIgHgGIgFgBQAAAAgBABQgBAAAAAAQAAAAAAABQAAAAAAABQABAMgKAAIgNgEQgVABgDADQgEACgDASIgBAFQAAADACACQAFACADgCIAEgFQAFAFAPgBQAIADAEAIIgbACQgFgCgOgCQgMgCgHgEQABgFABAAQANgDgBgKIgEgRQgBgIgHABQgDAAgJAFQgGACgGgEQgBgJgLgGQgNgHgCgEIAggMQAUgGARADQAZADArgHQAUgEAaAGQAMACAiALIAUAIQgBALgMAHQgPAHgDAGIgCgMQgBgHgIADQgKAFgRALQgDACADAIQAEAKAAAEQgLgFgEAFQgEADAAALQgFAFgGAAIgDgBg");
	this.shape_116.setTransform(45.4,368.7,0.891,0.891);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#817B74").s().p("ABAAqIgBgXIgBgIQgCgDgGABQgNAAgHgBQgLgBgEgLQAAgCgGgBQgHgBAAABQgFAJgIABIgRAAQgFAAgEAFQgEAGAAAFQABAGAFAAIAKgBIAMgBQAHAAAAAFQAAAHgIAAQgJgCgEABQgHABgSgDQgPgBgKADQgBAAgEgDIgGgGQgFgQgEgDQgDgCgQADQgEAAgBgCQgBgCACgDQAHgLgFgFQgDgCgNgDIgBAAIAHgIQAEgFgGgHQgCgCAEgEQAEgDAFACQAOAIABgPQASgJAIABIAOAGQAHABAGgHIAWAAIgGALQgDAMAHAEQALAGAGgLIAGgHIADACQAKAKAFABQAIACAJgMQAFgHAHABQAIAAAGAJIALAMQAHAHAJgCQAIgBAJAEIAQAJQAHAEgBAGQgDALAAAHQABAKAIAHQAEADgDAEQgCAEgFACIgWAFQgOgKgFABQgFACgFARQgBACgDACQgEgIAAgOg");
	this.shape_117.setTransform(86.4,374.7,0.891,0.891);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#625C54").s().p("AgDACQADgGAEAEQgCACgDAAIgCAAg");
	this.shape_118.setTransform(181.2,368.5,0.891,0.891);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#969696").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_119.setTransform(172.1,371.8,0.891,0.891);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#969696").s().p("AgDACQADgHAEAHIgHAAg");
	this.shape_120.setTransform(135.8,384.3,0.891,0.891);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#625C54").s().p("AgFgCQAHAAAEAFIgFAAQgFAAgBgFg");
	this.shape_121.setTransform(191.3,385.2,0.891,0.891);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#625C54").s().p("AgHABQAFgDAKAAIgHAEIgCABQgDAAgDgCg");
	this.shape_122.setTransform(179.6,369,0.891,0.891);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#969696").s().p("AgEACQADgGAEABQAAAAABAAQAAAAAAAAQAAABABAAQAAABAAAAQAAAEgFABg");
	this.shape_123.setTransform(167.2,373.4,0.891,0.891);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#969696").s().p("AgBAFQgEgBAAgEQAAgFAFAAIAGAAIAAALIgHgBg");
	this.shape_124.setTransform(133.2,384,0.891,0.891);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#969696").s().p("AAAAEQgEgDgCAAIgBgEIACgBQAIgCAEAGQACAEgDABIgCAAIgEgBg");
	this.shape_125.setTransform(135,382.4,0.891,0.891);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#625C54").s().p("AgBADIgHgIQAOgCADAJIAAADIgCABIgBAAQgFAAgCgDg");
	this.shape_126.setTransform(210.9,366.8,0.891,0.891);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#625C54").s().p("AgNgBQAQgHAKAIIgNAFIgBAAQgHAAgFgGg");
	this.shape_127.setTransform(195.6,365.9,0.891,0.891);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#969696").s().p("AgGAAQACgGAFABQAIABgCAGQgBAFgHAAQgHgBACgGg");
	this.shape_128.setTransform(199.6,370.1,0.891,0.891);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#969696").s().p("AgEABQAAgJAEAAQAFAAAAAIIAAAGQgBADgEAAQgEAAAAgIg");
	this.shape_129.setTransform(204.7,372.4,0.891,0.891);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B0B0B2").s().p("AADAGIgHgBQgEgBgCgEQgCgDAFgBQAHgCACABQAFABADAEIACAFIgBABg");
	this.shape_130.setTransform(190.5,374.7,0.891,0.891);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#969696").s().p("AgHADQgBgIAIgCQAFgBAEAHQAAAIgHABIgCAAQgHAAAAgFg");
	this.shape_131.setTransform(211.1,369,0.891,0.891);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#969696").s().p("AgSAAQAJgFAJACIATAEQgKAEgIAAQgJAAgKgFg");
	this.shape_132.setTransform(163.7,377.4,0.891,0.891);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#625C54").s().p("AgSABIASgIQAKgEAJAJQgJACgIAFQgEAEgFAAQgGAAgFgIg");
	this.shape_133.setTransform(158.3,377.7,0.891,0.891);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#969696").s().p("AgKgBQABgKAGABQAMADACALQABAFgEABIgGABQgNAAABgMg");
	this.shape_134.setTransform(208.5,369.8,0.891,0.891);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#969696").s().p("AAFAMQgQgEAAgLQAAgKAKACQALACACAQQAAAFgEAAIgDAAg");
	this.shape_135.setTransform(184.7,372,0.891,0.891);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#969696").s().p("AgRAAQAEgGAIgCIANgBIAIAGQAEADgGAEQgKAGgGAAQgJAAgGgKg");
	this.shape_136.setTransform(164.6,385.2,0.891,0.891);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#625C54").s().p("AAIAOQgDgIgIABIgGABIgFgBIgIgHIAYgDQANgEAIgJIgEAOQgDAIABAGQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAIgFABg");
	this.shape_137.setTransform(119.2,369.2,0.891,0.891);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#625C54").s().p("AAFAMQgJgBgEgCQgHgDAAgHQgBgLAQABQAOABACAMQgCAKgHAAIgCAAg");
	this.shape_138.setTransform(154.8,373.2,0.891,0.891);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B0B0B2").s().p("AgLABQAAgFAFgRQAFAAACAHQACAGAEAAIAEADIABAKIgMASQgLgJAAgNg");
	this.shape_139.setTransform(166.1,374.4,0.891,0.891);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#625C54").s().p("AgDARQgMgHADgLIAFgCQACgCAEgIQACgFAGACQAIAFgCAUQAAAIgGABIgKgBg");
	this.shape_140.setTransform(195.5,369.8,0.891,0.891);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#625C54").s().p("AgJAQQgFgDACgHIAEgIQACgFgDgFQAHgGAMADQgCAGADAEIABAEIACAOIgLgDQgGgCgCAJIgCAAIgCgBg");
	this.shape_141.setTransform(164.7,368.3,0.891,0.891);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#B0B0B2").s().p("AgJAPIADgJQAAgEgEgHQgEgIACgFIAWAEIADATQABAIgFADQgDACgIABQgIAAABgEg");
	this.shape_142.setTransform(152.7,367.3,0.891,0.891);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#969696").s().p("AgHAOQgJgDgDgLIAAgOQATAKARgCQADAIAAAEQAAAGgJACIgLABIgHgBg");
	this.shape_143.setTransform(160.5,368.6,0.891,0.891);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#625C54").s().p("AgbAJQACgHAJgCQAJgBABgFIABgBIAUgBIAIAAQAEABABAFQAAALgMAAg");
	this.shape_144.setTransform(192,375.9,0.891,0.891);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#625C54").s().p("AgSADQAAgEgIgJQASgBAKACQAOADAKAIQAAAIgIABIgFABQgPAAgQgJg");
	this.shape_145.setTransform(160.4,367,0.891,0.891);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#969696").s().p("AADANQgGgLgLAAQgNAAACgFQABgJAQgFQAFAHAJAGIASAJQADACgBAEQgCADgDACQgFACgEAAQgGAAgDgFg");
	this.shape_146.setTransform(178.8,373.2,0.891,0.891);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#969696").s().p("AgbAHIABgEIAFgDQASgMAKABQALAAAJAOQgLAJgQAAQgIAAgTgFg");
	this.shape_147.setTransform(200.5,365.4,0.891,0.891);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#969696").s().p("AALARQgFgNgOgFIgZgJIgBgEQAEgCABgEIAOACQAGAFAHgDIAcAPIAIAEQADAEgEAFQgEAGgHACIgFABQgEAAgCgEg");
	this.shape_148.setTransform(168.8,369.1,0.891,0.891);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B0B0B2").s().p("AACAMQgGgLgDgBQgGgDgIAJQgDADgGgIQgEgFAGgCIAPgHQAJgEAEACIASABQALADADAPQABAEgEACIgIADQgFAEgFAAQgFAAgEgFg");
	this.shape_149.setTransform(175.1,376,0.891,0.891);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#969696").s().p("AgdABIAMgRIAHACQAEACACgBQAMgEAEABQAHACgCAOQAAADAHADQAHAEgBAGIgkABIgEAAQgPAAgEgQg");
	this.shape_150.setTransform(168.8,376.3,0.891,0.891);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#444235").s().p("AgDARIgfgHQAGgMAFgEQAHgHANAEQAKADAAgOIAPABQAPAHgDAMIgIAVIgDAAQgLAAgPgEg");
	this.shape_151.setTransform(171.5,380,0.891,0.891);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#969696").s().p("AggAXQgFgDAAgHQABgHgBgEQAhgLAUgMQAJgFAJAJIADAEIABAJQgFABgPAJQgMAIgJgEQgHgEgFAHIgGAJQgDACgDAAIgFgBg");
	this.shape_152.setTransform(127.3,368.3,0.891,0.891);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#625C54").s().p("AADAoQgPAAgIgBQgHgGAHgDQARgGgBgYQgBgKAFgPIAIgXIAFgDIgBAXIgEAWQgDALAFAJQAEAGAKAHIABAZQgIgLgOgBg");
	this.shape_153.setTransform(209.1,360.6,0.891,0.891);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#625C54").s().p("AAEAZQgIgBgDgKQgDgGgggDQgFAAgCgCQgDgCAAgEIAJgDQAEgDABgEQACgNAQACIgEAKQgBAGAHACQAGABABgFIAAgKIAIABQgBAOAEAFQAEAHAPgEQAJgDATAGQAHADgBAIQgBAIgJgCQgEgBgIACQgIACgEgBIgJAAIgGAAg");
	this.shape_154.setTransform(141.8,385,0.891,0.891);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#625C54").s().p("AAEAcIgBgIQAAgIgIACQgOAEgNgCIAIgVQADgMgPgHIATACQALABAHgFQAGgEAGAGQAEAFgFAJIgFAIQgCAFAFACQADACADgHQADgNAHACQAGACABAJQABAKACADQACADgDACIgGADQgOAHgJAAIgCAAg");
	this.shape_155.setTransform(176.8,380.4,0.891,0.891);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#625C54").s().p("AAQAVQgGgGgBAAQgZAIgQgRQgDgDgDADIgGAGQgJALgHgNQAVgPAigFIA5gKIAJADQgOAFgGABQgQAFAJAKQADAGgDADIgHAHIAAAAIgFABg");
	this.shape_156.setTransform(188,367.3,0.891,0.891);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#B0B0B2").s().p("AgrAOQgGgCACgEQADgGAAgCQAdgQAWAEQAEAEAEgCIAEgGQAHgIAIAEQAGACABADQACACgDAFQgCAEADADQALALgGAEIgQAFQgOADgOAAQgWAAgXgIg");
	this.shape_157.setTransform(124.3,380.3,0.891,0.891);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#625C54").s().p("AhDAVIAAgtQAQAMAbAAQAkAAAIACQASAEAHgOIAPgBIAIAFQAAAOgLgEQgNgDgHAGQgGAEgFANQgFAAgXgFQgSgEgMAEIgNAEQgHACgEAGQgDAEgCAAQgDAAgDgEg");
	this.shape_158.setTransform(166.1,379.7,0.891,0.891);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#969696").s().p("AApAgIAAgGQgFgWgSAJIgSAHQgJAFgCgJQgIgdgbgCQADgGAHgCQAJgDACgCIAGAAQABABABAAQAAAAABAAQAAAAABgBQAAAAABgBIAAAAIAMAAQAGAAAFgDQAOgJAHASQgDAMAMAHIAGATQADALgBAKQgFgBgBgDg");
	this.shape_159.setTransform(191.7,371.7,0.891,0.891);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#625C54").s().p("AgYAQQgPADgNgKIgFgHIAAgIIAMAAQASAGAKgBQALgDAKgNQAFgGAPgBQAPAAAIAHQAIAIACAFQADAHgHAJQgYgEgdARQgJgLgPACg");
	this.shape_160.setTransform(120.3,378,0.891,0.891);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#B0B0B2").s().p("AgnAjIAHgLQADAAAEADQAEADADgCQACgBgCgEQgEgHgIADIgDAAIgFAAQgEgSAVgOQAQgMgTAAQgJgBAGgIQALgSAQAJQATAJASATQADADABADQgCAFgGgBIgJgEQgFgDgGACIgKAFQgDADAAADIAAAJQAEANAAAFQABAKgGAHIgKABQgGgIgDAIIgTABg");
	this.shape_161.setTransform(137.3,380.4,0.891,0.891);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#444235").s().p("AgaAWQgPgFgFgBQgLgBgBgPQAEAAAKgFQAHgEAFAAQAIAIAGABQAGAAAGgJIAIgDQAHgCAAgFIAIgFIADAEQAJAPANgLQAIgGAIgCIABABIgBAsIgZgCIgFACIgRABQgLgBgFAEIgEAAQgHAAgKgDg");
	this.shape_162.setTransform(154.8,379.7,0.891,0.891);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#625C54").s().p("AAWAfQgKgKgPgDIgdgEIgRgDQgJgCgFgGQgEAEADAGQAEAFgEACQgEACgEgCIgGgGQgFgFgFAEIgIAFQgBgFgMgJQgLgIABgJQABgGgGgMQAHABAJgCIAQgDQABAQALABQAFABAPAFQANAEAIgBIALAJQAHAEADgBQAYgIAUANQACACAKgEQAPgGAaAEQAcAFAMgCIADABIADADQAAAFgHADQgGADgLgDQgLgDgFABIgPACQgIACgDAHQgOAIgKAAQgHAAgGgFg");
	this.shape_163.setTransform(157.8,382.8,0.891,0.891);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#969696").s().p("AhIBAIgVAAQAJgPANgDQAKgCAYgQQAUgNAPAAQADAAADgCQACgEAAgEQAAgFgIgCQgRgDgRAFQgMAFgRAMQgNAKgCABQgIADgIgNQgCgEgDABIgFAGQgNAQgUAGQgUAGgRgJIABgHIAWgGQAFgBACgEQADgEgEgDQgIgIgBgIQAAgHADgMQABgGgHgEIgQgJQgJgEgIAAQgBgGgIgHIgBgGQgBgDADgCQADgCAHAFIAOANQAJAHAIABQAKACAFAFQAEAGACAKIACAMQACAHAFABQAGABAGgEIAJgKQAIgKADgBQAGgDAHAJQADADADgCIAGgDQARgKAFgBQALgDAFgFQAHgGAAgLQAAgIAFgCQAFgEAFAGQAIAIAFgDQACgBAIgKQAIARAVAEQAUAEAPgLIgmgLQADgEAGgBQAGgCACgDIADgDIACAAIACAAIAGABIAIAHIAFABIAGgBQADAHAJAAIACADQACAHAIAAIANAAIAFAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAEAMAJADQAJACAKgIQAFgEAOAAQANAAAFAEQADAEgBADIgFAGQgVASgagHQghgKgaAYQgGAFgLAFIgSAIIgMAAQgLAFAKAEIAFAGIgBAMQgBAFgHADQgEgHgOAAQgNAAgFgHIAQABQALABgBgJQgBgHgJADIgMADQgGADgDAEIgRAAQgWAAgBAUQAAAJgDAQIgQADQgBgPgLgCg");
	this.shape_164.setTransform(111.2,376.3,0.891,0.891);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#969696").s().p("AAbBfQgPgFgFgBQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBgSgKADQgOAGgFgCIgIAAIgKgEQgPgDgDANQgBAFgEACIgIAEIgBgEQAHgHgBgKQAAgFgDgNIgCgJQAAgEAFgDIAJgFQAGgCAFADIAJAEQAHABABgFQAAgDgDgDQgTgTgSgJQgSgIgLARQgFAIAIABQATAAgQAMQgUAPADASQgHAJgQgDQgMgCgCgJQgBgJALgDQAKgDABgPQACgZAGgGQAHgGAZgBIAKgBQgJgMgPABQgQACgFgGQgEgFAEgRQABgEgDgIIgFgNQgDgIABgCQABgDAIAEQAFACACgDIAAgGQABgJAEABQAFAAAAAIQABAJAIAJQALAMACAEQADAFAIAAQAJAAAEgIQADgHADAAQADABAEAFQAFAHAJAEIARAHIAlAQQAYAKAQAEQAVAFAKABQARABANgJQAGgDAIAGQAKAGAGgCQgBAGgFADQgFAFgBADIgIAFQgGABgLgEQgKgFgHACIgcALQgQAFgNABQgKABgBAMIgJAEQgFACACAFQABAGAHAAIALAAQgBAJALAJQAMAJABAFQgCAJgKAAIgCAAQgHAAgLgDg");
	this.shape_165.setTransform(143.9,376.4,0.891,0.891);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#444235").s().p("AAAABIAAgBIABAAIgBABIAAAAg");
	this.shape_166.setTransform(100.3,184.4,0.891,0.891);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#817B74").s().p("AAAAAIABAAIgBAAg");
	this.shape_167.setTransform(127.6,205.6,0.891,0.891);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#817B74").s().p("AAAABIAAgCQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBACg");
	this.shape_168.setTransform(117.3,181.5,0.891,0.891);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#444235").s().p("AgBgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAAAIABAEQgFgDABgCg");
	this.shape_169.setTransform(102.8,192.1,0.891,0.891);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#444235").s().p("AgCAAIADgCQABAAAAABQABAAABAAQAAABAAAAQAAAAAAAAQgBACgDABQgEAAACgDg");
	this.shape_170.setTransform(79.2,187.8,0.891,0.891);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#969696").s().p("AgEgEIAHAAIACAGIgBADQgGgBgCgIg");
	this.shape_171.setTransform(113.7,178.1,0.891,0.891);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#817B74").s().p("AgGACIACgGIAKAAIABAAIgFAIIgGABg");
	this.shape_172.setTransform(109.9,187.5,0.891,0.891);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#444235").s().p("AAAAEQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAIgBgEIALAAIgCAFQgBAAAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIAAAAg");
	this.shape_173.setTransform(103.6,192.9,0.891,0.891);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#444235").s().p("AgDAGQgEgDADgDIAEgEIAGgCIgBAHIgEAFIgCABIgCgBg");
	this.shape_174.setTransform(109.6,188.4,0.891,0.891);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#444235").s().p("AgEgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAFADAAADQACAEgGAAQgFgCAAgGg");
	this.shape_175.setTransform(117.9,205.6,0.891,0.891);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#817B74").s().p("AgCgBQABgDAGgFQABANgJAFQgDgGAEgEg");
	this.shape_176.setTransform(107.7,181.1,0.891,0.891);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#444235").s().p("AAAAHIgKgCQACgMAFABQADABADAEIAIAGQgEACgEAAIgDAAg");
	this.shape_177.setTransform(105,192,0.891,0.891);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#817B74").s().p("AgJAAIADgHQADABAHgBQAGABAAAGIgRAIQgDgEABgEg");
	this.shape_178.setTransform(118.9,179.4,0.891,0.891);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#444235").s().p("AgJAAQgBgGAHABIAHABQAEABABADQACAGgHAAIgDAAQgHAAgDgGg");
	this.shape_179.setTransform(111.8,193.2,0.891,0.891);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#817B74").s().p("AAAAKIgBgGQgEgHgEgBIgCgHIAJgCIAOAQQgCAKgFABQgDAAgCgEg");
	this.shape_180.setTransform(115.1,178.7,0.891,0.891);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#444235").s().p("AADAGQgBgBgIAAQgGAAgBgGQgBgDAEgBQAEgBADACQADABAHAAQAGABABAEQABAEgGAAIgGAAg");
	this.shape_181.setTransform(108.6,192.4,0.891,0.891);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#817B74").s().p("AgSAHIgBgOIAmACQACAFgDABIgHAAIgOAEQgHADgGAAIgCgBg");
	this.shape_182.setTransform(87,179.3,0.891,0.891);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#817B74").s().p("AgLATQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIALgRQAGgLAIgEIABAHQAAAKgGAHIgMANQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAIgCgBg");
	this.shape_183.setTransform(96.4,192.9,0.891,0.891);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#817B74").s().p("AgWgDIAAgCQAFgEARABQASACAFAFQgKAKgLAAQgLAAgNgMg");
	this.shape_184.setTransform(138.8,182.4,0.891,0.891);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#444235").s().p("AAHAJQgDgGgMgGQgMgGgCgJIAAgBQAFAEAQAFQANAEAEAHIAFAJQADAFgEADQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgFAAgEgLg");
	this.shape_185.setTransform(137.8,221.5,0.891,0.891);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#817B74").s().p("AAAAUIgHgDQgIgDADgHIAJgWIADgEQADADACALQACAIAGAEQACACgBAEQgBADgDACQgDACgEAAIgDAAg");
	this.shape_186.setTransform(98.7,193.9,0.891,0.891);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#444235").s().p("AACARIgBgHQgCgJgGgCQgLgHAEgIQACgEAGAAIAIADQAJABADADQACACAAAIIgCAMIgCAHQgBAEgEABIgBAAQgDAAgBgEg");
	this.shape_187.setTransform(96.8,197.7,0.891,0.891);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#817B74").s().p("AgNAFQgCgFgIAAIgCgBQABgEAIgCQAHgCABgGIAcgBIAGAFIgBAEIgBABQgFACgMALQgIAJgJABIgDgMg");
	this.shape_188.setTransform(107.2,178.3,0.891,0.891);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#5E5B38").s().p("AAAAgQgEgHgFgBQADgOAAgHQgBgKgFgJQALgDgIgJIABgLQAIgBAFAHIAIAOQgEAMAAARIABAeQgEgBgGgHg");
	this.shape_189.setTransform(115,208.1,0.891,0.891);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#969696").s().p("Ag7AQIgBgBQACgGAFAAIAKAAQAQgBAEgDQAKgFgBgMIAFgFIANAEQAAAJACACQACAEAJgCIARABQAKABAHgEQAGgDAEAGQgLAHgRABQgUgBgKABQgNABgEAEIgGAEg");
	this.shape_190.setTransform(90.5,177.3,0.891,0.891);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#817B74").s().p("AgPAmIgEgLIACgMQAOgHAEgNQAEgKAAgSQABgKAEABIAIAFIAAARQgDAIAFAEIAAAKQgJAFACAKIgBABQgKgBgBAKIAAAKQgBAFgGABIgBAAQgGAAgCgFg");
	this.shape_191.setTransform(128.9,225.3,0.891,0.891);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#444235").s().p("AgDA+QgDgBgBgDQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAHgKgCgRQgCgVABgFQACgFgEgCIgHgBIgBgCQACgEADgYQACgRALgHIAAAYQAAAQAFAJQgHAKAIAOQAFALgDANIgJAWIgDAFIgBABIgDgBg");
	this.shape_192.setTransform(101.6,185.3,0.891,0.891);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#817B74").s().p("AgXAjQgEgCAAgFIAAgKQAAgOALgIIAGgHQADgDAEAKQACAEADgDIAIgEQADAAACgDQABgEgBgDQgBgFgEABQgFACgCgBQgLADgGgBQgKAAAAgOIABgCIAogBIACACQACAJAHABQgBARgCAFQgEAKgNACQgDABgBADIgCAGIgCAGQgCACgEgGQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBABIgCADIgEAJQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBgAgKAGIACADIACgCIgDgCg");
	this.shape_193.setTransform(111.6,180.7,0.891,0.891);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#969696").s().p("AAHATQgBgIgGgBQgGABgEgBIgLADQgHACgFgBIgPgQQAIgEAJAGIAGAAQADAAABgCQABgDgCgCIgFgDIgLgFQgGgDAAgGIABgBQAlAIA0AaQAFACgDAIQgDAFgHgBQgOgDgFAGIgCAAQgHAAgDgHg");
	this.shape_194.setTransform(119.2,177.7,0.891,0.891);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#817B74").s().p("AAKA9IgBgNIgFgTQgDgKgKgFQgEgBgDgGQgEgHAAgFIAEgBQABABAGAGQAEAFAEgDQADgDgCgGIgDgLIgPgaQgKgQABgOIABgBQAQAPAMAXIAXApIADAiQgEAGgDALIgFATQgFgGgBgIg");
	this.shape_195.setTransform(130.1,212.2,0.891,0.891);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#817B74").s().p("AgxAhQgBgFAEgDIAGgFIAEgEQABgCgCgDQgLgLAJgFQAEgBAGgJQAGgGAIAJQADAEAFgIIADgJQADgFACgCQADACgCAIQgCAHAHABIAAABQAAARARABQAGAAAHAKQAGAJAHgBIgOAGQgIADgGgJQgRgBgfAJIAAAAIADgIQgBgDgIADIgIAHQgEADgEAAIgBAAg");
	this.shape_196.setTransform(116.6,182.9,0.891,0.891);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#444235").s().p("AgHAuIgBgHIgCgjQgBgUgGgOQgEgIAEgHQADgHAJgBQAQgDAFAUQAEASAAAYIgBAsQgFgEgEgIIgGgLQgDAEABAIQACAJAAACIgEAEg");
	this.shape_197.setTransform(98.4,187.7,0.891,0.891);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#817B74").s().p("AA3AQIAAgXQgDgIgOgFQgOgGgGAFQgLAJAOAIIAFAEQACACgCADQgDAIgIAAQgHABgDgIIgCgKQgDgSgSAEQgVAFgDAHQgEAGAIAUQADAHgDADQgMgOABgOQABgKgFgEQgEgEgLAAIgKAAQgGgBgEgDQAFgEANgBQAKgBAUABQARgBALgHIAMACIAGgFIAPACQAJABAGgEIAMAAQABAFADgCIACgGIAHABQAEABADgBQAHgBAFAGIAIAKIABABIgEAWIgDAJQgPAAgDAMQgDATgBACQgFgJAAgQgAA/gcQgEADACAEIAFAHIAAAFQABAEACABQAEgBACgGQAFgLgGgEQgEgDgDAAIgEABg");
	this.shape_198.setTransform(97.1,180.4,0.891,0.891);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#817B74").s().p("AA2CDIgEgSQgEgJgHgGIgCgGQgKgVgHgwQgCgOgEgHQgFgKgKgEQgUgJAMgXQAGgOgHgPQgHgPgMAAQgHgBgEgJQgEgLgEgCQgBgBAFgCQAIgCABgFIgbgHIgFgDIABgHQAFACAXAFQASADAIAJIANAHQAGAGgFAKIAAACIACADQANAFAHASQAIAXAEAEQgFAOAHANQACAFAOAQIABABQgKAUAMAXQAFAKABAHQACALgIAIIgBAAIABABQAAADAIARQAFAMgEAKIAAAFQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgCAAQgFAAgCgIg");
	this.shape_199.setTransform(130.7,204.9,0.891,0.891);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#444235").s().p("ABrBKQgQgNABgFQAEgLgLgGIgzgeQgfgPgYgEIgigDQgTgCgNgHQgGgDgIgIIgOgLQgFgDAFgFQAGgGgCgDQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgEACIgJAFQgFADgEgFQgDgDAAgGQAAgGADgEQAEgFAIgBQAHgBACADQAIAKAOAEQAIADAQAEIgBAHQgIAAgEAEQgEAEABAHQAAAGAGADQADABAIABQANABAEgBQATgJAaABQAIABAkAGQADAAAHgDQAFgDADACQAFADAMACQAKADAAAMQAAAIASAEIgBAHQgBAEAGgCIAbAHQgBAFgIADQgFACABAAQAEADAEAKQAEAJAHABQAHALgHAJQgKAJgDAFIgBABQgEAAgMgKgAB0BAIABABIADgBIgCgCgABMAQQAEAMAKgBQgCgLgKAAIgCAAg");
	this.shape_200.setTransform(115.8,192.5,0.891,0.891);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#817B74").s().p("AAbCOQgNgGgIgTQgIgWgGgGQgJgJgIgWQgHgWgKgJQgEgEgMgEQgKgEgEgGQgIgIgCgDQgDgHAGgIQADgEgEgHQgDgEADgFIAEgHQACgMAMgHIASgLQAVgVgBgVQgCgWgZgPQgJgGgCgHQAeAFALARQAKAQgFAdIgDAKQgBAGAEADQADADAFgDQAHgEABAAIACAHIgBAJQgOAGgIAQQgCAEgHAaQgDANAQADQANABABAGQACAKAMAUQAMASACAMQABAIAHAGIAPAMQAHAHACAJQACAIAKgCQAKgBAEALQACADgEAEQgDADgEgBIgIgEQgMgGgEAEQgDACABAFIAEAGQAEAHgDAHIgJAMQgIgUgJgFg");
	this.shape_201.setTransform(147,197.3,0.891,0.891);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#5E5B38").s().p("AgKBHIgTgQQgFgEAEgGQAGgMgEgKQgEgJgNgEQgIgDgJgIIgOgPQgEgDADgDQADgDAGgBQATgEgHgOQgFgKgQAKQgJAGgJAAIAAgHQAbgJANgNQAGgFALgBIAGAJQAEAEAGgBQAKgCAEgPIABgHQACgEAEgBQAFgBADAJQAEAKgIAEQgNAGACATQABANAHAAQAHgBgCgNIgCgLQAAgGAHAAQALABAFgHQADgDAEgMQACgEACgCQADgDADAGIAHANQADAJgIAIQgGAFAFAKIAIAQQABABAAABQABAAAAABQABAAAAgBQABAAABgBQACgDAAgEQABgGADgIIAHgSIAJAeQACgCACgFQABgFADgBIAHALIgBAVQgBAMgFAGIgBAFQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAHALQADAGgGAGQgLAKgFgDQgQgIgDgQQABgHgBgCQgFgKgCgBQgFgEgIAIQgBACgHACQgOADgDAGQgDAGAKALQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCADQgDAEgFgFIgDgEQgDgDgEAAIAGAbQAEARgEAOQgGgLgKgJg");
	this.shape_202.setTransform(110.2,249.5,0.891,0.891);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#817B74").s().p("AgYCxIAEgYIASgCIADAGQACAEAEgBQAEAAABgEIABgIIAEgKQAIgWABgHQACgPgNgMIgCgJIABgDQAMgSABgfQAAgfgOgXQgGgLgNgOQgRgRgFgGQgGgEABgCQADgSgOgFQgSgCgHgDIgIgDQgFgBgBgEQgBgFAEgEIAIgGQAVgOgUgNQgHgEACgHQADgIAJACQAGACAKgCQALgCAFAAQAIACADgHQAEgKAJgCQAFgBALADIAEAEIAAAKQAAAFADAEQAAAHAEAJQgBALALAOQAFAHAEgBQAFgBABgHIgBgGQAAgDAEAAQAGALAIAGQAKAHgEALQgHATAJAgIAAAPQgBAJAFADQANAJgCAJQgBAGgLAKQgPg7gMgZQgMgdgNgMQgGgGgEACQgDABAAADIAAAFQACAJgKAFQgdAMAaATQAPAMAQAdQAFAIADASQAEARAFAIQAFAJABANIgBAXQAAAJgJAPQgIAOABAJQAEAdgSAWIAUgHQAKgDAIAAIABANQAAAGgNgHQgFgDgDAFQgBACgBAHQgLABgGAFQgNANgaAJQgEgLABgOg");
	this.shape_203.setTransform(103.7,227.4,0.891,0.891);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#444235").s().p("AgqBmQgMgHgDgNQgEgPgMgXQgFgHABgHQAAgIAEgEQAKgJgBgLQAAgHgGgOQgHgTAKgTIAPgaQAEgHAHgEQAHgEAHAAQAaAEAWgIQALgDAGAFQAGAFgCALQgDARAFAJQAFAKARAEQAHACAEAHQADAGgCAJIgEAWQgDALADAJIgBADQgUAPAPAOQADADABADQAAAEgDACQgIAGgCALIgCAUIhJAJIgEAAQgMAAgKgGg");
	this.shape_204.setTransform(98.3,232.1,0.891,0.891);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#444235").s().p("AgcCkQAFgJgFgGQgHgGgCgFIgIgRQgCgKAEgHQALgSgDgcQgGgegBgQIAAgGQACgFgCgBIgFgGQgFgFgQgKQgPgJgFgJIAAgLQAGgDACgIIALgLIASgIQAKgGACgKIABgLIgBgeQgBgSAFgMQATADADAPQgGABAAAFIABACQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIADgIQAIAEAJAHIAQAMQAJAFgEAGQgCAEgEgBIgHgDIgGgEIgHgHQgDgEgEAFQgDAEAFAEIAHAFQASAMAFAPQADAJALAJQAMAIAMARIAVAcQAIALgGAJQgMAWAOAgIgBAMQgLgHgIAHQgDADgGAMQgLAVAGAdIgOgDIgBgEIAAgJQgCgEgGABQgPADADAMIABAMIgBADQgPAQgRgQQgCAEABAEIACAGQABAGgIAAQgKAAABgEgAAACLQAAAHAGgCIAEgEQAAgFgFAAQgFAAAAAEgAgKBlQAAAHAHABQAEABAAgFQAAgIgGAAQgFABAAADgAAIg9QgFAIgCABIgMABIgGABQgDAAgBAEQgCAGAJADQAIACAGAHIAMAMQAEAFAHALQAHAHAKAAQACgEgCgDIgDgHQgFgLABgCQAAgFANgBQAHAAABgFQAAgFgEgGQgHgJgagNIgDgBQgDAAgDAEg");
	this.shape_205.setTransform(119.4,221.3,0.891,0.891);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#444235").s().p("AgrBsQgHgIgKABQgMAEgGABQgFgJAAgHQAMgLgPgIIgEgEQABgEgDgGIgGgIQgGgJgOAAQgNABgFAJQgEAHgFgFQgFgGAAgMIACgVQABgNgDgIQgDgJAMgJQALgIALACQAMAEAJgIQAKgHgBgNQgBgNACgCQADgEALAJQAFADADgDQAGgIgHgIQgGgIgKAAIgTADIARgPQAJgJAJAEQAaANgCAVIAMgFQAFgEgEgJQgCgDACgCQACgCAEAAQAJgBAAAGQgCANAHADQAEACAMgCQAXgCgHgYQAsADAhAPQAOAFACANQACAHAGAHIAMALQgLgCgTgNQgTgMgOgCQAIAMANAKIAZAPQgMALgOgMQgNgLgFAGQgEAEADAGIAHAJQAFAJASAPQARAOAFANQACAFAHAGIAMAJQAHAFgDAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgFgBQgJgCgGgHIgKgPQgTgigogBQgUgBgHgLQgIgMAHgSQAFgNgNgDIgfgEQgBgGgEAAIgDABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQACABAGABIgDANQgCAIADAGIAGAMQAEAEAIgCQADgBADACQADADgEACQgLAJAEAFQACACAKAEIAEAEIgBALIgHAFQgEACAIAFQAFAJABALQAAAHgDAOIgFALQgEAHgGABQgEABgSALQgIAFgIAAQgFAAgEgCg");
	this.shape_206.setTransform(112.4,203.7,0.891,0.891);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#444235").s().p("AB1DFQgHgEgCgDQgFgJgFAAQgFgBgGAJQgFAHgFgBQgFAAgEgIIgEgKQgCgGgDgDIgDgKQgDgGgKAHQgEADgFgGQgFgFgDgIQgWgyAAggIgEgFIgBgBIgEgaQgCgPgMgHQgEgFgIgWQgHgSgNgFIgCgCIAAgDQAFgKgGgFIgOgHQABgQgLgQQgNgSgFgKQgSgigOgQQgGgFAGgIQAFgHAFABQALACAYAAQAUACAKAPQAIANANgLQAIgHAIACQAIADADAKQAFAVAFAEQAFAEAXAAIAdACQAIABABAEQACAHgHADQgQAIgKgFQgQgIgMAAQAAAFAFACQASAHADALQAEAKgJASQgRAkATAjQABACAGACQAYAKAIAIQAPANABAXQAAALAIARIANAbQACAEAFAHQALATgHAGQgEAEgEgGIgJgIQgEgEgCAAIgHgDQgEgBgCAEQgDAGAIAFIAJAGQAQAIAGAHQAJAKgBAPIABAGQABAEgDACIgEABQgEAAgEgDg");
	this.shape_207.setTransform(135.6,200.6,0.891,0.891);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#5E5B38").s().p("AABgFQADAEgCACIgDAFQgBgHADgEg");
	this.shape_208.setTransform(52.5,257.4,0.891,0.891);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#5E5B38").s().p("AgEgGQAKABAAAMQgLAAABgNg");
	this.shape_209.setTransform(59.4,201.2,0.891,0.891);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#5E5B38").s().p("AAEgKIAAAVQgOgHAOgOg");
	this.shape_210.setTransform(51.8,259.2,0.891,0.891);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#817B74").s().p("AAAgDQAGADgGAEQgDgEADgDg");
	this.shape_211.setTransform(147.8,184.7,0.891,0.891);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#969696").s().p("AgrAAQAugLApANQgHACgKgBIgRAAQgdgDgPAFIgDAAQgEAAgCgFg");
	this.shape_212.setTransform(104.2,174.4,0.891,0.891);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#B0B0B2").s().p("ACKARQgKgGgIAFIgJACIgIAAIgCgCQgIgJgLAAQgHABgOAGIgGgGQgDgCgCADIgYABQgMgFgGgBQgJgCgIAGQgDACgEgBIgHgBQgEgDgDAGIgMAAQgNgMgQANIgGAFIgNgCQgEgIgGAEQgHAFgKgBIgRgBQgJACgDgFQgBgCAAgJQACgGAHACQAIAEACgEIAUADQAMACACgCQAHgHAMgBIATgCQAGgCABgDQAFgEADAEQACAGAHgCQAOgFAdADIARABQAKAAAHgCQAIgDAKACQAIAFAPACIAYAFQAEAEADgEIAHgBQAAAFAHADIAKAEIAFAEQADACgCACQgBADgDABIgFgCg");
	this.shape_213.setTransform(104.1,176,0.891,0.891);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#817B74").s().p("ABVAxQgDAAgGgFQgRgNgQAHQgHAEgKgCQgKgBgHgGQgKgJgPAFQgPAFgKgIQgGgEgNgDQgOgCgGgEQAGgGAOADQAHABACgFQAEgHgGgCQg0gbglgIIgCABIgHABQgEgDgDADIgYgEQgPgCgIgGQAQgCAaADQAgAEAJAAQAVAAAZAPQAiAUAHADQAGADAcAGQATAFAMAHQAKAFATgKQA9geAxAgQAFADAKABQASABAEARQg4gQgbgKQgNgEgOADQgJACgQAIQgJAFAKAGIAWAOQgDAHgFAAIgBgBg");
	this.shape_214.setTransform(128.1,178.8,0.891,0.891);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#444235").s().p("AgFgKIAKAKQAFAFgMAGQgDgHAAgOg");
	this.shape_215.setTransform(190.6,298.3,0.891,0.891);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#625C54").s().p("AgEgTQAIAGADAEQADAGgFAIQgBACABAFIABAIQgTgQAJgXg");
	this.shape_216.setTransform(192.1,309.1,0.891,0.891);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#625C54").s().p("Ag5FCIgFgIIgFgKIAAgBIAGgEQgFgMADgYQADgYgDgLQgCgFAFgHQAOgYgKgcIgFgRQgCgKAHgIQADgDgEgFQgFgGAAgCQAKgKgCgUQgDgYACgGQACgHgCgCQgHgJACgRQADgSgFgHIAAgEIADgEQALgFABgKQABgGgDgNQgGgWAMgTQAEgGgCgDQgMgUAAgZIgDgKQgBgGAGgEQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIgEgFIgKgRQgFgKABgJIgEgMQgBgGALgCQADgBgCgEIgFgIQgIgNAQACQAPADgDgOQgCgKAHgSQAEgJgEgIQgHgPATAAQAOAFABALQAAAFgDABIgHABQADAPgBAZQgBAdABALQABAHgFgBQgHgCgBABQADALANANQAOAPAEAJIgXgJQgDAAgCAFIgDAJQgBAEAGACQAJADAAAIQgBAGgFABIgMABQAOAJgBAQQAAAKgFARIAAAZQgBAPgGAJQgCAEACAEQACAEADABQANACAGALQADAGAFANIAIASIAFAIQADADAEgCQAEgCABgEIgBgJIgCgXQAAgLAHAAQAFAAAAAKQAAAIAFAGQAFAEALAFQgFgTARgCQAQAQgKAVQgEAHgBAKIgBATIABAJQgBAEgDABQgKACgEAFQgDAFAAAKIgCAQQAAAJADAGIADAGQABAEgDACQgHAEgEgKIgLgNQgIgJgCgFQgCgIALgHQAIgHgCgIQgCgFgHgJIgDABIgCAIQgBAFgEABQgEAAgCgEIgDgIQgCgDgBgGIgCgJIgCgJQgCgFgGACQgJADAIANQAEAGADAKIAEAQQAAADgEANQgDAKAJAGQghADAKAPQANAWgBACIgDABQgCAAgFgFQgEgDgDADQgGAGAMAIQAEADABAEIgCAJIgHAaQgDAPABALQABAKgDAOIgHAXIgCAHIAAAHQACAPgKADIgCAAQgEAAgCgDg");
	this.shape_217.setTransform(187.3,312.7,0.891,0.891);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#817B74").s().p("AgFgDQACgDAKgDQAAAKgHAJQgJgJAEgEg");
	this.shape_218.setTransform(210.9,354.4,0.891,0.891);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#817B74").s().p("AgMgMQAJACAGAJIAKAOQgWgFgDgUg");
	this.shape_219.setTransform(193,298.3,0.891,0.891);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#625C54").s().p("ABsB7QgGgFgFgDQgXgOAAgTQAAgHgHgBQgOgBgMgPQgRgVgGgEQAHgCAHAGQAHAFAGgBQgGgTgJgGQgxgjgbgRIgTgMQgKgJAFgPQACgEgGgEQgGgDgGADQgKAEgMAAQgFgGABgNQANgHgFgGIgMgKQgEgEADgDQAEgEABgDIARAMQADAWAXAFQAMAFAEAIQAGAMAOAKIAaARQAEAHAJAGIARAIQAJAFAKAKIAQAQIA9B6IgLgKg");
	this.shape_220.setTransform(200.4,307.8,0.891,0.891);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#444235").s().p("An+QIQgJgKACgKIACgaQABgJgEgFQgEgGgIABQgLABAGASQAGAUgVAFQgIgMgRAAIAAgcQgCgNgMAAQgMAAAAANIACAZIgpAGQgYADgRgEIgIgGQgFgCgFADIgVgIQghgLgMgCQgagGgVAEQgsAHgZgDQgRgDgTAGIghAMIgKgBQgLgHgIAKIgBAAQgFAEgHACIgOADQgMADgDgKIgGgQQgGgEAGgCQAHgCAAgDIARgIQAJAEAEgIIAKAEQATARAJgZQABgJgFAAIgJAEIgIgHQgCglgNgTIACgHQAIgIgFgMQgHgQAAgDQgKAAAAgJQABgMgCgCIgBgLQgBgGgCgDQgDgEAAgCQgBgDAEgDQAMgLgPgOIAHgHQADgEgCgEQgDgHgMACQgHABgHgFIgKgKQgCgDgGgBIAHgdQAJgIgJgHIgEgHQAFgRACgKQAFgjAEgRQAHgdAMgUQAKgSgGgNIABgMQAFgBAEgIQAghBBEgiIAggQQARgLAHgPIABgBIAUgNQALgIAEgHQAPghgCgVIgJhnQAGgSABgJQADgQgDgOQgHgggBgMQgDgaAHgVQADgHgBgQQgBgQADgJQALgaAQghIAMgZQAGgPACgMQACgcADgJQAEgLgNgFIAAgGIAGgGQABgEgHgDIAAgDIABgEIAFgEQABgDgCgEQACgNAKgUQAMgZACgIIASg4QALghAMgWQAEgHgDgNIgEgWQAAgIAHgUQAFgSgCgLQgBgEAKgEQAagMgLgcQgGgMADgGQAHgKgDgNQgCgJgGgJQgJgPAAgTIADgjQABgJgDgJQgIgZAQghQACgEABgKQAAgOALAAQANAAADAMQACAJAAANIgBAVIgDAeQgBARAEAMQADAIgIAQIgDAFQgBADADACQADACAHgFQAKgGAAgJQgCgZAPgYQAGgGgBgEQgFgNAHgQQAJgSADgKQgKAEgGgHQgGgIgEgEQgDgDACgEQACgEAEAAQAbgDgQgWIgBgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAKAAAFgNQAGgOAKAAQgGgFgGAAIgKAEIgKAFQgGACgFgBQgKgDgDAHQgCAHAEAHQAHALgHAOQgIANgNABQgNABADgLQABgEgCgHQgBgIAAgDQADgMgHgFQgEgDgMgBQAAgNgLgCIgEAAQgBgJgKgGQAIgNgIgQIgMgaIgDgZQAAgRgCgIQgBgFAEgFQAFgFADABQAGACAPgFQANgEAHAFIAGABQAOAEABgJQABgEgFgCIgIgBIgLgBQgGgBgDgGQAQgEAYAJQAtARAhAAQALAAAEAHQACAFgFACIgFADIgEAQQgDAKgGAGQgTAUgKAIQgKAJgFANQgCAFgEAUQgCAKAMgDQALgCANgHIAVgNQAFgDgCgDQgBgCgFgBIgJACQgGAAgEgFIAPgHIAOgFQATgEAKgcIACgKQABgGADgEQAGgLAMgDQAIgCAPAAQAOAAAFgBQAJgDADgLQACgFAGACQAGABABgCQAGgRAMADQAGABAOAJQAKAFAIgHQAIgIACgRIAeAPQAEACAJAHQAIAEAFgOQABgDAEACIAGAEQAHAKAFAOIAHAZQACADgCAFQgDAEgEACQgDACgDgCIgFgEQgFgEgFgCQgJgFgEAGQgFAHAKAGQAEACAGAIQAGAGAIgBQAHgBgBALQgBAIgJgDQgGgCgCgCQgmgegjAdQgDACgFAAIgJABQADAJAEACQAEADAJgEQATgIAYAFQAXAGALAPIAGAIQACAFgFADQgEADgFgDQgEgCgCgFQgGgNgLgEQgJgEgPAAIgNABQgGACAAAHQgBADATAJQADACAIgBQAGAAABABQACACAAAHIgCAWQgBAMADAJQAKAeAQAMQAJAHADAJQACAKgFAJQgIAPgJAjQgDAKgKANQgNARgDAGQgJASgEAaIgGAtIgEAgQgCATgGANQgDAGACAOQADAOgDAHQgIAVAGANIAWAuQAEAJAGgCQADgBABgDIABgFQADgMAEgCQAEgBAKAIIAVASQANAJANAAIAAgGQgBgCgIgFQgHgEABgFQABgFAIAAQAKAAACgBIAKgDQAFgCAFABIAKACQAFADgEAKQgEAJAKAJQALAJALgCQAIAAAKgGQAPgKAGAKQAHAOgUAEQgFABgDADQgDADAEADIAOAPQAIAJAJADQANAEAEAJQAEAKgHAMQgDAGAFAEIATAQQAKAJAHALQADgOgDgRIgHgbQAEAAADADIAEAEQAFAFADgEIABgDQABgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgLgLAEgGQACgGAOgDQAHgCACgCQAIgJAFAEQACACAEAKQACACgBAHQADAQAPAIQAGADAKgKQAFgGgBgGIgHgLQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgFQAFgHABgMIAAgVIAHgmQAAgFAIAAQAIABgBgHIAAgHQANABAHALQAHALgGAJQgFAGADALQABAFAFgCQAHgDABgMQACgWgJgZIgDgHQAAgEAEgBQAIgEAHAKIADAIIABAIQACAEAFgBQAKgBABgKIAAgJQACgFAFgBQALgDAJgPQAJgOgBgLQgCgIACgEQACgGAJgBQAGgCgCgDQAAgCgEgEQgBgDgHgJQgFgHABgHIAEgEQAIgDgEgHQgEgGABgIIACgNIABgBQAQgEgJgLIAAgLQAGgIgIgEIAAgSQAQgEAFgJQAGgJgBgRIABgPQABgKgFgFIgDgiIATAEIACAHQgJAMAGAOQADAJAIAPQADAHAHALIAAABQgOABAIAKQAUAVAQANQAZATgQAaQgCAEABADIAEAEIANANIAGAIQADAFgEADIgIAMQgFAHgJgEQgJgFgGAKQAWAFgLASQgFAGAHADIAFACQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQAJgJAIADIAOALIAIADIABgFQgBgDgIgIQgGgFACgEQAEgFAGAEQAJAHACAAQAGAAAIgLQAIgMgCgIQgDgLAFgMQAHgOACgHQAEgRAUANQAEgFgCgEIgEgGIgEgFQAAgDAFgBQAIAAAAgEIgBgJQgDgLADgFQAHgLgNgDQgIgBgEgJQgDgHABAAQAZgMAHgCQACAAADADQADADgCAEQgGAJAFAEQACADAKACQAGACADACQADACABAHQACAKAWADQAVAEAHgHQAFgHgJgIQgQgOACgVQAAgGgIgGQgIgHAAgFQAAgLgHgBIgPABQgKABAAgJQgBgFAEgBIAIAAQAYgCAKAIQAJAIAJAaIALAgQAGATAHANQAEAIAAALIgCAVQgBAHAGALIAIAQQABABAAAAQAAAAABAAQAAABABAAQAAgBABAAQABAAAAgBQABAAAAAAQAAgBABgBQAAAAAAgBIAAgLIgCgKQgBgGAFgCQAFgCADAEIAGAIQAIAIAHgDQAGgCAHACIAMAEIANAFQAGADgBAHQgCAIgHAEQgIAEgJgBIgJgCQgBgFgDAAIgBABQAAACAFACQAAARATACQANABAAAHQABAGgHAAQgIAAgCADQANABADAQQADASAKACQgHAKAIAHIAMAMQACAEgCADQgBADgGgCQgFgEgJgBIgOgBQgDAHAIAEQAQAHAHAUIALAgQAAABABAAQAAABAAAAQAAABAAAAQgBAAAAAAQgOAJAGAJQADAEAKAJQAGAIgDAGQgCAFgHgBQgHgBgDADQADALAKALIARARQALALAaATQAaASALAMIAHAHQAKAOgEAGQgDAFgFgFQgFgFgBABQgHASALAVIASAjQACAGAJAKQAKAKACAHQABADAEAEQADAEgDAFQgFAHgOgEIABAiIgBAAQgKABACADQACADgBANQgBAKAJADQAUAHALAUIABAHQgSAAAHAPQAEAIgFAJQgHASACAKQADAOgPgDQgPgCAIANIAEAIQADAEgDABQgLACABAGIADAMQAAAJAFAKIAKARIADAFQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgGAEACAGIADAKQgBAZAMAUQADADgFAGQgMATAGAWQAEANgBAGQgCAKgLAFIgCAEIgBAEQAFAIgCASQgCARAGAJQADACgDAHQgCAGADAYQADAUgKAKQgBACAFAGQAEAFgDADQgHAIACAKIAGARQAJAcgOAYQgEAHABAFQAEALgDAYQgDAYAEAMIgFAEQgBgFgDAAIgCACQAAADAFABIAFAKIAFAIQAEAEAFgBQAJgDgCgPIABgHIACgHIAGgXQADgOAAgKQgBgLADgPIAGgaIACgJQAAgEgFgDQgLgIAFgGQADgDAEADQAGAFABAAIADgBQACgCgOgWQgJgPAhgDQgJgGADgKQAEgNgBgDIgEgQQgCgKgEgGQgIgNAJgDQAFgCADAFIACAJIACAJQABAGACADIAEAIQABAEAFAAQAEgBABgFIACgIIADgBQAHAJABAFQACAIgIAHQgKAHACAIQABAFAJAJIAKANQAFAKAGgEQADgCAAgEIgDgGQgEgGABgJIABgQQAAgKAEgFQAEgFAJgCQAEgBAAgEIAAgJIAAgTQABgKAEgHQALgVgRgRIgEgSIgBgIQgBgEABgCQAFgJgDgGQgDgFgJgFQgBgpgJgeQAMAAAKgFQAGgDAGAEQAGADgCAFQgFAPAKAJIATAMQAbAQAyAkQAJAGAGATQgGACgHgFQgHgGgHACQAGAEARAUQAMAPAOACQAHABAAAGQAAATAXAPQAFACAGAGIALAJIALEhIgCAEIAAAFQAGAQgCAYIgGAnIgCADQgLADgCADQgDAFAJAJIABAFQgFgBgDAEIgFACIgJAYQgFAOABALQABAZgRAFQgHADAHAGQgDAMgNgBQgIAAgYAHQgKgOgLgBQgLAAgSAMIgEAEIgBADIgOAAQgLgJgQAHIgLgBIgJgCIg6AJQgiAGgUAQIgMABQgFgEgDAHIgHABQgKAAgFAEIghgFQgUgEgOACQgIABgLgCIgUgDIgKgGQgGgFgHADIgPgCIgGgEQgNgDgHAGIgLABQgLgJgOgDQgLgCgRABIgyAAIgWgEQgFgFgKACQgKACgEgBQgQgHgXAEIgnAHQgPABgdAEQgdAFgPAAIgUAFQgMACgIgEIgEgEQgJgJgJAFQgUAMghAMQgGABgIgIQgHgIgHADIgDADIgBAAQgHAJgOAEIgXAEIgHgBQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgDADIgFgCQgmABgYgFQgggIgWgVQgLgKgKAQQgHAMgSAIQgTAIgIgFQgJgGgMAFQgQAHgBgCQgJgLgRgGIgdgJQgGgDgHgHIgMgLIgYgVQgOgMgNgEQgHgNgbgXQgdgZgLAAIBKBDIAAABQAAAKAHAFQAEACALACIAEAEQACAKAMABIABABQABAFAEAAIAKAKQACAGAGAAIAAABIAEACIABABQgIAMgOAAIgYgEQgDgEgJABIgKgDIgGgHQgDgEgEACQgEACAAAGIABAJIgBAGQgFAHgIgCIgNgFQAEgGgDgJQgDgLACgEQACgEgBgDQgBgDgEAAQgDAAgJgIQgIgGgGAFQgEADABAFIACAJQAEANgBAFQgBAKgKAFQgRgJgMAQgAMDIiIABAAIAAgDIgCAAgAL/IUIAAACIABAAIAAgDgAjWlBQABAGAHADIALACQAJACAAgPQAAgGgEgCQgCgBgHAAQgQABABAKgAoSt6QALACAIgKIgHgBQgIAAgEAJg");
	this.shape_221.setTransform(118.9,277.8,0.891,0.891);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#969696").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIACADg");
	this.shape_222.setTransform(114.4,383.4,0.891,0.891);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#B0B0B2").s().p("AgDgBIAHAAIAAADg");
	this.shape_223.setTransform(117.2,383.4,0.891,0.891);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#817B74").s().p("AACgDIgBAHQgFgEAGgDg");
	this.shape_224.setTransform(45.7,389.7,0.891,0.891);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#817B74").s().p("AgDACQACgEAFAAQAAAFgEAAIgDgBg");
	this.shape_225.setTransform(48.4,389.5,0.891,0.891);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#817B74").s().p("AgDABQADgFAEAEQAAAAgBABQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_226.setTransform(108.4,384.2,0.891,0.891);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#817B74").s().p("AgMAAIARgEIAIAHIgNACIgBAAQgHAAgEgFg");
	this.shape_227.setTransform(23.4,383.9,0.891,0.891);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#969696").s().p("AgKgDQAEgDAGgBIAKAAIABAEQgEAAgFAEQgEAHgEAAQgFgFABgGg");
	this.shape_228.setTransform(102.7,384.9,0.891,0.891);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#817B74").s().p("AgRAEIAFgEQAFAAALgGQAJgEAFAOIgIAAIgZAEg");
	this.shape_229.setTransform(116,382.9,0.891,0.891);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#817B74").s().p("AgHAGQgDgCAAgEQABgEAEgCIAHgCQAKAAgBAHQgBAKgKAAQgEAAgDgDg");
	this.shape_230.setTransform(120.5,387.7,0.891,0.891);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#969696").s().p("AgEAHIgHgHIADgJIALAAQAMAEgFAKQgDAGgEAAQgDAAgEgEg");
	this.shape_231.setTransform(42.3,386.9,0.891,0.891);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#969696").s().p("AgJAKQABgLADgDQADgIAKABIABAIQAAAGgFAEQgEADgHADg");
	this.shape_232.setTransform(176.3,383.4,0.891,0.891);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#817B74").s().p("AgGAIIgBgHQgEgKAHgEQAEgCAFAFQAHAGgEAIQgFAJgEACQgDgCgCgFg");
	this.shape_233.setTransform(83,393.4,0.891,0.891);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#817B74").s().p("AABAIIgUgBIgBgEIAXgHIAPgDIADANQgGACgKAAIgEAAg");
	this.shape_234.setTransform(105.5,383.9,0.891,0.891);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#969696").s().p("AgFAKQgGgBgCgGQgCgEAFgEQAHgFAGABIAMAFQgCAIgIAGIgFAAIgFAAg");
	this.shape_235.setTransform(90.1,387,0.891,0.891);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#817B74").s().p("AgPAEQACgCAGgBQAHgCgDgJIABgEIAPAHQAIAEgBADQgBADgGAEQgEACgLAAQgLABgGAFQAAgHAEgEg");
	this.shape_236.setTransform(117.9,384.6,0.891,0.891);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#969696").s().p("AgTABQAAgEAGgCIAMgCQABACAKgCQAHgBADAIQgDAEgGABIgLABIgLACQgHgBgBgGg");
	this.shape_237.setTransform(185.3,384.7,0.891,0.891);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#817B74").s().p("AgLAMQgDgEABgEQABgGAGgFIAMgFQAFgDADAMQgHAMgMAFIgBAAQgDAAgCgCg");
	this.shape_238.setTransform(117.2,387.9,0.891,0.891);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#969696").s().p("AgKgDQAMgJAGgBQAIAAAAAGIAAAKIAFAIQgagIgPALQADgNAHgEg");
	this.shape_239.setTransform(111.3,382.6,0.891,0.891);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#969696").s().p("AgJAAIALgIQAGgEAEACQAFABACAFQADAFgEADIgJADIgdAEQAEgHAHgEg");
	this.shape_240.setTransform(36,388,0.891,0.891);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#817B74").s().p("AABASQgNgCgJAEQAJgPgIgJQgDgFABgFQABgFAGgCIABADIALAUQAGALANABQACAAAFAIIgWgEg");
	this.shape_241.setTransform(76.1,386.5,0.891,0.891);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#817B74").s().p("AgNAEQgTAAgGgCQAHgGAJgCIATgCQAIgBANAFQAPAFAGAAQgDAKgLgDQgMgDgDAFQgIgHgPABg");
	this.shape_242.setTransform(70.7,388.3,0.891,0.891);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#817B74").s().p("AAAAaIgKgOQgHgJAHgIIAGAGQAJAJAGgKQAEgKgMgFIgKABQgDgDgFgBIgJgCIAIgFIAJACQAGgBACgDIATgDIAFAVQgHAGgDAIQgCAGgBAMQgBAGgDABIgDABQgEAAgBgFg");
	this.shape_243.setTransform(42.2,387.4,0.891,0.891);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#969696").s().p("AgfAHQgBgQACgCQAEgDARABIAUABQANAAAIACQgBAKgDACQgEADgKgFQgOgHgNAMQgHAIgJABg");
	this.shape_244.setTransform(107.8,386.4,0.891,0.891);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#817B74").s().p("AgOAXQgLABgBgLQgBgLAJgDIANgDQAGgBgBgGQAAgGgJABIgRAAIgBAAQAIgFALgCIATgBQAYgBgKAVQgJAAgMAEQgLAHgHACQACADAHABQAFABABAFQABAEgFACQgHgDgEABg");
	this.shape_245.setTransform(49.5,385.7,0.891,0.891);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#817B74").s().p("AAVAMQgIgDgJgBIgRAAQgEAAgJgGQgJgDACgGQACgIAKAEQAMACAdAAQAOABABAJQgBAHgEADQgCACgDAAIgEgBg");
	this.shape_246.setTransform(120.5,393.5,0.891,0.891);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#444235").s().p("AgpgGQALAIAMgEQAGgDAMgIQAHgCAOADIAVAEQgDANgNACIgvAHIgCABQgQAAgCgVg");
	this.shape_247.setTransform(127.8,393,0.891,0.891);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#444235").s().p("AgLANQgIgCgHgJQgFgHgJACIgQAGQAAgIAHgDIAOgDQAIgBAVACQARADALgFIAQAEQAKACAHgBIACAHIgEAEQgMAAgkAHIgOACIgCAAg");
	this.shape_248.setTransform(100.1,387.7,0.891,0.891);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#444235").s().p("AgqAKQgFgIAEgGIAKgMIAEABQACAJAKgDIANAAQARAFAhABQgIATgUgCQgSgBgNADIgQACQgIAAgFgIg");
	this.shape_249.setTransform(193.4,386.3,0.891,0.891);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#817B74").s().p("AAqAVQgFAAgCgCQgLgNgQAAQgHABgVAGQgQAGgIgJIgIgGQgEgEABgEQACgFAEABIAIABQAFAAADgFIAEgIIAAAAIAAAAIAAAAIAKAAQAGAAACAFQAFAJAHADQAFACAMAAQAUgBAJAFIAHAEQADACgBAFQgDAHgJAAIgCAAg");
	this.shape_250.setTransform(27.6,388.4,0.891,0.891);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#817B74").s().p("AApAXIgLgDQgTgHgJgBQgQgDgNAJQgJAGgGgDQgGgCgCgLIAEgFQAIAAAIgHQAOgNAOAIQAIAFAFgEQADgDABgJIAMgCQAFACgDAKQAAAEAFADIAIAFIAIAHQADAFgDAFQgDAEgEAAIgCAAg");
	this.shape_251.setTransform(109.4,387.3,0.891,0.891);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#969696").s().p("AgKAvQgFgHgCgBQgNgBgHgLIgLgUQANABAEgIQAKgXAWANQANAFAFgEQAEgEgEgDIgGgGQgGgLAJgEQAEgCAIgGQAHgEAGADQAHADgGAMQgCAEABALQACAJgEAFQgDADANADQgDAHgFgBIgJgDQgLgDgLADQgLADAGAIQAFAGAAAJIgDAPg");
	this.shape_252.setTransform(79.2,384.3,0.891,0.891);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#969696").s().p("AgnAnQgFgIgJgEQgFgCgNgBIgIgIQAAgLgLgDQgLgCAGgJQAEgIAJAEQAYAKgCgaIAAgIQAAgEADgBQAFgCACADIACAIQAEAJAGgBQAGAAAEgGQAJgTAJAUQABADAJAIQAGAGgDAEQgDAGgHgFIgMgHQgQgCgKANQgHAJgQAHQAFAFAOAFQAOAFAEAHQAAABAAAAQAAAAABAAQAAAAABAAQABAAAAAAQAFgOAGAEIAMAJQAIACAXgKQABAAAFAEQAYAJAQgGQATgHAHAOQgXAEgpgBQgtgBgSACQgIAAgCgFg");
	this.shape_253.setTransform(31,382,0.891,0.891);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#817B74").s().p("AARAfQgFgBgEgKQgIgRgcABQgcABgTgXQACgBAHADQAGAAgDgLQgCgFARAEQAOADABAOQAIgBABgCQAPgMASABQANABAUAIQAKAEAJAKQALAJAEAMQgIAMgFgOQgHgSgOAQQgGAIgGAEQgHAEgEAAIgCAAg");
	this.shape_254.setTransform(58.5,387,0.891,0.891);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#B0B0B2").s().p("AAnAfQAHgFAAgDQABgDgIgEIgQgIQgFgOgJAEQgLAFgFACIgFADQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIgBABIgDABIgHAAIgFgIIAAgKQAAgGgIAAQgGABgOAIQgGAFgDAMIgHAEQgFgFgDAGIgIACIgDgOQADgPAAgIQABgVAWAAIARAAIAGACQAFAHANgBQAOABAEAGQADAHAEAAIAJgEQAUgIAJAQQAGAKARACQAbAGAHARIgaAEQgPABgJAHQgEAAgBgGg");
	this.shape_255.setTransform(115.5,382.5,0.891,0.891);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#969696").s().p("AAXAlQgPgBgJgNQgOgQgMABQgLABgLATIgfgCQgBgEgCgDIgGgFQgHgJgBgFQgCgJAKgIIAPgPQAJgIAMAFIAAAEQgCACgJAFQgHAEACAFQADAGAIgCIANgFQAFgCANAEQAMACAHgEQAEgCADAJIAFANIAIgGQAFgFAFAEQAKAJAUABQAaACAFACIALACQAGACgBAGQgBAIgGAEQgFAEgJgCQgKgDgRADQgPADgIAAIgFgBg");
	this.shape_256.setTransform(189.5,380.5,0.891,0.891);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#969696").s().p("AiYA6IABgHQAGgGgBgGQgBgDgHgHIgMgKIgFgUQADgCALgDQAKgBACgCQAEgEgKgHQgFgFACgEIAHgGQADgEADAAIAFAFQAJAIAMADQAMADAJgDQAKgEAcABQAYABANgHQAEgCADAGQAJARALACQAMABAMgNQACgEAJgDQATgGABgQQACgMALADIARACQAIACABAJQAAAIgIABIgPABIgFADQANALAJgFQAIgEAEADQAFACAAAJQABAJAGABQADABAIgEQAWgLATAUQgGABgBAFQgBAEADAFQAIALgJAOIAAABQgGAAgPgGQgNgFgJABIgTACQgJACgHAHIgVACQgFgMgKgKQgJgJgKgEQgUgIgNAAQgTgCgOAMQgBABgIABQgCgNgNgCQgRgFABAGQADAJgFAAQgHgCgCABIAAgBQAKgUgZACIgUABQgKABgIAFIgBACIABgBIASgBQAIAAABAFQACAFgIACIgNACQgJAEABALQABAMAMgCQADAAAIACIgFAPQgGAAgDAFQgGAFgIAAQgFAAgGgCgACMgDIACADIACgCIgDgCgABUgTQgHACAAAEQgBAFAJABQAGAAABgHQgCgFgEAAIgCAAg");
	this.shape_257.setTransform(59.4,384.8,0.891,0.891);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#817B74").s().p("AhPBPQgIgEgDgIQgGgPgGADQgDABgHAKQgHAKgIgBQgGgBAAgGQAAgHgBgCIgVAIQgNADgIgKIADgPQAAgJgFgGQgHgIAMgDQALgDALADIAJADQAFABADgHIABgEQAMgCAFAIQAOATARgRIADgCIANgCIAVABQAIACgCgIIABgHIAJgDIAMABIABAAIABgBQAJAAABgEQABgEgCgHQAFgBAAgDIgCgHQgGgKALgCQAQAJAUgGQAUgFANgRIAFgFQADgCACAEQAIANAIgDQACAAANgLQARgMAMgFQARgGARADQAJADAAAFQAAAEgCAEQgDADgEAAQgPAAgUANQgYAPgKACQgNADgJAQIgPADIgYAAIgSACQgIABAAAGIABAIIAAABIgUAEQgFACAAAFQAAAFAFAAIATACQALgBAEgMIALgFIAbAGQgBAHAFAFIgBAKQgKAFgSgDQgWgCgHABIgPADQgGADAAAJQgLANgJgOQgEgIgDgDQgFgFgHACIgNgFQgHgBgGAFQgGAEACAFQADAGAGABIALAAQAEAMAAAEQAAAJgKADIgHABQgFAAgGgDg");
	this.shape_258.setTransform(95.5,383.2,0.891,0.891);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#969696").s().p("AglAdQgFgDADgIQAEgMgGgEQgEgCgLAAIgNABQgIAAgFgCQgGgDABgEQABgEAHABIASAFQAOADACgIQAGgQAOgDQALgBANAGQASAKAbgDQAPgBAdgGIgWAnQgJgCgLAGIgTAKIgHACQgDAAgBgGQAAgFgEAAIgGABQgGAAgJAEIgQAGIgHABQgDAAgCgCg");
	this.shape_259.setTransform(203.2,380.3,0.891,0.891);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#B0B0B2").s().p("ABCArQgJgGgLAAIgUACQgKABgOgFQgQgGgHAAIAEgJQACgGgBgEIAFgBQAOAPADACQALAFANgOQALgNAdAHQAPADgCAVQAAAGgHADIgFABQgBAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBgACLAAQgEgNgKgDQgIgBgOAFQgNAEgWAAQgcgBgIABIgLgBQgGAAgEAFQgEAEgHgEQgOgKgOAHQgNAHgIgPIgJgWQALAKARgFQAUgHAHADIAJAAQAGAAAEAFQAEAHAIgGQAXgVAGAiQAGgIAPgFQAPgEAFgHQABgCADgBQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQADAJAMAFIASAJQAJAHAEAGQADAGgHAEIgEABQgEAAgBgFgAiWgUIgCgHQgBgEADgDQACgCADABIAHABQAEACADADQACAEgBAEIgKAYIgKgXg");
	this.shape_260.setTransform(35.8,380,0.891,0.891);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#817B74").s().p("Al5DJQgOgDgIACQAQgRAaAAQARABgBgQQAAgHgFgBIgKAAQgMgBgCgCQgLgLgPgDQgKgCgTABQgOABgTgEIghgHQAIgHAQgBIAagDQgIgSgagGQgSgCgGgLQgJgQgUAIIgJAEQgFAAgCgHQAGgCACgGIABgLQANALAPgDQAPgCAKAKQAAADgDAFQgBAEAFACQAmAOAkgJIARgEQAFgEgKgMQgDgDACgEQACgFgBgDQgCgCgFgDQgJgDgGAHIgFAGQgDADgEgFQAHgIgDgJQgCgFgIgIQgIgHgPABQgPAAgFAHQgLANgLACQgKADgSgHIATgIQAKgFAHgGQAagXAgAIQAaAIAWgSIAFgFQAAgDgDgEQgEgFgOAAQgNAAgGAFQgJAIgKgDQgJgCgEgMQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAIgFAAIgNAAQgHAAgDgHIAGgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQgBgGACgJIAEgOIABAAIADgDQAHgDAHAIQAIAIAGgBQAAAEgBAHQAAAHAFADQAGADAFgEIAHgJQAEgHAHAEQALAEAMgIQAPgKAFgBIgBgJQAIAEAMgCIAUgFQAPAAAdgFQAdgEAPgBIAngHQAXgEAQAHQAEABAKgCQAKgCAFAFQgCAFAEAHQAEAJgBAEIgDAIQAAAEAIAAQAIAAADgCQAFgDAAgIIgEgUIAyAAQAHAJAAAFIAAAPQADALAKADQAGACAMgCQAJgCABgGQAAgEgDgJQAHgBABgIIAKgBQADAFgCAFIgEAJQgCAHAFADQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAQACgJAHACIALADIgCgPIAaAJQAOAGAGANQACAGAIgDQAIgCAEgGQAEgFgEgEIgIgFIgSgJIAUADQALACAIgBQAOgCAUAEIAhAFQAEADAFgCIAGgFIAHgBQAGABACgEIAMgBQAGANAJgLIAGgGQAEgDACADQARAQAZgIQACAAAFAGQgCACgJADQgHACgDAGQAbACAIAeQACAIAKgEIASgHQASgJAFAVIAAAGQABADAFABQABgKgDgKIgGgUIALABQAGgBAAgIQACgVgIgFQgGgCgDAFQgEAIgCACIgFACQgHgSgOAJQgFADgHAAIgMAAIAHgGQADgEgDgGQgIgLAQgEQAFgBAOgGIALABQAFAIAIgBIAOgFIAOAAQASAGAKAAQAPAAAMgKQAYgHAIAAQANABADgMQAIABAQAAQAOABAIALIgBAOQAEACACAFIgBACIgCACIgDgBIAAgKQgEgDgJABIAIAJQACADADAAIAAAKQAEAAADAHQABAJgIABIgBAAIABgRIgBABQgKABABAJQABAGAIAAIgDBdIACAAIgCADIAAgDQgcAFgOACQgbADgTgKQgNgHgLACQgOACgGARQgCAHgOgDIgSgFQgHgBgBAFQgBADAGAEQAFADAIAAIANgBQALgBAEACQAGAEgEANQgDAIAFADQADADAJgDIAQgGQAJgDAHAAIAGgBQAEgBAAAFQABAHADAAIAHgDIATgJQALgGAJACIAUglIgBA3QgagHgRANQgMAJgMgDQgNgDgVAKQgBgHgEgBQgEgBgEAEQgGAGgIABIgPAAIgcgBQgRgBgMAFIgNAAQgEgGgIAAIgEgBQgGgGgCgBQgFgDgGAGQgDADgGgBQgHgCgDACQgCgIgIABQgKACgCgCIAAgLQALgSALgBQAMgBAOAQQAKAMAPACQAIABAUgDQARgDAKACQAJACAFgDQAGgEABgIQABgHgGgCIgLgCQgFgBgagCQgUgCgKgJQgFgFgFAFIgIAIIgGgPQgDgIgEACQgHAEgMgDQgNgDgFABIgNAFQgIACgDgGQgCgFAHgDQAJgFACgDIAAgEQgMgEgJAIIgPAPQgKAIACAJQABAGAHAJIAGAFQACACABAEQgXAEgCAUQAAAHgPAHQgNAHgIgCQgJgEgEAAQgKAAgBgEQgBgDAIgHIADgGQAJgDADgDQAFgEABgHQAJAAAPgIIAHgCQADgDgDgDQgCgDgBgLQgBgIgGgCQgGgCgEANQgCAHgEgCQgFgCACgGIAFgIQAGgIgEgFQgHgGgFADQgIAFgMgBIgTgCIgPAAIgIgFQABgGgHgEQgGgDAAgDQABgPgHgCQgDgBgOAEQgCABgEgCIgGgCIgBgKQAGgBAAgFQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQgFgBgDAIQgEgBgCgGQgDgGgFgBQgFARAAAFQAAANALAJQAFASASgCIAWAAQgHAOgSgEQgIgCglAAQgaAAgPgMIgBAAQgJgJgKADIgTAKIgDgEQAAgDAGgFQAFgFAAgFQgFABgKgGQgJgGgFAEQgOAIgRgBQgKAAgVgFQgPgEgYgKIgngPIgRgHQgJgFgFgHQgEgFgCAAQgEAAgDAHQgDAIgJAAQgJAAgCgFQgCgEgLgMQgJgJAAgJQAAgJgFAAQgFAAgBAIIAAAGQgBADgFgCQgJgDgBADQgBACADAHIAGANQADAIgBAFQgEAQAEAFQAEAGAQgCQAPgCAJAMIgJABQgZABgHAHQgHAGgBAaQgBAOgKADQgLAEABAIQACAJAMACQAPADAHgJIAGABIABAFIgIALIgHAAQgEAAAAAFQgBAEAFACIAIABIATgCIAIABIALgBIAAADQAAAFADACQACACAFAAQAgADADAGQADAKAJABIAPAAQAEABAIgCQAIgCAEABQAJACABgIQABgIgHgDQgTgGgJADQgPAEgFgHQgEgGABgOQAGABANgGQAMgCAAASQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAGAAAOAFQANAEAHAAQALAAACgJIAIgGQAFgEAEAFIAHAGQADADAEgCQAEgCgDgGQgEgGAEgDQAFAFAKACIARADIAcAEQARAEAKAJQAMAMAYgPQAJARAWgNQAGgEgEgEIgIgGQAFgCAMADQAKADAGgDQAIgDgBgEIgCgDIgDgCQgMADgdgFQgZgEgOAFQgKAEgDgBQgTgOgaAJQgCABgHgFIgLgKQAGgDALAAIARAAIAEgDIAaADQAGAHAFgHQAEgGAHgCIANgEQAMgEARAEQAZAFAEAAIAfAHQASAEAMgBQAOACAOgDQAIgCAAAIQgLgBgDAIQgCADgBAMQgZgBgBAXQgBAJgFADQgGACgGgFIgMgGIgLgGQgGgFgGACIgNAEIghAKQgSAGgKANQgHgDgQABQgPABgIgGQgOgJgHAQQgEAIgOgBQgegDgTACQgbACgVALQgFACgCgDQgVgYgaATQgDACgFgFQgPgOgVADQgVACgOAQQgDAEgWAUIgVgEgAB9AWQACABAIALQAHAKALgJIAIgDQAFgCgBgEQgDgQgLgDIgSgBQgGgCgIAEIgPAHQgHACAFAGQAFAIADgDQAHgHAEAAIAEABgAEpADQgFABACAEQACAEAEABIAIABIAIAAQgBAFgJACQgJACgCAIIArAAQAMAAAAgMQAAgGgFgBIgIAAIgUABIgCgFQgDgFgFgBIgCAAIgIABgACUgMQgBAGAMAAQALAAAHAKQAGAKANgHQADgCABgDQABgDgCgCIgSgKQgLgGgFgHQgQAFgBAJgAhugKQAAAIAHACQAEACAKABQAIABADgKQgCgNgPgBIgDAAQgNAAABAKgAHLgQQAAAJAFAAQAEgBABgDIABgHQAAgIgFAAQgGAAAAAKgADkgaQAAAMASAEQAHACAAgHQgDgQgLgDIgDAAQgIAAAAAIgABjgXIABAAIAAgCIgCAAgAHwgwQgBANAOAAIAGgBQAEgBgBgFQgCgMgNgDIgBAAQgFAAgBAJgAGQgsQgCAHAIABQAIAAABgFQABgHgHgBIgBAAQgGAAgCAFgAIMiIQgFgJADgMIAEgWIABgWQADgEAFABIADBRQgKgGgEgHg");
	this.shape_261.setTransform(163.3,374,0.891,0.891);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#817B74").s().p("AgCAAIADgDIACADIgEAEg");
	this.shape_262.setTransform(89.4,175.8,0.891,0.891);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#5E5B38").s().p("AgCgBIAFAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_263.setTransform(95.5,174.7,0.891,0.891);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#625C54").s().p("AgCgDQAGABgBAGQgFgCAAgFg");
	this.shape_264.setTransform(186.3,268.7,0.891,0.891);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#625C54").s().p("AAAgDQAEADgCAEQgHgDAFgEg");
	this.shape_265.setTransform(185.7,267.3,0.891,0.891);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#625C54").s().p("AgCADIgCgFIAEgBIAFAHg");
	this.shape_266.setTransform(147.5,190,0.891,0.891);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#625C54").s().p("AgCgJQAGADAAAFQAAACgCAJQgGgFACgOg");
	this.shape_267.setTransform(187,270.5,0.891,0.891);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#817B74").s().p("AAAgMIAFAEIgBAKQgBAHgDAFQgJgOAJgMg");
	this.shape_268.setTransform(147.6,186.9,0.891,0.891);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#625C54").s().p("AAEgPQADAHgCAIIgCAQQgSgRATgOg");
	this.shape_269.setTransform(186.6,274.4,0.891,0.891);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#817B74").s().p("AACAEQgDgCgGABQgGAAgDgBQAFgHALAAIARAAQgBAGgEADQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAgBAAQgCAAgDgCg");
	this.shape_270.setTransform(87.1,176,0.891,0.891);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#817B74").s().p("AgQADIgDgCQATgKAUAFIgEAGQgCAEgJgDQgFgDgDAHg");
	this.shape_271.setTransform(91.2,175.4,0.891,0.891);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#817B74").s().p("AgSABIADgBQANgTAVAOQAAAIgFABQgJgFgIADIgPAKg");
	this.shape_272.setTransform(83.2,177.3,0.891,0.891);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#625C54").s().p("AgeAAQADgDAEABIAHACQAOAIAHgKQAFgGAHgCIAPgBQgWAVgKACIgCAAQgLAAgRgMg");
	this.shape_273.setTransform(70.5,184.4,0.891,0.891);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#625C54").s().p("AgYALIgBgDQADgGAVgGQAUgIAGADIABAJQgRgGgIAMQgCAFgJAAIgOAAg");
	this.shape_274.setTransform(79.2,178.3,0.891,0.891);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#969696").s().p("AgTAIIgTgDIADgHIAKgCIAFgBIAKAAQAEAFADgFIADgCIATgBQAMAAAJABQgCAEgFACIgTABQgNABgFAHQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgKgBg");
	this.shape_275.setTransform(96.2,175.2,0.891,0.891);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#817B74").s().p("AATAFQgKgFgNgBIgZAAQgJAAgDgFQAxgQAiAiQgNgCgKgFg");
	this.shape_276.setTransform(63,183.3,0.891,0.891);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#B0B0B2").s().p("AgYANQgCgDAAgEQAGAAAAgIQACgIAFACQADABAGAAQAFgBAEACQAGAEAEgEQADgEABgGIAHACIABAFQAAAMgJAFQgFACgOACIgKgBQgFABgCAGIgGgFg");
	this.shape_277.setTransform(86.8,177,0.891,0.891);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#969696").s().p("AATAQQgLgLgRABQgVAEgKAAQgMABgFgEQgEgEAAgKQADgIAGgBIALACIAQAAQADAGAJAAIAYAAQAOABAKAFQAJAFAOABIADABQABAHgBACQgCADgHgDQgRgIgJAJIgFACIgCgBg");
	this.shape_278.setTransform(61.6,183.9,0.891,0.891);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#969696").s().p("AgtAQIAAgPIAOAAQAJAAADgEQAIgNAQAHIAPgKQAIgEAJAGQAAAEACADIAGAEIABABIAAAOQgRgDgVAFIgkAKIgFAAQgGAAgGgFg");
	this.shape_279.setTransform(81.1,179.2,0.891,0.891);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#969696").s().p("AA0A7QgDgDABgGIADgLQAFgcgLgPQgLgRgdgGIgHgCQgDgFgSgBQgSgCgFAFIAAABIgFAIIgWgOQgKgGAKgFQAQgIAIgCQAOgDANAEQAbAKA4AQQAAAGAGAIQAHAJABADQgDAEADADIgBAIQgKANAJAOQACAIgDAJIgEABQgDAAgHADIgFACIgDgBg");
	this.shape_280.setTransform(140.9,184.8,0.891,0.891);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#817B74").s().p("Ah9AlQgGgBAAgJIAAgPQAFgPANgMQAAALAEAEQAFADAMgBQAKAAAUgDQASgBAMAKQACACAEgDQAKgIAQAHQAGADADgDQABgCgBgGIAIgBQATAOALgCQALgCAWgVQABgKAHgFIALgEQANgFAEADQADADgDAPQgBAEAFADQALAEABAKQgNgIgJADQgGACgGAOQgKATgQgNQgGgEgOACQgTACgFAAIgogDQgZgCgQgFQgWgGgOAEQgOAFgNASQgFAFgDAAIgBAAg");
	this.shape_281.setTransform(66.2,184.7,0.891,0.891);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#625C54").s().p("AK5I0QgJgDABgKQABgMgCgDQgCgDAKgCIACAAIgBAAIgBgiQAOAEAFgIQADgEgDgEQgEgFgBgDQgCgGgKgLQgJgKgCgGIgSgiQgLgVAHgTQABAAAFAFQAFAFADgFQAEgGgKgPIgHgHQgLgMgagSQgagTgLgKIgRgSQgKgLgDgLQADgCAHABQAHAAACgEQADgHgGgHQgKgJgDgFQgGgIAOgJQAAAAAAAAQABgBAAAAQAAgBgBAAQAAgBAAgBIgLggQgHgTgQgHQgIgFADgGIAOABQAJABAFADQAGADABgDQACgEgCgDIgMgMQgIgHAHgKQgKgDgDgRQgDgRgNgBQACgDAIAAQAHAAgBgGQAAgHgNgBQgTgBAAgSIAJACQAJABAIgDQAHgFACgHQABgHgGgDIgNgFIgMgEQgHgBgGACQgHACgIgHIgGgIQgDgFgFACQgFACABAGIACAKIAAALQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgIgQQgGgKABgIIACgUQAAgMgEgIQgHgMgGgTIgLghQgJgagJgHQgKgIgYABIgIABQgEABABAEQAAAJAKgBIAPgBQAHABAAALQAAAGAIAGQAIAHAAAGQgCAVAQANQAJAIgFAHQgHAIgVgEQgWgEgCgJQgBgHgDgDQgDgCgGgBQgKgDgCgCQgFgEAGgKQACgDgDgEQgDgDgCABQgHACgZAMQgBAAADAGQAEAJAIACQANACgHALQgDAFADAMIABAIQAAAEgIABQgFAAAAADIAEAGIAEAGQACAEgEAEQgUgNgEARQgCAIgHANQgFAMADALQACAIgIALQgIAMgGgBQgCAAgJgGQgGgFgEAGQgCADAGAGQAIAHABADIgBAGIgIgEIgOgKQgIgEgJAKQAAAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIgFgBQgHgDAFgHQALgRgWgGQAGgJAJAEQAJAFAFgHIAIgMQAEgEgDgEIgGgHIgNgOIgEgEQgBgCACgEQAQgbgZgTQgQgMgUgVQgIgLAOgBQABAKAMAGQAOAHADAGQAFAOAIgGQADgDgCgFIgFgIQgFgJgOgEQgQgEgEgEQgHgMgDgGQgIgQgDgIQgGgOAJgNQAHAGADAJIAFASQACAKAGgCQABAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIAAgFQAEgKgGgMQgHgRgBgDIABgBQAHgIgBgLQgBgHgGgKQgLgXAJgUIAFAFQAAAfAWAzQAEAHAEAFQAGAGADgCQAKgIADAGIAEALQACACADAGIAEAKQADAIAFABQAGAAAEgGQAHgJAFAAQAEABAGAJQABACAHAFQAIAEAFgDQADgCgBgEIgBgGQAAgOgJgKQgGgHgPgJIgKgGQgIgFADgFQACgFAFABIAGADQADABAEADIAIAJQAFAFAEgEQAGgGgKgSQgGgHgBgEIgOgcQgHgQgBgMQgBgWgOgNQgJgIgXgLQgGgDgBgCQgUgiARgkQAJgSgDgLQgEgKgSgIQgFgCABgFQALAAAQAJQAKAFARgJQAGgDgBgGQgBgFgIgBIgegCQgWAAgFgDQgFgEgHgWQgDgKgHgCQgIgCgJAHQgMALgJgNQgKgQgUgCQgXAAgMgBQgEgBgFAHQgGAHAFAGQAOAPASAiQAGAKANASQAKARAAAPQgJgJgRgDQgYgFgFgCQgRgEAAgIQgBgMgKgEQgMgCgFgDQgDgCgFADQgFAEgDgBQgkgGgKAAQgZgCgUAJQgDACgOgBQgIgBgDgCQgFgCgBgHQAAgGAEgFQAEgEAHAAIACADIgEAFQgDADAEADQACACADgCIAEgFIABgHIAEgJIABgBIgBABIgLAAQgRgDgIgDQgNgFgIgJQgCgDgIAAQgIABgDAFQgDAFAAAFQAAAGADAEQAEAFAFgDIAIgGIAFgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABADgFAGQgFAFAFADIANALQAJAIAFADQANAHAUACIAhADQAaAEAeARIAzAeQAKAGgDALQgCAEAQANQAQANACgDQADgFAKgKQAHgJgIgKQANAAAHAPQAHAPgHAOQgLAXAUAJQALAEAFALQADAHACAOQAHAwALAVIgTgFIgXgqQgNgXgQgOIgBAAIAAABQgBANAKAQIAPAaIAEAMQACAGgEADQgEAEgEgFQgGgIgBAAIgEAAQAAAHAEAGQADAGAEACQALAEADAKIAFATIABANQABAJAFAFIAFgTQADgKAEgHQAFAGgBAJIgBAPQABASgGAIQgFAJgQAFIgIgFQgEgBgBAKQAAASgEAKQgFAOgOAHQgPggANgWQAGgKgJgLIgVgcQgMgQgMgJQgLgJgCgJQgFgPgSgLIgIgGQgEgEADgEQADgFAEAEIAGAHIAGAEIAHADQAEABACgEQAEgGgIgFIgRgMQgJgHgIgDIAAAAQgDgPgUgEIgIgNQgFgIgJACIgEgEQgKgFgCgDQgFgFAMgIQAEgDgDgCQgDgDgDABQgJADgEgFIgGgLQgDgHACgHIADgNIAgAEQANADgFAMQgHATAIALQAHAMAUABQAnACATAhIAKAPQAGAIAJABIAFACQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQADgFgHgEIgMgJQgHgGgCgGQgFgNgRgOQgSgQgFgIIgGgKQgDgFAEgEQAFgGAMAKQAOANAMgLIgZgQQgNgJgHgMQANABATANQATANALABIgMgLQgGgHgCgHQgCgMgOgGQgggPgsgCQAHAYgXACQgNABgEgBQgHgDACgOQAAgFgJABQgEAAgCACQgCACACADQAEAJgFADIgMAFQACgUgagOQgJgEgJAJIgRAPIATgCQAKAAAGAIQAHAIgGAIQgDADgFgDQgLgJgDADQgCADABANQABAMgKAIQgJAHgMgDQgLgDgLAJQgMAIADAKQADAJgBAMIgCAVQAAAMAFAGQAFAFAEgGQAFgKANAAQAOgBAGAJIAGAJQADAFgBAFQgLgDgGABQgJABgEAKQgDAHgIgBQgEgBgMADQgKABgGgBQgJgDgDAJQgCAGAHAEQAUANgVAPIgHAGQgEADABAFQAAAEAFACIAIACQAIADASACQANAFgDATQAAABAFAEQAFAHARARQAOAOAHALQANAWAAAhQAAAdgMASQgDgJACgMIAFgVQABgJgDgGQgDgHgIgCQgQgEgGgKQgFgJADgRQACgLgGgFQgGgFgKADQgXAIgbgEQgHAAgHAEQgHAEgEAHIgOAaQgLATAIATQAFANAAAHQABAMgJAJQgFAEAAAIQAAAHAEAHQAMAXAEAPQAEANAMAHQALAHAOgBIA4gHIgDAZQgBAOADAKIABAHQgLADgLgJQgKgJAEgKQAEgJgFgDIgKgCQgFgBgFABIgKAEQgCABgKAAQgIAAgBAEQgBAFAHAEQAIAFABADIAAAFQgNABgNgJIgVgSQgKgIgEABQgEABgDAMIgBAGQgBADgDABQgGACgEgJIgWguQgGgNAIgWQADgGgDgPQgCgNADgHQAGgNACgRIAEggIAGgtQAEgaAJgTQADgGANgQQAKgOADgKQAJgiAIgPQAFgKgCgJQgDgKgJgHQgQgLgKgeQgDgJABgNIACgVQAAgHgCgCQgBgCgGAAQgIABgDgBQgTgJABgEQAAgGAGgCIANgCQAPAAAJAEQALAFAGAMQACAFAEADQAFACAEgDQAFgDgCgFIgGgIQgLgPgXgFQgYgGgTAJQgJAEgEgDQgEgCgDgKIAJAAQAFAAADgDQAjgdAmAeQACACAGACQAJADABgIQABgKgHAAQgIABgGgGQgGgHgEgDQgKgFAFgHQAEgHAJAGQAFACAFAEIAFAEQADACADgCQAEgDADgEQACgEgCgEIgHgZQgFgOgHgJIgGgFQgEgCgBAEQgFANgIgDQgJgHgEgCIgegQQgCASgIAHQgIAIgKgFQgOgJgGgCQgMgCgGARQgBACgGgCQgGgBgCAEQgDALgJADQgFACgOgBQgPAAgIACQgMAEgGAKQgDAEgBAHIgCAJQgKAcgTAEIgOAGIgPAHQAEAFAGgBIAJgCQAFABABACQACADgFADIgVANQgNAHgLADQgMADACgLQAEgUACgEQAFgOAKgIQAKgIATgUQAGgHADgJIAEgRIAFgDQAFgCgCgEQgEgHgLAAQghAAgtgRQgYgKgQAEQADAGAGABIALABIAIACQAFABgBAFQgBAIgOgDIgGgCQgHgFgNAFQgPAEgGgBQgDgBgFAEQgEAFABAFQACAJAAAQIADAaIAMAaQAIAPgIANIgLADQgGABgFgEQgIgFgCgDQgDgEANgEQAGgCAAgGIgCgKQABgIgLABQgNABgDgHQgDgFADgMIACgMIAAg4QAAgPAHgEIABAPQAAAJAFABQAEABAFgGQANgSAOgFQAOgEAWAGQAQAFAZACIAqADQAFAAASgCQAOgCAGAEQARANAJgTQAGgOAHgDQAIgDANAJQgBgLgLgEQgFgDABgEQADgPgDgDQgEgDgNAFIgLAEQADgfAeAQQAIAHAJgDIAlgKQAWgEARADQAGAAAJgCIAPgEIAHgBQADAAgCgGIAGgEQAEADAGABIAKAAQALAAAEAEQAFAEgBALQgBAOAMAOQADgDgDgHQgIgVAEgGQADgHAVgFQATgEADASIACALQADAIAHgBQAIAAADgIQACgDgCgDIgFgEQgOgIALgJQAGgFAOAGQAOAFADAIQgMAHgCARQgDAYgCAEIgBACIACAAIAHABQAEACgCAFQgBAGACAVQACARgHAKQgBAAAAABQAAAAAAABQAAABAAAAQAAABABABQABADADABQADACACgCIADgFIAJgWQADgNgFgLQgIgPAHgKQABgCADgTQADgMAPAAIADgKIAEgWQAJAAACAGIADAMQAJgBAJgJQAMgMAFgCQAAAPAKAAQAGAAAMgCQACAAAFgCQAEAAABAEQABAEgBADQgCAEgDAAIgIAEQgEADgCgFQgEgJgDACIgGAHQgLAJAAAPIAAAJQAAAGAEACQAGACACgEIAEgJIACgDQAAAAABAAQAAAAABAAQAAAAAAAAQAAABABAAQAEAGACgCIADgGIACgFQABgEADAAQANgDAEgLQACgEABgRIAAgEQAFABAEAIIACAHQABADADAAQAFAAADgLQAFABAHgCIALgDIgCAIQgCAFADAEIASgIQADAIAJgBQAFAEAOACQAOADAGAEQAJAIAQgFQAOgFALAJQAIAGAJABQAKACAIgEQAPgHARANQAHAFACAAQAGABADgHIAFgIQAZAZAUgXIAHACQABAHAJAGQAaAQABAVQACAVgWAVIgSAMQgLAHgCALIgEAIQgDAEADAFQAEAHgDAEQgHAHAEAIQACAEAHAIQAFAFAKAEQAMAFAEADQAJAJAIAWQAIAXAJAIQAGAGAJAWQAIATAMAHQAJAEAIAVIAJgMQADgHgDgHIgEgHQgBgEADgDQAEgDAMAGIAHAEQAEABAEgEQAEgEgCgCQgFgMgJACQgLACgBgJQgCgIgIgIIgOgMQgHgFgCgIQgCgMgMgTQgMgTgDgLQgBgFgMgDQgRgDAEgMQAHgaACgEQAHgQAQgGQAEAEAAANQAAALAFAFIAYAYIAZAYQAfAbAQAVQAWAcAJAfQAEAQAIAMIARAbQAIAQACAPQACAQAGAHQAJAIAHARQAJAVAFAGQAGAKAIAAQAMgBAFAHQAFAGgBAKQgBAKAFAGQADAEAKADQAFACADADQADAEgCAFQgHANAFAIQAEAEAOAFQAMAEACAKQADALgIAIQgDAEAAAMQAAAIAFAKIAIAPQADAIAFgBIARAQQgMABgGANQgEAIALAIQAUAOgEAeQgCANAGAGQAEAGALAEQATAGAFALQAFAKgFATQgBAHACAGIAHARQAFAKgBAGQAAAFAHAOQAFAKgFAIQgGABgBgGQgCgHgCgBQgJAKAHAMQADAGADAIIADAOIAEAjQACAWANAKQAEADABAEQAAAGgHADQgGADACAGIAEALQAIATgIAPQgIAOAPAKQAKAGABANIgCAWQAAAGgEABIgIABQgLgUgUgIgAgVkbQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAGAGACQAGAAgCgEQAAgDgFgDIgDgBIAAAAgAkNl/QgEAHALAIQAGADADAJIABAHQABAEAEgBQAEAAABgEIACgIIACgMQAAgIgCgDQgDgCgJgCIgJgCIgBAAQgFAAgCAEgAjtmpIgJAXQgDAHAIADIAIADQAGABAEgDQADgCABgDQABgEgCgCQgGgEgCgJQgCgLgDgDQAAgCgCgJQgBgIADgEIAGALQAEAIAFAEIABgsQAAgZgEgSQgFgUgRADQgJABgDAHQgEAHAEAIQAGAOABAVIACAjQgIAEgHALIgLASQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAEABADgCIANgNQAGgIAAgKgAhgmhQADAHAKgBQAIAAgCgGQgCgEgEgBIgIgBIgBAAQgFAAABAGgAi9mvQgBADAGADIABAFQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQAEABABgDIACgGIAKABQAHACAFgDIgIgIQgEgEgDAAQgFgBgCANIgLAAIgBgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAgAiEmwQgEABAAADQABAHAHAAQAIAAABABQAMACgBgGQgBgFgGgBQgHAAgDgBIgEgBIgDAAgAnHneQgCADAEAAQAEgBABgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgEADgAg/okQgGAJgDABQgKAFALAMQADADgCACIgEAEIgGAFQgEADABAFQAFAAAFgDIAIgHQAIgDAAADIgDAIIAAABIABgBQAggJARABQAFAJAHgDIAPgGQgIABgGgJQgFgKgGAAQgRgBAAgSIACgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIgCADQgHgBACgHQADgIgDgCQgEACgCAFIgDAJQgFAIgEgEQgFgFgEAAQgCAAgDACgAiHorQgEAEADAHQAKgGgBgNQgHAFgBADg");
	this.shape_282.setTransform(119.6,230.4,0.891,0.891);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#817B74").s().p("AAAgdIgBgGIAAgEIACgEIgBAOQAFAOgDAUIgEAng");
	this.shape_283.setTransform(212,349.3,0.891,0.891);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#817B74").s().p("AALE3IgFgHIgIgTQgFgOgDgGQgGgLgNgCQgDAAgCgEQgCgFACgDQAGgKABgPIAAgYQAFgSAAgJQABgQgOgKIAMgBQAFgBABgGQAAgIgJgCQgGgCABgFIADgIQACgGADABIAXAJQgEgJgOgPQgNgOgDgKQABgBAHABQAFABgBgGQgBgMABgcQABgZgDgOIAHgBQADgCAAgEQgBgMgOgEIgBgHIAIgBQADgBAAgGIACgWQAAgNgKgGQgPgKAIgOQAIgPgIgTIgFgLQgCgGAGgDQAIgDgBgGQAAgEgEgDQgNgKgDgWIgEgjIgDgOQgCgIgEgGQgHgMAJgKQADABACAHQABAGAGgBQAEAJAHADQAFAHADAUQADASAIAIQgFAFAHADIACAHQAAAGAGACIACAHQgCAPAHAFIgCASQgUANATASIAEAOQgHACACAHIAEAXQACANgCAKQgCAJAMAIQATALgCAcIAAAEIAWA9QgFACgGgCIgJgEQgFgCgEACQgEADADAEQAEAEAEANQADAMAFAEQAAADgFAEQgDADAFAEQAAAQADAHQgBANAFAGQAJAfABApQgJAXAUAQIAFASQgRACAFATQgLgFgFgEQgFgGAAgJQAAgKgFAAQgHAAAAALIACAZIABAIQgBAFgEACIgDABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_284.setTransform(187.2,288,0.891,0.891);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#969696").s().p("AgBABIADgGIgDALg");
	this.shape_285.setTransform(211.1,355.2,0.891,0.891);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#B0B0B2").s().p("AgMgKIALAFQAIAFAKAJIAQASgAgSgNQgKgFgEgIIAUAQIgGgDg");
	this.shape_286.setTransform(202.7,306.5,0.891,0.891);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#625C54").s().p("AHoAsQgIgEgJAAIgRAAQgFAAgJgGQgJgFACgFQACgIALADQALADAeAAQAOABABAKQAAAGgFAEQgCACgDAAIgEgBgAAoAmIgCgHQgEgLAIgEQAEgCAGAFQAHAGgFAJQgFAJgFACQgDgCgBgFgAGigTQgCgDAAgFQABgHAGgEIANgGQAGgCADAMQgIANgNAEIgBABQgDAAgCgDgAnqgeIAMgIQAFgEAFACQAEABADAFQADAGgEADIgJADIgeAEQAEgHAHgFgAHLgbQgDgCABgEQAAgFAEgCIAIgCQAKAAgBAHQgBALgLAAQgEAAgDgDg");
	this.shape_287.setTransform(78.8,390.7,0.891,0.891);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#444235").s().p("AgEDGQgcgugThAQgnh+AohcQAshiAdAZQAXATAKBQQAnEzg9AHg");
	this.shape_288.setTransform(67.5,211.3,0.891,0.891);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#F6A4B5").s().p("AhlAlQgWgigGggQgEgNAAgKQAAghAXgXQAYgYAgAAQAfAAAWAUQAWgXAiAAQAgAAAYAXQAXAXAAAhQAAANgEANQgRA3g7A9Ig2AyQhCgtgjg2g");
	this.shape_289.setTransform(176.2,176.9,0.891,0.891);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#F6A4B5").s().p("Ag+AXQgOgWgDgSQgCgIAAgHQAAgUAOgOQAOgOAVAAQASAAAOAMQANgPAUAAQAUAAAPAPQAOAOAAAUQAAAHgCAJQgLAhgkAmIghAfQgogcgWghg");
	this.shape_290.setTransform(160,193,0.891,0.891);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F6A4B5").s().p("AlWB7QhLh0gUhrQgMgoAAgnQAAhuBOhOQBOhOBvAAQAyAAAuASQAtARAkAgQAkglAwgVQAygVA2AAQBvAABOBOQBOBOAABuQAAAsgOAqQg6C8jDDOQg9BBhDA6Ig3AuQjiiah0i1g");
	this.shape_291.setTransform(220.8,141.5,0.891,0.891);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#969696").s().p("AvNCWQmUg+AAhYQAAhXGUg/QGTg+I6AAQI7AAGTA+QGUA/AABXQAABYmUA+QmTA+o7AAQo6AAmTg+g");
	this.shape_292.setTransform(122.7,376.6,0.891,0.891);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,260.9,395.6), null);


// stage content:
(lib.bear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(258.2,380.1,1.667,1.667,0,0,0,130.4,197.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.2},23).to({rotation:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290.8,414,434.9,659.3);
// library properties:
lib.properties = {
	width: 500,
	height: 727,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;