import React from "react";
import NavBar from "../navBar/navbar";
import FrameLogo from "../frameLogo/frame.module";
import FrameWelcome from "../frameWelcome/frameWelcome.module";
import FrameLoginSocialMedia from "../frameLoginSocialMedia/frameLoginSocialMedia.module";
import FrameSeparation from "../frameSeparation/frameSeparation.module";
import LoginForm from "../formLogin/formLogin";
import ImagemBanner from "../imagemBanner/imagemBanner.module";
import CreateAccount from "../createAccountBtn/createAccountBtn.module";
import Return from '../returnBtn/returnBtn.module';
import styles from './login.module.css';

export default function Login() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <div className={styles.bannerContainer}> 
          <ImagemBanner />
          <div className={styles.returnButton}>
            <Return textColor="white" />
          </div>
          
        </div>
        <div>
          <div className={styles.areaLogo}>
            <div>
              <FrameLogo />
            </div>
            <div className={styles.createAccount}>
              <CreateAccount />
          </div>

          </div>          

          <FrameWelcome
            h1="Boas-vindas!"
            p="Entre utilizando uma das opções abaixo"
          />
          <FrameLoginSocialMedia />
          <FrameSeparation />
          <LoginForm />
        </div>
      </main>
    </>
  );
}

