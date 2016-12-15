
// Ajax functionality to search films
$('#search').keyup(function () {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('/content/json/filmsData.json', function (data) {
	    var output = '<ul class="ul-search-results">';
		$.each(data, function(key, val) {
			if ((val.title.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>'+ val.title +'</h2>';
				output += '<img src="/content/images/films/' + val.shorttitle + '.jpg" alt="' + val.title + '" />';
				output += '<p>' + val.distributor + '</p>';
				output += '<p>' + val.worldwidGross + '</p>';
				output += '<p>' + val.bio + '</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#film-results').html(output);
	}); //get JSON
});
