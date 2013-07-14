{
  "id": "1234567893",
  "at": "2",
  "tmax": 120,
  "imp": [
    {
      "id": "1",
      "video": {
        "mimes": [
          "video/x-flv", "video/mp4", "application/x-shockwave-flash",
          "application/javascript"
        ],
        "linearity": 1,
        "minduration": 5,
        "maxduration": 30,
        "protocol": [ 1, 2, 3, 4 ],
        "w": 640,
        "h": 480,
        "startdelay": 0,
        "battr": [ 13, 14 ],
        "maxextended": 30,
        "minbitrate": 300,
        "maxbitrate": 1500,
        "boxingallowed": true,
        "playbackmethod": [ 1, 3 ],
        "delivery": [ 2 ],
        "pos": 1,
        "companionad": [
          {
            "id": "1234567893-1",
            "w": 300,
            "h": 250,
            "pos": 1,
            "battr": [ 13, 14 ],
            "expandable": [ 2, 4 ],
            "iframebusters": [ "Vendor A", "Vendor B" ]
          },
          {
            "id": "1234567893-2",
            "w": 728,
            "h": 90,
            "pos": 1,
            "battr": [ 13, 14 ]
          }
        ],
        "api": [ 1 ]
      }
    }
  ],
  "site": {
    "id": "1345135123",
    "name": "Site ABCD",
    "domain": "siteabcd.com",
    "sitecat": [ "IAB2-1", "IAB2-2" ],
    "page": "http://siteabcd.com/page.htm",
    "ref": "http://referringsite.com/referringpage.htm",
    "privacypolicy": true,
    "publisher": { "id": "pub12345", "name": "Publisher A" },
    "content": {
      "id": "1234567",
      "episode": 23,
      "title": "Car Show",
      "series": "All About Cars",
      "season": "2",
      "cat": [ "IAB2-2" ],
      "keywords": [ "keyword a", "keyword b", "keyword c" ]
    }
  },
  "device": {
    "ip": "64.124.253.1",
    "ua":
      "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16",
    "os": "OS X",
    "flashversion": "10.1",
    "js": 1
  },
  "user": {
    "uid": "456789876567897654678987656789",
    "buyeruid": "545678765467876567898765678987654",
    "data": [
      {
        "id": "6",
        "name": "Data Provider 1",
        "segment": [
          { "id": "12341318394918", "name": "auto intenders" },
          { "id": "1234131839491234", "name": "auto enthusiasts" }
        ]
      }
    ]
  }
}
