import CardSkeleton from "../components/loadingOverlay/CardSkeleton"
import CategoryNameSkeleton from "../components/loadingOverlay/CategoryNameSkeleton"
import RectangleSkeleton from "../components/loadingOverlay/RectangleSkeleton"

export const renderSkeletonCard = (count, type) => {
    const skeletonCards = []
    for (let i = 0; i < count; i++) {
        if (type === "menu" && i % 4 === 0) {
            skeletonCards.push(<CategoryNameSkeleton key={`category_${i}`} />)
        }
        skeletonCards.push(<CardSkeleton key={i} type={type} />)
    }
    return skeletonCards
}

export const renderRectangleSkeleton = (count) => {
    const rectangleSkeleton = []
    for (let i = 0; i < count; i++) {
        if (i % 4 === 0) {
            rectangleSkeleton.push(<CategoryNameSkeleton key={`category_${i}`} />)
        }
        rectangleSkeleton.push(<RectangleSkeleton key={i} />)
    }
    return rectangleSkeleton
}