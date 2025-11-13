
(() => {
    document.addEventListener('DOMContentLoaded', function injectWidget() {
        const styles = document.createElement('style');
        styles.innerHTML = `
    #jerky-im {
        position: absolute;
        z-index: 10000000001;
        font-family: sans-serif;
        font-size: calc((216px + 11vw) / 35 + 7px);
        transition: opacity .4s;
    }

    #jerky-im.jerky-im-hidden {
        opacity: 0;
        pointer-events: none;
        padding-left: 100%;
    }

    #jerky-im.jerky-im-hidden #jerky-im-chat,
    #jerky-im.jerky-im-hidden #jerky-im-avatar-bubble,
    #jerky-im.jerky-im-hidden.jerky-im-show-chat #jerky-im-chat {
        pointer-events: none;
        transform: translateX(calc(240px + 11vw + 20px));
    }

    #jerky-im #jerky-im-chat {
        position: fixed;
        bottom: 18px;
        right: 18px;
        width: calc(240px + 11vw);
        height: calc((216px + 11vw) * 1.45);
        max-height: calc(100% - 114px);
        background: #fff;
        box-shadow: 0 0 25px rgba(0, 0, 0, .15);
        border-radius: 18px;
        overflow: hidden;
        transform-origin: top right;
        transform: scale(.0000001);
        opacity: 0;
        transition: transform .4s, opacity .4s, top .4s;
        pointer-events: none;
        padding: 0;
        margin: 0;
        top: calc(75vh + 78px);
    }

    #jerky-im-inspector {
        position: fixed;
        left: 0;
        top: 0;
        width: calc(75vh + 78px);
        height: calc((216px + 11vw) * 1.45);
        transform: translate(-100%, -100%);
        background: #f00;
    }

    #jerky-im.jerky-im-offset.jerky-im-show-chat #jerky-im-chat {
        top: calc(100% - (((216px + 11vw) * 1.45) + 18px));
    }

    #jerky-im.jerky-im-small-height.jerky-im-show-chat #jerky-im-chat {
        top: calc(96px);
        bottom: 18px;
    }

    @media (max-width: 480px) {
        #jerky-im.jerky-im-offset.jerky-im-show-chat #jerky-im-chat,
        #jerky-im.jerky-im-small-height.jerky-im-show-chat #jerky-im-chat,
        #jerky-im #jerky-im-chat {
            top: calc(96px);
            bottom: 18px;
            width: calc(100vw - 36px);
            height: calc(100% - 114px);
        }

        body #jerky-im #jerky-im-chat {
            top: calc(75vh + 78px);
        }

        body #jerky-im #jerky-im-inspector {
            width: calc(75vh + 78px);
        }

        body #jerky-im #jerky-im-avatar-bubble {
            top: 75vh;
        }
    }

    @media (max-width: 768px) and (min-width: 480px) {
        body #jerky-im #jerky-im-chat {
            top: calc(75vh + 78px);
        }

        body #jerky-im #jerky-im-inspector {
            width: calc(75vh + 78px);
        }

        body #jerky-im #jerky-im-avatar-bubble {
            top: 75vh;
        }
    }

    #jerky-im.jerky-im-show-chat #jerky-im-chat {
        transform: scale(1);
        opacity: 1;
        pointer-events: all;
    }

    #jerky-im #jerky-im-header {
        background: #e7fbfd;
        display: block;
        position: relative;
        margin: 0;
        padding: 12px;
    }

    #jerky-im svg {
        width: 40%;
    }

    #jerky-im .jerky-im-avatar {
        display: block;
        border: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .5);
        border-radius: 10000px;
        width: 36px;
        height: 36px;
        background-size: cover;
        position: relative;
        padding: 0;
    }

    #jerky-im .jerky-im-avatar img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 10000px;
    }

    #jerky-im .jerky-im-avatar:before {
        content: '';
        display: block;
        position: relative;
        padding-top: 100%;
    }

    #jerky-im #jerky-im-cams-widget-ctn {
        width: calc(100% - 56px);
        padding-top: calc((100% - 56px) * 0.75);
        border: 0;
        margin: 12px 0 0;
        float: right;
        border-radius: 15px;
        position: relative;
        overflow: hidden;
    }

    #jerky-im #jerky-im-cams-widget,
    #jerky-im #jerky-im-feed-overlay {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 0;
        position: absolute;
        overflow: hidden;
    }

    #jerky-im .jerky-im-message {
        width: calc(100% - 56px);
        float: right;
        clear: right;
        box-sizing: border-box;
        margin: 12px 0 0;
        border-radius: 15px;
    }

    #jerky-im p.jerky-im-message {
        background: #e7fbfd;
        padding: .6em 1.2em;
        position: relative;
        overflow: visible;
        font-weight: 500;
    }

    #jerky-im p.jerky-im-message:before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        background: inherit;
        transform-origin: .4em .4em;
        transform: translate(-50%, -50%) rotate(45deg);
        width: .8em;
        height: .8em;
    }

    #jerky-im p.jerky-im-message + p.jerky-im-message:before {
        display: none;
    }

    #jerky-im #jerky-im-chat .jerky-im-avatar {
        float: left;
        clear: both;
        margin: 12px 0 0 ;
    }

    #jerky-im .jerky-im-cta,
    #jerky-im #jerky-im-close {
        background: #ff77a8;
        border-radius: 1000px;
        cursor: pointer;
        transition: background-color .2s ease-in 0s, color .2s ease-in 0s;
    }

    #jerky-im .jerky-im-cta {
        font-size: calc((216px + 11vw) / 17);
        border-radius: 10000px;
        display: block;
        color: #fff;
        text-align: center;
        padding: .5em 1em;
        text-decoration: none;
        box-sizing: border-box;
        position: absolute;
        bottom: 12px;
        left: 12px;
        right: 12px;
        font-weight: 600;
        text-transform: uppercase;
    }

    #jerky-im #jerky-im-close {
        float: right;
        border: 0;
        padding: 0;
        width: 8%;
        outline: none;
        position: relative;
    }

    #jerky-im #jerky-im-close:before {
        content: '';
        padding-top: 100%;
        position: relative;
        display: block;
    }

    #jerky-im #jerky-im-close:hover,
    #jerky-im .jerky-im-cta:hover {
        background: #ff2b77;
    }

    #jerky-im #jerky-im-close svg {
        position: absolute;
        display: block;
        width: 50%;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #jerky-im #jerky-im-avatar-bubble {
        position: fixed;
        top: 75vh;
        right: 20px;
        width: 60px;
        height: 60px;
        outline: none !important;
        transition: top .4s ease-in-out;
    }

    @media (min-width: 768px) {
        #jerky-im #jerky-im-avatar-bubble {
            width: 60px;
            height: 60px;
        }
        #jerky-im #jerky-im-avatar-bubble:active {
            width: 58px;
            height: 58px;
        }
    }

    @media (max-width: 767px) {
        #jerky-im #jerky-im-avatar-bubble {
            width: 60px;
            height: 60px;
        }
        #jerky-im #jerky-im-avatar-bubble:active {
            width: 58.5px;
            height: 58.5px;
        }
    }

    @media (max-width: 480px) {
        #jerky-im #jerky-im-avatar-bubble {
            width: 60px;
            height: 60px;
        }
        #jerky-im #jerky-im-avatar-bubble:active {
            width: 58.5px;
            height: 58.5px;
        }
    }

    #jerky-im.jerky-im-offset.jerky-im-show-chat #jerky-im-avatar-bubble {
        top: calc(100% - (((216px + 11vw) * 1.45) + 96px));
    }

    #jerky-im.jerky-im-small-height.jerky-im-show-chat #jerky-im-avatar-bubble {
        top: 18;
    }

    @media (max-width: 480px) {
        #jerky-im.jerky-im-offset.jerky-im-show-chat #jerky-im-avatar-bubble,
        #jerky-im.jerky-im-small-height.jerky-im-show-chat #jerky-im-avatar-bubble,
        #jerky-im.jerky-im-show-chat #jerky-im-avatar-bubble {
            top: 18px;
        }
    }

    #jerky-im #jerky-im-avatar-bubble .dot {
        width: 1em;
        height: 1em;
        background-color: #00bb00;
        border-radius: 10000px;
        display: block;
        position: absolute;
        bottom: 5%;
        right: 5%;
        z-index: 3;
    }

    #jerky-im #jerky-im-messages .dot {
        width: 0.7em;
        height: 0.7em;
        background-color: #00bb00;
        border-radius: 10000px;
        display: block;
        position: absolute;
        top: 24px;
        left: 24px;
        z-index: 3;
    }

    #jerky-im #jerky-im-avatar-bubble:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        border-radius: 100000px;
        box-shadow: inset 0 -20px 30px -10px rgba(0, 0, 0, .15);
    }

    #jerky-im #jerky-im-avatar-bubble img {
        -webkit-filter: contrast(1.1) saturate(1.1);
        filter: contrast(1.1) saturate(1.1);
    }

    #jerky-im #jerky-im-avatar-bubble:after {
        content: '2';
        display: block;
        position: absolute;
        top: 5%;
        left: 5%;
        background: #e10;
        color: #fff;
        font-size: 11px;
        width: 1.6em;
        height: 1.6em;
        line-height: 1.6em;
        font-weight: 700;
        text-align: center;
        vertical-align: middle;
        z-index: 3;
        border-radius: 10000px;
    }

    #jerky-im #jerky-im-messages {
        position: relative;
        padding: 0 12px;
        overflow: overlay;
        height: calc(100% - ((216px + 11vw) / 17) * 2 - (216px + 11vw) * 0.07799477164385668 - 48px);
        color: #000;
    }

    .jerky-im-cls-1 {
        fill: #ff76a7;
    }

    .jerky-im-cls-2,
    .jerky-im-cls-6 {
        fill: #1b1464;
    }

    .jerky-im-cls-3 {
        fill: #97f0ff;
    }

    .jerky-im-cls-4 {
        fill: #fff;
    }

    .jerky-im-cls-5 {
        fill: #2727a8;
        opacity: 0.56;
    }

    .jerky-im-cls-6,
    .jerky-im-cls-7 {
        stroke: #97f0ff;
        stroke-miterlimit: 10;
        stroke-width: 3.49px;
    }

    .jerky-im-cls-7 {
        fill: none;
    }`;
        document.head.appendChild(styles);

        const body = document.createElement('div');
        body.innerHTML = `
<div id="jerky-im">
    
    <button
        id="jerky-im-avatar-bubble"
        class="jerky-im-avatar" style="background-image: url(https://cdn.camshq.info/streamate/110916814/profile.jpeg)"
    >
        <img src="https://cdn.camshq.info/streamate/110916814/profile.jpeg" alt="avatar">
        <span class="dot"></span>
    </button>
    <div id="jerky-im-chat">
        <header id="jerky-im-header">
            <a href="https://track.premiumvisitor.com/94304c10-2f75-401e-b5dd-517df5d36c92?tablepos=jerkmate" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 614.32 119.78">
                    <title>small_jerkmate</title>
                    <path class="jerky-im-cls-1" d="M278.22,31.34l-.29.48h-.1A6.07,6.07,0,0,0,274,37.38,2.58,2.58,0,0,0,276.59,40h6.9a2.58,2.58,0,0,0,2.59-2.59,6,6,0,0,0-3.84-5.56l-.28-.48A1.75,1.75,0,0,0,280,30.09,1.78,1.78,0,0,0,278.22,31.34Z"/>
                    <path class="jerky-im-cls-2" d="M278.12,44.38h4.12c2.5,0,3.84,1.34,3.84,3.83V86.94c0,14.76-9.68,17.74-23,15-1.63-.29-2.59-1.63-2.59-4.32,0-3.26.48-4.79,3.64-4.79,1.25,0,2.78.29,4,.29,4.41,0,6.14-1.63,6.14-6.14V48.21A3.48,3.48,0,0,1,278.12,44.38Zm47.26,24.35-17.64,1.82c1.54,4.7,5.28,6.32,10.84,6.32a42.65,42.65,0,0,0,9.58-1.34c2.69-.67,4.32.58,4.32,3.26V80a4.07,4.07,0,0,1-3.26,4.31,47.35,47.35,0,0,1-12.66,1.82c-12.65,0-21.09-6.9-21.09-21.18,0-13.52,7.19-21.28,21.19-21.28,11.79,0,18.69,5.46,18.69,15.91C335.35,65.47,333,67.86,325.38,68.73Zm-1-10.17c0-3.93-2.39-6.13-7.76-6.13-5.75,0-8.92,2.59-9.49,9.68l14.38-1.44C323.94,60.39,324.42,59.91,324.42,58.56ZM368,47.83v2.39c0,2.5-1.44,3.84-4.22,3.84-8.72.1-9.1.86-9.1,4V81.57c0,2.49-1.35,3.84-3.84,3.84h-4.12c-2.49,0-3.83-1.35-3.83-3.84V56.46c0-9.59,3.45-12.18,21.09-12.47C366.6,44,368,45.34,368,47.83Zm42.18,37.58h-3.64c-2.4,0-4.31-.67-5.37-2l-15.53-18v16.2c0,2.49-1.34,3.84-3.83,3.84h-3.93c-2.5,0-3.84-1.35-3.84-3.84V30.86c0-2.49,1.34-3.83,3.84-3.83h3.93c2.49,0,3.83,1.34,3.83,3.83V61.73l15.44-15.44c1.05-1.24,2.87-1.91,5.36-1.91h3.36c3.55,0,5.08,1.91,3.07,4.12l-15.34,15,15.82,17.83C415.21,83.59,413.67,85.41,410.22,85.41Zm77.17-22.72v19c0,2.49-1.34,3.83-3.83,3.83h-3.74c-2.49,0-3.83-1.34-3.83-3.83V62.11c0-5.94-2.59-8.63-8.06-8.63s-7.57,2.69-7.57,8.63V81.67c0,2.49-1.34,3.83-3.84,3.83h-3.64c-2.49,0-3.83-1.34-3.83-3.83V62.11c0-5.94-2-8.63-7.58-8.63s-8.05,2.69-8.05,8.63V81.67c0,2.49-1.34,3.83-3.83,3.83h-3.74c-2.49,0-3.84-1.34-3.84-3.83v-19c0-13.9,7.19-19,18.41-19,7.38,0,11.79,2.1,14.19,5.84,2.39-3.74,6.8-5.84,14.19-5.84,11.4,0,18.59,5,18.59,19Zm46.21-3v13.8c0,8.72-3.93,12-12.94,12h-9.49c-10.16,0-16.4-2.68-16.4-12.56s6.24-12.55,16.4-12.55H522v-.67c0-4.61-3.64-6.62-9.68-6.62a58.54,58.54,0,0,0-10.74,1.25c-2.59.48-4.22-.67-4.22-3.36V49.46c0-2.3,1.25-3.84,4-4.32A63.71,63.71,0,0,1,514,43.71C525.26,43.71,533.6,48.5,533.6,59.72ZM522,72.85V68.63H511.74c-5.08,0-6.13,1.15-6.13,4.22s1.05,4.22,6,4.22h6.13c3.64.09,4.22-1.44,4.22-4.22ZM565.43,54H554.11v16.4c0,4.21,1.92,6,6.43,6,2.2,0,3.64-.48,5.08-.48,2.59,0,3.55,1,3.55,3.06v2.11a3.81,3.81,0,0,1-3.07,4.13c-13.23,3.16-23.87-.2-23.87-14.77V38.72c0-2.49,1.34-3.83,3.83-3.83h4.12c2.5,0,3.84,1.34,3.84,3.83v5.66h11.31c2.49,0,3.84,1.34,3.84,3.83V50A3.45,3.45,0,0,1,565.43,54Zm38.92,14.77-17.64,1.82c1.53,4.7,5.27,6.32,10.83,6.32a42.73,42.73,0,0,0,9.59-1.34c2.68-.67,4.31.58,4.31,3.26V80a4.06,4.06,0,0,1-3.26,4.31,47.22,47.22,0,0,1-12.65,1.82c-12.66,0-21.09-6.9-21.09-21.18,0-13.52,7.19-21.28,21.18-21.28,11.8,0,18.7,5.46,18.7,15.91C614.32,65.47,611.83,67.86,604.35,68.73Zm-1-10.17c0-3.93-2.4-6.13-7.77-6.13-5.75,0-8.91,2.59-9.49,9.68l14.38-1.44C602.91,60.39,603.39,59.91,603.39,58.56Z"/>
                    <path class="jerky-im-cls-3" d="M15.77,46.49a18.71,18.71,0,0,0,0,36.95Z"/>
                    <path class="jerky-im-cls-1" d="M219.11,46.49a18.71,18.71,0,0,1,0,36.95Z"/>
                    <path class="jerky-im-cls-1" d="M211.47,71.83a47.94,47.94,0,0,1-47.7,47.92l-46.33,0V0c.54,0,1.06,0,1.59.07A18.68,18.68,0,0,1,133.24,8.7l30.27-.07a48,48,0,0,1,47.92,47.69Z"/>
                    <path class="jerky-im-cls-3" d="M117.44,0V119.78l-46.33,0A47.94,47.94,0,0,1,23.42,71.83l0-15.51A48,48,0,0,1,71.38,8.63l30.26.07A18.69,18.69,0,0,1,115.86.07C116.38,0,116.91,0,117.44,0Z"/>
                    <path class="jerky-im-cls-2" d="M75.7,104.73A34.64,34.64,0,0,1,41.18,70l0-11.84A34.67,34.67,0,0,1,75.81,23.67l83.37.2a34.64,34.64,0,0,1,34.53,34.69l0,11.84a34.66,34.66,0,0,1-34.61,34.53Z"/>
                    <path class="jerky-im-cls-4" d="M75.81,26.19h.08l83.29.2a32.2,32.2,0,0,1,32,32.16l0,11.85a32.14,32.14,0,0,1-32.09,32H159l-83.29-.19a32.13,32.13,0,0,1-32-32.16l0-11.85a32.13,32.13,0,0,1,32.08-32m0-5.05A37.24,37.24,0,0,0,38.68,58.19l0,11.84A37.25,37.25,0,0,0,75.7,107.26l83.28.2h.09a37.25,37.25,0,0,0,37.14-37l0-11.84a37.25,37.25,0,0,0-37.05-37.23l-83.29-.2Z"/>
                    <rect class="jerky-im-cls-5" x="85.18" y="35" width="96.41" height="55.73" rx="15.28"/>
                    <path class="jerky-im-cls-4" d="M107.35,63.39h0a10.25,10.25,0,0,0,20.25,0h0a28.56,28.56,0,0,1-20.17,0Z"/>
                    <circle class="jerky-im-cls-6" cx="78.65" cy="65.68" r="11.51"/>
                    <circle class="jerky-im-cls-3" cx="74.68" cy="70.35" r="1.8"/>
                    <circle class="jerky-im-cls-3" cx="85.88" cy="66.35" r="1.68"/>
                    <circle class="jerky-im-cls-3" cx="82.1" cy="61.46" r="3.57"/>
                    <circle class="jerky-im-cls-7" cx="156.23" cy="65.68" r="11.51"/>
                    <circle class="jerky-im-cls-3" cx="151.76" cy="70.35" r="1.8"/>
                    <circle class="jerky-im-cls-3" cx="162.96" cy="66.35" r="1.68"/>
                    <circle class="jerky-im-cls-3" cx="159.18" cy="61.46" r="3.57"/>
                </svg>
            </a>
            <button id="jerky-im-close">
                <svg version="1.1" style="enable-background:new 0 0 47.971 47.971; fill: #fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" xml:space="preserve">
                  <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z">
                  </path>
                </svg>
            </button>
        </header>
        <div id="jerky-im-messages">
            <a
                href="https://track.premiumvisitor.com/94304c10-2f75-401e-b5dd-517df5d36c92?tablepos=jerkmate"
                target="_blank"
                class="jerky-im-avatar"
                style="background-image: url(https://cdn.camshq.info/streamate/110916814/profile.jpeg)"
            >
                <img src="https://cdn.camshq.info/streamate/110916814/profile.jpeg" alt="avatar">
                <span class="dot"></span>
            </a>
            <div id="jerky-im-cams-widget-ctn">
                <iframe id="jerky-im-cams-widget" src="//www.ccmiocw.com/?pid=streamate_110916814&token=d95bab40-e731-11ec-93a2-0d3d66a9af18&sound=off"></iframe>
                <a
                    href="https://track.premiumvisitor.com/94304c10-2f75-401e-b5dd-517df5d36c92?tablepos=jerkmate"
                    target="_blank"
                    id="jerky-im-feed-overlay"
                ></a>
            </div>
            <a
                href="https://track.premiumvisitor.com/94304c10-2f75-401e-b5dd-517df5d36c92?tablepos=jerkmate"
                target="_blank"
                class="jerky-im-avatar" style="background-image: url(https://cdn.camshq.info/streamate/110916814/profile.jpeg)"
            >
                <img src="https://cdn.camshq.info/streamate/110916814/profile.jpeg" alt="avatar">
                <span class="dot"></span>
            </a>
            <p class="jerky-im-message">Hey there!</p>
            <p class="jerky-im-message">I'm live now! Join my room if you want to talk with me</p>
        </div>
        <a
            href="https://track.premiumvisitor.com/94304c10-2f75-401e-b5dd-517df5d36c92?tablepos=jerkmate"
            target="_blank"
            class="jerky-im-cta"
        >
            Join chat room
        </a>
    </div>
    <div id="jerky-im-inspector"></div>
</div>

`;
        document.body.appendChild(body);

        const widgetScript = document.createElement('script');
        widgetScript.type = "text/javascript";
        widgetScript.innerHTML = `
  setTimeout(() => {
      var jerkyIm = document.getElementById('jerky-im');
      var jerkyBubble = document.getElementById('jerky-im-avatar-bubble');
      var jerkyCloseBtn = document.getElementById('jerky-im-close');
      var jerkyOffsetInspector = document.getElementById('jerky-im-inspector');
      var jerkyOpen = false;
      var jerkyOffset = false;
      var jerkySmallHeight = false;
      var jerkyHidden = false;
      var videoIframe = document.getElementById('jerky-im-cams-widget');

      function unmuteIframe() {
        videoIframe.src = videoIframe.src.replace('sound=off', 'sound=on');
      }

      function muteIframe() {
        videoIframe.src = videoIframe.src.replace('sound=on', 'sound=off');
      }

      function jerkyToggleChat(toggle) {
        if (toggle === false && true) {
            jerkyHidden = true
            true && muteIframe()
        } else {
            jerkyOpen = typeof toggle === 'boolean' ? toggle : !jerkyOpen;
            true && (jerkyOpen ? unmuteIframe() : muteIframe())
        }

        jerkyApplyClasses();
      }

      function jerkyCheckOffset() {
        var jerkyOffsetTop = jerkyOffsetInspector.offsetWidth; /* Don't worry, it's the right value */
        var jerkyOffsetHeight = jerkyOffsetInspector.offsetHeight;

        jerkyOffset = jerkyOffsetTop + jerkyOffsetHeight > (window.innerHeight - 18);
        jerkySmallHeight = jerkyOffsetHeight > (window.innerHeight -(18 * 3 + 60));

        jerkyApplyClasses();
      }

      function jerkyApplyClasses() {
        jerkyIm.className =
          (jerkyOpen ? 'jerky-im-show-chat' : '')
          + ' '
          + (jerkyOffset ? 'jerky-im-offset' : '')
          + ' '
          + (jerkySmallHeight ? 'jerky-im-small-height' : '')
          + ' '
          + (jerkyHidden ? 'jerky-im-hidden' : '');
      }

      jerkyBubble.addEventListener('mouseup', jerkyToggleChat);
      jerkyCloseBtn.addEventListener('mouseup', function () { jerkyToggleChat(false) });

      window.addEventListener('resize', jerkyCheckOffset)

      jerkyCheckOffset();
  }, 1000)

`;
        document.body.appendChild(widgetScript);
    })
})();
    