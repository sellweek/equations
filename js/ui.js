$(function() {
	$("input").on("change", function() {
		var a = $("#a").val();
		var b = $("#b").val();
		var c = $("#c").val();
		var sol = solve(a, b, c);
		$("#x1").html(sol[0]);
		$("#x2").html(sol[1]);
	});
});