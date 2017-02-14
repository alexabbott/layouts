<script>
var y = document.cookie;
var y = y.split(';');
var country = ''; 
var lang = ''; 
for(var i=0; i<y.length; i++) { 
	var check = y[i].split('='); 
	if(check[0] == ' NIKE_COMMERCE_COUNTRY') { 
		country = check[1]; 
	} 
	else if(check[0] == ' NIKE_COMMERCE_LANG_LOCALE') { 
		lang = check[1]; 
	} 
	else { continue; }
}
</script>

<script> var nsgConfig = {HOST: 'https://www.nike.com', PLACEMENT: 'prepend'} </script>

<script>
	var bwNikeLinks = {
		uat: {
			styles: {
				base: 'http://ecn100-store.nikedev.com/'+country+'/'+lang+'/style.css?app=nikestore&version=latest&assets=nike,nike.gadget.OneNikeNav,nike.gadget.OneNikeFooter&assetType=STYLE',
				mobile: 'http://ecn100-store.nikedev.com/'+country+'/'+lang+'/style.css?app=nikestore&version=latest&assets=nike.gadget.mobile.OneNikeFooter,nike.gadget.mobile.OneNikeNav,skin.onenike_mobile&assetType=STYLE'
			},
			scripts: {
				nsgjs: 'http://ecn100-www.nikedev.com/styleguide/init/nsg.js',
				nikeScriptManager: {
					desktop: 'http://ecn100-store.nikedev.com/'+country+'/'+lang+'/NikeScriptManager.js?app=nikestore&assets=nike,nike.fonts.glyphPolyfill,nike.gadget.OneNikeNav,nike.gadget.OneNikeFooter,yepnope.injectCss&assetType=SCRIPT',
					mobile: 'http://ecn100-m.nikedev.com/'+country+'/'+lang+'/NikeScriptManager.js?app=nikestore&version=latest&assets=nike,nike.gadget.mobile.OneNikeFooter,nike.gadget.mobile.OneNikeNav&assetType=SCRIPT'
				}
			}
		},
		prod: {
			styles: {
				base: 'http://store.nike.com/'+country+'/'+lang+'/style.css?app=nikestore&version=latest&assets=nike,nike.gadget.OneNikeNav,nike.gadget.OneNikeFooter&assetType=STYLE',
				mobile: 'http://store.nike.com/'+country+'/'+lang+'/style.css?app=nikestore&version=latest&assets=nike.gadget.mobile.OneNikeFooter,nike.gadget.mobile.OneNikeNav,skin.onenike_mobile&assetType=STYLE'
			},
			scripts: {
				nsgjs: 'http://www.nike.com/styleguide/init/nsg.js',
				nikeScriptManager: {
					desktop: 'http://store.nike.com/'+country+'/'+lang+'/NikeScriptManager.js?app=nikestore&assets=nike,nike.fonts.glyphPolyfill,nike.gadget.OneNikeNav,nike.gadget.OneNikeFooter,yepnope.injectCss&assetType=SCRIPT',
					mobile: 'http://m.nike.com/'+country+'/'+lang+'/NikeScriptManager.js?app=nikestore&version=latest&assets=nike,nike.gadget.mobile.OneNikeFooter,nike.gadget.mobile.OneNikeNav&assetType=SCRIPT'
				}
			}
		}
	}
	
	if (/ecn100/.test(window.location.href)) {
		var bwNikeLinkEnv = 'uat'
	} else {
		var bwNikeLinkEnv = 'prod'
	}

	if (window.innerWidth < 768) {
		var bwNikeLinkDevice = 'mobile'
	} else {
		var bwNikeLinkDevice = 'desktop'
	}

	document.write('<link rel="stylesheet" type="text/css" media="screen" href=' + bwNikeLinks[bwNikeLinkEnv].styles.base + '>')
	document.write('<link rel="stylesheet" type="text/css" media="screen" href=' + bwNikeLinks[bwNikeLinkEnv].styles.mobile + '>')
	document.write('<script type="text/javascript" src=' + bwNikeLinks[bwNikeLinkEnv].scripts.nsgjs + '><\/script>')
	document.write('<script type="text/javascript" src=' + bwNikeLinks[bwNikeLinkEnv].scripts.nikeScriptManager[bwNikeLinkDevice] + '><\/script>')
</script>

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.3.0.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.12/handlebars.js"></script>
