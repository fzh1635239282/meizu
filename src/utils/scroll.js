import BScroll from "better-scroll"

export const scroll = ({el}) => {
    let bscroll = new BScroll(el, {
        pullUpLoad: {
            threshold: 30
        }
    })
    bscroll.on('pullingDown', () => {
        console.log("up")
    })
}