var e=function(e,t,n,i,a){var o=document.querySelector("body"),s=document.createElement("div");s.classList.add("notification"),s.classList.add(a);var c=document.createElement("h2");c.classList.add("title"),c.textContent=n,s.appendChild(c);var d=document.createElement("p");d.textContent=i,s.appendChild(d),s.style.top="".concat(e,"px"),s.style.right="".concat(t,"px"),o.appendChild(s),setTimeout(function(){s.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.d61f9db0.js.map