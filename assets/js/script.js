const digitalEl = document.querySelector('.digital');
const sEl = document.querySelector('.p_s');
const mEl = document.querySelector('.p_m');
const hEl = document.querySelector('.p_h');

const updateClock = () => {
    let now = new Date();
    let h = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    let m = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    let s = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

    digitalEl.innerHTML = `${h}:${m}:${s}`;

    let sDeg = ((360 / 60) * s) - 90;
    let mDeg = ((360 / 60) * m) - 90;
    let hDeg = ((360 / 12) * h) - 90;

    sEl.style.transform = `rotate(${sDeg}deg)`;
    mEl.style.transform = `rotate(${mDeg}deg)`;
    hEl.style.transform = `rotate(${hDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();