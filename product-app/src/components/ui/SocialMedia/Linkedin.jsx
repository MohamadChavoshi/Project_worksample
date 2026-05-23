import styled from 'styled-components';
import { useState } from 'react';

import Profile from '../../../assets/images/Profile.png';

export const Linkedin = () => {
  const [copied, setCopied] = useState(false);

  const copyLinkedin = async () => {
    try {
      await navigator.clipboard.writeText(
        'linkedin.com/in/mohammadchavoshi'
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledWrapper>
      <div className="Linkedin-container">
        <div className="Linkedin">
          <div className="profile">
            <div className="user">
              <img
                src={Profile}
                className="img"
                alt="profile"
              />

              <div className="details">
                <div className="name">
                  M.Chavoshi
                </div>

                <div className="username">
                  @MohammadChavoshi
                </div>
              </div>
            </div>

            <div className="about">
              500+ Connections
            </div>
          </div>
        </div>

        <div className="text">
          <button
            className="icon"
            onClick={copyLinkedin}
          >
            <div className="layer">
              <span />
              <span />
              <span />
              <span />

              <span className="fab fa-linkedin">
                <svg
                  viewBox="0 0 448 512"
                  height="1em"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </span>
            </div>

            <div className="text">
              LinkedIn
            </div>
          </button>

          {copied && (
            <div className="copy-message">
              یوزر نیم کپی شد ✓
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Linkedin-container {
    all: initial;

    direction: ltr;

    position: relative;

    cursor: pointer;

    transition: all 0.2s;

    font-size: 11px;

    border-radius: 10px;
  }

  .icon {
    all: unset;

    text-decoration: none;

    color: #fff;

    display: block;

    position: relative;

    cursor: pointer;
  }

  .copy-message {
    position: absolute;

    top: -50px;
    left: 50%;

    transform: translateX(-50%);

    background: #111;

    color: white;

    padding: 10px 16px;

    border-radius: 12px;

    font-size: 13px;

    white-space: nowrap;

    animation: fadeIn 0.25s ease;

    z-index: 9999;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;

      transform:
        translateX(-50%)
        translateY(10px);
    }

    to {
      opacity: 1;

      transform:
        translateX(-50%)
        translateY(0);
    }
  }

  .Linkedin {
    position: absolute;

    top: 0;
    left: 50%;

    transform: translateX(-50%);

    padding: 10px;

    opacity: 0;

    pointer-events: none;

    transition: all 0.3s;

    border-radius: 15px;

    box-shadow:
      inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3),
      -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #2a2b2f;

    border-radius: 10px 15px;

    padding: 10px;

    border: 1px solid rgba(11, 63, 95, 1);
  }

  .Linkedin-container:hover .Linkedin {
    top: -150px;

    opacity: 1;

    visibility: visible;

    pointer-events: auto;
  }

  .layer {
    width: 55px;
    height: 55px;

    transition: transform 0.3s;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .layer span {
    position: absolute;

    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    border: 1px solid #fff;

    border-radius: 5px;

    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #1da1f2;

    border-color: #1da1f2;
  }

  .icon .text {
    position: absolute;

    left: 50%;
    bottom: -5px;

    opacity: 0;

    font-weight: 500;

    transform: translateX(-50%);

    transition:
      bottom 0.3s ease,
      opacity 0.3s ease;
  }

  .icon:hover .text {
    bottom: -35px;

    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }

  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;

    transform: translate(5px, -5px);
  }

  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;

    transform: translate(10px, -10px);
  }

  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;

    transform: translate(15px, -15px);
  }

  .icon:hover .layer span:nth-child(5) {
    opacity: 1;

    transform: translate(20px, -20px);
  }

  .layer span.fab {
    font-size: 30px;

    line-height: 64px;

    text-align: center;

    fill: #1da1f2;

    background: #000;
  }

  .user {
    display: flex;

    gap: 10px;
  }

  .img {
    width: 50px;
    height: 50px;

    border: 1px solid #1da1f2;

    border-radius: 10px;

    background: #fff;
  }

  .name {
    font-size: 17px;

    font-weight: 700;

    color: #1da1f2;
  }

  .details {
    display: flex;

    flex-direction: column;

    color: #fff;
  }

  .about {
    color: #ccc;

    padding-top: 5px;
  }
`;

export default Linkedin;