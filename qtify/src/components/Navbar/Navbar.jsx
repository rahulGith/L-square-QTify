import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FeedBackModal from "../FeedBackModal/FeedBackModal";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";

const NavBar = ({ data, logo = false, search = false, feedback = false }) => {
  const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
  const navigate = useNavigate();
  const toggleFeedBackModal = (value = false) => {
    setIsFeedBackModalOpen(value);
  };
  //   const _onSuccess = () => {
  //     show toast
  //     showToast("Feedback Submitted", "success");
  //   };
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
          {logo ? <Logo id={styles.logo} /> : null}
        </div>
        {search ? (
          <div className={styles.searchWrapper}>
            <SearchBar placeholder="Search a song of your choice" data={data} />
          </div>
        ) : null}
        {feedback ? (
          <Button
            text="Give Feedback"
            onClick={() => toggleFeedBackModal(true)}
          
          />
        ) : null}
      </nav>
      <FeedBackModal
        isOpen={isFeedBackModalOpen}
        onDismiss={toggleFeedBackModal}
      />
    </div>
  );
};

export default NavBar;
