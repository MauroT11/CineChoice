export default function Loading() {
    return (
        <div className="flex flex-col items-center min-h-screen py-12 px-4 bg-gradient-to-b from-base-200 to-base-100">
            <div className="container mx-auto max-w-7xl animate-pulse">
                {/* Title and Tagline Skeleton */}
                <div className="flex flex-col gap-4 items-center mb-8">
                    <div className="h-16 w-3/4 bg-base-300 rounded-lg"></div>
                    <div className="h-8 w-1/2 bg-base-300 rounded-lg"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                    {/* Poster and Button Skeleton */}
                    <div className="flex flex-col gap-6 items-center">
                        <div className="w-[400px] h-[600px] bg-base-300 rounded-2xl"></div>
                        <div className="w-full max-w-md h-12 bg-base-300 rounded-xl"></div>
                    </div>
                    
                    {/* Details Skeleton */}
                    <div className="flex flex-col gap-6 p-4 lg:p-6">
                        <div className="flex flex-wrap justify-center gap-6 my-1">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-32 h-14 bg-base-300 rounded-xl"></div>
                            ))}
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-3 my-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-24 h-8 bg-base-300 rounded-full"></div>
                            ))}
                        </div>
                        
                        <div className="space-y-4">
                            <div className="h-8 w-48 bg-base-300 rounded-lg"></div>
                            <div className="space-y-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-4 bg-base-300 rounded w-full"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}