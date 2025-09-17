import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import classNames from "classnames";
import styles from './ProjectCard.module.scss';

const ProjectCard = (props) => {
	const {name, description, git, web, thumbnailUrl, videoUrl} = props;

	const [isPlaying, setIsPlaying] = useState(false);

	const handleImageClick = () => {
		setIsPlaying(!isPlaying);
	};

	const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

	return(
		<section id="home" className={classNames(styles.card, "d-flex border mb-5")}>

			<div className={classNames("col-lg-7 col-sm-12")}>
				<div className={classNames(styles.imageContainer)}>
					<img
						alt="Project View"
						className="img-fluid"
						src={thumbnailUrl}
						onClick={handleImageClick}
					/>

					{!isPlaying && videoUrl &&(
            <div className={styles.playButton} onClick={handlePlayButtonClick}>
              <div className={styles.triangle}></div>
            </div>
          )}

					{isPlaying && (
            <div className={styles.videoOverlay}>
              <ReactPlayer
                url={videoUrl}
                playing={isPlaying}
                controls
                width="100%"
                height="100%"
                className={styles.reactPlayer}
              />
            </div>
          )}
				</div>
      </div>

			<div className="col-lg-5 col-sm-12 text-left">
        <div className="load-hidden">
          <h3 className={classNames(styles.title, 'mb-5')}>{name}</h3>
          <div>
            <p className={classNames(styles.description, 'mb-5')}>{description}</p>
          </div>
          {web && (
            <a
              rel="noreferrer"
              target="_blank"
              className={classNames(styles.btn)}
              href={web}
            >
              See Live
            </a>
          )}
          {!web && (
            <p className={classNames(styles.emptyBtn)}>No Live app!</p>
          )}
					<br/>
          {git && (
            <a
              rel="noreferrer"
              target="_blank"
              className={classNames(styles.btn)}
              href={git}
            >
              Source Code
            </a>
          )}
          {!git && (
            <p className={classNames(styles.emptyBtn)}>Private Repository!</p>
          )}
        </div>
      </div>
		</section>
	)
}

export default ProjectCard;
