// Created by iWeb 3.0.4 local-build-20170319

function createMediaStream_id3()
{return IWCreatePhotocast("http://michellemcbeth.com/michellemcbeth.com/My_Albums/Pages/Eye_Photos_files/rss.xml",false);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://michellemcbeth.com/michellemcbeth.com/My_Albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://michellemcbeth.com/michellemcbeth.com/My_Albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(3,new IWSize(177,177),new IWSize(177,34),new IWSize(213,226),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-2,-1,1,179),url:'Eye_Photos_files/stroke.png'},{rect:new IWRect(-2,-2,1,1),url:'Eye_Photos_files/stroke_1.png'},{rect:new IWRect(-1,-2,179,1),url:'Eye_Photos_files/stroke_2.png'},{rect:new IWRect(178,-2,1,1),url:'Eye_Photos_files/stroke_3.png'},{rect:new IWRect(178,-1,1,179),url:'Eye_Photos_files/stroke_4.png'},{rect:new IWRect(178,178,1,1),url:'Eye_Photos_files/stroke_5.png'},{rect:new IWRect(-1,178,179,1),url:'Eye_Photos_files/stroke_6.png'},{rect:new IWRect(-2,178,1,1),url:'Eye_Photos_files/stroke_7.png'}],new IWSize(177,177)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Eye_Photos_files/Eye_PhotosMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
