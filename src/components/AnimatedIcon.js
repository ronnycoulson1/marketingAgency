'use client'

import lottie from "lottie-web"
import { useEffect, useRef } from "react"

export default function AimatedIcon({animationPath}){
    const animatioContainer = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: animatioContainer.current,
            render: "svg",
            loop: true,
            autoplay: true,
            path: animationPath,
        });

    },[animationPath]);
    return <div ref= {animatioContainer} className="w-64 h-64"></div>
}