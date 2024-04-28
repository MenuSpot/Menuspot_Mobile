import CardSkeleton from "../components/loadingOverlay/CardSkeleton"
import RectangleSkeleton from "../components/loadingOverlay/RectangleSkeleton"

export const renderSkeletonCard = (count) => {
    const skeletonCards = []
    for (let i = 0; i < count; i++) {
        skeletonCards.push(<CardSkeleton key={i} />)
    }
    return skeletonCards
}

export const renderRectangleSkeleton = (count) => {
    const rectangleSkeleton = []
    for (let i = 0; i < count; i++) {
        rectangleSkeleton.push(<RectangleSkeleton key={i} />)
    }
    return rectangleSkeleton
}