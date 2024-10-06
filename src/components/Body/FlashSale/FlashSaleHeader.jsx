function FlashSaleHeading()
{
    return (
        <div className="columns-3 text-center">
            <div className="w-full">
                Today's
            </div>
        </div>
    )
}

function FlashSaleHeaderTime()
{
    return (
        <div className="columns-3 text-center">
            <div className="w-full">
                Flash Sale
            </div>

            <div className="w-full">
                <sub>03</sub><sup className="text-center">Days</sup>
                <sub>03</sub><sup>Hours</sup>
                <sub>03</sub><sup>Minutes</sup>
                <sub>03</sub><sup>Seconds</sup>
            </div>

            <div className="w-full">
                
            </div>

        </div>
    )
}

function FlashSaleHeader()
{
    return (
        <>
            <FlashSaleHeading/>
            <FlashSaleHeaderTime/>
        </>
    )
}

export default FlashSaleHeader  