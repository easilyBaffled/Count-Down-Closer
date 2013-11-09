chrome.runtime.onMessage.addListener(function message(msg) {
                                     var ctr = 0;
                                     ctr = parseInt(msg.text, 10);
                                     setTimeout(function() {
                                                chrome.tabs.query({ active: true }, function(tabs) {
                                                                  chrome.tabs.remove(tabs[0].id);
                                                                  });
                                                }, ctr*60000);
                                     });