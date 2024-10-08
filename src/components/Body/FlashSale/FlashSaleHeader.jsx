function FlashSaleHeading()
{
    return (
        <div className="columns-3 text-center">
            <div className="w-full">
                Today's
            </div>

            <div className="w-full">
                Days : Hours : Minutes : Seconds
            </div>
        </div>
    )
}

function FlashSaleHeaderTime()
{
    return (
        <div className="columns-3 text-center p-4">
            <div className="w-full">
                Flash Sales
            </div>

            <div className="w-full">
                03 : 03 : 03 : 03 
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