import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://raw.githubusercontent.com/Adityapandey-bot/image-hosting/refs/heads/main/IMG_1811.png"}
          alt="Founder"
        />

        <h2>Aditya Pandey</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          
          <a href="https://instagram.com/meabhisingh" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://x.com/Adityaoandeydev" target={"blank"}>
          <FaXTwitter/>
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;