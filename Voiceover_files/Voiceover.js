// Created by iWeb 3.0.4 local-build-20170319

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="256" style="height: 256px; left: 190px; position: absolute; top: 30px; width: 320px; z-index: 1; "><param name="src" value="Media/voiceover_simple-11.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="320" height="256" style="height: 256px; left: 190px; position: absolute; top: 30px; width: 320px; z-index: 1; "><param name="src" value="Voiceover_files/voiceover_simple-5.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/voiceover_simple-11.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="320" height="256" data="Media/voiceover_simple-11.mov" style="height: 256px; left: 190px; position: absolute; top: 30px; width: 320px; z-index: 1; "><param name="src" value="Media/voiceover_simple-11.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
function writeMovie2()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="89" height="16" style="height: 16px; left: 305px; position: absolute; top: 369px; width: 89px; z-index: 1; "><param name="src" value="Media/Michelle%20McBeth.mp3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="89" height="16" style="height: 16px; left: 305px; position: absolute; top: 369px; width: 89px; z-index: 1; "><param name="src" value="Media/Michelle%20McBeth.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="89" height="16" data="Media/Michelle%20McBeth.mp3" style="height: 16px; left: 305px; position: absolute; top: 369px; width: 89px; z-index: 1; "><param name="src" value="Media/Michelle%20McBeth.mp3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Voiceover_files/VoiceoverMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
