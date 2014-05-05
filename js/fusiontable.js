       google.load('visualization', '1');

function drawTable(contenedor, nombre) {
        // Construct query
        var query = "select col0>>0, col3>>1, SUM(col2>>0) as 'Suma', count() as 'Horas con registros', MINIMUM(col2>>0)  , MAXIMUM(col2>>0), AVERAGE(col2>>0)  from 1WENRMKLPrLdl-8WCKE0P6PTCwRkqCn88tRg-WuHV group by col3>>1,col0>>0,col5>>1" ;

        var queryText = encodeURIComponent(query);
                
        var gvizQuery = new google.visualization.Query(
            'http://www.google.com/fusiontables/gvizdata?tq='  + queryText);
        // Send query and draw table with data in response
        gvizQuery.send(function(response) {
          var numRows = response.getDataTable().getNumberOfRows();
          var numCols = response.getDataTable().getNumberOfColumns();

          var ftdata = ['<table class="table" id="'+nombre+'"><thead><tr>'];
          for (var i = 0; i < numCols; i++) {
            var columnTitle = response.getDataTable().getColumnLabel(i);
            ftdata.push('<th>' + columnTitle + '</th>');
          }
          ftdata.push('<th>Acciones</th></tr></thead><tbody>');

          for (var i = 0; i < numRows; i++) {
            ftdata.push('<tr>');
            for(var j = 0; j < numCols; j++) {
              var rowValue = response.getDataTable().getValue(i, j);
              ftdata.push('<td>' + rowValue + '</td>');
            }
            ftdata.push('<td class="center "><a class="btn btn-success" href="#"><i class="icon-zoom-in icon-white"></i>Ver</a></td></tr>');
          }
          ftdata.push('</tbody></table>');
          document.getElementById(contenedor).innerHTML = ftdata.join('');
          $("#"+nombre).dataTable();
        });
      }

      //google.setOnLoadCallback(drawTable);
