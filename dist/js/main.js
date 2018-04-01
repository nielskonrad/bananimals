var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;function findShapeIndex(r,a,i){i=i||{};var s,l,e,t,u,c,h,p,n,o,d,f,g,m,b=document,v=(window.GreenSockGlobals||window).TweenLite,y=function(e){return b.querySelectorAll(e)},w=function(e,t){var n,o=b.createElementNS("http://www.w3.org/2000/svg",e),r=/([a-z])([A-Z])/g;for(n in t)o.setAttributeNS(null,n.replace(r,"$1-$2").toLowerCase(),t[n]);return o},x=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=function(e,t){var n,o;return("string"!=typeof e||(e.match(x)||[]).length<3)&&((n=v.selector(e))&&n[0]?(o=(n=n[0]).nodeName.toUpperCase(),t&&"PATH"!==o&&(n=MorphSVGPlugin.convertToPath(n,!1)[0],o="PATH"),e=n.getAttribute("PATH"===o?"d":"points")||""):(console.log("WARNING: invalid morph to: "+e),e=!1)),e},A=y("#shapeIndexLabel")[0]||(f=b.createElement("div"),g=b.createElement("div"),m=y("body")[0],e=b.createElement("div"),t=b.createElement("div"),g.setAttribute("id","shapeIndexLabel"),s=w("circle",{cx:0,cy:0,r:(i.startStrokeWidth||3)+3,fill:i.startStroke||"red"}),l=w("circle",{cx:0,cy:0,r:(i.endStrokeWidth||3)+3,fill:i.endStroke||"yellow"}),v.set(f,{padding:"0px",position:"absolute",bottom:0,fontSize:"20px",textAlign:"center",backgroundColor:"black",color:"#91e600",border:"1px solid #999",left:"50%",xPercent:-50,yPercent:-50,userSelect:"none",fontFamily:"sans-serif"}),v.set(g,{display:"inline-block",minWidth:"210px",marginRight:"10px",textAlign:"center",marginLeft:"10px"}),v.set([e,t],{display:"inline-block",padding:"0 15px",color:"#ccc",height:"50px",lineHeight:"48px",cursor:"pointer"}),v.set(t,{borderRight:"1px solid #999"}),v.set(e,{borderLeft:"1px solid #999"}),t.innerHTML=" - ",e.innerHTML=" + ",f.appendChild(t),f.appendChild(g),f.appendChild(e),m&&m.appendChild(f),g),S=0,T=function(){u.reversed(!u.reversed()).resume(),c.reversed(!c.reversed()).resume()},L={x:0,y:0},I=function(){var e,t,n,o=(e=r.getAttribute("d"),t=M(a,!0),n=S,h=MorphSVGPlugin.pathDataToRawBezier(e),p=MorphSVGPlugin.pathDataToRawBezier(t),MorphSVGPlugin.equalizeSegmentQuantity(h,p,n),[h[0][0],h[0][1],p[0][0],p[0][1]]);L.x=o[0],L.y=o[1],s.setAttribute("cx",L.x),s.setAttribute("cy",L.y),l.setAttribute("cx",o[2]),l.setAttribute("cy",o[3]),u=v.to(r,i.duration||3,{delay:.5,morphSVG:{shape:a,shapeIndex:S},ease:i.ease||"Linear.easeNone",onComplete:T,onReverseComplete:T}),c=v.to(L,i.duration||3,{delay:.5,x:o[2],y:o[3],ease:i.ease||"Linear.easeNone",onUpdate:function(){s.setAttribute("cx",L.x),s.setAttribute("cy",L.y)}})},N=function(){A.innerHTML="shapeIndex: "+S+(S===n?" (auto)":""),u.seek(0).kill(),c.seek(0).kill(),I(),v.fromTo(A.parentNode,.4,{backgroundColor:"#777"},{backgroundColor:"black",ease:Linear.easeNone})},k=function(){S=(S+1)%(o+1),N()},P=function(){S=(S-1)%(o+1),N()};"string"==typeof r&&(r=v.selector(r)[0]),r?r.nodeName&&"PATH"!==r.nodeName.toUpperCase()?console.log("ERROR: target of findShapeIndex() must be a path."):(r.push&&r[0]&&r[0].nodeName&&(r=r[0]),r.parentNode&&(r.parentNode.appendChild(l),r.parentNode.appendChild(s)),("string"!=typeof a||(a.match(x)||[]).length<3)&&(d=v.selector(a))&&d[0]&&(d=d[0],v.set(d,{display:"block",strokeWidth:i.endStrokeWidth||3,stroke:i.endStroke||"yellow",fill:i.endFill||"none",visibility:"visible",opacity:i.endOpacity||.7})),v.set(r,{display:"block",strokeWidth:i.startStrokeWidth||3,stroke:i.startStroke||"red",fill:i.startFill||"none",visibility:"visible",opacity:i.startOpacity||.7}),h=MorphSVGPlugin.pathDataToRawBezier(r.getAttribute("d")),p=MorphSVGPlugin.pathDataToRawBezier(M(a,!0)),n=S=Math.round(MorphSVGPlugin.equalizeSegmentQuantity(h,p,"auto")[0]),o=h[0].length/6|0,v.killTweensOf(r,!1,{morphSVG:!0}),I(),A.innerHTML="shapeIndex: "+S+(S===n?" (auto)":""),window.addEventListener("keydown",function(e){var t=e.keyCode;38===t||39===t||85===t?k():37!==t&&40!==t&&68!==t||P()}),e.addEventListener("click",k),t.addEventListener("click",P)):console.log("ERROR: target not found for findShapeIndex(). Please use a valid target.")}(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var D=Math.PI/180,F=180/Math.PI,x=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,T=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,p=/[achlmqstvz]/gi,M=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,d=_gsScope._gsDefine.globals.TweenLite,A=function(e){window.console&&console.log(e)},S=function(e,t,n,o,r,a,i,s,l){if(e!==s||t!==l){n=Math.abs(n),o=Math.abs(o);var u=r%360*D,c=Math.cos(u),h=Math.sin(u),p=(e-s)/2,d=(t-l)/2,f=c*p+h*d,g=-h*p+c*d,m=n*n,b=o*o,v=f*f,y=g*g,w=v/m+y/b;1<w&&(m=(n=Math.sqrt(w)*n)*n,b=(o=Math.sqrt(w)*o)*o);var x=a===i?-1:1,M=(m*b-m*y-b*v)/(m*y+b*v);M<0&&(M=0);var A=x*Math.sqrt(M),S=A*(n*g/o),T=A*(-o*f/n),L=(e+s)/2+(c*S-h*T),I=(t+l)/2+(h*S+c*T),N=(f-S)/n,k=(g-T)/o,P=(-f-S)/n,B=(-g-T)/o,z=Math.sqrt(N*N+k*k),G=N,E=(x=k<0?-1:1)*Math.acos(G/z)*F;z=Math.sqrt((N*N+k*k)*(P*P+B*B)),G=N*P+k*B;var C=(x=N*B-k*P<0?-1:1)*Math.acos(G/z)*F;!i&&0<C?C-=360:i&&C<0&&(C+=360);var O,R,_,V=function(e,t){var n,o,r,a,i,s,l=Math.ceil(Math.abs(t)/90),u=0,c=[];for(e*=D,n=(t*=D)/l,o=4/3*Math.sin(n/2)/(1+Math.cos(n/2)),s=0;s<l;s++)r=e+s*n,a=Math.cos(r),i=Math.sin(r),c[u++]=a-o*i,c[u++]=i+o*a,r+=n,a=Math.cos(r),i=Math.sin(r),c[u++]=a+o*i,c[u++]=i-o*a,c[u++]=a,c[u++]=i;return c}(E%=360,C%=360),W=c*n,Y=h*n,q=h*-o,H=c*o,X=V.length-2;for(O=0;O<X;O+=2)R=V[O],_=V[O+1],V[O]=R*W+_*q+L,V[O+1]=R*Y+_*H+I;return V[V.length-2]=s,V[V.length-1]=l,V}},f=function(e){var t,n,o,r,a,i,s,l,u,c,h,p,d,f=(e+"").replace(M,function(e){var t=+e;return t<1e-4&&-1e-4<t?0:t}).match(x)||[],g=[],m=0,b=0,v=f.length,y=2,w=0;if(!e||!isNaN(f[0])||isNaN(f[1]))return A("ERROR: malformed path data: "+e),g;for(t=0;t<v;t++)if(d=a,isNaN(f[t])?i=(a=f[t].toUpperCase())!==f[t]:t--,o=+f[t+1],r=+f[t+2],i&&(o+=m,r+=b),0===t&&(l=o,u=r),"M"===a)s&&s.length<8&&(g.length-=1,y=0),m=l=o,b=u=r,s=[o,r],w+=y,y=2,g.push(s),t+=2,a="L";else if("C"===a)s||(s=[0,0]),s[y++]=o,s[y++]=r,i||(m=b=0),s[y++]=m+1*f[t+3],s[y++]=b+1*f[t+4],s[y++]=m+=1*f[t+5],s[y++]=b+=1*f[t+6],t+=6;else if("S"===a)"C"===d||"S"===d?(c=m-s[y-4],h=b-s[y-3],s[y++]=m+c,s[y++]=b+h):(s[y++]=m,s[y++]=b),s[y++]=o,s[y++]=r,i||(m=b=0),s[y++]=m+=1*f[t+3],s[y++]=b+=1*f[t+4],t+=4;else if("Q"===a)c=o-m,h=r-b,s[y++]=m+2*c/3,s[y++]=b+2*h/3,i||(m=b=0),c=o-(m+=1*f[t+3]),h=r-(b+=1*f[t+4]),s[y++]=m+2*c/3,s[y++]=b+2*h/3,s[y++]=m,s[y++]=b,t+=4;else if("T"===a)c=m-s[y-4],h=b-s[y-3],s[y++]=m+c,s[y++]=b+h,c=m+1.5*c-o,h=b+1.5*h-r,s[y++]=o+2*c/3,s[y++]=r+2*h/3,s[y++]=m=o,s[y++]=b=r,t+=2;else if("H"===a)r=b,s[y++]=m+(o-m)/3,s[y++]=b+(r-b)/3,s[y++]=m+2*(o-m)/3,s[y++]=b+2*(r-b)/3,s[y++]=m=o,s[y++]=r,t+=1;else if("V"===a)r=o,o=m,i&&(r+=b-m),s[y++]=o,s[y++]=b+(r-b)/3,s[y++]=o,s[y++]=b+2*(r-b)/3,s[y++]=o,s[y++]=b=r,t+=1;else if("L"===a||"Z"===a)"Z"===a&&(o=l,r=u,s.closed=!0),("L"===a||.5<Math.abs(m-o)||.5<Math.abs(b-r))&&(s[y++]=m+(o-m)/3,s[y++]=b+(r-b)/3,s[y++]=m+2*(o-m)/3,s[y++]=b+2*(r-b)/3,s[y++]=o,s[y++]=r,"L"===a&&(t+=2)),m=o,b=r;else if("A"===a){for(p=S(m,b,1*f[t+1],1*f[t+2],1*f[t+3],1*f[t+4],1*f[t+5],(i?m:0)+1*f[t+6],(i?b:0)+1*f[t+7]),n=0;n<p.length;n++)s[y++]=p[n];m=s[y-2],b=s[y-1],t+=7}else A("Error: malformed path data: "+e);return g.totalPoints=w+y,g},L=function(e,t){var n,o,r,a,i,s,l,u,c,h,p,d,f,g,m=0,b=e.length,v=t/((b-2)/6);for(f=2;f<b;f+=6)for(m+=v;.999999<m;)n=e[f-2],o=e[f-1],r=e[f],a=e[f+1],i=e[f+2],s=e[f+3],l=e[f+4],u=e[f+5],c=n+(r-n)*(g=1/(Math.floor(m)+1)),c+=((p=r+(i-r)*g)-c)*g,p+=(i+(l-i)*g-p)*g,h=o+(a-o)*g,h+=((d=a+(s-a)*g)-h)*g,d+=(s+(u-s)*g-d)*g,e.splice(f,4,n+(r-n)*g,o+(a-o)*g,c,h,c+(p-c)*g,h+(d-h)*g,p,d,i+(l-i)*g,s+(u-s)*g),f+=6,b+=6,m--;return e},i=function(e){var t,n,o,r,a="",i=e.length,s=100;for(n=0;n<i;n++){for(a+="M"+(r=e[n])[0]+","+r[1]+" C",t=r.length,o=2;o<t;o++)a+=(r[o++]*s|0)/s+","+(r[o++]*s|0)/s+" "+(r[o++]*s|0)/s+","+(r[o++]*s|0)/s+" "+(r[o++]*s|0)/s+","+(r[o]*s|0)/s+" ";r.closed&&(a+="z")}return a},I=function(e){for(var t=[],n=e.length-1,o=0;-1<--n;)t[o++]=e[n],t[o++]=e[n+1],n--;for(n=0;n<o;n++)e[n]=t[n];e.reversed=!e.reversed},g=function(e){var t,n=e.length,o=0,r=0;for(t=0;t<n;t++)o+=e[t++],r+=e[t];return[o/(n/2),r/(n/2)]},N=function(e){var t,n,o,r=e.length,a=e[0],i=a,s=e[1],l=s;for(o=6;o<r;o+=6)a<(t=e[o])?a=t:t<i&&(i=t),s<(n=e[o+1])?s=n:n<l&&(l=n);return e.centerX=(a+i)/2,e.centerY=(s+l)/2,e.size=(a-i)*(s-l)},k=function(e){for(var t,n,o,r,a,i=e.length,s=e[0][0],l=s,u=e[0][1],c=u;-1<--i;)for(t=(a=e[i]).length,r=6;r<t;r+=6)s<(n=a[r])?s=n:n<l&&(l=n),u<(o=a[r+1])?u=o:o<c&&(c=o);return e.centerX=(s+l)/2,e.centerY=(u+c)/2,e.size=(s-l)*(u-c)},P=function(e,t){return t.length-e.length},B=function(e,t){var n=e.size||N(e),o=t.size||N(t);return Math.abs(o-n)<(n+o)/20?t.centerX-e.centerX||t.centerY-e.centerY:o-n},z=function(e,t){var n,o,r=e.slice(0),a=e.length,i=a-2;for(t|=0,n=0;n<a;n++)o=(n+t)%i,e[n++]=r[o],e[n]=r[o+1]},m=function(e,t,n,o,r){var a,i,s,l,u=e.length,c=0,h=u-2;for(n*=6,i=0;i<u;i+=6)l=e[a=(i+n)%h]-(t[i]-o),s=e[a+1]-(t[i+1]-r),c+=Math.sqrt(s*s+l*l);return c},G=function(e,t,n){var o,r,a,i=e.length,s=g(e),l=g(t),u=l[0]-s[0],c=l[1]-s[1],h=m(e,t,0,u,c),p=0;for(a=6;a<i;a+=6)(r=m(e,t,a/6,u,c))<h&&(h=r,p=a);if(n)for(o=e.slice(0),I(o),a=6;a<i;a+=6)(r=m(o,t,a/6,u,c))<h&&(h=r,p=-a);return p/6},E=function(e,t,n){for(var o,r,a,i,s,l,u=e.length,c=99999999999,h=0,p=0;-1<--u;)for(l=(o=e[u]).length,s=0;s<l;s+=6)r=o[s]-t,a=o[s+1]-n,(i=Math.sqrt(r*r+a*a))<c&&(c=i,h=o[s],p=o[s+1]);return[h,p]},C=function(e,t,n,o,r,a){var i,s,l,u,c=t.length,h=0,p=Math.min(e.size||N(e),t[n].size||N(t[n]))*o,d=999999999999,f=e.centerX+r,g=e.centerY+a;for(i=n;i<c&&!((t[i].size||N(t[i]))<p);i++)s=t[i].centerX-f,l=t[i].centerY-g,(u=Math.sqrt(s*s+l*l))<d&&(h=i,d=u);return u=t[h],t.splice(h,1),u},s=function(e,t,n,o){var r,a,i,s,l,u,c,h=t.length-e.length,p=0<h?t:e,d=0<h?e:t,f=0,g="complexity"===o?P:B,m="position"===o?0:"number"==typeof o?o:.8,b=d.length,v="object"==typeof n&&n.push?n.slice(0):[n],y="reverse"===v[0]||v[0]<0,w="log"===n;if(d[0]){if(1<p.length&&(e.sort(g),t.sort(g),p.size||k(p),d.size||k(d),u=p.centerX-d.centerX,c=p.centerY-d.centerY,g===B))for(b=0;b<d.length;b++)p.splice(b,0,C(d[b],p,b,m,u,c));if(h)for(h<0&&(h=-h),p[0].length>d[0].length&&L(d[0],(p[0].length-d[0].length)/6|0),b=d.length;f<h;)p[b].size||N(p[b]),s=(i=E(d,p[b].centerX,p[b].centerY))[0],l=i[1],d[b++]=[s,l,s,l,s,l,s,l],d.totalPoints+=8,f++;for(b=0;b<e.length;b++)r=t[b],a=e[b],(h=r.length-a.length)<0?L(r,-h/6|0):0<h&&L(a,h/6|0),y&&!a.reversed&&I(a),(n=v[b]||0===v[b]?v[b]:"auto")&&(a.closed||Math.abs(a[0]-a[a.length-2])<.5&&Math.abs(a[1]-a[a.length-1])<.5?"auto"===n||"log"===n?(v[b]=n=G(a,r,0===b),n<0&&(y=!0,I(a),n=-n),z(a,6*n)):"reverse"!==n&&(b&&n<0&&I(a),z(a,6*(n<0?-n:n))):!y&&("auto"===n&&Math.abs(r[0]-a[0])+Math.abs(r[1]-a[1])+Math.abs(r[r.length-2]-a[a.length-2])+Math.abs(r[r.length-1]-a[a.length-1])>Math.abs(r[0]-a[a.length-2])+Math.abs(r[1]-a[a.length-1])+Math.abs(r[r.length-2]-a[0])+Math.abs(r[r.length-1]-a[1])||n%2)?(I(a),v[b]=-1,y=!0):"auto"===n?v[b]=0:"reverse"===n&&(v[b]=-1),a.closed!==r.closed&&(a.closed=r.closed=!1));return w&&A("shapeIndex:["+v.join(",")+"]"),v}},b=function(e,t,n,o){var r=f(e[0]),a=f(e[1]);s(r,a,t||0===t?t:"auto",n)&&(e[0]=i(r),e[1]=i(a),"log"!==o&&!0!==o||A('precompile:["'+e[0]+'","'+e[1]+'"]'))},r=function(e,t){var n,o,r,a,i,s,l,u=0,c=parseFloat(e[0]),h=parseFloat(e[1]),p=c+","+h+" ";for(n=.5*t/(.5*(r=e.length)-1),o=0;o<r-2;o+=2){if(u+=n,s=parseFloat(e[o+2]),l=parseFloat(e[o+3]),.999999<u)for(i=1/(Math.floor(u)+1),a=1;.999999<u;)p+=(c+(s-c)*i*a).toFixed(2)+","+(h+(l-h)*i*a).toFixed(2)+" ",u--,a++;p+=s+","+l+" ",c=s,h=l}return p},n=function(e){var t=e[0].match(T)||[],n=e[1].match(T)||[],o=n.length-t.length;0<o?e[0]=r(t,o):e[1]=r(n,-o)},v=function(t){return isNaN(t)?n:function(e){n(e),e[1]=function(e,t){if(!t)return e;var n,o,r,a=e.match(T)||[],i=a.length,s="";for("reverse"===t?(o=i-1,n=-2):(o=(2*(parseInt(t,10)||0)+1+100*i)%i,n=2),r=0;r<i;r+=2)s+=a[o-1]+","+a[o]+" ",o=(o+n)%i;return s}(e[1],parseInt(t,10))}},l=function(e,t){var n,o,r,a,i,s,l,u,c,h,p,d,f,g,m,b,v,y,w,x,M,A=e.tagName.toLowerCase(),S=.552284749831;return"path"!==A&&e.getBBox?(s=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),o=Array.prototype.slice.call(e.attributes),r=o.length;for(t=","+t+",";-1<--r;)-1===t.indexOf(","+o[r].nodeName+",")&&n.setAttributeNS(null,o[r].nodeName,o[r].nodeValue);return n}(e,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),"rect"===A?(a=+e.getAttribute("rx")||0,i=+e.getAttribute("ry")||0,o=+e.getAttribute("x")||0,r=+e.getAttribute("y")||0,h=(+e.getAttribute("width")||0)-2*a,p=(+e.getAttribute("height")||0)-2*i,n=a||i?"M"+(b=(g=(f=o+a)+h)+a)+","+(y=r+i)+" V"+(w=y+p)+" C"+[b,x=w+i*S,m=g+a*S,M=w+i,g,M,g-(g-f)/3,M,f+(g-f)/3,M,f,M,d=o+a*(1-S),M,o,x,o,w,o,w-(w-y)/3,o,y+(w-y)/3,o,y,o,v=r+i*(1-S),d,r,f,r,f+(g-f)/3,r,g-(g-f)/3,r,g,r,m,r,b,v,b,y].join(",")+"z":"M"+(o+h)+","+r+" v"+p+" h"+-h+" v"+-p+" h"+h+"z"):"circle"===A||"ellipse"===A?("circle"===A?u=(a=i=+e.getAttribute("r")||0)*S:(a=+e.getAttribute("rx")||0,u=(i=+e.getAttribute("ry")||0)*S),n="M"+((o=+e.getAttribute("cx")||0)+a)+","+(r=+e.getAttribute("cy")||0)+" C"+[o+a,r+u,o+(l=a*S),r+i,o,r+i,o-l,r+i,o-a,r+u,o-a,r,o-a,r-u,o-l,r-i,o,r-i,o+l,r-i,o+a,r-u,o+a,r].join(",")+"z"):"line"===A?n="M"+e.getAttribute("x1")+","+e.getAttribute("y1")+" L"+e.getAttribute("x2")+","+e.getAttribute("y2"):"polyline"!==A&&"polygon"!==A||(n="M"+(o=(c=(e.getAttribute("points")+"").match(T)||[]).shift())+","+(r=c.shift())+" L"+c.join(","),"polygon"===A&&(n+=","+o+","+r+"z")),s.setAttribute("d",n),t&&e.parentNode&&(e.parentNode.insertBefore(s,e),e.parentNode.removeChild(e)),s):e},y=function(e,t,n){var o,r,a="string"==typeof e;return(!a||(e.match(T)||[]).length<3)&&((o=a?d.selector(e):e&&e[0]?e:[e])&&o[0]?(r=(o=o[0]).nodeName.toUpperCase(),t&&"PATH"!==r&&(o=l(o,!1),r="PATH"),e=o.getAttribute("PATH"===r?"d":"points")||"",o===n&&(e=o.getAttributeNS(null,"data-original")||e)):(A("WARNING: invalid morph to: "+e),e=!1)),e},w="Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",O=_gsScope._gsDefine.plugin({propName:"morphSVG",API:2,global:!0,version:"0.8.6",init:function(e,t,n,o){var r,a,i,s,l,u,c,h;return"function"==typeof e.setAttribute&&("function"==typeof t&&(t=t(o,e)),l="POLYLINE"===(r=e.nodeName.toUpperCase())||"POLYGON"===r,"PATH"===r||l?(a="PATH"===r?"d":"points",("string"==typeof t||t.getBBox||t[0])&&(t={shape:t}),s=y(t.shape||t.d||t.points||"","d"===a,e),l&&p.test(s)?(A("WARNING: a <"+r+"> cannot accept path data. "+w),!1):(s&&((this._target=e).getAttributeNS(null,"data-original")||e.setAttributeNS(null,"data-original",e.getAttribute(a)),(i=this._addTween(e,"setAttribute",e.getAttribute(a)+"",s+"","morphSVG",!1,a,"object"==typeof t.precompile?function(e){e[0]=t.precompile[0],e[1]=t.precompile[1]}:"d"===a?(u=t.shapeIndex,c=t.map||O.defaultMap,h=t.precompile,c||h||u||0===u?function(e){b(e,u,c,h)}:b):v(t.shapeIndex)))&&(this._overwriteProps.push("morphSVG"),i.end=s,i.endProp=a)),!0)):(A("WARNING: cannot morph a <"+r+"> SVG element. "+w),!1))},set:function(e){var t;if(this._super.setRatio.call(this,e),1===e)for(t=this._firstPT;t;)t.end&&this._target.setAttribute(t.endProp,t.end),t=t._next}});O.pathFilter=b,O.pointsFilter=n,O.subdivideRawBezier=L,O.defaultMap="size",O.pathDataToRawBezier=function(e){return f(y(e,!0))},O.equalizeSegmentQuantity=s,O.convertToPath=function(e,t){"string"==typeof e&&(e=d.selector(e));for(var n=e&&0!==e.length?e.length&&e[0]&&e[0].nodeType?Array.prototype.slice.call(e,0):[e]:[],o=n.length;-1<--o;)n[o]=l(n[o],!1!==t);return n},O.pathDataToBezier=function(e,t){var n,o,r,a,i,s,l,u,c=f(y(e,!0))[0]||[],h=0;if(u=(t=t||{}).align||t.relative,a=t.matrix||[1,0,0,1,0,0],i=t.offsetX||0,s=t.offsetY||0,"relative"===u||!0===u?(i-=c[0]*a[0]+c[1]*a[2],s-=c[0]*a[1]+c[1]*a[3],h="+="):(i+=a[4],s+=a[5],u&&(u="string"==typeof u?d.selector(u):u&&u[0]?u:[u])&&u[0]&&(i-=(l=u[0].getBBox()||{x:0,y:0}).x,s-=l.y)),n=[],r=c.length,a)for(o=0;o<r;o+=2)n.push({x:h+(c[o]*a[0]+c[o+1]*a[2]+i),y:h+(c[o]*a[1]+c[o+1]*a[3]+s)});else for(o=0;o<r;o+=2)n.push({x:h+(c[o]+i),y:h+(c[o+1]+s)});return n}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope).MorphSVGPlugin};"function"==typeof define&&define.amd?define(["TweenLite"],t):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=t())}();var banana=document.getElementById("banana"),bananaWrapper=document.querySelector(".banana-wrapper"),beakRect=null,beakIsOpen=!1;function Bananimal(e,t,n,o,r,a,i,s){this.species=e,this.context=t,this.animalBody=n,this.mouthUpper=o,this.mouthLower=r,this.eye=a,this.tail=s,this.tongueAnim=new TimelineMax,this.tongueAnim.to(i.s,1,{morphSVG:i.e,ease:Elastic.easeInOut.config(1,.3),shapeIndex:3,scale:2}),this.swallowAnim=new TimelineMax({paused:!0}),this.swallowAnim.to("#slurp-1",.5,{morphSVG:"#slurp-2",ease:Sine.easeIn}).to("#slurp-1",.6,{morphSVG:"#slurp-3",ease:Sine.easeOut}).to("#slurp-1",.2,{morphSVG:"#slurp-1",ease:Sine.easeInOut}),this.size=1,this.setupIdleAnimation=function(e){var n=e,t=this;TweenMax.to(t.animalBody,1,{rotation:-4,repeat:-1,transformOrigin:"center",yoyo:!0,ease:Power2.easeInOut}),TweenMax.to(t.tail,.8,{rotation:-6,repeat:-1,transformOrigin:"top right",yoyo:!0,ease:Power2.easeInOut}),function e(){TweenLite.to(n,.3,{x:-6,scale:1.2,transformOrigin:"center"}),TweenMax.staggerFrom(n.children,.3,{x:-4},.1),setTimeout(function(){TweenLite.to(n,.3,{x:0,scale:1})},800);var t=Math.round(4e3*Math.random())+500;setTimeout(function(){e()},t)}()},this.growStomach=function(){var e=this;this.size+=.05,setTimeout(function(){TweenLite.to(e.animalBody,.3,{x:0,scale:e.size})},500)},this.swallow=function(){this.swallowAnim.play(0),this.growStomach()},this.area=function(){return console.log(this.mouthUpper.getBoundingClientRect()),this.mouthUpper.getBoundingClientRect()},this.affectMouth=function(e){e?(this.tongueAnim.play(0),TweenLite.to(this.mouthUpper,.5,{rotation:-20,ease:Back.easeOut}),TweenLite.to(this.mouthLower,.5,{rotation:20,ease:Back.easeOut}),beakIsOpen=!0):(this.tongueAnim.reverse(0),TweenLite.to(this.mouthUpper,.5,{rotation:0,ease:Back.easeOut}),TweenLite.to(this.mouthLower,.5,{rotation:0,ease:Back.easeOut}))},this.setupIdleAnimation(this.eye)}var animal=new Bananimal("tucan",document.getElementById("stick"),document.getElementById("tucan_body"),document.getElementById("beak_top"),document.getElementById("beak_bot"),document.getElementById("eye"),{s:document.getElementById("tongue"),e:document.getElementById("tongue_long")},document.getElementById("tail"));function Banan(){this.isGoingDown=!1;var e=this;bananaWrapper.addEventListener("mouseenter",function(){e.isGoingDown||TweenLite.to(e,.3,{scale:1.2}),this.removeEventListener("mouseenter",null)}),bananaWrapper.addEventListener("mouseleave",function(){e.isGoingDown||TweenLite.to(this,.2,{scale:1}),this.removeEventListener("mouseleave",null)}),this.destroyFruit=function(){var e=this,t=window.getComputedStyle(bananaWrapper,null);parseInt(t.offsetleft,10),parseInt(t.offsetTop,10);animal.swallow(),TweenLite.to(bananaWrapper,.5,{scale:0,ease:Power2.easeInOut}),e.isGoingDown=!0,setTimeout(function(){bananaWrapper.style.left="200px",bananaWrapper.style.top="200px",animal.affectMouth(!1),setTimeout(function(){TweenLite.to(bananaWrapper,.25,{scale:1,ease:Power2.easeInOut}),e.isGoingDown=!1},1500)},1500)}}banana=new Banan;function setupBanana(n){var o=0,r=0,a=0,i=0;function t(e){e=e||window.event,o=a-e.clientX,r=i-e.clientY,a=e.clientX,i=e.clientY,n.style.top=n.offsetTop-r+"px",n.style.left=n.offsetLeft-o+"px";var t=animal.area();e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom?animal.affectMouth(!0):animal.affectMouth(!1)}function s(e){e.srcElement||e.target;document.onmouseup=null,document.onmousemove=null,beakIsOpen&&banana.destroyFruit()}n.onmousedown=function(e){e=e||window.event,a=e.clientX,i=e.clientY,document.onmouseup=s,document.onmousemove=t}}setupBanana(bananaWrapper);