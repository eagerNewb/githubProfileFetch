function init() {
	// fire-up the ajax call
	function xhr() {
		function requestListener() {
			var req = JSON.parse(this.responseText);
			

			for(var i=0;i<req.length;i++){
		        var obj = req[i];

		        var reposList = document.getElementById("reposList");
		        reposList.innerHTML += "<li class='list-group-item'>" + obj.name + "</li>";
		        obj = [];
		    }


		}
		function requestListener2() {
			var req = JSON.parse(this.responseText);
			
			var avatar = req.avatar_url;
			document.getElementById('githubAvatar').src = avatar;

			var username = req.name;
			document.getElementById('githubName').innerHTML = username;

		}

		function failedTransfer(e) {

		    document.getElementById("error").innerHTML = "Enter existing username";
		}
		// grab user input
		var userid = document.getElementById('user').value;
		// console.log(userid);

		function submitForm() {
		   // Get the first form with the name
		   // Hopefully there is only one, but there are more, select the correct index
		   var frm = document.getElementById('frm');

		   // frm.submit(); // Submit
		   frm.reset();  // Reset
		   return false; // Prevent page refresh

		}


		// make new xmlhttp object
		var xmlhttpRepos = new XMLHttpRequest();
		var xmlhttpAvatar = new XMLHttpRequest();

		// request url
		var urlRepos = 'https://api.github.com/users/'+userid+'/repos';
		var urlAvatar = 'https://api.github.com/users/'+userid;

		// add event listener
		xmlhttpRepos.addEventListener('load', requestListener);
		xmlhttpRepos.addEventListener('error', failedTransfer);

		xmlhttpAvatar.addEventListener('load', requestListener2);
		xmlhttpAvatar.addEventListener('error', failedTransfer);

		// open the request
		xmlhttpRepos.open('GET', urlRepos, true);
		xmlhttpAvatar.open('GET', urlAvatar, true);
	
		// send
	    xmlhttpRepos.send();
		xmlhttpAvatar.send();
		submitForm();

	}
    xhr();

}