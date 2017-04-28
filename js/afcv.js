	$("#edubtn").click(function(){
		$("#xpdiv").hide(640);
		$("#edudiv").show(1280);
		$("#cybdiv").hide(640);
		$("#itdiv").hide(640);
		$("#langdiv").hide(640);
		$("#miscdiv").hide(640);
	});
	$("#xpbtn").click(function(){
		$("#edudiv").hide(640);
		$("#xpdiv").show(1280);
		$("#cybdiv").hide(640);
		$("#itdiv").hide(640);
		$("#langdiv").hide(640);
		$("#miscdiv").hide(640);
	});
	$("#cybbtn").click(function(){
		$("#itdiv").hide(640);
		$("#cybdiv").show(1280);
		$("#edudiv").hide(640);
		$("#xpdiv").hide(640);
		$("#langdiv").hide(640);
		$("#miscdiv").hide(640);
	});
	$("#itbtn").click(function(){
		$("#cybdiv").hide(640);
		$("#itdiv").show(1280);
		$("#edudiv").hide(640);
		$("#xpdiv").hide(640);
		$("#langdiv").hide(640);
		$("#miscdiv").hide(640);
	});
	$("#miscbtn").click(function(){
		$("#langdiv").hide(640);
		$("#miscdiv").show(1280);
		$("#edudiv").hide(640);
		$("#xpdiv").hide(640);
		$("#cybdiv").hide(640);
		$("#itdiv").hide(640);
	});
	$("#langbtn").click(function(){
		$("#miscdiv").hide(640);
		$("#langdiv").show(1280);
		$("#edudiv").hide(640);
		$("#xpdiv").hide(640);
		$("#cybdiv").hide(640);
		$("#itdiv").hide(640);
	});

	$("#allbtn").click(function(){
		$("#langdiv").show(1600);
		$("#miscdiv").show(1600);
		$("#cybdiv").show(1600);
		$("#itdiv").show(1600);
		$("#edudiv").show(1600);
		$("#xpdiv").show(1600);
	});

  $("#contact").click(function(){
		this.alert(document.cookie());
	});

	$(function(){ $(document).tooltip(); });
	
	$('li[data-toggle="tooltip"]').tooltip({
		animated: 'fade',
		placement: 'bottom',
	});
