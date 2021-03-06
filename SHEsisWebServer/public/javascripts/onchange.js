var SPLIT = 50;
var gData2Draw;
var gHeader;
var gNames;
var gPage;
var gRawData;
var gRoot;

function ResetForm(){
document.getElementsByName("TableInputData")[0].style.display="";
document.getElementsByName("TableInputDataQTL")[0].style.display="none";
}


function selectQTL(){
 var elementPheno = document.getElementsByName("SelectPhenotype");
 var elementLD    = document.getElementsByName("SelectLDType");
 var elementInputData=document.getElementsByName("TableInputData");
 var elementInputDataQTL=document.getElementsByName("TableInputDataQTL");
 if(elementPheno[0].value == "Quantitative Trait"){
 	elementLD[0].value="Both case and control";
 	elementLD[0].disabled=true;
	elementInputData[0].style.display="none";
	elementInputDataQTL[0].style.display="";
 }else{
	elementLD[0].disabled=false;
	elementInputData[0].style.display="";
	elementInputDataQTL[0].style.display="none";
}
}
function loadSampleDataBinary(){
    var data="id1 case 2 2 A G G C C T\nid2 case 1 1 A A 0 0 C C\nid3 ctrl 1 1 A A G G C T\nid4 ctrl 1 1 G G G G T C\nid5 case 2 2 A G G C T T\nid6 ctrl 3 3 A G G C C C\nid7 ctrl 2 2 A A G G C C\nid8 ctrl 0 0 G G C G C C\nid9 case 2 2 A A C G T T";
    var covar="1.2 40 1\n2.1 34 2\n1.5 32 2\n3.2 12 1\n2.5 43 2\n4.3 23 1\n4.5 32 1\n5.6 54 2\n4.1 67 2";
    document.getElementsByName("TextareaInputData")[0].value=data;
    document.getElementsByName("TextareaCovar")[0].value=covar;
    document.getElementsByName('CheckBoxAnalysisTypeAssoc')[0].checked=true;
    if(document.getElementsByName('CheckBoxAnalysisTypeHWE')[0]!=undefined){
	document.getElementsByName('CheckBoxAnalysisTypeHWE')[0].checked=true;
    }else{
	document.getElementsByName('CheckBoxAnalysisTypeEpi')[0].checked=true;
    }
    document.getElementsByName('CheckBoxAnalysisTypeHap')[0].checked=true;
    document.getElementsByName('CheckBoxAnalysisTypeLD')[0].checked=true;
    document.getElementsByName("SelectPhenotype")[0].value="Case/Control";
    document.getElementsByName("SelectPloidy")[0].value="2";
    document.getElementsByName("SelectLDType")[0].value="Both case and control";
    document.getElementsByName("TextMarkername")[0].value="rs11,rs22,rs33,rs44";
    document.getElementsByName("TextLFT")[0].value="0.03";
    document.getElementsByName("TextMask")[0].value="1,1,0,1";    
};
function loadSampleDataQTL(){
    var data="id1 1.2 2 2 A G G C C T\nid2 2.1 1 1 A A 0 0 C C\nid3 3.0 1 1 A A G G C T\nid4 1.9 1 1 G G G G T C\nid5 8.7 2 2 A G G C T T\nid6 6.5 3 3 A G G C C C\nid7 4.3 2 2 A A G G C C\nid8 5.6 0 0 G G C G C C\nid9 7.9 2 2 A A C G T T";
    var covar="1.2 40 1\n2.1 34 2\n1.5 32 2\n3.2 12 1\n2.5 43 2\n4.3 23 1\n4.5 32 1\n5.6 54 2\n4.1 67 2";
    document.getElementsByName("TextareaInputData")[0].value=data;
    document.getElementsByName("TextareaCovar")[0].value=covar;
    document.getElementsByName('CheckBoxAnalysisTypeAssoc')[0].checked=true;
    if(document.getElementsByName('CheckBoxAnalysisTypeHWE')[0]!=undefined){
	document.getElementsByName('CheckBoxAnalysisTypeHWE')[0].checked=true;
    }else{
	document.getElementsByName('CheckBoxAnalysisTypeEpi')[0].checked=true;
    }
    document.getElementsByName('CheckBoxAnalysisTypeHap')[0].checked=true;
    document.getElementsByName('CheckBoxAnalysisTypeLD')[0].checked=true;
    document.getElementsByName("SelectPhenotype")[0].value="Quantitative Trait";
    document.getElementsByName("SelectPloidy")[0].value="2";
    document.getElementsByName("SelectLDType")[0].value="Both case and control";
    document.getElementsByName("TextMarkername")[0].value="rs11,rs22,rs33,rs44";
    document.getElementsByName("TextLFT")[0].value="0.03";
    document.getElementsByName("TextMask")[0].value="1,1,0,1";    
};

function loadSample(){
 var elementPheno = document.getElementsByName("SelectPhenotype");
 var elementLD    = document.getElementsByName("SelectLDType");  
 if(elementPheno[0].value == "Quantitative Trait"){
     elementLD[0].value="Both case and control";
     elementLD[0].disabled=true;
     loadSampleDataQTL();
 }else{
     elementLD[0].disabled=false;
     loadSampleDataBinary()
}    
}


function loadSampleBinary(){
var casedata="id1 2 2 A G G C C T\nid2 1 1 A A 0 0 C C\nid3 1 1 A A G G C T\nid4 1 1 G G G G T C\nid5 2 2 A G G C T T\nid6 3 3 A G G C C C\nid7 2 2 A A G G C C\nid8 0 0 G G C G C C\nid9 2 2 A A C G T T";
var ctrldata="id11 2 2 A A G C C T\nid12 1 1 A A C C C C\nid13 1 1 A A G G C T\nid14 1 1 G G G G T T\nid15 2 2 A A G C T T \nid16 1 1 A A G C T C \nid17 3 3 A A G G C C\nid18 1 1 G G C G C T\nid19 2 2 A A C G 0 0";
document.getElementsByName("TextareaCasedata")[0].value=casedata;
document.getElementsByName("TextareaControldata")[0].value=ctrldata;
document.getElementsByName('CheckBoxAnalysisTypeAssoc')[0].checked=true;
document.getElementsByName('CheckBoxAnalysisTypeHWE')[0].checked=true;
document.getElementsByName('CheckBoxAnalysisTypeHap')[0].checked=true;
document.getElementsByName('CheckBoxAnalysisTypeLD')[0].checked=true;
document.getElementsByName("SelectPhenotype")[0].value="Case/Control";
document.getElementsByName("SelectPloidy")[0].value="2";
document.getElementsByName("SelectLDType")[0].value="Both case and control";
document.getElementsByName("TextMarkername")[0].value="rs11,rs22,rs33,rs44";
document.getElementsByName("TextLFT")[0].value="0.03";
document.getElementsByName("TextMask")[0].value="1,1,0,1";
};

function loadSampleQTL(){
var qtldata="id1 2.3 1 2 A G G C C T\nid2 1.3 1 1 A A 0 0 C C\nid3 2.1 1 1 A A G G C T\nid4 3.2 2 1 G G G G T C\nid5 3.45 2 2 A G G C T T\nid6 3.33 3 3 A G G C C C\nid7 5.43 3 2 A A G G C C\nid8 3.21 0 0 G G C G C C\nid9 2.22 2 2 A A C G T T\nid10 3.2 1 1 A A C C T T\nid11 3.22 2 2 A A G C C T\nid12 4.56 1 1 A A C C C C\nid13 5.4 1 1 A A G G C T\nid14 2.24 1 1 G G G G T T\nid15 4.55 1 2 A A G C T T \nid16 6.5 1 3 A A G C T C \nid17 7.6 3 2 A A G G C C\nid18 4.6 2 1 G G C G C T\nid19 5.5 2 2 A A C G 0 0";
document.getElementsByName("TextareaQTLdata")[0].value=qtldata;
document.getElementsByName('CheckBoxAnalysisTypeAssoc')[0].checked=true;
document.getElementsByName('CheckBoxAnalysisTypeHWE')[0].checked=true;
document.getElementsByName('CheckBoxAnalysisTypeHap')[0].checked=true;
document.getElementsByName('CheckBoxAnalysisTypeLD')[0].checked=true;
document.getElementsByName("SelectPhenotype")[0].value="Quantitative Trait";
document.getElementsByName("SelectPloidy")[0].value="2";
document.getElementsByName("SelectLDType")[0].value="Both case and control";
document.getElementsByName("TextMarkername")[0].value="rs11,rs22,rs33,rs44";
document.getElementsByName("TextLFT")[0].value="0.03";
document.getElementsByName("TextMask")[0].value="1,1,0,1";
}

function Submit(s) {
    gPage = 0;
    if ("Select" == s) {
        return;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (4 == xmlhttp.readyState && 200 == xmlhttp.status) {
          	gRoot = document.getElementById("log"); 
		 DrawData(JSON.parse(xmlhttp.responseText));
        }
    }
    xmlhttp.open("GET", "/log?table=" + s, true);
    xmlhttp.send(null);
};


function DrawData(d) {
    gRoot.innerHTML = "";
    DrawHeader(d[0]);
    gData2Draw=d;
    gData2Draw.sort(function(a,b){
	var sortStatus=0;
	if(a.TIME<b.TIME){
		sortStatus=1;
	}else if(a.TIME>b.time){
		sortStatus=-1;
	}
	return sortStatus;
    })
    d.slice(gPage * SPLIT, (gPage + 1) * SPLIT).forEach(DrawRow);
}

function CreateCell(str) {
    var s = document.createElement("td");
    s.className = "Cell";
    s.innerHTML = str;
    return s;
}
function CreateHeadCell(str){
    var s=document.createElement("th");
    s.className="bg-cyan fg-white";
    s.innerHTML=str;
    return s;
}
function DrawHeader(row){
   var p=document.createElement("tr");
   p.className="HeaderRow";
   for(var key in row){
	if(key != "_id")
	p.appendChild(CreateHeadCell(key));
   }
   gRoot.appendChild(p);
};
   
function DrawRow(row) {
    var p = document.createElement("tr");
    p.className = "Row";
    for(var key in row){
	if(key != "_id"){
		if(key == "IP")
		row[key]=row[key].replace("::ffff:","");	
    	 p.appendChild(CreateCell(row[key]));
	}
    }
    gRoot.appendChild(p);
}
function NextPage() {
    if ((gData2Draw.length / SPLIT - 1) > gPage) {
        ++gPage;
        DrawData(gData2Draw);
    }
}

function PrevPage() {
    if (0 < gPage) {
        --gPage;
        DrawData(gData2Draw);
    }
}

function SearchRecordByRegex() {
    gPage = 0;
    var reg = new RegExp(document.getElementById("input").value, "i");
    gData2Draw = gRawData.filter(function(v, i, arr) {
        return reg.test(v["name"]);
    });
    DrawData(gData2Draw);
};

   var tablesToExcel = (function () {
        var uri = 'data:application/vnd.ms-excel;base64,'
        , tmplWorkbookXML = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'
          + '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Axel Richter</Author><Created>{created}</Created></DocumentProperties>'
          + '<Styles>'
          + '<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>'
          + '<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>'
          + '</Styles>'
          + '{worksheets}</Workbook>'
        , tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>'
        , tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
        return function (wbname, appname) {
            var ctx = "";
            var workbookXML = "";
            var worksheetsXML = "";
            var rowsXML = "";
            var tables = $('table');
            for (var i = 0; i < tables.length; i++) {
                for (var j = 0; j < tables[i].rows.length; j++) {
                    rowsXML += '<Row>'
                    for (var k = 0; k < tables[i].rows[j].cells.length; k++) {
                        var dataType = tables[i].rows[j].cells[k].getAttribute("data-type");
                        var dataStyle = tables[i].rows[j].cells[k].getAttribute("data-style");
                        var dataValue = tables[i].rows[j].cells[k].getAttribute("data-value");
                        dataValue = (dataValue) ? dataValue : tables[i].rows[j].cells[k].innerHTML;
                        var dataFormula = tables[i].rows[j].cells[k].getAttribute("data-formula");
                        dataFormula = (dataFormula) ? dataFormula : (appname == 'Calc' && dataType == 'DateTime') ? dataValue : null;
                        ctx = {
                            attributeStyleID: (dataStyle == 'Currency' || dataStyle == 'Date') ? ' ss:StyleID="' + dataStyle + '"' : ''
                               , nameType: (dataType == 'Number' || dataType == 'DateTime' || dataType == 'Boolean' || dataType == 'Error') ? dataType : 'String'
                               , data: (dataFormula) ? '' : dataValue.replace('<br>', '')
                               , attributeFormula: (dataFormula) ? ' ss:Formula="' + dataFormula + '"' : ''
                        };
                        rowsXML += format(tmplCellXML, ctx);
                    }
                    rowsXML += '</Row>'
                }
                ctx = { rows: rowsXML, nameWS: tables[i].id || 'Sheet' + i };
                worksheetsXML += format(tmplWorksheetXML, ctx);
                rowsXML = "";
            }

            ctx = { created: (new Date()).getTime(), worksheets: worksheetsXML };
            workbookXML = format(tmplWorkbookXML, ctx);

            console.log(workbookXML);

            var link = document.createElement("A");
            link.href = uri + base64(workbookXML);
            link.download = wbname || 'Workbook.xls';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    })();
