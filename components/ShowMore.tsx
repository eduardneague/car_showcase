"use client"

import {useRouter} from 'next/navigation'
import CustomButton from './CustomButton';
import { updateSerachParams } from '@/utils/index';

interface Props {
    pageNumber: number;
    isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: Props) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathname = updateSerachParams("limit", newLimit.toString())
        router.push(newPathname, {scroll: false})
    }

    return (
        <div className = "w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title = "Show More"
                    btnType = "button"
                    containerStyles = "bg-primary-blue rounded-full text-white"
                    handleClick = {handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore