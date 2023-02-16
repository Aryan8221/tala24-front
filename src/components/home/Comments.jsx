import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";
import '../../style/comments.css';
import {LazyLoadImage} from "react-lazy-load-image-component";
import p1 from '../../images/samplePerson1.svg'
import p2 from '../../images/samplePerson2.svg'

const Modal = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        beforeChildren: true,
        staggerChildren: 50,
        delay: 300,
        transition: {
            y: { type: "spring", stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

const Shade = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
        default: { duration: 300 }
    }
});

const charPoses = {
    exit: { opacity: 0, x: 20 },
    enter: {
        opacity: 1,
        x: 0
    }
};

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            pictures: [
                {
                    fileName: '../../images/samplePerson1.svg'
                },
                {
                    fileName: '../../images/samplePerson2.svg'
                },
            ],
            slides: [
                "این یک پیام تستی است این یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی\n" +
                "                                        استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی\n" +
                "                                        استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی\n" +
                "                                        استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی است\n" +
                "                                        این یک پیام تستی است این یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی",
                "تست تست تست تست تست تست تست تست تست تست تست تست ر تست تست تست تست تست تست تست تست تست تست تست تست",
                "این یک پیام تستی است این یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی\n" +
                "                                        استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی\n" +
                "                                        استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی\n" +
                "                                        استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی است\n" +
                "                                        این یک پیام تستی است این یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی",
                "تست تست تست تست تست تست تست تست تست تست تست تست ر تست تست تست تست تست تست تست تست تست تست تست تست"
            ],
            slidesImg: [
                p1,
                p2,
                p1,
                p2
            ],
            currentSlide: 0,
            slideTimer: 1000
        };
    }
    componentDidMount() {
        this.state.pictures.forEach((picture) => {
            const img = new Image();
            img.src = picture.fileName;
        });

        setInterval(() => {
            this.changeSlide();
        }, 5000);
    }
    changeSlide() {
        let { slides, currentSlide } = this.state;
        //4
        let nextSlide = slides.length - 1 > currentSlide ? currentSlide + 1 : 0;
        // let nextSlide = currentSlide + 1;
        console.log('asd' + currentSlide, nextSlide);

        this.setState({ isVisible: true, currentSlide: nextSlide });
        const that = this;
        setTimeout(function() {
            that.setState({ isVisible: true });
        }, 200);
    }
    render() {
        let { isVisible, slides, slidesImg, currentSlide } = this.state;

        return (
            <>
                <div className={'comments-container  p-10 flex hidden sm:flex'}>
                    <div className={'c1 flex p-10'}>
                        <img src={p1} alt={'person1'} className={'ml-5 mb-5 w-[80px]'}/>
                        <div className={'text-white'}>
                            <p className={'text-[0.875rem] mb-4'}>
                                میلاد سعیدی
                            </p>
                            <p className={'text-[0.65rem] leading-5'}>
                                این یک پیام تستی است این یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی
                                استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی
                                استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی
                                استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی است
                            </p>
                        </div>
                    </div>

                    <div className={'flex p-10'}>
                        <img src={p2} alt={'person2'} className={'ml-5 mb-5 w-[80px]'}/>
                        <div className={'text-white'}>
                            <p className={'text-[0.875rem] mb-4'}>
                                میلاد سعیدی
                            </p>
                            <p className={'text-[0.65rem] leading-5'}>
                                این یک پیام تستی است این یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی
                                استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی
                                استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی
                                استاین یک پیام تستی استاین یک پیام تستی استاین یک پیام تستی است
                            </p>
                        </div>
                    </div>
                </div>


                <div className={"my-16 flex justify-center h-auto mx-5 sm:hidden"}>
                    <PoseGroup>
                        {isVisible && [
                            <Shade key="shade" className="shade" />,
                            <Modal key="modal" className="modal h-auto">
                                {/*<h1 className={'text-white text-center mb-5'}> شخص {currentSlide + 1}</h1>*/}

                                <div className={'pb-5'}>
                                    <div className={'flex justify-center items-center'}>
                                        <LazyLoadImage src={slidesImg[currentSlide]}
                                                       className={'ml-5 mb-5 w-[80px]'}
                                                       alt={'person1'}
                                        />
                                    </div>

                                    <p className={'text-[1.2rem] mb-4 text-white text-center'}>
                                        میلاد سعیدی
                                    </p>

                                    <p className={'text-center text-white text-[0.8rem]'}>
                                        {/*<SplitText charPoses={charPoses}>*/}
                                        {slides[currentSlide]}

                                        {/*</SplitText>*/}
                                    </p>
                                </div>
                            </Modal>
                        ]}
                    </PoseGroup>
                </div>

                <div className={'flex text-white justify-center sm:hidden'}>

                    {
                        this.state.slides.map((slide, index) => (
                            <div className={`${currentSlide === index ? "active-dot " : "dot"} mx-1`} onClick={() => this.setState({currentSlide: index})} />
                        ))
                    }

                </div>

            </>
        );
    }
}

export default Comments;