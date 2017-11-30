// Copyright 2017 Avreghly Barra Al-Ilman <shrotavre.com>. All rights reserved.
// Use of this source code is governed by a Apache 2.0 license that can be
// found in the LICENSE file.

const mainHTMLURI = 'index.html'
const showYoshTimerTab = function(){
    chrome.tabs.create({url : mainHTMLURI})
}

// This event is fired with the user click the browser button
chrome.browserAction.onClicked.addListener(
    function(evt) {
      showYoshTimerTab()
    }
)

// This event is fired when user press registered command
chrome.commands.onCommand.addListener(function(command) {
  if (command == "show-yosh-timer-tab") {
    showYoshTimerTab()
  }
});
