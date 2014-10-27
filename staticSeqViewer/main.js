$(document).ready(function(){
	var cellWidth = 20;
	var cellHeight = 30;
    var mainSeqData;
    var mainData;
    var baseColors;
    function ajax(url, func){
        $.ajax({ url: url, dataType: 'json', async: false,
            success: function(ct){ func(ct); } });
    }

    function ajaxAsync(url, func){
        $.ajax({ url: url, dataType: 'json', async: true,
                 success: function(ct){ func(ct); } });
    }
    
    var mainSeqData, mainData;
    var baseColors = {};
    /*baseColors['A'] = "#ff8787";
    baseColors['G'] = "#ffffaf";
    baseColors['C'] = "#afffaf";
    baseColors['T'] = "#87afff";*/
    ajax('454Example/exampleSeqData.json', function(msd){ mainSeqData = msd; });
	ajax('454Example/exampleMainData.json', function(md){ mainData = md; });
	ajax('resources/baseColors.json', function(bc){ baseColors = bc; });
    

	var SeqViewer = new SeqView("canvasDiv1", mainSeqData["seqs"], mainData, cellWidth, cellHeight, baseColors);
	
	function init(){
		$(window).bind("resize", function(){
			SeqViewer.updateCanvas();
			SeqViewer.setUpSliders();
			SeqViewer.paint();
		});
		SeqViewer.setUp();
		SeqViewer.paint();
	}
	init();




});