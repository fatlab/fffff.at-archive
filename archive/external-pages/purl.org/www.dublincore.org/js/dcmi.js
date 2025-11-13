$(document).ready(function () {
	$('.unsorted-table').dataTable({
		bSort: false,
		bInfo: false,
		bFilter: false,
		bPaginate: false,
		fixedHeader: false,
		order: [[0, 'asc']],
		responsive: true,
	});
});

$(document).ready(function () {
	$('.sorted-table').dataTable({
		bSort: true,
		bInfo: false,
		bFilter: false,
		bPaginate: false,
		fixedHeader: false,
		order: [[0, 'asc']],
		responsive: true,
	});
});

$(document).ready(function () {
	$('.reverse-sorted-table').dataTable({
		bSort: true,
		bInfo: false,
		bFilter: false,
		bPaginate: false,
		fixedHeader: false,
		order: [[0, 'desc']],
		responsive: true,
	});
});

$(document).ready(function () {
	$('.sorted-table-conference-presentations').dataTable({
		bSort: true,
		bInfo: false,
		bFilter: false,
		bPaginate: false,
		fixedHeader: false,
		order: [[4, 'asc']],
		responsive: true,
	});
});
