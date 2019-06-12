import './style.scss';
import { CountUp } from './node_modules/countup.js';

document.addEventListener("DOMContentLoaded", function () {
    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry)=> {
                if (entry.isIntersecting) {
                    const elem = entry.target as HTMLElement;
                    const countA = elem.dataset['count'];
                    const demo = new CountUp(elem, +countA, {
                        duration: 3
                    });
                    demo.start();
                    observer.unobserve(entry.target);
                } 
            });
        }, {
            rootMargin: "0px 0px -100px 0px"
        });

        document.querySelectorAll<HTMLElement>(".myTargetElement").forEach((elem) => {
            lazyBackgroundObserver.observe(elem);
        });
    }
});



