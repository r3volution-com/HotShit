<?php
if (!isset($_SESSION))
	session_start();

if (isset($_POST['valor']))
	$contador = $_POST['valor'];

function Video($id){
	global $contador, $k;
	// imprimimos tarjetas con cada video.
	// hay que pasar por parametro si queremos videos populares o tags populares
	$color = $contador;
				for ($x = 0; $x <= 9; $x++) {
						$color++;
						$videoid=3;
						echo
							'<div class="card green-white lighten-0" style="background-color: rgb(235, 235, '.round($color*(255/20)).')">
								<div class="card-content black-text">
									<span class="card-title black-text">Titulo tarjeta</span>
									<p>
										<div id="test-'.$id.$x.'" class="hvideo">
											<controls>
												<button class="play" title="Toggle playback"></button>
												<button class="play-pause paused" title="Toggle playback"></button>
												<extended>
													<bar class="position" title="Current position">
														<p class="meta">0:00</p>
													</bar>
													<bar class="total">
														<p class="meta" title="Total length">0:00</p>
													</bar>
													<bar class="buffered"></bar>
													<bar class="unbuffered"></bar>
													<button class="zoom" title="Zoom in/out"></button>
												</extended>
											</controls>
											<video width="330" height="205" poster="uploads/videothumb/poster.jpg" autobuffer>
												<source src="uploads/video/movie.mp4" type="video/mp4">
											</video>
										</div>
										<script>
											var video = $("#test-'.$id.$x.'").hvideo();

										</script>
									</p>
								</div>
								<div class="card-action">
									<div class="chip">
										<img src="uploads/userimg/'.$_SESSION["userimg"].'" alt="#">'.$_SESSION["username"].'
									</div>
									<a href="#"><img class="responsive-img" src="resources/images/wink.png" alt="favoritos" width="25"/></a>
									<a href="javascript:like('.$videoid.','.$_SESSION['userid'].');" id="like'.$id.'">ZeeIt</a>
								</div>
							</div>';
					}
					$k++;
					if($k%3==0){
							$contador+=10;
					}

}

?>
<div class="col s4">
		<?php $k= 0; Video("principales");?>
</div>
<div class="col s4">
		<?php $k = 1; Video("users");?>
</div>
<div class="col s4">
	<?php $k = 2; Video("hashtags");?>
</div>
