const mainVideoSrc = "https://goalovo.net/f1streams/streams/";
// const secondaryVideoScr = ["https://embedsports.top/embed/alpha/sky-sports-f1-sky-f1/1"];
const sidebarWidgets = ["https://1racing.co/widget/f1"];

const mainVideoContainer = document.getElementById('mainVideo');
const mainIframe = document.createElement('iframe');
mainIframe.src = mainVideoSrc;
mainIframe.allowFullscreen = true;
mainVideoContainer.appendChild(mainIframe);

const sidebarContainer = document.getElementById('sidebar');
sidebarWidgets.forEach(src => {
  const iframe = document.createElement('iframe');
  iframe.className = 'widget';
  iframe.src = src;
  sidebarContainer.appendChild(iframe);
});
