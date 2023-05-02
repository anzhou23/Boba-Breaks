import React, { useState, useRef, useEffect } from 'react';
import styles from './card.module.css';
import Pill from './Pill';
import { FaTwitter, FaLinkedin, FaInstagram, FaGlobe, FaYoutube, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const Card = ({
  image, title, description, link, hasLink, hasImage, tags,
  popupTitle, popupDescription, hasPopup,
  twitter, linkedin, instagram, youtube, tiktok, website }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    // Calculate the width of the container element when the component mounts or updates
    const cardElement = cardRef.current;
    const cardWidth = cardElement.offsetWidth;
    setImageWidth(cardWidth);
  }, []);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.card} ref={cardRef}>
      {hasImage && (
        <Image
          src={`/images/${image}`}
          alt={title}
          className={styles.image}
          width={imageWidth}
          height={imageWidth * 0.75} // Set the height to maintain the aspect ratio of the image
        />
      )}
      {/* {hasImage && <Image src={image} alt={title} className={styles.image} width={'100%'} height={'auto'} />} */}
      <div className={styles.content}>
        <div className={styles.tags}>
          {tags && tags.map(tag => (
            <Pill key={tag} color={tag.color || '#f2f2f2'}>{tag.text}</Pill>
          ))}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {hasLink && <a href={link} className={styles.link}>Launch ↗</a>}
        {hasPopup && (
          <>
            <button onClick={handleOpenModal} className={styles.viewProfileButton}>View Profile</button>
            {isModalOpen && (
              <div className={styles.popup}>
                <div className={styles.popupContent}>
                  <button className={styles.popupClose} onClick={handleCloseModal}>
                    &times;
                  </button>
                  {hasImage && (
                    <Image src={image} alt={title} className={styles.popupImage} />
                  )}
                  <h2 className={styles.popupTitle}>{popupTitle || title}</h2>
                  <p className={styles.description}>{description}</p>
                  {/* Use the popupDescription prop if it's passed, otherwise use the description prop */}
                  <p className={styles.popupDescription}>{popupDescription || description}</p>
                  {twitter && (
                    <a href={twitter} className={styles.popupLink}>
                      <FaTwitter className={styles.popupIcon} />
                    </a>
                  )}
                  {linkedin && (
                    <a href={linkedin} className={styles.popupLink}>
                      <FaLinkedin className={styles.popupIcon} />
                    </a>
                  )}
                  {instagram && (
                    <a href={instagram} className={styles.popupLink}>
                      <FaInstagram className={styles.popupIcon} />
                    </a>
                  )}
                  {youtube && (
                    <a href={youtube} className={styles.popupLink}>
                      <FaYoutube className={styles.popupIcon} />
                    </a>
                  )}
                  {tiktok && (
                    <a href={tiktok} className={styles.popupLink}>
                      <FaTiktok className={styles.popupIcon} />
                    </a>
                  )}
                  {website && (
                    <a href={website} className={styles.popupLink}>
                      <FaGlobe className={styles.popupIcon} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Card;

