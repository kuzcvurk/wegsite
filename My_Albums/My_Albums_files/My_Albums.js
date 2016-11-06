// Created by iWeb 3.0.4 local-build-20150327

function createMediaStream_id2()
{return IWCreateMediaCollection("http://michellemcbeth.com/michellemcbeth.com/My_Albums/My_Albums_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://michellemcbeth.com/michellemcbeth.com/My_Albums',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget5'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://michellemcbeth.com/michellemcbeth.com/My_Albums',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(2,new IWSize(252,189),new IWSize(252,34),new IWSize(302,238),27,27,0,new IWSize(84,69)),new IWPhotoFrame([IWCreateImage('My_Albums_files/leatherbook_ul.png'),IWCreateImage('My_Albums_files/leatherbook_top.png'),IWCreateImage('My_Albums_files/leatherbook_ur.png'),IWCreateImage('My_Albums_files/leatherbook_right.png'),IWCreateImage('My_Albums_files/leatherbook_lr.png'),IWCreateImage('My_Albums_files/leatherbook_bottom.png'),IWCreateImage('My_Albums_files/leatherbook_ll.png'),IWCreateImage('My_Albums_files/leatherbook_left.png')],null,0,0.618421,6.000000,6.000000,6.000000,6.000000,87.000000,54.000000,60.000000,69.000000,20.000000,16.000000,18.000000,16.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget5',null,'widget6',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('My_Albums_files/My_AlbumsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
