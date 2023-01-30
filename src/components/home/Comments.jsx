import p1 from '../../images/samplePerson1.svg'
import p2 from '../../images/samplePerson2.svg'

import '../../style/comments.css'
import etemad2 from "../../images/etemad2.png";
import {LazyLoadImage} from "react-lazy-load-image-component";
import React from "react";

const Comments = () => {
    return (
        <>
            <div className={'comments-container flex my-[50px]'}>
                <div className={'c1 flex p-10'}>
                    <LazyLoadImage src={p1}
                                   className={'ml-5 mb-5 w-[80px]'}
                                   alt={'person1'}
                    />
                    {/*<img src={p1} alt={'person1'} className={'ml-5 mb-5 w-[80px]'}/>*/}
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
                    <LazyLoadImage src={p2}
                                   className={'ml-5 mb-5 w-[80px]'}
                                   alt={'person2'}
                    />
                    {/*<img src={p2} alt={'person2'} className={'ml-5 mb-5 w-[80px]'}/>*/}
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
        </>
    )
}

export default Comments;