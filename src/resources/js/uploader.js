var circle = '<div class="preloader-wrapper small active"><div class="spinner-layer spinner-green-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
function sendFileToServer(formData,status, id) {
	var uploadURL ="operaciones.php?op=uploadvideo";
	var jqXHR=$.ajax({
		xhr: function() {
			var xhrobj = $.ajaxSettings.xhr();
			if (xhrobj.upload) {
					xhrobj.upload.addEventListener('progress', function(event) {
						var percent = 0;
						var position = event.loaded || event.position;
						var total = event.total;
						if (event.lengthComputable) {
							percent = Math.ceil(position / total * 100);
						}
						if (percent < 100) status.setProgress(percent);
					}, false);
				}
			return xhrobj;
		},
		url: uploadURL,
		type: "POST",
		contentType:false,
		processData: false,
		cache: false,
		data: formData,
		success: function(data){
			if (IsJsonString(data)){
				data = $.parseJSON(data);
				if (data.status == "OK") status.setProgress(100);
				else {
					Materialize.toast(data.msg, 10000);
					restart(id);
				}
			} else Materialize.toast(data, 10000);
		}
	}); 

	status.setAbort(jqXHR);
}
function restart(id){
	var obj = $("#"+id);
	var objmanual = $("#"+id+"-input");
	objmanual.val("");
	obj.addClass("uploader");
	obj.html("Arrastra aqui o haz click para subir un video");
	startUploadZone(id);
}
var rowCount=0;
function StatusBar(id) {
	this.obj = $("#"+id);
	this.obj.unbind();
	this.obj.removeClass("uploader");
	this.obj.html('<div class="progress"><div class="determinate" style="width: 0%; background-color: rgb(255, 255, 0);"></div></div>');
	this.progressBar = $($("#"+id+" > .progress")[0]);
	
	this.manualupload = $("#"+id+"-input");
	this.manualupload.unbind();
	
	this.obj.prepend('<div class="percent">0%</div>');
	this.percent = $($("#"+id+" .percent")[0]);
	
	this.obj.append('<div class="center-align"><span class="name"></span> - <span class="size"></span></div>');
	this.name = $($("#"+id+" .name")[0]);
	this.size = $($("#"+id+" .size")[0]);
	
	this.obj.append('<button class="abort">Cancelar</button>');
	this.abort = $($("#"+id+" > .abort")[0]);
	
	this.setFileNameSize = function(name,size) {
		var sizeStr="";
		var sizeKB = size/1024;
		if(parseInt(sizeKB) > 1024) {
			var sizeMB = sizeKB/1024;
			sizeStr = sizeMB.toFixed(2)+" MB";
		} else {
			sizeStr = sizeKB.toFixed(2)+" KB";
		}
		this.name.html(name);
		this.size.html(sizeStr);
		//console.log(name+ " "+sizeStr);
	}
	this.setProgress = function(progress) {	  
		var progressBarWidth = progress*this.progressBar.width()/ 100;  
		this.progressBar.find('.determinate').animate({width: progressBarWidth}, 10);
		this.percent.html(progress + "%");
		if(parseInt(progress) >= 100) {
			Materialize.toast('Archivo subido correctamente!', 4000)
			/*this.obj.html("File upload Done");
			this.obj.hide(5000);*/
			//Mostrar "popup" de configuracion de video
		}
	}
	this.setAbort = function(jqxhr) {
		this.abort.on("click", function() {
			jqxhr.abort();
			setTimeout(function() {restart(id);}, 100);
		});
	}
}
function handleFileUpload(files, id) {
	if (files.length == 1) {
		if (files[0].type.indexOf("video/") >= 0 && files[0].size > 1) {
			var fd = new FormData();
			fd.append('file', files[0]);
			var statusBar = new StatusBar(id);
			statusBar.setFileNameSize(files[0].name, files[0].size);
			sendFileToServer(fd,statusBar, id);
		} else {
			//Mostrar error de el archivo es invalido
		}
	} else {
		//Mostrar error de no se esta subiendo ningun archivo
	}
}
function startUploadZone(id) {
	$("#"+id).on('click', function(e){
		$("#"+id+"-input").trigger(e);
	});
	$("#"+id).on('dragenter', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$("#"+id).addClass("filecharged");
	});
	$("#"+id).on('dragover', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$("#"+id).addClass("filecharged");
	});
	$("#"+id).on('dragleave', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$("#"+id).removeClass("filecharged");
	});
	$("#"+id).on('drop', function (e) {
		$("#"+id).removeClass("attention");
		$("#"+id).removeClass("filecharged");
		e.preventDefault();
		handleFileUpload(e.originalEvent.dataTransfer.files, id);
	});
	$("#"+id+"-input").on('change', function (e) {
		$("#"+id).removeClass("attention");
		$("#"+id).removeClass("filecharged");
		e.preventDefault();
		handleFileUpload(e.target.files, id);
	});
	$(document).on('dragenter', function (e)  {
		e.stopPropagation();
		e.preventDefault();
	});
	$(document).on('dragover', function (e)  {
		e.stopPropagation();
		e.preventDefault();
		$("#"+id).addClass("attention");
	});
	$(document).on('drop', function (e)  {
		e.stopPropagation();
		e.preventDefault();
	});
	$(document).on('dragleave', function (e)  {
		e.stopPropagation();
		e.preventDefault();
		$("#"+id).removeClass("attention");
	});
}