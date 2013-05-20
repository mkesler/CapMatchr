var authUrl    = "https://services.captechventures.com/gdm/rest/v1/authenticate",
    changesUrl = "https://services.captechventures.com/gdm/rest/emp/changes/2013-03-01:00:00:00.0000?activeOnly=false";

$(function() {
  // var data = {"com.captechventures.rest.common.pojo.AuthRequest":{"username":"bmayo","password":"xxxxxxxx!"}};
   $.ajax({
      url: authUrl,
      type: 'POST',
      dataType: 'json',
     // data: 'foo',
      success: function(resp) {
         console.log('success');
         console.log(resp);
      },
      error: function(resp) {
         console.log('error');
         console.log(resp)
      }
   });
});