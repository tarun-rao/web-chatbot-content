(function(d, w, c) {
  if (!d.getElementById("spd-busns-spt")) {
    var n = d.getElementsByTagName("script")[0],
      s = d.createElement("script");
    var loaded = false;
    s.id = "spd-busns-spt";
    s.async = "async";
    if ("" === "opt") {
      s.setAttribute("data-self-init", "false");
      s.setAttribute("data-init-type", "opt");
    }
    s.src = "https://cdn.freshbots.ai/assets/share/js/freshbots.min.js";
    s.setAttribute("data-client", "712335a4ce53253fdadab93301d8334ad7710353");
    s.setAttribute("data-bot-hash", "4c1aeeba9dd595068d1ddf6a84ce538fb8776fec");
    s.setAttribute("data-bot-version", "1");
    s.setAttribute("data-env", "prod");
    s.setAttribute("data-region", "us");
    if (c) {
      s.onreadystatechange = s.onload = function() {
        if (!loaded) {
          c();
        }
        loaded = true;
      };
    }
    n.parentNode.insertBefore(s, n);
  }
})(document, window, function() {
  if ("" === "opt") {
    Freshbots.initiateWidget(
      {
        autoInitChat: false,
        getClientParams: function() {
          return {};
        }
      },
      function(successResponse) {},
      function(errorResponse) {}
    );
  }
});
