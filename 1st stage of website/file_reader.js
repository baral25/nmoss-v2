var openFile = function(event){
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    let newTxt = text.split("[+]");
    let count = newTxt.length-1;
    console.log(count);
    //dashboard
    let node_count = document.getElementById("len_device");
    node_count.insertAdjacentHTML('afterend',`<div class = "dash" id = "len_device">Total number: ${count}</div>`)
    
     let deviceArray = [];
     for (let index = 1; index < newTxt.length-1; index++) {
       deviceArray.push(newTxt[index]);  
     }
     deviceArray.push(newTxt[newTxt.length -1].split("TCP")[0])
    const anotherArray = deviceArray.map(item =>{
     let newItem = item.split('Device vendor for').join("").split('with MAC ADD').join("").split("is:").join("");
     let newArray = newItem.split("  ");
     console.log(newArray);
     let obj = {};
     obj['ip'] = newArray[1];
     obj['mac'] = newArray[3];
     obj['vendor'] = newArray[5];
    return obj;
    })
    let node = document.getElementById('tcp');
    node.innerHTML = '<div class = "container_devices"><h1 class = "device_heading" style = "color:white;font-size:large;">Devices</h1></div>'
    anotherArray.forEach(list =>{
      node.insertAdjacentHTML('afterend', `<div class = "container_devices" id="vendor"><i class="fa fa-user" style="font-size:18px;background-color: #2C2C2C;"></i><h3 class="dev_head" style = "background-color:#2C2C2C;">Vendor:</h3> ${list.vendor}</div> <div class = "container_devices" id="ip"><i class="fa fa-cog"style="font-size:18px;background-color: #2C2C2C;"></i>&nbsp<h3 class="dev_head"style = "background-color:#2C2C2C;">IP:</h3>${list.ip} </div> <div class = "container_devices" id="mac"><i class="fa fa-microchip"style="font-size:18px;background-color: #2C2C2C;"></i>&nbsp<h3 class="dev_head"style = "background-color:#2C2C2C;">Mac:</h3>${list.mac} </div>`);
    });
    
  // this is for own network information
    let description = text.slice(text.indexOf("Description"),text.indexOf("SSID"));
    console.log(description);
    let node_driver = document.getElementById('driver');
    node_driver.insertAdjacentHTML('afterend',`<div class="own" id = "driver"><h3 class="h31"><i class="fa fa-wifi" style="font-size:24px"></i>&nbsp;&nbsp;&nbsp;&nbsp;WiFi-Inerface:</h3>${description}</div>`)
//
    let ssid = text.slice(text.indexOf("SSID"),text.indexOf("BSSID"));
    console.log(ssid);
    let node_ssid = document.getElementById('ssid');
    node_ssid.insertAdjacentHTML('afterend',`<div class="own" id = "ssid">${ssid}</div>`)
    //dashboard
    let ssid_d = text.slice(text.indexOf("SSID"),text.indexOf("BSSID"));
    let node_ssid_d = document.getElementById('ssid_d');
    node_ssid_d.insertAdjacentHTML('afterend',`<div class="dash" id = "ssid_d">${ssid_d}</div>`)
//
    let bssid = text.slice(text.indexOf("BSSID"),text.indexOf("Radio type"));
    console.log(bssid);
    let node_bssid = document.getElementById('bssid');
    node_bssid.insertAdjacentHTML('afterend',`<div class="own" id = "bssid">${bssid}</div>`)
//
    let radio_type = text.slice(text.indexOf("Radio type"),text.indexOf("Authentication"));
    console.log(radio_type);
    let node_radio = document.getElementById('radio');
    node_radio.insertAdjacentHTML('afterend',`<div class="own" id = "radio">${radio_type}</div>`)
//
    let auth = text.slice(text.indexOf("Authentication"),text.indexOf("Channel"));
    console.log(auth);
    let node_auth = document.getElementById('auth');
    node_auth.insertAdjacentHTML('afterend',`<div class="own" id = "auth">${auth}</div>`)
//
    let signal = text.slice(text.indexOf("Signal"),text.indexOf("Link-local"));
    console.log(signal);
    let node_signal = document.getElementById('signal');
    node_signal.insertAdjacentHTML('afterend',`<div class="own" id = "signal">${signal}</div>`)
    //dashboard
    let signal_d = text.slice(text.indexOf("Signal"),text.indexOf("Link-local"));
    let node_signal_d = document.getElementById('signal_d');
    node_signal_d.insertAdjacentHTML('afterend',`<div class="dash" id = "signal_d">${signal_d}</div>`)
    // till here
    // class for ipv6 and v4 addresses

    let ipv6 = text.slice(text.indexOf("Link-local IPv6 Address"),text.indexOf("IPv4 Address"));
    let ipv6_split = ipv6.split(".").join(" ");
    console.log(ipv6_split);
    let node_ipv6 = document.getElementById('ipv6');
    node_ipv6.insertAdjacentHTML('afterend',`<div class="ip_info" id = "ipv6">${ipv6}</div>`)

    let ipv4 = text.slice(text.indexOf("IPv4 Address"),text.indexOf("Default Gateway "));
    // let ipv4_split = ipv4.split(".").join(" ");
    // console.log(ipv4_split);
    let node_ipv4 = document.getElementById('ipv4');
    node_ipv4.insertAdjacentHTML('afterend',`<div class="ip_info" id = "ipv4"><h3 class="h31"><i class="fa fa-gears" style="font-size:24px"></i>&nbsp;&nbsp;&nbsp;&nbsp;Internet Adress:</h3>${ipv4}</div>`)
    //dashboard
    let ipv4_d = text.slice(text.indexOf("IPv4 Address"),text.indexOf("Default Gateway"));
    let node_ipv4_d = document.getElementById('ipv4_d');
    node_ipv4_d.insertAdjacentHTML('afterend',`<div class="dash" id = "ipv4_d">${ipv4_d}</div>`)

    let gateway = text.slice(text.indexOf("Default Gateway"),text.indexOf("Default Server"));
    console.log(gateway);
    let node_gateway = document.getElementById('gateway');
    node_gateway.insertAdjacentHTML('afterend',`<div class="ip_info" id = "gateway">${gateway}</div>`)

    //class for dns server and isp information
    let dns_server = text.slice(text.indexOf("Default Server"),text.indexOf("Address:"));
    console.log(dns_server);
    let node_dns_server = document.getElementById('dns_server');
    node_dns_server.insertAdjacentHTML('afterend',`<div class="dns" id = "dns_server"><h3 id="isp_dns"><i class="fa fa-tachometer" style="font-size:24px"></i>&nbsp;&nbsp;&nbsp;&nbsp;ISP</h3>${dns_server}</div>`)
    //dashboard
    let isp_d = text.slice(text.indexOf("Default Server"),text.indexOf("Address:"));
    let node_isp_d = document.getElementById('isp_d');
    node_isp_d.insertAdjacentHTML('afterend',`<div class="dash" id = "isp_d">${isp_d}</div>`)

    let dns_add = text.slice(text.indexOf("Address:"),text.indexOf("Interface name"));
    console.log(dns_add);
    let node_dns_add = document.getElementById('dns_add');
    node_dns_add.insertAdjacentHTML('afterend',`<div class="dns" id = "dns_add">${dns_add}</div>`)
    //nearby networks information
    let other_wifi = text.slice(text.indexOf("Interface name"),text.lastIndexOf("Other"));
    wifi_split = other_wifi.split(/\r?\n/).join("<br>");
    console.log(other_wifi);
    let node_other_wifi = document.getElementById('other_wifi');
    node_other_wifi.insertAdjacentHTML('afterend',`<h3 id = "oth_wifi"><i class="fa fa-signal" style="font-size:24px"></i>&nbsp;&nbsp;&nbsp;&nbsp;Nearby Wi-Fi</h3> <div class="wifi_oth" id = "other_wifi">${wifi_split}</div>`)
    //dashboard
    let dash_number = text.slice(text.indexOf("There"),text.indexOf("currently"));
    console.log(dash_number);
    let node_dash_number = document.getElementById("number_d")
    node_dash_number.insertAdjacentHTML('afterend',`<div class = "dash" id="number_d">${dash_number}</div>`)
    //user profiles
    // let user_prof = text.slice(text.indexOf("All User"),-1);
    // console.log(user_prof);
    // let node_user_prof = document.getElementById('user_prof');
    // node_user_prof.insertAdjacentHTML('afterend',`<div class="profiles" id = "profiles">${user_prof}</div>`)
    //dashboard
    let user_prof_d = text.slice(text.indexOf("All User"),-1);
    console.log(user_prof_d);
    let node_user_prof_d = document.getElementById('last_d');
    node_user_prof_d.insertAdjacentHTML('afterend',`<div class="dash" id = "last_d">${user_prof_d}</div>`)
    
  





    
    //dashboard
    let html_array = text.split("TCP");
    console.log(html_array);
    tcp_count = html_array.length-1;
    let node_tcp = document.getElementById("tcp_count");
    node_tcp.insertAdjacentHTML('afterend',`<div class="dash" id="tcp_count">Initialized Applications:${tcp_count}`);
    //  obj2['tcp'] = test_array[0];
    //  obj2['add'] = test_array[2];
    //  obj2['hostname'] = test_array[6];
    //  obj2['status'] = test_array[7];
    //  obj2['pid'] = test_array[9];
    //  console.log(obj2['pid']);
  
  
    // let node_1 = document.getElementById('output');
    // anotherArray1.forEach(list =>{
    // node_1.insertAdjacentHTML('afterend',`<div id="tcp" PROTOCOLS ${list.tcp} </div><div id="add" PROTOCOLS ${list.add} </div><div id="status" PROTOCOLS ${list.status} </div><div id="pid" PROTOCOLS ${list.pid} </div>`)
    // })

  };
  reader.readAsText(input.files[0]);
};