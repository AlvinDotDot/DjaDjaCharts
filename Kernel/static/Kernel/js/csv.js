
$(document).ready(function(){
	$('#load_data').click(function(){
		var form = $('form').get(0);
		form_data = new FormData();
		form_data.append('file', ($(document).find('[type=file]')[0].files[0]));
		$('.ajaxProgress').show();
		$.ajax({
			url: '/preLoad',
			type : "POST",
			data : form_data,
			processData: false,
			contentType: false,
			datatype: "array",
			success:function(data){
				$('#csvResult').hide();
			    var table_data = '<table class="table table-sm table-striped">';
			    for(var count = 0; count<data[0].length; count++)
			    {
			     	var cell_data = data[0][count];
			     	table_data += '<tr>';
			     	for(var cell_count=0; cell_count<cell_data.length; cell_count++)
			    	{
			      		if(count === 0)
			      		{
  				 			table_data += '<th>'+cell_data[cell_count]+'</th>';
			      		}
			      		else
			      		{
			       			table_data += '<td>'+cell_data[cell_count]+'</td>';
			      		}
			     	}
			     	table_data += '</tr>';
			    }
			    table_data += '</table>';
			    $('#csvResult').html(table_data);
			    $('#csvResult').show();
			    $('.ajaxProgress').hide();
			    var options;
			    crops = data[1][0];
			    console.debug(crops);
				for (var i = 0; i < crops.length; i++) {
					options += '<option value=' + i + '>' + crops[i] + '</option>';
				}
				$("#id_abscisse").html(options);
				$("#id_ordonnee").html(options);
				$("#abscisse").show();
				$("#ordonnee").show();
				$('#validate').show();
			},
		})
	});
});