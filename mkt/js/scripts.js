/*!
* Start Bootstrap - Landing Page v6.0.5 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function getCommentCount(postId, accessToken) {
	// Tạo yêu cầu HTTP GET để lấy dữ liệu từ Graph API
	var request = new XMLHttpRequest();
	request.open('GET', `https://graph.facebook.com/v8.0/${postId}/comments?summary=true&access_token=${accessToken}`, true);
  
	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
		var data = JSON.parse(request.responseText);
		 // Lấy số lượng comment từ trường summary của object JSON
		 var commentCount = data.summary.total_count;
  
		 // Hiển thị số lượng comment lên màn hình
		 console.log(`Số lượng comment của bài viết: ${commentCount}`);
	   } else {
		 console.error('Lỗi khi lấy dữ liệu từ Graph API');
	   }
	};

	request.onerror = function() {
	console.error('Lỗi khi gửi yêu cầu tới Graph API');
	};
	
	request.send();
	}
	
	// Gọi hàm getCommentCount với ID của bài viết và access token của bạn
	//getCommentCount('12345', 'YOUR_ACCESS_TOKEN');
function isVaild(){
	var token=$("input[name='token']").val();
	var idPage=$("input[name='idpage']").val();
	if 
}
	// $("input[name='token']").val();